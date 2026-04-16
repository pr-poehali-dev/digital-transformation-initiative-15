import { useState } from "react";
import func2url from "../../backend/func2url.json";

interface LeadModalProps {
  open: boolean;
  onClose: () => void;
}

export default function LeadModal({ open, onClose }: LeadModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(func2url.leads, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone }),
      });
      if (res.ok) {
        setStatus("success");
        setName("");
        setPhone("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-md mx-4 p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-900 text-xl leading-none cursor-pointer"
        >
          ✕
        </button>

        {status === "success" ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-4">🌿</div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">Заявка принята!</h2>
            <p className="text-neutral-600">Наш специалист свяжется с вами в течение часа.</p>
            <button
              onClick={onClose}
              className="mt-6 bg-black text-white px-6 py-2 text-sm uppercase tracking-wide hover:bg-neutral-700 transition-colors cursor-pointer"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-neutral-900 mb-2 uppercase tracking-tight">
              Заказать выезд
            </h2>
            <p className="text-neutral-500 text-sm mb-6">
              Специалист приедет, осмотрит участок и рассчитает стоимость бесплатно.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-neutral-900 transition-colors"
              />
              <input
                type="tel"
                placeholder="+7 999 000-00-00"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-neutral-900 transition-colors"
              />
              {status === "error" && (
                <p className="text-red-500 text-sm">Что-то пошло не так. Попробуйте ещё раз.</p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-black text-white py-3 text-sm uppercase tracking-wide hover:bg-neutral-700 transition-colors cursor-pointer disabled:opacity-50"
              >
                {status === "loading" ? "Отправляем..." : "Отправить заявку"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
