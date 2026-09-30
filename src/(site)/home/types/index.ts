export type VideoSource = { src: string; type: "video/mp4" | "video/webm" };

export type HeroMedia = {
  /** Elemento LCP: se muestra al instante y se queda visible si el video no puede/debe reproducirse. */
  poster: string;
  /** null hasta que se exporte el loop real (ver docs/VIDEO.md). */
  video: {
    /** ≈720p, 1.5–2.5 MB — celulares y tablets. */
    mobile: VideoSource[];
    /** ≈1080p, 4–6 MB — escritorio. Nunca subir aquí el máster 4K. */
    desktop: VideoSource[];
  } | null;
};
