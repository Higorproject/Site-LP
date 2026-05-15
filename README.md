# Avante Partners

Projeto full-stack profissional para a empresa fictícia **Avante Partners**, especializada em consultoria empresarial, gestão, processos, indicadores, BI e transformação digital.

Site institucional premium + painel administrativo de leads + API REST.

---

## 🚀 Tecnologias

### Frontend
- React 18 + Vite + TypeScript
- Tailwind CSS
- React Router DOM
- Lucide React (ícones)

### Backend
- Node.js + Express + TypeScript
- Prisma ORM + SQLite
- JWT (autenticação admin)
- bcryptjs, cors, dotenv

---

## 📁 Estrutura de pastas

```
avante-partners/
├── frontend/        # React + Vite (site institucional + painel admin)
├── backend/         # Express + Prisma + SQLite (API REST)
└── README.md
```

---

## ⚙️ Como rodar o projeto

### 1. Backend

```bash
cd backend
cp .env.example .env
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

API disponível em: `http://localhost:3333`

### 2. Frontend

Em outro terminal:

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

Site disponível em: `http://localhost:5173`
Painel admin: `http://localhost:5173/admin`

---

## 🔑 Login admin padrão

- **E-mail:** `admin@avantepartners.com.br`
- **Senha:** `admin123`

(Configurável em `backend/.env`)

---

## 🌐 Variáveis de ambiente

### `backend/.env`
```
DATABASE_URL="file:./dev.db"
PORT=3333
ADMIN_EMAIL=admin@avantepartners.com.br
ADMIN_PASSWORD=admin123
JWT_SECRET=change-this-secret
```

### `frontend/.env`
```
VITE_API_URL=http://localhost:3333
```

---

## 📡 Rotas da API

### Autenticação
| Método | Rota              | Descrição                  |
|--------|-------------------|----------------------------|
| POST   | `/api/auth/login` | Login do admin (retorna JWT) |
| GET    | `/api/auth/me`    | Dados do admin autenticado |

### Leads
| Método | Rota                       | Auth | Descrição                  |
|--------|----------------------------|------|----------------------------|
| POST   | `/api/leads`               | ❌   | Criar lead (formulário público) |
| GET    | `/api/leads`               | ✅   | Listar todos os leads      |
| GET    | `/api/leads/:id`           | ✅   | Detalhe de um lead         |
| PATCH  | `/api/leads/:id/status`    | ✅   | Atualizar status do lead   |
| DELETE | `/api/leads/:id`           | ✅   | Excluir lead               |

**Status possíveis:** `Novo`, `Em contato`, `Em negociação`, `Finalizado`.

---

## ☁️ Deploy

### Frontend → Vercel
- **Root Directory:** `frontend`
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`
- **Env vars:** `VITE_API_URL=https://sua-api.exemplo.com`

### Backend → Render ou Railway
- Subir a pasta `backend/`
- **Build Command:** `npm install && npx prisma generate && npx prisma migrate deploy && npm run build`
- **Start Command:** `npm start`
- **Env vars:** copiar de `.env.example` (em produção, troque para Postgres no `DATABASE_URL` se preferir)

---

## ✨ Funcionalidades

### Site institucional
- Header fixo com navegação responsiva
- Hero premium com dashboard visual
- Faixa de indicadores animados
- 6 cards de serviços
- Seção sobre / abordagem
- Método de trabalho em 4 etapas
- Case com gráficos
- Depoimentos
- Blog (3 artigos)
- FAQ accordion
- Formulário de contato funcional (POST `/api/leads`)
- Botão flutuante de WhatsApp
- Footer completo

### Painel admin (`/admin`)
- Login com JWT
- Dashboard com 5 cards de métricas
- Tabela de leads com busca e filtro por status
- Alteração inline de status
- Exclusão com confirmação
- Badges coloridas por status

---

© Avante Partners — Projeto de portfólio.
