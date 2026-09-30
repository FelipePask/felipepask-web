import { localePath, type Locale } from "@/lib/i18n/config";
import { ROUTES } from "@/lib/routes";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { PageHeader } from "@/(site)/common/components/PageHeader";
import { CtaSection } from "@/(site)/common/components/CtaSection";
import { getBrands } from "./data/brands.repository";
import { BrandGrid } from "./components/BrandGrid";
import { BrandMarquee } from "./components/BrandMarquee";

type BrandsProps = { locale: Locale; dict: Dictionary["brands"] };

export async function Brands({ locale, dict }: BrandsProps) {
  const brands = await getBrands();
  return (
    <>
      <PageHeader title={dict.title} subtitle={dict.subtitle} />
      <section aria-label={dict.title} className="container-site">
        <BrandGrid brands={brands} />
      </section>
      <CtaSection title={dict.cta.title} button={dict.cta.button} href={localePath(locale, ROUTES.contact)} />
    </>
  );
}

/** Lo usa la página de inicio. */
export async function BrandStrip({ label }: { label: string }) {
  const brands = await getBrands();
  return <BrandMarquee brands={brands} label={label} />;
}
