import type { Metadata } from "next";

import ContactForm from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Vous avez un projet d’architecture intérieure ou de rénovation ? Contactez Atelier Noma pour nous parler de votre espace.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
          <p className="mb-6 font-sans text-xs uppercase tracking-[0.3em] text-brand">
            Nous contacter
          </p>

          <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-end">
            <h1 className="max-w-3xl font-display text-5xl font-medium leading-[0.92] sm:text-6xl lg:text-7xl">
              Commençons par une conversation.
            </h1>

            <p className="max-w-lg font-sans text-sm leading-7 text-brand-muted sm:text-base">
              Parlez-nous de votre lieu, de vos besoins et de vos envies.
              Chaque projet commence par quelques mots.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-[0.75fr_1.25fr] md:gap-20 lg:px-8">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-brand">
              Atelier Noma
            </p>

            <h2 className="mt-5 max-w-md font-display text-4xl font-medium leading-[0.95] sm:text-5xl">
              Donnons forme à votre projet.
            </h2>

            <p className="mt-7 max-w-sm font-sans text-sm leading-7 text-brand-muted">
              Appartement, maison, rénovation ou aménagement professionnel :
              décrivez-nous simplement votre projet à l’aide du formulaire.
            </p>

            <div className="mt-10 border-t border-border pt-7">
              <p className="font-display text-2xl">
                Paris, France
              </p>

              <p className="mt-2 font-sans text-xs uppercase tracking-[0.2em] text-foreground/40">
                Projets en France & ailleurs
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}