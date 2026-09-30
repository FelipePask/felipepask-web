import { DUMMY_VIMEO_ID } from "../../lib/constants";
import type { Project } from "../../types";

// TODO: reemplazar con los proyectos reales. Los pósters pueden ir en /public/media/posters/<slug>.jpg
const poster = (seed: string) => `https://picsum.photos/seed/${seed}/1600/900`;
const embed = { provider: "vimeo", id: DUMMY_VIMEO_ID } as const;

export const PROJECTS_MOCK: Project[] = [
  {
    slug: "midnight-hour",
    title: { es: "La hora de medianoche", en: "Midnight Hour" },
    client: "Nike",
    year: 2025,
    category: "commercial",
    role: { es: "Director y DP", en: "Director & DP" },
    summary: {
      es: "Una campaña nocturna sobre corredores que entrenan cuando la ciudad duerme.",
      en: "A night-time campaign about runners who train while the city sleeps.",
    },
    poster: poster("midnight-hour"),
    embed,
    featured: true,
    stills: [poster("midnight-1"), poster("midnight-2"), poster("midnight-3")],
  },
  {
    slug: "life-at-minus-50",
    title: { es: "La vida a -50°", en: "Life at -50°" },
    client: "Personal",
    year: 2025,
    category: "documentary",
    role: { es: "Director", en: "Director" },
    summary: {
      es: "Un documental corto sobre una comunidad nómada en el frío extremo.",
      en: "A short documentary about a nomadic community in extreme cold.",
    },
    poster: poster("minus-50"),
    embed,
    featured: true,
  },
  {
    slug: "andes-by-air",
    title: { es: "Los Andes desde el aire", en: "Andes by Air" },
    client: "Visit Colombia",
    year: 2024,
    category: "travel",
    role: { es: "Piloto dron y DP", en: "Drone pilot & DP" },
    summary: {
      es: "Pieza de turismo filmada casi por completo con dron FPV.",
      en: "Tourism piece shot almost entirely on FPV drone.",
    },
    poster: poster("andes-air"),
    embed,
    featured: true,
  },
  {
    slug: "neon-bloom",
    title: { es: "Neon Bloom", en: "Neon Bloom" },
    client: "Sony Music",
    year: 2024,
    category: "music-video",
    role: { es: "Director de fotografía", en: "Cinematographer" },
    summary: {
      es: "Videoclip con iluminación práctica y lentes anamórficos.",
      en: "Music video lit with practicals and shot on anamorphic lenses.",
    },
    poster: poster("neon-bloom"),
    embed,
    featured: true,
  },
  {
    slug: "coffee-origins",
    title: { es: "Orígenes del café", en: "Coffee Origins" },
    client: "Juan Valdez",
    year: 2024,
    category: "commercial",
    role: { es: "Director y editor", en: "Director & editor" },
    summary: {
      es: "Del cultivo a la taza: la historia detrás de cada grano.",
      en: "From farm to cup: the story behind every bean.",
    },
    poster: poster("coffee-origins"),
    embed,
  },
  {
    slug: "salt-and-sea",
    title: { es: "Sal y mar", en: "Salt & Sea" },
    client: "Personal",
    year: 2023,
    category: "documentary",
    role: { es: "Director", en: "Director" },
    summary: {
      es: "Pescadores artesanales del Pacífico y su relación con el océano.",
      en: "Artisanal fishermen of the Pacific and their bond with the ocean.",
    },
    poster: poster("salt-sea"),
    embed,
  },
  {
    slug: "patagonia-roadtrip",
    title: { es: "Patagonia en ruta", en: "Patagonia Roadtrip" },
    client: "GoPro",
    year: 2023,
    category: "travel",
    role: { es: "DP", en: "DP" },
    summary: {
      es: "Un viaje de 3.000 km contado en cuatro minutos.",
      en: "A 3,000 km journey told in four minutes.",
    },
    poster: poster("patagonia"),
    embed,
  },
  {
    slug: "echoes",
    title: { es: "Ecos", en: "Echoes" },
    client: "Warner Music",
    year: 2022,
    category: "music-video",
    role: { es: "Director", en: "Director" },
    summary: {
      es: "Videoclip en plano secuencia filmado en una sola noche.",
      en: "One-take music video shot in a single night.",
    },
    poster: poster("echoes"),
    embed,
  },
];
