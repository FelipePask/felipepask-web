import type { MetadataRoute } from "next";
import { getProjects } from "@/(site)/portfolio";
import { LOCALES, localePath } from "@/lib/i18n/config";
import { ROUTES } from "@/lib/routes";
import { SITE } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects();
  const paths = [
    ROUTES.home,
    ROUTES.about,
    ROUTES.portfolio,
    ROUTES.photos,
    ROUTES.brands,
    ROUTES.contact,
    ...projects.map((p) => ROUTES.project(p.slug)),
  ];

  return paths.flatMap((path) =>
    LOCALES.map((locale) => ({
      url: `${SITE.url}${localePath(locale, path)}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(LOCALES.map((l) => [l, `${SITE.url}${localePath(l, path)}`])),
      },
    })),
  );
}
