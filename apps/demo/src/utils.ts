import { z } from "zod";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export const schema = z.object({
  value: z.number().positive("Valor deve ser maior que zero"),
  date: z
    .string()
    .min(10, "Data obrigatória")
    .refine((value) => dayjs(value, "DD/MM/YYYY", true).isValid(), {
      message: "Data inválida",
    })
    .transform((value) => dayjs(value, "DD/MM/YYYY").format("YYYY-MM-DD")),
});
