import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Architecture intérieure",
    description:
      "Nous concevons des espaces cohérents, fonctionnels et sensibles, de la première esquisse jusqu’aux derniers détails.",
  },
  {
    number: "02",
    title: "Rénovation complète",
    description:
      "Nous repensons entièrement les volumes, les circulations, les matériaux et la lumière pour révéler le potentiel d’un lieu.",
  },
  {
    number: "03",
    title: "Décoration & mobilier",
    description:
      "Nous sélectionnons mobilier, luminaires, matières et objets pour créer une atmosphère personnelle et intemporelle.",
  },
];

export default function Services() {
  return (
    <section className="bg-foreground py-20 text-background sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-[0.85fr_1.15fr] md:gap-20 lg:px-8">
        {/* Partie gauche */}
        <div>
          <p className="mb-5 font-sans text-xs uppercase tracking-[0.3em] text-background/55">
            Nos services
          </p>

          <h2 className="max-w-lg font-display text-4xl font-medium leading-[0.95] sm:text-5xl lg:text-6xl">
            Nous façonnons des intérieurs qui vous ressemblent.
          </h2>

          <p className="mt-7 max-w-md font-sans text-sm leading-6 text-background/60 sm:text-base sm:leading-7">
            De la réflexion initiale jusqu’à la mise en scène finale, Atelier
            Noma accompagne chaque projet avec une approche globale et
            personnalisée.
          </p>

          <Link
            href="/services"
            className="mt-9 inline-block font-sans text-sm text-background underline-offset-4 transition-opacity hover:opacity-60 hover:underline"
          >
            Découvrir notre savoir-faire →
          </Link>
        </div>

        {/* Partie droite */}
        <div className="border-t border-background/20">
          {services.map((service) => (
            <article
              key={service.number}
              className="grid gap-5 border-b border-background/20 py-8 sm:grid-cols-[3rem_1fr] sm:gap-6 lg:py-10"
            >
              <span className="font-sans text-xs tracking-[0.2em] text-background/40">
                {service.number}
              </span>

              <div>
                <h3 className="font-display text-3xl font-medium sm:text-4xl">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-xl font-sans text-sm leading-6 text-background/55 sm:text-base sm:leading-7">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}