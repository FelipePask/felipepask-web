import type { Metadata } from "next";
import { LOCALES, localePath, type Locale } from "./i18n/config";
import { SITE } from "./site";

type PageMetaInput = {
  locale: Locale;
  path: string;
  title?: string;
  description?: string;
  image?: string;
};

/** Canonical + alternates hreflang por página para que Google indexe /es y /en por separado. */
export function buildMetadata({ locale, path, title, description, image }: PageMetaInput): Metadata {
  const languages = Object.fromEntries(LOCALES.map((l) => [l, localePath(l, path)]));
  return {
    // Se omite si es undefined para que aplique el título por defecto del layout (home).
    ...(title ? { title } : {}),
    description,
    alternates: {
      canonical: localePath(locale, path),
      languages: { ...languages, "x-default": localePath("es", path) },
    },
    openGraph: {
      title: title ? `${title} | ${SITE.name}` : SITE.name,
      description,
      url: localePath(locale, path),
      siteName: SITE.name,
      locale: locale === "es" ? "es_CO" : "en_US",
      type: "website",
      ...(image ? { images: [{ url: image, width: 1200, height: 630 }] } : {}),
    },
    twitter: { card: "summary_large_image" },
  };
}
