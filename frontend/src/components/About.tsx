import { CheckCircle2, ClipboardList, LineChart } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">Nossa abordagem</span>
          <h2 className="mt-3 font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight">
            Consultoria prática, sem complicar a operação da empresa
          </h2>
          <p className="mt-5 text-slate-600 leading-relaxed">
            Entramos para organizar o que já existe, eliminar ruídos e criar uma
            rotina de gestão que seja possível de executar no dia a dia.
          </p>

          <div className="mt-8 space-y-4">
            {[
              { icon: ClipboardList, title: "Diagnóstico claro", desc: "Mapeamos pontos críticos com objetividade e dados." },
              { icon: LineChart, title: "Plano aplicável", desc: "Entregamos roadmap simples e viável de executar." },
              { icon: CheckCircle2, title: "Acompanhamento de resultado", desc: "Indicadores reais para validar cada entrega." },
            ].map((b) => (
              <div key={b.title} className="flex gap-4 p-4 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors">
                <div className="w-11 h-11 rounded-lg bg-emerald-50 grid place-items-center text-emerald-600 shrink-0">
                  <b.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{b.title}</div>
                  <div className="text-sm text-slate-600">{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-emerald-500 p-1 shadow-glow">
            <div className="w-full h-full rounded-[22px] bg-slate-900 p-8 grid place-items-center text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-blue-400 blur-3xl" />
                <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-emerald-400 blur-3xl" />
              </div>
              <div className="relative text-center">
                <div className="font-display text-5xl font-extrabold mb-2">+10 anos</div>
                <div className="text-blue-200">de experiência em gestão e processos</div>
                <div className="mt-8 grid grid-cols-3 gap-4 text-left">
                  {[
                    { v: "120+", l: "Projetos" },
                    { v: "18", l: "Setores" },
                    { v: "94%", l: "Retenção" },
                  ].map((s) => (
                    <div key={s.l} className="bg-white/10 backdrop-blur rounded-lg p-3 border border-white/10">
                      <div className="font-display font-extrabold text-xl">{s.v}</div>
                      <div className="text-xs text-blue-200">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
