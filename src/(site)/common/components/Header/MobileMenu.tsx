"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { localePath } from "@/lib/i18n/config";
import { NAV_ITEMS, ROUTES } from "@/lib/routes";
import { SITE } from "@/lib/site";
import { SocialIcon } from "../icons/SocialIcon";
import type { HeaderProps } from "./Header";

type MobileMenuProps = Pick<HeaderProps, "locale" | "nav" | "a11y">;

/**
 * Menú a pantalla completa sobre <dialog> nativo: trampa de foco, cerrar con Esc y
 * fondo inerte vienen gratis (bueno para a11y y sin librerías JS extra).
 */
export function MobileMenu({ locale, nav, a11y }: MobileMenuProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

  const open = () => {
    dialogRef.current?.showModal();
    document.documentElement.style.overflow = "hidden";
  };
  const close = () => dialogRef.current?.close();

  // Cierra el menú al navegar.
  useEffect(() => {
    close();
  }, [pathname]);

  const items = [...NAV_ITEMS, { key: "contact" as const, href: ROUTES.contact }];

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-label={a11y.openMenu}
        aria-haspopup="dialog"
        className="inline-flex size-11 items-center justify-center rounded-full text-fg transition-colors hover:bg-white/10 lg:hidden"
      >
        <Menu aria-hidden="true" className="size-5" />
      </button>

      <dialog
        ref={dialogRef}
        aria-label={a11y.mainNav}
        onClose={() => (document.documentElement.style.overflow = "")}
        className="m-0 h-dvh max-h-none w-full max-w-none bg-ink-950/95 p-0 text-fg backdrop:bg-transparent"
      >
        <div className="flex h-full flex-col px-6 pt-5 pb-10">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={close}
              aria-label={a11y.closeMenu}
              className="inline-flex size-11 items-center justify-center rounded-full ring-1 ring-white/15 hover:bg-white/10"
            >
              <X aria-hidden="true" className="size-5" />
            </button>
          </div>

          <nav aria-label={a11y.mainNav} className="flex flex-1 items-center">
            <ul className="flex flex-col gap-6">
              {items.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={localePath(locale, href)}
                    onClick={close}
                    className="font-display text-4xl font-medium tracking-tight transition-colors hover:text-accent"
                  >
                    {nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex gap-2">
            {SITE.socials.map((s) => (
              <li key={s.key}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} ${a11y.externalLink}`}
                  className="inline-flex size-11 items-center justify-center rounded-full text-muted ring-1 ring-white/10 hover:text-fg"
                >
                  <SocialIcon name={s.key} className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </dialog>
    </>
  );
}
