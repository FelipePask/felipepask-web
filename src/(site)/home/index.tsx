import { localePath, type Locale } from "@/lib/i18n/config";
import { ROUTES } from "@/lib/routes";
import { SITE } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { ButtonLink } from "@/(site)/common/components/ButtonLink";
import { CtaSection } from "@/(site)/common/components/CtaSection";
import { FeaturedProjects } from "@/(site)/portfolio";
import { BrandStrip } from "@/(site)/brands";
import { ABOUT_PORTRAIT } from "@/(site)/about";
import { HERO_MEDIA } from "./data/hero";
import { Hero } from "./components/Hero";
import { AboutTeaser } from "./components/AboutTeaser";

type HomeProps = { locale: Locale; dict: Dictionary };

export function Home({ locale, dict }: HomeProps) {
  const { home } = dict;
  return (
    <>
      <Hero siteName={SITE.name} media={HERO_MEDIA} home={home} a11y={dict.a11y} />

      <section id="featured" aria-labelledby="featured-title" className="container-site scroll-mt-24 pt-20 sm:pt-28">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-3">{home.featured.eyebrow}</p>
            <h2 id="featured-title" className="font-display text-3xl font-medium tracking-tight sm:text-5xl">
              {home.featured.title}
            </h2>
          </div>
          <ButtonLink href={localePath(locale, ROUTES.portfolio)} variant="outline">
            {home.featured.viewAll}
          </ButtonLink>
        </div>
        <FeaturedProjects locale={locale} />
      </section>

      <AboutTeaser
        dict={home.about}
        image={ABOUT_PORTRAIT}
        imageAlt={dict.about.portraitAlt}
        href={localePath(locale, ROUTES.about)}
      />

      <section aria-labelledby="brands-strip-title" className="border-y border-ink-800 py-14">
        <h2 id="brands-strip-title" className="eyebrow mb-10 text-center">
          {home.brands.eyebrow}
        </h2>
        <BrandStrip label={home.brands.eyebrow} />
      </section>

      <CtaSection
        title={home.cta.title}
        text={home.cta.text}
        button={home.cta.button}
        href={localePath(locale, ROUTES.contact)}
      />
    </>
  );
}
