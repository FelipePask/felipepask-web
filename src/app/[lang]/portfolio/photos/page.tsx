import type { Metadata } from "next";
import { Photos } from "@/(site)/portfolio";
import { resolveLocale } from "@/lib/i18n/resolve";
import { buildMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/routes";

export async function generateMetadata({ params }: PageProps<"/[lang]/portfolio/photos">): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return buildMetadata({ locale, path: ROUTES.photos, ...dict.meta.photos });
}

export default async function Page({ params }: PageProps<"/[lang]/portfolio/photos">) {
  const { locale, dict } = await resolveLocale(params);
  return <Photos locale={locale} dict={dict.portfolio} />;
}
