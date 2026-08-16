export const projects = [
  {
    id: "appartement-rivoli",
    title: "Appartement Rivoli",
    location: "Paris",
    category: "Rénovation résidentielle",
    image: "/images/projects/appartement-rivoli.jpg",
    alt: "Appartement parisien élégant du projet Appartement Rivoli",
    year: "2026",
    surface: "145 m²",
    mission: "Rénovation complète",
    intro:
      "Un appartement parisien où le caractère haussmannien dialogue avec un mobilier contemporain et des matières chaleureuses.",
    description:
      "Le projet Rivoli s’appuie sur les qualités existantes du lieu : volumes généreux, moulures, parquet et lumière naturelle. L’intervention cherche à préserver cette identité tout en introduisant des lignes plus contemporaines, une palette douce et un mobilier aux formes sculpturales.",
  },
  {
    id: "maison-des-pins",
    title: "Maison des Pins",
    location: "Cap Ferret",
    category: "Architecture intérieure",
    image: "/images/projects/maison-des-pins.jpg",
    alt: "Maison lumineuse ouverte sur les pins au Cap Ferret",
    year: "2026",
    surface: "180 m²",
    mission: "Architecture intérieure",
    intro:
      "Une maison ouverte sur la nature, pensée comme un prolongement du paysage du Cap Ferret.",
    description:
      "Bois clair, pierre naturelle, textiles en lin et grandes ouvertures composent une atmosphère simple et lumineuse. Les espaces intérieurs et extérieurs sont pensés dans une continuité totale afin de privilégier la lumière, les vues et une manière de vivre plus libre.",
  },
  {
    id: "villa-alba",
    title: "Villa Alba",
    location: "Aix-en-Provence",
    category: "Rénovation & décoration",
    image: "/images/projects/villa-alba.jpg",
    alt: "Villa méditerranéenne en pierre claire du projet Villa Alba",
    year: "2025",
    surface: "230 m²",
    mission: "Rénovation & décoration",
    intro:
      "Une villa méditerranéenne réinterprétée autour de la pierre, de la lumière et du paysage provençal.",
    description:
      "Villa Alba privilégie une architecture silencieuse et intemporelle. La pierre claire, les enduits minéraux, le bois et les tonalités naturelles créent une continuité entre la maison, les terrasses et le jardin. Chaque intervention cherche à renforcer la sensation de calme du lieu.",
  },
];

export type Project = (typeof projects)[number];