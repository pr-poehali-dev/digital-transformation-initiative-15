import { useState } from "react";
import Icon from "@/components/ui/icon";

const tabs = ["Системы полива", "Озеленение", "Газоны"];

const data = {
  "Системы полива": {
    columns: ["Услуга", "Конкуренты по КК", "АкваГрин"],
    rows: [
      ["Проект + замер участка", "3 000 – 5 000 ₽", "Бесплатно"],
      ["Монтаж капельного полива (сотка)", "4 500 – 7 000 ₽", "от 3 800 ₽"],
      ["Монтаж дождевания (сотка)", "6 000 – 10 000 ₽", "от 5 200 ₽"],
      ["Автоматика (контроллер + клапаны)", "15 000 – 25 000 ₽", "от 12 000 ₽"],
      ["Пуско-наладка системы", "2 000 – 4 000 ₽", "Входит в монтаж"],
      ["Гарантия на работы", "6 – 12 мес.", "24 мес."],
    ],
    highlight: [false, false, false, false, false, false],
  },
  "Озеленение": {
    columns: ["Услуга", "Конкуренты по КК", "АкваГрин"],
    rows: [
      ["Дизайн-проект озеленения", "8 000 – 20 000 ₽", "от 5 000 ₽"],
      ["Посадка живой изгороди (п.м.)", "800 – 1 500 ₽", "от 650 ₽"],
      ["Высадка кустарников (шт.)", "500 – 900 ₽", "от 400 ₽"],
      ["Высадка деревьев (шт.)", "2 500 – 5 000 ₽", "от 2 000 ₽"],
      ["Мульчирование (сотка)", "3 000 – 5 000 ₽", "от 2 500 ₽"],
      ["Гарантия приживаемости", "Нет", "3 месяца"],
    ],
    highlight: [false, false, false, false, false, false],
  },
  "Газоны": {
    columns: ["Услуга", "Конкуренты по КК", "АкваГрин"],
    rows: [
      ["Подготовка почвы (сотка)", "2 500 – 4 000 ₽", "от 2 000 ₽"],
      ["Посев газона (сотка)", "1 500 – 3 000 ₽", "от 1 200 ₽"],
      ["Рулонный газон (сотка)", "12 000 – 18 000 ₽", "от 10 500 ₽"],
      ["Спортивный газон (сотка)", "20 000 – 35 000 ₽", "от 18 000 ₽"],
      ["Уход за газоном (мес.)", "4 000 – 8 000 ₽", "от 3 500 ₽"],
      ["Гарантия на газон", "Нет", "1 месяц"],
    ],
    highlight: [false, false, false, false, false, false],
  },
};

export default function Pricing() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const table = data[activeTab as keyof typeof data];

  return (
    <section id="pricing" className="min-h-screen bg-neutral-50 px-6 py-24 flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <p className="uppercase text-sm tracking-wide text-neutral-500 mb-4">Краснодарский край</p>
        <h2 className="text-4xl md:text-6xl font-bold text-neutral-900 tracking-tight mb-4">
          Сравнение цен
        </h2>
        <p className="text-neutral-500 mb-12 max-w-xl">
          Мы изучили рынок КК и предлагаем лучшее соотношение цены и качества с гарантией на все виды работ.
        </p>

        {/* Tabs */}
        <div className="flex gap-2 mb-10 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 text-sm uppercase tracking-wide border transition-all duration-200 cursor-pointer ${
                activeTab === tab
                  ? "bg-black text-white border-black"
                  : "bg-white text-neutral-700 border-neutral-300 hover:border-neutral-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-neutral-900">
                {table.columns.map((col, i) => (
                  <th
                    key={col}
                    className={`text-left py-4 px-4 text-sm uppercase tracking-wide font-semibold ${
                      i === 2 ? "text-green-700" : "text-neutral-900"
                    }`}
                  >
                    {i === 2 ? (
                      <span className="flex items-center gap-2">
                        <Icon name="Leaf" size={16} />
                        {col}
                      </span>
                    ) : col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, ri) => (
                <tr
                  key={ri}
                  className="border-b border-neutral-200 hover:bg-white transition-colors duration-150"
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`py-4 px-4 text-sm ${
                        ci === 0
                          ? "text-neutral-700 font-medium"
                          : ci === 1
                          ? "text-neutral-500"
                          : "text-green-700 font-semibold"
                      }`}
                    >
                      {ci === 2 && (cell === "Бесплатно" || cell === "Входит в монтаж" || cell.startsWith("24") || cell.startsWith("3 мес") || cell.startsWith("1 мес")) ? (
                        <span className="inline-flex items-center gap-1">
                          <Icon name="Check" size={14} />
                          {cell}
                        </span>
                      ) : cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-neutral-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-lg font-semibold mb-1">Хотите точный расчёт под ваш участок?</p>
            <p className="text-neutral-400 text-sm">Выезд и смета — бесплатно, без обязательств.</p>
          </div>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="shrink-0 bg-white text-black px-6 py-3 text-sm uppercase tracking-wide font-medium hover:bg-neutral-200 transition-colors cursor-pointer"
          >
            Заказать выезд
          </a>
        </div>
      </div>
    </section>
  );
}
