import Link from "next/link";
import { cn } from "@/lib/cn";

type PortfolioTabsProps = {
  tabs: Array<{ href: string; label: string; current: boolean }>;
};

export function PortfolioTabs({ tabs }: PortfolioTabsProps) {
  return (
    <nav aria-label="Portfolio" className="mt-8 flex justify-center">
      <ul className="inline-flex rounded-full bg-ink-900 p-1 ring-1 ring-ink-700">
        {tabs.map((tab) => (
          <li key={tab.href}>
            <Link
              href={tab.href}
              aria-current={tab.current ? "page" : undefined}
              className={cn(
                "inline-flex min-h-11 items-center rounded-full px-6 text-sm font-medium transition-colors",
                tab.current ? "bg-ink-700 text-fg" : "text-muted hover:text-fg",
              )}
            >
              {tab.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
