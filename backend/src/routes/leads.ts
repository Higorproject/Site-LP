import { Router } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { requireAuth } from "../middleware/auth";

export const leadsRouter = Router();

const VALID_STATUS = ["Novo", "Em contato", "Em negociação", "Finalizado"] as const;

const leadSchema = z.object({
  name: z.string().trim().min(1).max(120),
  company: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().min(1).max(40),
  interestArea: z.string().trim().min(1).max(120),
  message: z.string().trim().min(1).max(2000),
});

leadsRouter.post("/", async (req, res) => {
  const parsed = leadSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Dados inválidos", details: parsed.error.flatten() });
  }
  const lead = await prisma.lead.create({ data: { ...parsed.data, status: "Novo" } });
  return res.status(201).json(lead);
});

leadsRouter.get("/", requireAuth, async (_req, res) => {
  const leads = await prisma.lead.findMany({ orderBy: { createdAt: "desc" } });
  return res.json(leads);
});

leadsRouter.get("/:id", requireAuth, async (req, res) => {
  const lead = await prisma.lead.findUnique({ where: { id: req.params.id } });
  if (!lead) return res.status(404).json({ error: "Lead não encontrado" });
  return res.json(lead);
});

leadsRouter.patch("/:id/status", requireAuth, async (req, res) => {
  const schema = z.object({ status: z.enum(VALID_STATUS) });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "Status inválido" });
  try {
    const lead = await prisma.lead.update({
      where: { id: req.params.id },
      data: { status: parsed.data.status },
    });
    return res.json(lead);
  } catch {
    return res.status(404).json({ error: "Lead não encontrado" });
  }
});

leadsRouter.delete("/:id", requireAuth, async (req, res) => {
  try {
    await prisma.lead.delete({ where: { id: req.params.id } });
    return res.status(204).send();
  } catch {
    return res.status(404).json({ error: "Lead não encontrado" });
  }
});
