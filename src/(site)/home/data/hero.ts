import type { HeroMedia } from "../types";

// TODO: cuando el loop real esté listo, poner los archivos en /public/media/hero/ y llenar `video`:
// video: {
//   mobile: [
//     { src: "/media/hero/hero-720.webm", type: "video/webm" },
//     { src: "/media/hero/hero-720.mp4", type: "video/mp4" },
//   ],
//   desktop: [
//     { src: "/media/hero/hero-1080.webm", type: "video/webm" },
//     { src: "/media/hero/hero-1080.mp4", type: "video/mp4" },
//   ],
// },
export const HERO_MEDIA: HeroMedia = {
  poster: "https://picsum.photos/seed/hero-dusk/1920/1080",
  video: null,
};
