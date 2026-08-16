import type { Metadata } from "next";

import ContactCta from "@/components/sections/contact-cta";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Architecture intérieure, rénovation complète et décoration : découvrez l’accompagnement proposé par Atelier Noma.",
};

export default function ServicesPage() {
  return (
    <main>
      {/* Introduction */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
          <p className="mb-6 font-sans text-xs uppercase tracking-[0.3em] text-brand">
            Notre savoir-faire
          </p>

          <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-end">
            <h1 className="max-w-3xl font-display text-5xl font-medium leading-[0.92] sm:text-6xl lg:text-7xl">
              Un accompagnement pensé dans sa globalité.
            </h1>

            <p className="max-w-lg font-sans text-sm leading-7 text-brand-muted sm:text-base">
              De la première réflexion aux derniers détails, nous construisons
              chaque projet autour du lieu, de ses usages et de votre manière
              de l’habiter.
            </p>
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="border-t border-border">
            {services.map((service) => (
              <article
                key={service.number}
                className="grid gap-10 border-b border-border py-14 md:grid-cols-[0.7fr_1.3fr] md:gap-20 lg:py-20"
              >
                <div>
                  <p className="font-sans text-xs tracking-[0.25em] text-brand">
                    {service.number}
                  </p>

                  <h2 className="mt-5 max-w-md font-display text-4xl font-medium leading-[0.95] sm:text-5xl">
                    {service.title}
                  </h2>
                </div>

                <div>
                  <p className="max-w-2xl font-sans text-lg leading-8 text-foreground/80">
                    {service.description}
                  </p>

                  <div className="mt-10 grid gap-x-8 gap-y-4 border-t border-border pt-7 sm:grid-cols-2">
                    {service.details.map((detail) => (
                      <div
                        key={detail}
                        className="flex items-center gap-3 font-sans text-sm text-brand-muted"
                      >
                        <span className="h-px w-5 bg-brand" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Méthode */}
      <section className="bg-foreground py-20 text-background sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-5 font-sans text-xs uppercase tracking-[0.3em] text-background/50">
            Notre méthode
          </p>

          <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
            <h2 className="max-w-xl font-display text-4xl font-medium leading-[0.95] sm:text-5xl lg:text-6xl">
              Une vision claire à chaque étape.
            </h2>

            <div className="border-t border-background/20">
              {[
                ["01", "Écouter", "Comprendre le lieu, vos besoins et vos usages."],
                [
                  "02",
                  "Concevoir",
                  "Définir les volumes, matières, couleurs et détails du projet.",
                ],
                [
                  "03",
                  "Réaliser",
                  "Transformer la vision initiale en un ensemble cohérent.",
                ],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="grid gap-4 border-b border-background/20 py-7 sm:grid-cols-[3rem_1fr]"
                >
                  <span className="font-sans text-xs text-background/40">
                    {number}
                  </span>

                  <div>
                    <h3 className="font-display text-3xl">{title}</h3>

                    <p className="mt-2 font-sans text-sm leading-6 text-background/55">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}