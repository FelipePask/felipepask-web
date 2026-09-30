import { z } from "zod";
import { PROJECT_TYPES } from "./constants";

/** Los mensajes de error son keys del diccionario, se traducen en la UI. */
export const contactSchema = z.object({
  name: z.string().trim().min(2, "name").max(120, "name"),
  email: z.email("email").max(200, "email"),
  projectType: z.enum(PROJECT_TYPES).catch("other"),
  message: z.string().trim().min(10, "message").max(5000, "message"),
});

export type ContactInput = z.infer<typeof contactSchema>;
