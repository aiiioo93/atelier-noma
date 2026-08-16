import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { error: "Veuillez renseigner votre nom." })
    .max(80, { error: "Votre nom est trop long." }),

  email: z.email({
    error: "Veuillez renseigner une adresse e-mail valide.",
  }),

  phone: z
    .string()
    .trim()
    .max(30, { error: "Le numéro de téléphone est trop long." }),

  message: z
    .string()
    .trim()
    .min(20, {
      error: "Votre message doit contenir au moins 20 caractères.",
    })
    .max(2000, {
      error: "Votre message ne peut pas dépasser 2000 caractères.",
    }),
});

export type ContactFormData = z.infer<typeof contactSchema>;