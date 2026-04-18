interface HeaderProps {
  className?: string;
  onOpenModal?: () => void;
}

export default function Header({ className, onOpenModal }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-wide">Зелёный участок</div>
        <nav className="flex gap-8">
          <a
            href="/services"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Услуги
          </a>
          <a
            href="/pricing"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Цены
          </a>
          <a
            href="https://t.me/+K_p5EKELO3IwZTgy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Связаться
          </a>
        </nav>
      </div>
    </header>
  );
}