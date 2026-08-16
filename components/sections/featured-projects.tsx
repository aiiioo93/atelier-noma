import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Appartement Rivoli",
    location: "Paris",
    category: "Rénovation résidentielle",
    image: "/images/projects/appartement-rivoli.jpg",
    alt: "Appartement parisien élégant du projet Appartement Rivoli",
  },
  {
    title: "Maison des Pins",
    location: "Cap Ferret",
    category: "Architecture intérieure",
    image: "/images/projects/maison-des-pins.jpg",
    alt: "Maison lumineuse ouverte sur les pins au Cap Ferret",
  },
  {
    title: "Villa Alba",
    location: "Aix-en-Provence",
    category: "Rénovation & décoration",
    image: "/images/projects/villa-alba.jpg",
    alt: "Villa méditerranéenne en pierre claire du projet Villa Alba",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="border-t border-border py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 sm:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-brand">
              Nos réalisations
            </p>

            <h2 className="max-w-xl font-display text-4xl font-medium leading-none sm:text-5xl lg:text-6xl">
              Projets sélectionnés
            </h2>
          </div>

          <Link
            href="/projets"
            className="w-fit font-sans text-sm underline-offset-4 transition-colors hover:text-brand hover:underline"
          >
            Voir tous les projets →
          </Link>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {projects.map((project, index) => (
            <article key={project.title} className="group">
              <Link href="/projets" className="block">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-5 border border-white/40 transition-all duration-500 group-hover:inset-4" />

                  <span className="absolute right-6 top-6 font-sans text-xs tracking-[0.2em] text-white/80">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-medium sm:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-2 font-sans text-sm text-brand-muted">
                      {project.location}
                    </p>
                  </div>

                  <span className="pt-2 font-sans text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

                <p className="mt-3 font-sans text-xs uppercase tracking-[0.2em] text-foreground/45">
                  {project.category}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}