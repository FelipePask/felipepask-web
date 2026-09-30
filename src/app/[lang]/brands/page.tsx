import type { Metadata } from "next";
import { Brands } from "@/(site)/brands";
import { resolveLocale } from "@/lib/i18n/resolve";
import { buildMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/routes";

export async function generateMetadata({ params }: PageProps<"/[lang]/brands">): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return buildMetadata({ locale, path: ROUTES.brands, ...dict.meta.brands });
}

export default async function Page({ params }: PageProps<"/[lang]/brands">) {
  const { locale, dict } = await resolveLocale(params);
  return <Brands locale={locale} dict={dict.brands} />;
}
