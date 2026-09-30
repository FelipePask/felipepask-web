import type { Photo } from "../../types";

// TODO: reemplazar con las fotos reales (conservar el ancho/alto real para evitar saltos de layout).
const SIZES: Array<[number, number]> = [
  [1200, 1600],
  [1600, 1067],
  [1200, 1500],
  [1600, 900],
  [1200, 1800],
  [1600, 1067],
  [1200, 1600],
  [1600, 1200],
  [1200, 1500],
  [1600, 900],
  [1200, 1600],
  [1600, 1067],
];

export const PHOTOS_MOCK: Photo[] = SIZES.map(([width, height], i) => ({
  id: `photo-${i + 1}`,
  src: `https://picsum.photos/seed/photo-${i + 1}/${width}/${height}`,
  alt: { es: `Fotografía de muestra ${i + 1}`, en: `Sample photograph ${i + 1}` },
  width,
  height,
}));
