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
            className="flex items-center gap-1.5 text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.043 14.6l-2.95-.924c-.64-.203-.654-.64.136-.953l11.5-4.433c.537-.194 1.006.131.833.958z"/>
            </svg>
            Связаться
          </a>
        </nav>
      </div>
    </header>
  );
}