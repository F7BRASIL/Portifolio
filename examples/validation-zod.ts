/**
 * Exemplo — validação de entrada com Zod (API Express).
 */
import { z } from "zod";

export const leadCreateSchema = z.object({
  buyerName: z.string().min(2).max(120).transform((s) => s.trim()),
  buyerDocument: z.string().min(11).max(14),
  plate: z
    .string()
    .min(7)
    .max(8)
    .transform((s) => s.toUpperCase().replace(/[^A-Z0-9]/g, "")),
  vehicleValue: z.number().positive().optional(),
  financeCompanies: z.array(z.string().min(1).max(80)).min(1),
});

export type LeadCreateInput = z.infer<typeof leadCreateSchema>;

export function parseLeadBody(body: unknown): LeadCreateInput {
  return leadCreateSchema.parse(body);
}
