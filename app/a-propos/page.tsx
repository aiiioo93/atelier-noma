import type { Metadata } from "next";

import ContactCta from "@/components/sections/contact-cta";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez la philosophie d’Atelier Noma et notre approche de l’architecture intérieure, de la rénovation et du design.",
};

const principles = [
  {
    number: "01",
    title: "Écouter avant de dessiner",
    description:
      "Chaque projet commence par la compréhension du lieu, de ses contraintes et surtout de la manière dont il sera vécu.",
  },
  {
    number: "02",
    title: "Privilégier l’essentiel",
    description:
      "Nous recherchons des lignes justes, des matériaux durables et des choix capables de traverser le temps.",
  },
  {
    number: "03",
    title: "Concevoir sur mesure",
    description:
      "Il n’existe pas de réponse universelle. Chaque intérieur est développé autour de son architecture et de ceux qui l’habitent.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Introduction */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
          <p className="mb-6 font-sans text-xs uppercase tracking-[0.3em] text-brand">
            Atelier Noma
          </p>

          <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-end">
            <h1 className="max-w-3xl font-display text-5xl font-medium leading-[0.92] sm:text-6xl lg:text-7xl">
              Créer des lieux qui trouvent naturellement leur place.
            </h1>

            <p className="max-w-lg font-sans text-sm leading-7 text-brand-muted sm:text-base">
              Atelier Noma est un studio d’architecture intérieure imaginant
              des espaces sobres, chaleureux et durables, où l’esthétique reste
              toujours liée à l’usage.
            </p>
          </div>
        </div>
      </section>

      {/* Manifeste */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-[0.9fr_1.1fr] md:gap-24 lg:px-8">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-brand">
              Notre vision
            </p>
          </div>

          <div>
            <p className="max-w-4xl font-display text-4xl font-medium leading-[1.05] sm:text-5xl lg:text-6xl">
              Nous croyons qu’un intérieur réussi n’a pas besoin d’en faire
              trop.
            </p>

            <div className="mt-10 grid gap-7 sm:grid-cols-2 sm:gap-10">
              <p className="font-sans text-sm leading-7 text-brand-muted sm:text-base">
                Il doit accompagner le quotidien, laisser circuler la lumière
                et donner à chaque élément une raison d’être.
              </p>

              <p className="font-sans text-sm leading-7 text-brand-muted sm:text-base">
                Notre travail consiste à trouver cet équilibre entre
                architecture, matières, proportions, mobilier et personnalité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principes */}
      <section className="bg-foreground py-20 text-background sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 md:grid-cols-[0.75fr_1.25fr] md:gap-20">
            <div>
              <p className="mb-5 font-sans text-xs uppercase tracking-[0.3em] text-background/50">
                Nos principes
              </p>

              <h2 className="max-w-lg font-display text-4xl font-medium leading-[0.95] sm:text-5xl lg:text-6xl">
                Une approche volontairement simple.
              </h2>
            </div>

            <div className="border-t border-background/20">
              {principles.map((principle) => (
                <article
                  key={principle.number}
                  className="grid gap-5 border-b border-background/20 py-8 sm:grid-cols-[3rem_1fr] sm:gap-7 lg:py-10"
                >
                  <span className="font-sans text-xs tracking-[0.2em] text-background/40">
                    {principle.number}
                  </span>

                  <div>
                    <h3 className="font-display text-3xl font-medium sm:text-4xl">
                      {principle.title}
                    </h3>

                    <p className="mt-4 max-w-xl font-sans text-sm leading-7 text-background/55 sm:text-base">
                      {principle.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Atelier */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-10 font-sans text-xs uppercase tracking-[0.3em] text-brand sm:mb-14">
            Notre manière de travailler
          </p>

          <div className="grid gap-14 md:grid-cols-[1.1fr_0.9fr] md:gap-24">
            <h2 className="max-w-2xl font-display text-5xl font-medium leading-[0.92] sm:text-6xl lg:text-7xl">
              Du premier échange au dernier détail.
            </h2>

            <div>
              <p className="font-sans text-lg leading-8 text-foreground/80 sm:text-xl sm:leading-9">
                Nous suivons chaque projet comme un ensemble cohérent plutôt
                qu’une succession de décisions indépendantes.
              </p>

              <p className="mt-6 font-sans text-sm leading-7 text-brand-muted sm:text-base">
                Volumes, lumière, matériaux, couleurs et mobilier sont pensés
                ensemble dès les premières étapes. Cette vision globale permet
                de conserver un fil conducteur du concept initial jusqu’à
                l’atmosphère finale.
              </p>

              <div className="mt-9 border-t border-border pt-7">
                <p className="font-display text-3xl">Paris & ailleurs</p>

                <p className="mt-2 font-sans text-xs uppercase tracking-[0.2em] text-foreground/45">
                  Projets résidentiels et professionnels
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}