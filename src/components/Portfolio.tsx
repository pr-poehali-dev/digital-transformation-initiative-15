const projects = [
  {
    title: "Автополив коттеджа 20 соток",
    location: "Краснодар, пос. Знаменский",
    tag: "Системы полива",
    image: "https://cdn.poehali.dev/projects/206b3656-9d1e-43ac-9ec1-9dbc94f2a83e/files/3668d21c-eb8a-4c1a-bb07-bb2aa2a6bf87.jpg",
  },
  {
    title: "Озеленение и живая изгородь",
    location: "Сочи, Адлерский район",
    tag: "Озеленение",
    image: "https://cdn.poehali.dev/projects/206b3656-9d1e-43ac-9ec1-9dbc94f2a83e/files/f03cbbf8-31f2-4898-ad71-96984dda9284.jpg",
  },
  {
    title: "Рулонный газон 8 соток",
    location: "Анапа, СНТ Южный",
    tag: "Газоны",
    image: "https://cdn.poehali.dev/projects/206b3656-9d1e-43ac-9ec1-9dbc94f2a83e/files/c00b22fc-29bf-4aef-b96f-68651a6f9723.jpg",
  },
  {
    title: "Капельный полив теплиц",
    location: "Темрюк, фермерское хозяйство",
    tag: "Системы полива",
    image: "https://cdn.poehali.dev/projects/206b3656-9d1e-43ac-9ec1-9dbc94f2a83e/files/28595933-3d24-4bc1-ba04-d7a5a01948d8.jpg",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <p className="uppercase text-sm tracking-wide text-neutral-500 mb-4">Наши работы</p>
        <h2 className="text-4xl md:text-6xl font-bold text-neutral-900 tracking-tight mb-4">
          Портфолио
        </h2>
        <p className="text-neutral-500 mb-14 max-w-xl">
          Реализованные объекты в Краснодарском крае — от небольших дачных участков до коммерческих территорий.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-neutral-200">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group overflow-hidden ${i % 2 === 0 ? "border-r border-neutral-200" : ""} ${i < 2 ? "border-b border-neutral-200" : ""}`}
            >
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <span className="absolute top-4 left-4 bg-white text-neutral-900 text-xs uppercase tracking-wide px-2 py-1 font-medium">
                  {project.tag}
                </span>
              </div>
              <div className="p-6 border-t border-neutral-100">
                <p className="font-semibold text-neutral-900 mb-1">{project.title}</p>
                <p className="text-sm text-neutral-500">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
