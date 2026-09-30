import type { Brand } from "../types";
import { BrandLogo } from "./BrandLogo";

export function BrandGrid({ brands }: { brands: Brand[] }) {
  return (
    <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-ink-800 ring-1 ring-ink-800 sm:grid-cols-3 lg:grid-cols-4">
      {brands.map((brand) => (
        <li key={brand.name} className="group flex aspect-[3/2] items-center justify-center bg-ink-950 p-6">
          <BrandLogo brand={brand} />
        </li>
      ))}
    </ul>
  );
}
