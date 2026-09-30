import type { Metadata } from "next";
import { PROJECT_CATEGORIES, Portfolio, type ProjectCategory } from "@/(site)/portfolio";
import { resolveLocale } from "@/lib/i18n/resolve";
import { buildMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/routes";

const isCategory = (v: unknown): v is ProjectCategory =>
  typeof v === "string" && (PROJECT_CATEGORIES as readonly string[]).includes(v);

export async function generateMetadata({ params }: PageProps<"/[lang]/portfolio">): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return buildMetadata({ locale, path: ROUTES.portfolio, ...dict.meta.portfolio });
}

export default async function Page({ params, searchParams }: PageProps<"/[lang]/portfolio">) {
  const { locale, dict } = await resolveLocale(params);
  const { category } = await searchParams;
  return <Portfolio locale={locale} dict={dict.portfolio} category={isCategory(category) ? category : undefined} />;
}
