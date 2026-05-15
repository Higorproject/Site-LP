import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2, Lock, TrendingUp } from "lucide-react";
import { api } from "../lib/api";

export default function AdminLogin() {
  const nav = useNavigate();
  const [email, setEmail] = useState("admin@avantepartners.com.br");
  const [password, setPassword] = useState("admin123");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      const data = await api<{ token: string }>("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      localStorage.setItem("avante_token", data.token);
      nav("/admin/dashboard");
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Erro");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen gradient-dark grid place-items-center px-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-glow p-8">
        <div className="flex items-center gap-2 font-display font-bold text-xl text-slate-900 mb-1">
          <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-700 to-blue-500 text-white grid place-items-center">
            <TrendingUp className="w-5 h-5" />
          </span>
          Avante Partners
        </div>
        <div className="text-slate-500 text-sm mb-7">Painel administrativo</div>

        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
              required
            />
          </div>

          {err && <div className="p-3 rounded-lg bg-rose-50 text-rose-700 text-sm border border-rose-200">{err}</div>}

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-700 text-white rounded-xl font-semibold hover:bg-blue-800 shadow-glow disabled:opacity-60"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Lock className="w-4 h-4" />}
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
