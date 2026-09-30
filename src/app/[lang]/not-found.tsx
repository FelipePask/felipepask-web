import { lang } from "next/root-params";
import { ButtonLink } from "@/(site)/common/components/ButtonLink";
import { DEFAULT_LOCALE, hasLocale, localePath } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export default async function NotFound() {
  const current = await lang();
  const locale = hasLocale(current) ? current : DEFAULT_LOCALE;
  const { notFound } = await getDictionary(locale);

  return (
    <section className="container-site flex min-h-[70svh] flex-col items-center justify-center pt-24 text-center">
      <p className="eyebrow mb-4">404</p>
      <h1 className="font-display text-4xl font-medium tracking-tight sm:text-6xl">{notFound.title}</h1>
      <p className="mt-4 text-muted">{notFound.text}</p>
      <ButtonLink href={localePath(locale)} className="mt-8">
        {notFound.back}
      </ButtonLink>
    </section>
  );
}
