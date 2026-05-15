import { TrendingUp, TrendingDown, Clock, CheckCircle2 } from "lucide-react";

const indicators = [
  { icon: TrendingUp, label: "Aumento de produtividade", value: "+32%", color: "text-emerald-600", bg: "bg-emerald-50" },
  { icon: TrendingDown, label: "Redução de retrabalho", value: "-24%", color: "text-blue-700", bg: "bg-blue-50" },
  { icon: Clock, label: "Tempo médio de resposta", value: "-41%", color: "text-amber-600", bg: "bg-amber-50" },
  { icon: CheckCircle2, label: "Previsibilidade de gestão", value: "Alta", color: "text-emerald-600", bg: "bg-emerald-50" },
];

export default function Results() {
  return (
    <section id="resultados" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">Cases</span>
          <h2 className="mt-3 font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight">
            Projetos orientados por dados e execução
          </h2>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 p-8 shadow-soft">
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 font-semibold">CASE</span>
                <h3 className="mt-3 font-display font-bold text-2xl text-slate-900">
                  Reestruturação comercial em operação de serviços
                </h3>
                <p className="mt-2 text-slate-600 max-w-xl">
                  Implantação de cadência comercial, dashboard de KPIs e revisão de funil em 90 dias.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {indicators.map((i) => (
                <div key={i.label} className={`p-5 rounded-2xl ${i.bg}`}>
                  <i.icon className={`w-5 h-5 ${i.color} mb-2`} />
                  <div className="font-display font-extrabold text-2xl text-slate-900">{i.value}</div>
                  <div className="text-xs text-slate-600 mt-1">{i.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-7 shadow-soft">
            <div className="font-display font-bold text-slate-900 mb-1">Antes × Depois</div>
            <div className="text-xs text-slate-500 mb-5">Indicadores em 3 meses</div>

            {[
              { l: "Conversão", a: 30, b: 75 },
              { l: "Retrabalho", a: 80, b: 35 },
              { l: "Previsibilidade", a: 25, b: 90 },
              { l: "Engajamento", a: 45, b: 82 },
            ].map((r) => (
              <div key={r.l} className="mb-4">
                <div className="flex justify-between text-xs text-slate-600 mb-1">
                  <span>{r.l}</span>
                  <span className="font-semibold text-emerald-600">+{r.b - r.a}pts</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden mb-1.5">
                  <div className="h-full bg-slate-300" style={{ width: `${r.a}%` }} />
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-700 to-emerald-500" style={{ width: `${r.b}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
