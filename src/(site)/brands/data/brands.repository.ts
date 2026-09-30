import type { Brand } from "../types";

// TODO: reemplazar con las marcas reales (logos en SVG blanco monocromo en /public/media/brands/).
const BRANDS_MOCK: Brand[] = [
  { name: "Nike" },
  { name: "Sony Music" },
  { name: "GoPro" },
  { name: "Juan Valdez" },
  { name: "Warner Music" },
  { name: "Visit Colombia" },
  { name: "Red Bull" },
  { name: "Adidas" },
  { name: "Avianca" },
  { name: "Netflix" },
  { name: "Spotify" },
  { name: "Canon" },
];

export const getBrands = async (): Promise<Brand[]> => BRANDS_MOCK;
