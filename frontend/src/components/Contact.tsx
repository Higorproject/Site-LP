import { useState } from "react";
import { Phone, Mail, Clock, Loader2, CheckCircle2, AlertCircle, Send } from "lucide-react";
import { api } from "../lib/api";

const initial = { name: "", company: "", email: "", phone: "", interestArea: "Gestão comercial", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "ok" | "err"; msg: string } | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);
    try {
      await api("/api/leads", { method: "POST", body: JSON.stringify(form) });
      setStatus({ type: "ok", msg: "Recebemos sua mensagem! Em breve entraremos em contato." });
      setForm(initial);
    } catch (err) {
      setStatus({ type: "err", msg: err instanceof Error ? err.message : "Erro ao enviar." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="py-24 gradient-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8 relative">
        <div className="lg:col-span-2 bg-white text-slate-900 rounded-3xl p-8 md:p-10 shadow-glow">
          <h2 className="font-display font-extrabold text-3xl text-slate-900">Vamos conversar</h2>
          <p className="mt-2 text-slate-600">Conte sobre seu desafio. Retornamos em até 1 dia útil.</p>

          <form onSubmit={onSubmit} className="mt-8 grid md:grid-cols-2 gap-4">
            <Input name="name" label="Nome completo" value={form.name} onChange={onChange} required />
            <Input name="company" label="Empresa" value={form.company} onChange={onChange} required />
            <Input name="email" type="email" label="E-mail" value={form.email} onChange={onChange} required />
            <Input name="phone" label="Telefone" value={form.phone} onChange={onChange} required />

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Área de interesse</label>
              <select
                name="interestArea"
                value={form.interestArea}
                onChange={onChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none bg-white"
              >
                {["Gestão comercial","Processos internos","Indicadores e BI","Transformação digital","Treinamento de equipes","Plano de crescimento"].map(o => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Mensagem</label>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={onChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none resize-none"
                placeholder="Conte um pouco sobre seu desafio…"
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-800 shadow-glow transition-all disabled:opacity-60"
              >
                {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Enviando…</> : <><Send className="w-4 h-4" /> Enviar mensagem</>}
              </button>
            </div>

            {status && (
              <div
                className={`md:col-span-2 flex items-start gap-3 p-4 rounded-xl text-sm ${
                  status.type === "ok"
                    ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                    : "bg-rose-50 text-rose-800 border border-rose-200"
                }`}
              >
                {status.type === "ok" ? <CheckCircle2 className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
                <span>{status.msg}</span>
              </div>
            )}
          </form>
        </div>

        <aside className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 space-y-6">
          <h3 className="font-display font-bold text-xl">Atendimento</h3>
          <ContactItem icon={Phone} title="Telefone" value="+55 (11) 4002-8922" />
          <ContactItem icon={Mail} title="E-mail" value="contato@avantepartners.com.br" />
          <ContactItem icon={Clock} title="Horário" value="Seg. a Sex., das 9h às 18h" />

          <div className="pt-6 border-t border-white/10">
            <div className="text-sm text-blue-100/80 mb-3">Resposta média</div>
            <div className="flex items-center gap-3">
              <div className="font-display font-extrabold text-3xl">&lt; 1 dia</div>
              <div className="text-xs text-emerald-300">útil</div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Input({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1.5">{label}</label>
      <input
        {...props}
        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
      />
    </div>
  );
}

function ContactItem({ icon: Icon, title, value }: { icon: React.ElementType; title: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-lg bg-white/10 grid place-items-center text-emerald-300 shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="text-xs text-blue-200">{title}</div>
        <div className="font-semibold">{value}</div>
      </div>
    </div>
  );
}
