import { Briefcase, Building2, Star, CalendarCheck } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "120+", label: "Projetos analisados" },
  { icon: Building2, value: "18", label: "Segmentos atendidos" },
  { icon: Star, value: "4.9/5", label: "Avaliação média" },
  { icon: CalendarCheck, value: "30 dias", label: "Para o 1º plano de ação" },
];

export default function Stats() {
  return (
    <section className="py-14 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 grid place-items-center text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-colors">
              <s.icon className="w-6 h-6" />
            </div>
            <div>
              <div className="font-display font-extrabold text-2xl text-slate-900">{s.value}</div>
              <div className="text-sm text-slate-500">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
