import Link from "next/link";
import { cn } from "@/lib/cn";
import type { ProjectCategory } from "../types";

type CategoryFilterProps = {
  basePath: string;
  active?: ProjectCategory;
  label: string;
  options: Array<{ value?: ProjectCategory; label: string }>;
};

/** Los filtros son links simples (?category=…) para que cada filtro sea una URL medible y compartible. */
export function CategoryFilter({ basePath, active, label, options }: CategoryFilterProps) {
  return (
    <nav aria-label={label} className="-mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
      <ul className="mx-auto flex w-max gap-2">
        {options.map(({ value, label: text }) => {
          const current = value === active;
          return (
            <li key={value ?? "all"}>
              <Link
                href={value ? `${basePath}?category=${value}` : basePath}
                scroll={false}
                aria-current={current ? "page" : undefined}
                className={cn(
                  "inline-flex min-h-11 items-center rounded-full px-5 text-xs font-semibold tracking-[0.15em] uppercase ring-1 transition-colors",
                  current
                    ? "bg-fg text-ink-950 ring-fg"
                    : "text-muted ring-ink-700 hover:text-fg hover:ring-ink-600",
                )}
              >
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
