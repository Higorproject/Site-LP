import { TrendingUp, Linkedin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 font-display font-bold text-xl text-white">
            <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-700 to-blue-500 grid place-items-center">
              <TrendingUp className="w-5 h-5" />
            </span>
            Avante Partners
          </div>
          <p className="mt-4 text-sm text-slate-400 leading-relaxed">
            Consultoria em processos, indicadores e transformação digital para empresas que querem crescer com método.
          </p>
          <div className="mt-5 flex gap-3">
            {[Linkedin, Instagram, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/5 grid place-items-center hover:bg-blue-700 transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Institucional" links={["Sobre", "Método", "Resultados", "Carreira"]} />
        <FooterCol title="Serviços" links={["Gestão comercial", "Processos", "Indicadores e BI", "Transformação digital"]} />
        <FooterCol title="Contato" links={["contato@avantepartners.com.br", "+55 (11) 4002-8922", "Seg–Sex · 9h às 18h"]} />
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
        <div>© {new Date().getFullYear()} Avante Partners. Todos os direitos reservados.</div>
        <div>CNPJ 00.000.000/0001-00 · São Paulo, SP</div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="font-display font-bold text-white mb-4">{title}</div>
      <ul className="space-y-2 text-sm">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
