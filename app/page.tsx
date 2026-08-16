import FeaturedProjects from "@/components/sections/featured-projects";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <Services />
    </main>
  );
}