import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, TrendingUp } from "lucide-react";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#resultados", label: "Resultados" },
  { href: "#conteudos", label: "Conteúdos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-soft border-b border-slate-200/60"
          : "bg-white/70 backdrop-blur"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg text-slate-900">
          <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-700 to-blue-500 text-white grid place-items-center shadow-glow">
            <TrendingUp className="w-5 h-5" />
          </span>
          Avante <span className="text-blue-700">Partners</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800 transition-colors shadow-glow"
        >
          Fale com um consultor
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-slate-700"
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-6 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-slate-700 font-medium py-2"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="block text-center px-5 py-3 rounded-full bg-blue-700 text-white font-semibold"
          >
            Fale com um consultor
          </a>
        </div>
      )}
    </header>
  );
}
