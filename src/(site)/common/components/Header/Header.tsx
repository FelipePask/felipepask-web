"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { localePath, type Locale } from "@/lib/i18n/config";
import { NAV_ITEMS, ROUTES } from "@/lib/routes";
import type { Dictionary } from "@/lib/i18n/dictionaries/es";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";

export type HeaderProps = {
  locale: Locale;
  siteName: string;
  nav: Dictionary["nav"];
  a11y: Dictionary["a11y"];
};

/** "/es/portfolio/abc" marca activo "/portfolio"; el inicio solo coincide exacto. */
export function useIsActive(locale: Locale) {
  const pathname = usePathname();
  return (href: string) => {
    const full = localePath(locale, href);
    return href === ROUTES.home ? pathname === full : pathname.startsWith(full);
  };
}

export function Header({ locale, siteName, nav, a11y }: HeaderProps) {
  const isActive = useIsActive(locale);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 rounded-full border border-white/10 bg-ink-950/55 pr-2 pl-5 shadow-2xl shadow-black/40 backdrop-blur-xl sm:h-16 sm:pl-7">
        <nav aria-label={a11y.mainNav} className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map(({ key, href }) => {
              const active = isActive(href);
              return (
                <li key={key}>
                  <Link
                    href={localePath(locale, href)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "text-xs font-semibold tracking-[0.2em] uppercase transition-colors",
                      active ? "text-fg" : "text-muted hover:text-fg",
                    )}
                  >
                    {active ? `[ ${nav[key]} ]` : nav[key]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Link
          href={localePath(locale)}
          className="font-display text-base font-semibold tracking-[0.12em] uppercase sm:text-lg lg:absolute lg:left-1/2 lg:-translate-x-1/2"
        >
          {siteName}
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <LanguageSwitcher locale={locale} label={a11y.language} switchLabel={a11y.switchTo} />
          <Link
            href={localePath(locale, ROUTES.contact)}
            aria-current={isActive(ROUTES.contact) ? "page" : undefined}
            className="hidden min-h-11 items-center gap-2 rounded-full bg-ink-950 px-5 text-xs font-semibold tracking-[0.18em] uppercase ring-1 ring-white/10 transition-colors hover:bg-fg hover:text-ink-950 sm:inline-flex"
          >
            <ArrowRight aria-hidden="true" className="size-4" />
            {nav.cta}
          </Link>
          <MobileMenu locale={locale} nav={nav} a11y={a11y} />
        </div>
      </div>
    </header>
  );
}
