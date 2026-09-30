import type { Localized } from "@/lib/i18n/config";
import type { PROJECT_CATEGORIES } from "../lib/constants";

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

/** Los films completos viven en Vimeo/YouTube (streaming adaptativo), nunca como archivos 4K crudos. */
export type VideoEmbed = {
  provider: "vimeo" | "youtube";
  id: string;
};

export type Project = {
  slug: string;
  title: Localized;
  client: string;
  year: number;
  category: ProjectCategory;
  role: Localized;
  summary: Localized;
  /** Fotograma 16:9 usado como tarjeta de la grilla y póster del detalle (next/image entrega AVIF/WebP). */
  poster: string;
  /** Loop opcional de 4–6 s sin audio (≈480p, <1 MB) que se muestra al pasar el mouse / en pantalla. */
  previewSrc?: string;
  embed: VideoEmbed;
  featured?: boolean;
  stills?: string[];
};

export type Photo = {
  id: string;
  src: string;
  alt: Localized;
  width: number;
  height: number;
};

/** Datos ya traducidos que se pasan a componentes cliente (los diccionarios no llegan al navegador). */
export type ProjectCardData = {
  slug: string;
  href: string;
  title: string;
  client: string;
  poster: string;
  previewSrc?: string;
};
