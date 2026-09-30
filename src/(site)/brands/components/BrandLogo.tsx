import Image from "next/image";
import type { Brand } from "../types";

export function BrandLogo({ brand }: { brand: Brand }) {
  if (brand.logo) {
    return (
      <Image
        src={brand.logo}
        alt={brand.name}
        width={160}
        height={64}
        className="h-10 w-auto opacity-70 transition-opacity duration-300 group-hover:opacity-100 sm:h-12"
      />
    );
  }
  return (
    <span className="font-display text-lg font-semibold tracking-[0.18em] whitespace-nowrap text-muted uppercase transition-colors duration-300 group-hover:text-fg sm:text-xl">
      {brand.name}
    </span>
  );
}
