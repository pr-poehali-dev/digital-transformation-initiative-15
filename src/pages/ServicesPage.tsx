import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LeadModal from "@/components/LeadModal";

const services = [
  {
    id: 1,
    title: "Системы полива",
    subtitle: "Автоматический полив под ключ",
    description:
      "Проектируем и монтируем системы капельного и дождевального полива. Замер участка, подбор оборудования, укладка труб, установка контроллера и пуско-наладка — всё включено. Гарантия 24 месяца.",
    details: [
      "Капельный полив для грядок и клумб",
      "Дождевание газонов и открытых площадок",
      "Автоматика: контроллеры, датчики дождя",
      "Зимнее консервирование системы",
    ],
    image: "https://cdn.poehali.dev/projects/206b3656-9d1e-43ac-9ec1-9dbc94f2a83e/files/3668d21c-eb8a-4c1a-bb07-bb2aa2a6bf87.jpg",
    tag: "Популярно",
  },
  {
    id: 2,
    title: "Озеленение",
    subtitle: "Деревья, кустарники, живые изгороди",
    description:
      "Создаём зелёные пространства под ключ: дизайн-проект, подбор растений, посадка, мульчирование и уход. Гарантия приживаемости — 3 месяца.",
    details: [
      "Дизайн-проект озеленения участка",
      "Посадка деревьев и кустарников",
      "Живые изгороди из ели, туи, барбариса",
      "Мульчирование и уход за посадками",
    ],
    image: "https://cdn.poehali.dev/projects/206b3656-9d1e-43ac-9ec1-9dbc94f2a83e/files/f03cbbf8-31f2-4898-ad71-96984dda9284.jpg",
    tag: "Под ключ",
  },
  {
    id: 3,
    title: "Газоны",
    subtitle: "Посев и укладка рулонного газона",
    description:
      "Готовим почву, укладываем рулонный или засеиваем газон нужного типа. Спортивные, декоративные, теневыносливые — подберём оптимальный вариант для вашего участка.",
    details: [
      "Подготовка и выравнивание почвы",
      "Посев декоративных и спортивных газонов",
      "Укладка рулонного газона",
      "Регулярный уход и покос",
    ],
    image: "https://cdn.poehali.dev/projects/206b3656-9d1e-43ac-9ec1-9dbc94f2a83e/files/c00b22fc-29bf-4aef-b96f-68651a6f9723.jpg",
    tag: "Быстро",
  },
];

export default function ServicesPage() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-neutral-900 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm uppercase tracking-wide cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Назад
        </button>
        <span className="text-white text-sm uppercase tracking-wide font-medium">Зелёный участок</span>
        <div className="w-16" />
      </header>

      {/* Hero */}
      <div className="bg-neutral-50 px-6 py-14 max-w-5xl mx-auto w-full">
        <p className="uppercase text-sm tracking-wide text-neutral-500 mb-3">Краснодарский край</p>
        <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 tracking-tight mb-4">
          Наши услуги
        </h1>
        <p className="text-neutral-500 max-w-xl">
          Полный комплекс работ по озеленению и автоматизации полива. Работаем в Краснодарском крае с гарантией на все виды работ.
        </p>
      </div>

      {/* Services */}
      <div className="flex-1 max-w-5xl mx-auto w-full px-6 pb-16 flex flex-col gap-0">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} border border-neutral-200 mb-8`}
          >
            {/* Image */}
            <div className="lg:w-1/2 h-64 lg:h-auto overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="lg:w-1/2 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs uppercase tracking-wide bg-neutral-900 text-white px-2 py-1">
                    {service.tag}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
                  {service.title}
                </h2>
                <p className="text-neutral-500 text-sm mb-4">{service.subtitle}</p>
                <p className="text-neutral-700 mb-6 leading-relaxed">{service.description}</p>

                <ul className="flex flex-col gap-2">
                  {service.details.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                      <span className="text-green-600 mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="mt-8 bg-black text-white px-6 py-3 text-sm uppercase tracking-wide font-medium hover:bg-neutral-700 transition-colors cursor-pointer w-fit"
              >
                Заказать выезд
              </button>
            </div>
          </div>
        ))}
      </div>

      <LeadModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}