// Separado de schema.ts para que los componentes cliente lo importen sin meter zod en el bundle.
export const PROJECT_TYPES = ["commercial", "documentary", "music-video", "event", "photo", "other"] as const;
