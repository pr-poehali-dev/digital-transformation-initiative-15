"""Приём заявок от клиентов (имя + телефон) с отправкой email-уведомления."""
import json
import os
import smtplib
import psycopg2
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def send_email(name: str, phone: str, lead_id: int):
    notify_email = os.environ.get('NOTIFY_EMAIL')
    if not notify_email:
        return

    smtp_host = os.environ.get('SMTP_HOST', 'smtp.poehali.dev')
    smtp_port = int(os.environ.get('SMTP_PORT', '587'))
    smtp_user = os.environ.get('SMTP_USER', 'noreply@poehali.dev')
    smtp_pass = os.environ.get('SMTP_PASS', '')

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка #{lead_id} — Зелёный участок'
    msg['From'] = f'Зелёный участок <{smtp_user}>'
    msg['To'] = notify_email

    html = f"""
    <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto; padding: 32px; background: #f9f9f9;">
      <div style="background: #1a1a1a; padding: 24px; margin-bottom: 24px;">
        <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: bold; letter-spacing: 1px;">ЗЕЛЁНЫЙ УЧАСТОК</h1>
      </div>
      <div style="background: #ffffff; padding: 24px; border: 1px solid #e5e5e5;">
        <h2 style="margin: 0 0 20px 0; font-size: 18px; color: #111;">Новая заявка #{lead_id}</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; color: #888; font-size: 13px; width: 100px;">Имя</td>
            <td style="padding: 10px 0; color: #111; font-size: 15px; font-weight: bold;">{name}</td>
          </tr>
          <tr style="border-top: 1px solid #f0f0f0;">
            <td style="padding: 10px 0; color: #888; font-size: 13px;">Телефон</td>
            <td style="padding: 10px 0; color: #111; font-size: 15px; font-weight: bold;">
              <a href="tel:{phone}" style="color: #16a34a; text-decoration: none;">{phone}</a>
            </td>
          </tr>
        </table>
        <div style="margin-top: 24px; padding: 16px; background: #f0fdf4; border-left: 3px solid #16a34a;">
          <p style="margin: 0; color: #15803d; font-size: 13px;">Клиент ожидает звонка. Свяжитесь в течение часа.</p>
        </div>
      </div>
    </div>
    """

    msg.attach(MIMEText(html, 'html', 'utf-8'))

    with smtplib.SMTP(smtp_host, smtp_port, timeout=10) as server:
        server.starttls()
        if smtp_pass:
            server.login(smtp_user, smtp_pass)
        server.sendmail(smtp_user, notify_email, msg.as_string())


def handler(event: dict, context) -> dict:
    """Принимает заявку (имя + телефон), сохраняет в БД и отправляет email-уведомление."""
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': '',
        }

    body = json.loads(event.get('body') or '{}')
    name = (body.get('name') or '').strip()
    phone = (body.get('phone') or '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': {'error': 'Заполните имя и телефон'},
        }

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO t_p43897174_digital_transformati.leads (name, phone) VALUES (%s, %s) RETURNING id",
        (name, phone),
    )
    lead_id = cur.fetchone()[0]
    conn.commit()
    cur.close()
    conn.close()

    try:
        send_email(name, phone, lead_id)
    except Exception:
        pass

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': {'success': True, 'id': lead_id},
    }