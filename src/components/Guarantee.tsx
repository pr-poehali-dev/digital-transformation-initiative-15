import Icon from "@/components/ui/icon";

const guarantees = [
  {
    icon: "ShieldCheck",
    title: "24 месяца на монтаж",
    description: "Гарантируем безупречную работу системы полива в течение двух лет. Устраним любую неисправность бесплатно.",
  },
  {
    icon: "Sprout",
    title: "3 месяца на приживаемость",
    description: "Если растения не прижились по нашей вине — заменим за свой счёт. Без споров и лишних слов.",
  },
  {
    icon: "Wallet",
    title: "Фиксированная цена",
    description: "Цена из сметы не меняется в процессе работ. Никаких доплат и скрытых расходов после старта.",
  },
  {
    icon: "Clock",
    title: "Соблюдение сроков",
    description: "Если нарушаем согласованные сроки — компенсируем 1% от стоимости за каждый день просрочки.",
  },
  {
    icon: "Wrench",
    title: "Сервисное обслуживание",
    description: "После гарантийного срока предлагаем сервисные договоры: консервация на зиму, настройка, замена расходников.",
  },
  {
    icon: "FileText",
    title: "Официальный договор",
    description: "Работаем по договору с актом выполненных работ. Все гарантии закреплены юридически.",
  },
];

export default function Guarantee() {
  return (
    <section id="guarantee" className="bg-neutral-900 px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <p className="uppercase text-sm tracking-wide text-neutral-400 mb-4">Надёжность</p>
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
          Гарантии
        </h2>
        <p className="text-neutral-400 mb-14 max-w-xl">
          Мы несём полную ответственность за результат — от первого колышка до сдачи объекта.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-700">
          {guarantees.map((item, i) => (
            <div key={i} className="bg-neutral-900 p-8 flex flex-col gap-4 hover:bg-neutral-800 transition-colors duration-200">
              <div className="w-10 h-10 flex items-center justify-center border border-neutral-700">
                <Icon name={item.icon} size={20} className="text-green-400" />
              </div>
              <h3 className="text-white font-semibold text-lg">{item.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}