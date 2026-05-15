import { Search, FileBarChart, Settings2, RefreshCw } from "lucide-react";

const steps = [
  { num: "01", icon: Search, title: "Imersão", desc: "Conhecemos o negócio, equipe e operação atual." },
  { num: "02", icon: FileBarChart, title: "Diagnóstico", desc: "Identificamos gargalos e priorizamos ações." },
  { num: "03", icon: Settings2, title: "Implantação", desc: "Aplicamos o plano com a sua equipe, no ritmo certo." },
  { num: "04", icon: RefreshCw, title: "Gestão contínua", desc: "Acompanhamos indicadores e ajustes mensais." },
];

export default function Method() {
  return (
    <section className="py-24 gradient-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="max-w-3xl">
          <span className="text-emerald-300 font-semibold text-sm uppercase tracking-wide">Nosso método</span>
          <h2 className="mt-3 font-display font-extrabold text-3xl md:text-4xl leading-tight">
            Um processo claro do diagnóstico à gestão contínua
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-px bg-gradient-to-r from-blue-400/30 via-emerald-400/30 to-blue-400/30" />
          {steps.map((s) => (
            <div key={s.num} className="relative bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <div className="flex items-center justify-between mb-5">
                <span className="font-display font-extrabold text-4xl text-gradient bg-gradient-to-br from-blue-300 to-emerald-300 bg-clip-text text-transparent">{s.num}</span>
                <div className="w-11 h-11 rounded-xl bg-white/10 grid place-items-center">
                  <s.icon className="w-5 h-5 text-emerald-300" />
                </div>
              </div>
              <h3 className="font-display font-bold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-blue-100/80 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
