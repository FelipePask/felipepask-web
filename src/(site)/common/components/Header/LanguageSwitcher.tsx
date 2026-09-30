"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALES, switchLocalePath, type Locale } from "@/lib/i18n/config";
import { rememberLocale } from "@/lib/i18n/cookie";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
  switchLabel: string;
};

export function LanguageSwitcher({ locale, label, switchLabel }: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <div role="group" aria-label={label} className="flex items-center text-xs font-semibold tracking-[0.15em]">
      {LOCALES.map((l, i) => {
        const current = l === locale;
        return (
          <span key={l} className="flex items-center">
            {i > 0 && (
              <span aria-hidden="true" className="px-1 text-ink-600">
                /
              </span>
            )}
            {current ? (
              <span aria-current="true" className="inline-flex min-h-11 min-w-8 items-center justify-center text-fg">
                {l.toUpperCase()}
              </span>
            ) : (
              <Link
                href={switchLocalePath(pathname, l)}
                hrefLang={l}
                lang={l}
                title={switchLabel}
                onClick={() => rememberLocale(l)}
                className="inline-flex min-h-11 min-w-8 items-center justify-center text-muted transition-colors hover:text-fg"
              >
                {l.toUpperCase()}
                <span className="sr-only"> — {switchLabel}</span>
              </Link>
            )}
          </span>
        );
      })}
    </div>
  );
}
