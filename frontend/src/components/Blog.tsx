import { ArrowRight } from "lucide-react";

const posts = [
  {
    cat: "Indicadores",
    title: "Quais métricas acompanhar em uma operação comercial?",
    desc: "Um guia prático para definir os KPIs certos e construir uma rotina de leitura de indicadores.",
    grad: "from-blue-700 to-blue-400",
  },
  {
    cat: "Processos",
    title: "Como reduzir retrabalho entre equipes internas",
    desc: "Diagnóstico, padronização e ferramentas: o caminho para eliminar ruídos entre áreas.",
    grad: "from-emerald-600 to-emerald-400",
  },
  {
    cat: "Gestão",
    title: "Como criar uma rotina de acompanhamento de metas",
    desc: "Cadência semanal, indicadores líderes e responsabilização: o tripé da execução.",
    grad: "from-slate-800 to-blue-700",
  },
];

export default function Blog() {
  return (
    <section id="conteudos" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">Conteúdos</span>
            <h2 className="mt-3 font-display font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight">
              Insights práticos para gestores que executam
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-soft transition-all hover:-translate-y-1 group">
              <div className={`aspect-[16/9] bg-gradient-to-br ${p.grad} relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-6 left-6 w-24 h-24 bg-white/20 rounded-full blur-2xl" />
                  <div className="absolute bottom-6 right-6 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
                </div>
                <div className="relative h-full flex items-end p-6 text-white">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-white/20 backdrop-blur font-semibold">{p.cat}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-lg text-slate-900 leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 group-hover:gap-2.5 transition-all">
                  Ler artigo <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
