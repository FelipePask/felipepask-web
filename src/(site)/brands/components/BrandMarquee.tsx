import type { Brand } from "../types";
import { BrandLogo } from "./BrandLogo";

/** Franja infinita solo con CSS. La fila duplicada se oculta a los lectores de pantalla. */
export function BrandMarquee({ brands, label }: { brands: Brand[]; label: string }) {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-14 pr-14 sm:gap-20 sm:pr-20">
      {brands.map((brand) => (
        <li key={brand.name} className="group">
          <BrandLogo brand={brand} />
        </li>
      ))}
    </ul>
  );

  return (
    <div
      role="region"
      aria-label={label}
      className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]"
    >
      <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
