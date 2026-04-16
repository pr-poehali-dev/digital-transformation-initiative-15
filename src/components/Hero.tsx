import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="w-full h-full" style={{ background: "linear-gradient(135deg, #1a5c2a 0%, #2e8b57 30%, #4caf50 60%, #81c784 100%)" }} />
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
        <button className="mt-8 bg-white text-neutral-900 px-8 py-3 text-sm uppercase tracking-wide font-medium hover:bg-neutral-200 transition-colors duration-300 cursor-pointer">
          Заказать выезд
        </button>
      </div>
    </div>
  );
}