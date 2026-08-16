"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  contactSchema,
  type ContactFormData,
} from "@/lib/validations/contact";

type FormStatus = "idle" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi.");
      }

      reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8"
      noValidate
    >
      <div>
        <label
          htmlFor="name"
          className="mb-3 block font-sans text-xs uppercase tracking-[0.2em] text-foreground/50"
        >
          Nom *
        </label>

        <Input
          id="name"
          placeholder="Votre nom"
          aria-invalid={Boolean(errors.name)}
          {...register("name")}
          className="h-12 rounded-none border-0 border-b border-border bg-transparent px-0 shadow-none focus-visible:border-foreground focus-visible:ring-0"
        />

        {errors.name && (
          <p className="mt-2 font-sans text-xs text-destructive">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="mb-3 block font-sans text-xs uppercase tracking-[0.2em] text-foreground/50"
          >
            E-mail *
          </label>

          <Input
            id="email"
            type="email"
            placeholder="vous@exemple.fr"
            aria-invalid={Boolean(errors.email)}
            {...register("email")}
            className="h-12 rounded-none border-0 border-b border-border bg-transparent px-0 shadow-none focus-visible:border-foreground focus-visible:ring-0"
          />

          {errors.email && (
            <p className="mt-2 font-sans text-xs text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-3 block font-sans text-xs uppercase tracking-[0.2em] text-foreground/50"
          >
            Téléphone
          </label>

          <Input
            id="phone"
            type="tel"
            placeholder="+33..."
            aria-invalid={Boolean(errors.phone)}
            {...register("phone")}
            className="h-12 rounded-none border-0 border-b border-border bg-transparent px-0 shadow-none focus-visible:border-foreground focus-visible:ring-0"
          />

          {errors.phone && (
            <p className="mt-2 font-sans text-xs text-destructive">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-3 block font-sans text-xs uppercase tracking-[0.2em] text-foreground/50"
        >
          Parlez-nous de votre projet *
        </label>

        <Textarea
          id="message"
          placeholder="Type de projet, localisation, besoins, envies..."
          aria-invalid={Boolean(errors.message)}
          {...register("message")}
          className="min-h-40 resize-none rounded-none border-0 border-b border-border bg-transparent px-0 py-3 shadow-none focus-visible:border-foreground focus-visible:ring-0"
        />

        {errors.message && (
          <p className="mt-2 font-sans text-xs text-destructive">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="bg-foreground px-8 text-background hover:bg-foreground/85"
        >
          {isSubmitting ? "Envoi..." : "Envoyer ma demande"}
        </Button>
      </div>

      {status === "success" && (
        <p
          role="status"
          className="border-l-2 border-brand pl-4 font-sans text-sm text-brand-muted"
        >
          Merci. Votre demande a bien été reçue.
        </p>
      )}

      {status === "error" && (
        <p
          role="alert"
          className="font-sans text-sm text-destructive"
        >
          Une erreur est survenue. Veuillez réessayer.
        </p>
      )}
    </form>
  );
}