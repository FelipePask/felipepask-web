export const LOCALES = ["es", "en"] as const;
export type Locale = (typeof LOCALES)[number];

/** Un valor traducido para cada idioma, ej. { es: "Hola", en: "Hello" }. */
export type Localized<T = string> = Record<Locale, T>;

export const DEFAULT_LOCALE: Locale = "es";
export const LOCALE_COOKIE = "NEXT_LOCALE";

export const hasLocale = (value: string): value is Locale =>
  (LOCALES as readonly string[]).includes(value);

/** Construye una ruta con prefijo de idioma: localePath("en", "/portfolio") -> "/en/portfolio". */
export const localePath = (locale: Locale, path = "/") =>
  path === "/" ? `/${locale}` : `/${locale}${path}`;

/** Cambia el segmento de idioma de una ruta: "/es/about" -> "/en/about". */
export const switchLocalePath = (pathname: string, target: Locale) => {
  const segments = pathname.split("/");
  if (hasLocale(segments[1] ?? "")) segments[1] = target;
  else segments.splice(1, 0, target);
  return segments.join("/") || `/${target}`;
};
