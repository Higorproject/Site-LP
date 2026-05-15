import { LineChart, Workflow, BarChart3, Cpu, GraduationCap, Rocket } from "lucide-react";

const services = [
  { icon: LineChart, title: "Gestão comercial", desc: "Estruturação de funil, metas, previsibilidade e cadência comercial." },
  { icon: Workflow, title: "Processos internos", desc: "Mapeamento, padronização e eliminação de retrabalho entre áreas." },
  { icon: BarChart3, title: "Indicadores e BI", desc: "Dashboards executivos, KPIs claros e leitura rápida de performance." },
  { icon: Cpu, title: "Transformação digital", desc: "Adoção de ferramentas certas para automatizar a operação." },
  { icon: GraduationCap, title: "Treinamento de equipes", desc: "Capacitação prática de líderes e times para sustentar resultados." },
  { icon: Rocket, title: "Plano de crescimento", desc: "Roadmap estratégico com metas, orçamento e indicadores de sucesso." },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">Serviços</span>
          <h2 className="mt-3 font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight">
            Soluções para empresas que precisam de método, controle e execução
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative bg-white rounded-2xl p-7 border border-slate-200 hover:border-blue-300 hover:shadow-soft transition-all hover:-translate-y-1"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-700 to-emerald-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-700 to-blue-500 text-white grid place-items-center mb-5 shadow-glow">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
