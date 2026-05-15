import { Quote } from "lucide-react";

const items = [
  {
    name: "Renata Alves",
    role: "Diretora Comercial",
    company: "Helmar Serviços",
    text: "A clareza do diagnóstico e a praticidade do plano fizeram a diferença. Em 60 dias já tínhamos um pipeline previsível.",
    initials: "RA",
    color: "from-blue-700 to-blue-500",
  },
  {
    name: "Marcelo Duarte",
    role: "Sócio Operacional",
    company: "Núcleo Industrial",
    text: "Era exatamente o que precisávamos: alguém que entrasse na operação, organizasse processos e nos ajudasse a executar.",
    initials: "MD",
    color: "from-emerald-600 to-emerald-400",
  },
  {
    name: "Camila Rocha",
    role: "Gerente Administrativa",
    company: "Vortex Tech",
    text: "O acompanhamento mensal manteve o time focado nos indicadores certos. Resultado consistente, sem complicar.",
    initials: "CR",
    color: "from-slate-800 to-slate-600",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">Depoimentos</span>
          <h2 className="mt-3 font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight">
            O que nossos clientes dizem
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="bg-slate-50 rounded-2xl p-7 border border-slate-200 hover:border-blue-300 hover:shadow-soft transition-all">
              <Quote className="w-8 h-8 text-blue-700/40 mb-4" />
              <p className="text-slate-700 leading-relaxed text-sm">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} text-white grid place-items-center font-bold`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
