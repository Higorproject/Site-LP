import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { authRouter } from "./routes/auth";
import { leadsRouter } from "./routes/leads";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3333;

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ name: "Avante Partners API", status: "ok" });
});

app.use("/api/auth", authRouter);
app.use("/api/leads", leadsRouter);

app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`🚀 Avante Partners API running on http://localhost:${PORT}`);
});
