import About from "@/components/sections/about";
import ContactCta from "@/components/sections/contact-cta";
import FeaturedProjects from "@/components/sections/featured-projects";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <Services />
      <About />
      <ContactCta />
    </main>
  );
}