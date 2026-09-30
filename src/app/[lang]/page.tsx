import type { Metadata } from "next";
import { Home } from "@/(site)/home";
import { resolveLocale } from "@/lib/i18n/resolve";
import { buildMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/routes";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return buildMetadata({ locale, path: ROUTES.home, description: dict.meta.siteDescription });
}

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { locale, dict } = await resolveLocale(params);
  return <Home locale={locale} dict={dict} />;
}
