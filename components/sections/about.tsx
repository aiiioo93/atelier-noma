import Link from "next/link";

export default function About() {
  return (
    <section className="border-t border-border bg-background py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mb-10 font-sans text-xs uppercase tracking-[0.3em] text-brand sm:mb-14">
          Notre approche
        </p>

        <div className="grid gap-14 md:grid-cols-[1.1fr_0.9fr] md:gap-20 lg:gap-28">
          {/* Partie gauche */}
          <div>
            <h2 className="max-w-2xl font-display text-5xl font-medium leading-[0.92] sm:text-6xl lg:text-7xl">
              Créer moins.
              <br />
              Concevoir mieux.
            </h2>
          </div>

          {/* Partie droite */}
          <div className="md:pt-2">
            <p className="font-sans text-lg leading-8 text-foreground/80 sm:text-xl sm:leading-9">
              Atelier Noma imagine des lieux qui traversent le temps plutôt que
              les tendances.
            </p>

            <p className="mt-6 font-sans text-sm leading-7 text-brand-muted sm:text-base">
              Chaque projet naît d’une écoute attentive du lieu, de ses usages
              et de ceux qui l’habitent. Nous privilégions les matières
              naturelles, les lignes justes et les choix durables afin de créer
              des intérieurs à la fois sensibles, fonctionnels et
              profondément personnels.
            </p>

            <div className="mt-9 flex items-center gap-8 border-t border-border pt-7">
              <div>
                <p className="font-display text-3xl">Sur mesure</p>
                <p className="mt-1 font-sans text-xs uppercase tracking-[0.2em] text-foreground/45">
                  Chaque projet est unique
                </p>
              </div>
            </div>

            <Link
              href="/a-propos"
              className="mt-9 inline-block font-sans text-sm underline-offset-4 transition-colors hover:text-brand hover:underline"
            >
              Découvrir Atelier Noma →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}