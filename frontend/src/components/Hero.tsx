import { ArrowRight, BarChart3, TrendingUp, Activity, Target } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="gradient-hero pt-28 pb-20 lg:pt-36 lg:pb-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-emerald-200/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Consultoria empresarial premium
          </span>
          <h1 className="mt-6 font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-slate-900">
            Organize sua operação e tome decisões com mais{" "}
            <span className="text-gradient">clareza</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
            Ajudamos empresas a estruturarem processos, acompanharem indicadores
            e implantarem rotinas de gestão mais eficientes, com foco em
            crescimento sustentável.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-800 shadow-glow transition-all hover:-translate-y-0.5"
            >
              Solicitar diagnóstico <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#resultados"
              className="inline-flex items-center px-7 py-3.5 bg-white text-slate-900 border border-slate-200 rounded-full font-semibold hover:border-blue-400 hover:text-blue-700 transition-colors"
            >
              Ver resultados
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-slate-500">
            <div className="flex -space-x-2">
              {["bg-blue-600", "bg-emerald-500", "bg-slate-700", "bg-blue-400"].map((c, i) => (
                <div key={i} className={`w-9 h-9 rounded-full ${c} border-2 border-white`} />
              ))}
            </div>
            <span>+120 empresas confiaram em nossa metodologia</span>
          </div>
        </div>

        <div className="relative animate-fade-up">
          <DashboardMockup />

          <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-soft px-5 py-4 flex items-center gap-3 animate-float-slow">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 grid place-items-center">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <div className="text-xs text-slate-500">Produtividade</div>
              <div className="font-bold text-slate-900">+32% em média</div>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl shadow-soft px-5 py-4 flex items-center gap-3 animate-float-slow" style={{ animationDelay: "1.5s" }}>
            <div className="w-10 h-10 rounded-lg bg-blue-100 grid place-items-center">
              <Target className="w-5 h-5 text-blue-700" />
            </div>
            <div>
              <div className="text-xs text-slate-500">Metas batidas</div>
              <div className="font-bold text-slate-900">94%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="relative bg-white rounded-3xl shadow-glow border border-slate-200 p-6 overflow-hidden">
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-xs text-slate-500">Painel executivo</div>
          <div className="font-display font-bold text-slate-900">Visão geral</div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-5">
        {[
          { label: "Receita", value: "R$ 1.4M", up: "+18%", icon: BarChart3 },
          { label: "Conversão", value: "27%", up: "+6pts", icon: Activity },
          { label: "NPS", value: "72", up: "+9", icon: TrendingUp },
        ].map((m) => (
          <div key={m.label} className="bg-slate-50 rounded-xl p-3 border border-slate-100">
            <m.icon className="w-4 h-4 text-blue-700 mb-1.5" />
            <div className="text-[11px] text-slate-500">{m.label}</div>
            <div className="font-bold text-slate-900 text-sm">{m.value}</div>
            <div className="text-[10px] text-emerald-600 font-semibold">{m.up}</div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-xl p-5 text-white">
        <div className="flex items-center justify-between mb-4">
          <div className="text-xs text-blue-200">Crescimento mensal</div>
          <div className="text-xs text-emerald-300 font-semibold">+32%</div>
        </div>
        <div className="flex items-end gap-2 h-32">
          {[35, 50, 42, 65, 58, 78, 70, 88, 95].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full rounded-t bg-gradient-to-t from-blue-500 to-emerald-400"
                style={{ height: `${h}%` }}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-[10px] text-blue-200">
          {["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set"].map((m) => <span key={m}>{m}</span>)}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="bg-blue-50 rounded-xl p-3">
          <div className="text-[11px] text-slate-600 mb-1">Pipeline</div>
          <div className="h-1.5 bg-white rounded-full overflow-hidden">
            <div className="h-full bg-blue-700 rounded-full" style={{ width: "72%" }} />
          </div>
          <div className="text-xs font-semibold text-slate-900 mt-1.5">72% atingido</div>
        </div>
        <div className="bg-emerald-50 rounded-xl p-3">
          <div className="text-[11px] text-slate-600 mb-1">Eficiência</div>
          <div className="h-1.5 bg-white rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full" style={{ width: "88%" }} />
          </div>
          <div className="text-xs font-semibold text-slate-900 mt-1.5">88% ótimo</div>
        </div>
      </div>
    </div>
  );
}
