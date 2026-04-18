import { useState } from "react";
import Icon from "@/components/ui/icon";

const faqs = [
  {
    question: "Сколько стоит выезд и замер участка?",
    answer: "Выезд специалиста и замер участка — бесплатно. После замера составляем подробную смету и согласовываем её с вами перед началом работ.",
  },
  {
    question: "Как долго длится монтаж системы полива?",
    answer: "Для стандартного участка 6–15 соток монтаж занимает 2–5 рабочих дней. Точные сроки зависят от сложности проекта и объёма работ.",
  },
  {
    question: "Нужно ли консервировать систему полива на зиму?",
    answer: "Да, обязательно. Мы предлагаем услугу зимней консервации: продуваем трубы компрессором, снимаем контроллер. Без консервации трубы могут лопнуть при морозах.",
  },
  {
    question: "Какие растения вы высаживаете?",
    answer: "Деревья, кустарники, хвойные, живые изгороди (ель, туя, барбарис, пузыреплодник), цветники, газоны. Подбираем растения под климат Краснодарского края и условия вашего участка.",
  },
  {
    question: "Работаете ли вы в области / за городом?",
    answer: "Да, работаем по всему Краснодарскому краю: Краснодар, Сочи, Анапа, Новороссийск, Темрюк, Геленджик и прилегающие районы. Выезд за 50 км от Краснодара — по договорённости.",
  },
  {
    question: "Можно ли подключить систему полива к водопроводу?",
    answer: "Да, подключаем к централизованному водопроводу, скважине или накопительному баку. Также устанавливаем фильтры и датчики давления для защиты оборудования.",
  },
  {
    question: "Что входит в гарантию на работы?",
    answer: "Гарантия 24 месяца распространяется на монтаж и все соединения. В течение гарантийного срока устраняем протечки, неполадки автоматики и другие неисправности по нашей вине — бесплатно.",
  },
  {
    question: "Как оплатить услуги?",
    answer: "Работаем по предоплате 30% для старта работ, остаток — после сдачи объекта. Принимаем наличные и безналичный расчёт. Для юридических лиц выставляем счёт.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-neutral-50 px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <p className="uppercase text-sm tracking-wide text-neutral-500 mb-4">Частые вопросы</p>
        <h2 className="text-4xl md:text-6xl font-bold text-neutral-900 tracking-tight mb-4">
          Вопросы
        </h2>
        <p className="text-neutral-500 mb-14 max-w-xl">
          Ответы на самые популярные вопросы о наших услугах, процессе работы и гарантиях.
        </p>

        <div className="flex flex-col border-t border-neutral-200">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-neutral-200">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
              >
                <span className="text-neutral-900 font-medium pr-8 group-hover:text-neutral-600 transition-colors">
                  {faq.question}
                </span>
                <Icon
                  name={openIndex === i ? "Minus" : "Plus"}
                  size={18}
                  className="shrink-0 text-neutral-500"
                />
              </button>
              {openIndex === i && (
                <p className="pb-6 text-neutral-600 leading-relaxed max-w-3xl">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
