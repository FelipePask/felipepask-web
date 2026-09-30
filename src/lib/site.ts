/**
 * Configuración global del sitio. Editar aquí: nombre, contacto y redes sociales.
 * TODO: reemplazar los placeholders con los datos reales.
 */
export const SITE = {
  name: "Felipe Pask",
  shortName: "Felipe Pask",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "hola@tudominio.com",
  whatsapp: "+570000000000",
  location: "Colombia",
  socials: [
    { key: "instagram", label: "Instagram", href: "https://instagram.com/tu_usuario" },
    { key: "youtube", label: "YouTube", href: "https://youtube.com/@tu_canal" },
    { key: "vimeo", label: "Vimeo", href: "https://vimeo.com/tu_usuario" },
    { key: "tiktok", label: "TikTok", href: "https://tiktok.com/@tu_usuario" },
  ],
} as const;

export type SocialKey = (typeof SITE.socials)[number]["key"];
