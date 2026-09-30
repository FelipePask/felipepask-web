import type { Metadata } from "next";
import { Contact } from "@/(site)/contact";
import { resolveLocale } from "@/lib/i18n/resolve";
import { buildMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/routes";

export async function generateMetadata({ params }: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return buildMetadata({ locale, path: ROUTES.contact, ...dict.meta.contact });
}

export default async function Page({ params }: PageProps<"/[lang]/contact">) {
  const { dict } = await resolveLocale(params);
  return <Contact dict={dict} />;
}
