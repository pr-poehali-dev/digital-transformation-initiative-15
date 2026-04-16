import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState } from "react";
import LeadModal from "./LeadModal";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        ref={container}
        className="relative flex items-center justify-center h-screen overflow-hidden"
      >
        <motion.div
          style={{ y }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src="https://cdn.poehali.dev/projects/206b3656-9d1e-43ac-9ec1-9dbc94f2a83e/files/a5c023da-8bc8-489e-9f62-17ca15fd0448.jpg"
            alt="Озеленение участка"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            ЗЕЛЁНЫЙ
            <br />
            УЧАСТОК
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90">
            Профессиональный монтаж систем автоматического полива и комплексное озеленение вашего участка
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="mt-8 bg-white text-neutral-900 px-8 py-3 text-sm uppercase tracking-wide font-medium hover:bg-neutral-200 transition-colors duration-300 cursor-pointer"
          >
            Заказать выезд
          </button>
        </div>
      </div>

      <LeadModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}