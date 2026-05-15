import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Quanto tempo dura um diagnóstico?", a: "Em média 2 a 4 semanas, dependendo do porte da empresa e da quantidade de áreas envolvidas. Entregamos relatório executivo com plano priorizado." },
  { q: "A consultoria atende empresas pequenas?", a: "Sim. Adaptamos escopo e investimento à realidade de cada cliente, com foco em entregar valor desde a primeira semana." },
  { q: "Vocês implantam ferramentas?", a: "Sim. Avaliamos o stack atual, recomendamos e ajudamos a implantar ferramentas de CRM, BI, gestão de projetos e automação." },
  { q: "O acompanhamento é mensal?", a: "Sim. Após implantação, oferecemos rituais mensais (ou quinzenais) de revisão de indicadores, ajustes e desdobramento de novas ações." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">FAQ</span>
          <h2 className="mt-3 font-display font-extrabold text-3xl md:text-4xl text-slate-900">Perguntas frequentes</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-slate-900">{f.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-700 transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
