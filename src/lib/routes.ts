/**
 * Rutas públicas (siempre en inglés, con prefijo de idioma: /es/portfolio, /en/portfolio).
 * Mantener sincronizada con src/app/[lang]/** para que analytics, sitemap y navegación coincidan.
 */
export const ROUTES = {
  home: "/",
  about: "/about",
  portfolio: "/portfolio",
  photos: "/portfolio/photos",
  project: (slug: string) => `/portfolio/${slug}`,
  brands: "/brands",
  contact: "/contact",
} as const;

export const NAV_ITEMS = [
  { key: "home", href: ROUTES.home },
  { key: "about", href: ROUTES.about },
  { key: "portfolio", href: ROUTES.portfolio },
  { key: "brands", href: ROUTES.brands },
] as const;

export type NavKey = (typeof NAV_ITEMS)[number]["key"] | "contact";
