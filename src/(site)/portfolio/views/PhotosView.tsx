import { localePath, type Locale } from "@/lib/i18n/config";
import { ROUTES } from "@/lib/routes";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { PageHeader } from "@/(site)/common/components/PageHeader";
import { getPhotos } from "../data/portfolio.repository";
import { PhotoGallery } from "../components/PhotoGallery/PhotoGallery";
import { PortfolioTabs } from "../components/PortfolioTabs";

type PhotosViewProps = {
  locale: Locale;
  dict: Dictionary["portfolio"];
};

export async function PhotosView({ locale, dict }: PhotosViewProps) {
  const photos = await getPhotos();

  return (
    <>
      <PageHeader title={dict.photos.title} subtitle={dict.photos.subtitle}>
        <PortfolioTabs
          tabs={[
            { href: localePath(locale, ROUTES.portfolio), label: dict.tabs.films, current: false },
            { href: localePath(locale, ROUTES.photos), label: dict.tabs.photos, current: true },
          ]}
        />
      </PageHeader>

      <section aria-label={dict.photos.title} className="container-site pb-20">
        <PhotoGallery
          photos={photos.map((p) => ({ ...p, alt: p.alt[locale] }))}
          labels={dict.photos}
        />
      </section>
    </>
  );
}
