export type Brand = {
  name: string;
  /** SVG/PNG monocromo en /public/media/brands/. Mientras no exista, el nombre se muestra como texto. */
  logo?: string;
  url?: string;
};
