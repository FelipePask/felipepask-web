import type { Metadata } from "next";
import { About } from "@/(site)/about";
import { resolveLocale } from "@/lib/i18n/resolve";
import { buildMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/routes";

export async function generateMetadata({ params }: PageProps<"/[lang]/about">): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return buildMetadata({ locale, path: ROUTES.about, ...dict.meta.about });
}

export default async function Page({ params }: PageProps<"/[lang]/about">) {
  const { locale, dict } = await resolveLocale(params);
  return <About locale={locale} dict={dict} />;
}
