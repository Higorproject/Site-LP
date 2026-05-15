import { Router } from "express";
import jwt from "jsonwebtoken";
import { z } from "zod";
import { requireAuth, AuthRequest } from "../middleware/auth";

export const authRouter = Router();

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

authRouter.post("/login", (req, res) => {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Dados inválidos" });
  }
  const { email, password } = parsed.data;
  const adminEmail = process.env.ADMIN_EMAIL || "admin@avantepartners.com.br";
  const adminPassword = process.env.ADMIN_PASSWORD || "admin123";

  if (email !== adminEmail || password !== adminPassword) {
    return res.status(401).json({ error: "Credenciais inválidas" });
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET || "change-this-secret", {
    expiresIn: "7d",
  });

  return res.json({ token, user: { email } });
});

authRouter.get("/me", requireAuth, (req: AuthRequest, res) => {
  return res.json({ user: req.user });
});
