import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, Search, Trash2, TrendingUp, Users, Inbox, Phone, Handshake, CheckCircle2 } from "lucide-react";
import { api } from "../lib/api";

interface Lead {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  interestArea: string;
  message: string;
  status: string;
  createdAt: string;
}

const STATUSES = ["Novo", "Em contato", "Em negociação", "Finalizado"];

const statusBadge: Record<string, string> = {
  Novo: "bg-blue-100 text-blue-700",
  "Em contato": "bg-amber-100 text-amber-700",
  "Em negociação": "bg-purple-100 text-purple-700",
  Finalizado: "bg-emerald-100 text-emerald-700",
};

export default function AdminDashboard() {
  const nav = useNavigate();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState("Todos");

  useEffect(() => {
    if (!localStorage.getItem("avante_token")) {
      nav("/admin");
      return;
    }
    api<Lead[]>("/api/leads")
      .then(setLeads)
      .catch(() => {
        localStorage.removeItem("avante_token");
        nav("/admin");
      })
      .finally(() => setLoading(false));
  }, [nav]);

  const counts = useMemo(() => ({
    total: leads.length,
    Novo: leads.filter(l => l.status === "Novo").length,
    "Em contato": leads.filter(l => l.status === "Em contato").length,
    "Em negociação": leads.filter(l => l.status === "Em negociação").length,
    Finalizado: leads.filter(l => l.status === "Finalizado").length,
  }), [leads]);

  const filtered = useMemo(() => {
    return leads.filter(l => {
      if (filter !== "Todos" && l.status !== filter) return false;
      if (!q) return true;
      const s = q.toLowerCase();
      return l.name.toLowerCase().includes(s) || l.company.toLowerCase().includes(s) || l.email.toLowerCase().includes(s);
    });
  }, [leads, q, filter]);

  const updateStatus = async (id: string, status: string) => {
    const updated = await api<Lead>(`/api/leads/${id}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    });
    setLeads(leads.map(l => l.id === id ? updated : l));
  };

  const remove = async (id: string) => {
    if (!confirm("Excluir este lead?")) return;
    await api(`/api/leads/${id}`, { method: "DELETE" });
    setLeads(leads.filter(l => l.id !== id));
  };

  const logout = () => {
    localStorage.removeItem("avante_token");
    nav("/admin");
  };

  const cards = [
    { label: "Total de leads", value: counts.total, icon: Users, color: "text-slate-700", bg: "bg-slate-100" },
    { label: "Novos", value: counts.Novo, icon: Inbox, color: "text-blue-700", bg: "bg-blue-100" },
    { label: "Em contato", value: counts["Em contato"], icon: Phone, color: "text-amber-700", bg: "bg-amber-100" },
    { label: "Em negociação", value: counts["Em negociação"], icon: Handshake, color: "text-purple-700", bg: "bg-purple-100" },
    { label: "Finalizados", value: counts.Finalizado, icon: CheckCircle2, color: "text-emerald-700", bg: "bg-emerald-100" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-display font-bold text-slate-900">
            <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-700 to-blue-500 text-white grid place-items-center">
              <TrendingUp className="w-5 h-5" />
            </span>
            Avante Partners <span className="text-slate-400 font-normal text-sm ml-2">/ Painel</span>
          </div>
          <button onClick={logout} className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-rose-600">
            <LogOut className="w-4 h-4" /> Sair
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="font-display font-extrabold text-2xl text-slate-900 mb-1">Dashboard de Leads</h1>
        <p className="text-slate-500 text-sm mb-8">Gerencie e acompanhe os leads recebidos pelo site.</p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {cards.map(c => (
            <div key={c.label} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-soft">
              <div className={`w-10 h-10 rounded-lg ${c.bg} ${c.color} grid place-items-center mb-3`}>
                <c.icon className="w-5 h-5" />
              </div>
              <div className="font-display font-extrabold text-2xl text-slate-900">{c.value}</div>
              <div className="text-xs text-slate-500 mt-0.5">{c.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-soft overflow-hidden">
          <div className="p-5 border-b border-slate-200 flex flex-wrap gap-3 items-center justify-between">
            <div className="relative flex-1 min-w-[220px]">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Buscar por nome, empresa ou e-mail…"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm"
              />
            </div>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2.5 rounded-lg border border-slate-200 outline-none text-sm bg-white"
            >
              <option>Todos</option>
              {STATUSES.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-slate-600 text-xs uppercase tracking-wide">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold">Lead</th>
                  <th className="text-left px-5 py-3 font-semibold">Contato</th>
                  <th className="text-left px-5 py-3 font-semibold">Interesse</th>
                  <th className="text-left px-5 py-3 font-semibold">Status</th>
                  <th className="text-left px-5 py-3 font-semibold">Data</th>
                  <th className="px-5 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan={6} className="px-5 py-10 text-center text-slate-500">Carregando…</td></tr>
                ) : filtered.length === 0 ? (
                  <tr><td colSpan={6} className="px-5 py-10 text-center text-slate-500">Nenhum lead encontrado.</td></tr>
                ) : filtered.map(l => (
                  <tr key={l.id} className="border-t border-slate-100 hover:bg-slate-50/60">
                    <td className="px-5 py-4">
                      <div className="font-semibold text-slate-900">{l.name}</div>
                      <div className="text-xs text-slate-500">{l.company}</div>
                    </td>
                    <td className="px-5 py-4">
                      <div className="text-slate-700">{l.email}</div>
                      <div className="text-xs text-slate-500">{l.phone}</div>
                    </td>
                    <td className="px-5 py-4 text-slate-700">{l.interestArea}</td>
                    <td className="px-5 py-4">
                      <select
                        value={l.status}
                        onChange={(e) => updateStatus(l.id, e.target.value)}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-full border-0 outline-none cursor-pointer ${statusBadge[l.status] || "bg-slate-100 text-slate-700"}`}
                      >
                        {STATUSES.map(s => <option key={s}>{s}</option>)}
                      </select>
                    </td>
                    <td className="px-5 py-4 text-xs text-slate-500">
                      {new Date(l.createdAt).toLocaleDateString("pt-BR")}
                    </td>
                    <td className="px-5 py-4 text-right">
                      <button
                        onClick={() => remove(l.id)}
                        className="p-2 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50"
                        aria-label="Excluir"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
