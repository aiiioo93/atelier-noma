export const services = [
  {
    number: "01",
    title: "Architecture intérieure",
    shortDescription:
      "Nous concevons des espaces cohérents, fonctionnels et sensibles, de la première esquisse jusqu’aux derniers détails.",
    description:
      "Nous repensons les volumes, les circulations, la lumière et les usages pour créer des espaces équilibrés et durables. Chaque décision est pensée en lien avec l’architecture existante et votre manière d’habiter le lieu.",
    details: [
      "Étude des volumes et circulations",
      "Plans d’aménagement",
      "Choix des matériaux",
      "Conception sur mesure",
    ],
  },
  {
    number: "02",
    title: "Rénovation complète",
    shortDescription:
      "Nous transformons entièrement un lieu pour révéler son potentiel et lui donner une nouvelle cohérence.",
    description:
      "De la restructuration des espaces jusqu’au suivi esthétique du projet, nous construisons une vision globale permettant d’harmoniser architecture, matériaux et usages.",
    details: [
      "Restructuration des espaces",
      "Définition des matériaux",
      "Conception des détails",
      "Suivi esthétique du projet",
    ],
  },
  {
    number: "03",
    title: "Décoration & mobilier",
    shortDescription:
      "Nous sélectionnons mobilier, luminaires, matières et objets pour créer une atmosphère personnelle et intemporelle.",
    description:
      "La décoration vient prolonger l’architecture intérieure. Nous recherchons un équilibre entre mobilier contemporain, pièces singulières, matières naturelles et éléments conçus spécialement pour le lieu.",
    details: [
      "Sélection de mobilier",
      "Luminaires et objets",
      "Textiles et matières",
      "Mobilier sur mesure",
    ],
  },
];

export type Service = (typeof services)[number];