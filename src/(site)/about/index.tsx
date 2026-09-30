import Image from "next/image";
import { localePath, type Locale } from "@/lib/i18n/config";
import { ROUTES } from "@/lib/routes";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { CtaSection } from "@/(site)/common/components/CtaSection";
import { ABOUT_PORTRAIT } from "./lib/constants";

export { ABOUT_PORTRAIT };

type AboutProps = { locale: Locale; dict: Dictionary };

export function About({ locale, dict }: AboutProps) {
  const { about } = dict;
  return (
    <>
      <section className="container-site pt-28 sm:pt-40">
        <div className="grid gap-10 md:grid-cols-[5fr_7fr] md:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-ink-850 md:sticky md:top-28 md:self-start">
            <Image
              src={ABOUT_PORTRAIT}
              alt={about.portraitAlt}
              fill
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="md:pt-8">
            <p className="eyebrow mb-4">{about.eyebrow}</p>
            <h1 className="animate-fade-up font-display text-4xl leading-tight font-medium tracking-tight text-balance sm:text-6xl">
              {about.title}
            </h1>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-pretty text-muted">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-4 border-y border-ink-800 py-8">
              {about.stats.map((s) => (
                <div key={s.label} className="flex flex-col-reverse">
                  <dt className="mt-1 text-xs tracking-wide text-muted uppercase sm:text-sm">{s.label}</dt>
                  <dd className="font-display text-3xl font-medium sm:text-5xl">{s.value}</dd>
                </div>
              ))}
            </dl>

            <section aria-labelledby="services-title" className="mt-14">
              <h2 id="services-title" className="font-display text-2xl font-medium sm:text-3xl">
                {about.services.title}
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {about.services.items.map((item) => (
                  <li key={item.title} className="rounded-2xl border border-ink-800 bg-ink-900 p-6">
                    <h3 className="font-display text-lg font-medium">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </section>

      <CtaSection
        title={dict.home.cta.title}
        text={dict.home.cta.text}
        button={about.cta}
        href={localePath(locale, ROUTES.contact)}
      />
    </>
  );
}
