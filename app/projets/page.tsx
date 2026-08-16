import type { Metadata } from "next";

import ProjectCard from "@/components/projects/project-card";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Découvrez une sélection de projets d'architecture intérieure, de rénovation et de décoration réalisés par Atelier Noma.",
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
          <p className="mb-6 font-sans text-xs uppercase tracking-[0.3em] text-brand">
            Nos réalisations
          </p>

          <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-end">
            <h1 className="max-w-3xl font-display text-5xl font-medium leading-[0.92] sm:text-6xl lg:text-7xl">
              Des lieux pensés dans le détail.
            </h1>

            <p className="max-w-lg font-sans text-sm leading-7 text-brand-muted sm:text-base">
              Résidentiel, rénovation ou décoration, chaque projet est conçu
              comme une réponse unique à un lieu, à ses usages et à ceux qui
              l'habitent.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-x-6 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}