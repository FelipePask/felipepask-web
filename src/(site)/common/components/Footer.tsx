import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import { localePath, type Locale } from "@/lib/i18n/config";
import { NAV_ITEMS, ROUTES } from "@/lib/routes";
import { SITE } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n/dictionaries/es";
import { SocialIcon } from "./icons/SocialIcon";

type FooterProps = {
  locale: Locale;
  nav: Dictionary["nav"];
  footer: Dictionary["footer"];
  a11y: Dictionary["a11y"];
};

export function Footer({ locale, nav, footer, a11y }: FooterProps) {
  const year = new Date().getFullYear();
  const links = [...NAV_ITEMS, { key: "contact" as const, href: ROUTES.contact }];

  return (
    <footer className="mt-auto border-t border-ink-800 bg-ink-950">
      <div className="container-site grid gap-12 py-14 sm:py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold tracking-[0.12em] uppercase">{SITE.name}</p>
          <p className="mt-2 text-sm text-muted">{footer.tagline}</p>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm text-fg underline-offset-4 hover:underline"
          >
            <Mail aria-hidden="true" className="size-4" />
            {SITE.email}
          </a>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
            {links.map(({ key, href }) => (
              <li key={key}>
                <Link
                  href={localePath(locale, href)}
                  className="inline-flex min-h-11 items-center text-muted transition-colors hover:text-fg"
                >
                  {nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:justify-self-end">
          <p className="eyebrow mb-4">{footer.follow}</p>
          <ul className="flex flex-wrap gap-3">
            {SITE.socials.map((s) => (
              <li key={s.key}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} ${a11y.externalLink}`}
                  className="inline-flex size-12 items-center justify-center rounded-full text-muted ring-1 ring-ink-700 transition-all duration-300 hover:-translate-y-0.5 hover:text-fg hover:ring-fg"
                >
                  <SocialIcon name={s.key} className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-site flex flex-col-reverse items-center justify-between gap-4 border-t border-ink-800 py-6 text-xs text-muted sm:flex-row">
        <p>
          © {year} {SITE.name}. {footer.rights}
        </p>
        <a href="#top" className="inline-flex min-h-11 items-center gap-2 tracking-[0.2em] uppercase hover:text-fg">
          {footer.backToTop}
          <ArrowUp aria-hidden="true" className="size-4" />
        </a>
      </div>
    </footer>
  );
}
