import Link from "next/link";

import ProjectCard from "@/components/projects/project-card";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 3);

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
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}