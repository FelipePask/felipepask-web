import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
};

export function ButtonLink({ href, children, variant = "solid", className }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] transition-colors duration-300",
        variant === "solid"
          ? "bg-fg text-ink-950 hover:bg-accent"
          : "border border-ink-600 text-fg hover:border-fg",
        className,
      )}
    >
      <ArrowRight
        aria-hidden="true"
        className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
      />
      {children}
    </Link>
  );
}
