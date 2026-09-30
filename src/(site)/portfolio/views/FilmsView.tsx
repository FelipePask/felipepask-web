import { localePath, type Locale } from "@/lib/i18n/config";
import { ROUTES } from "@/lib/routes";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { PageHeader } from "@/(site)/common/components/PageHeader";
import { getProjects, toCardData } from "../data/portfolio.repository";
import { PROJECT_CATEGORIES } from "../lib/constants";
import type { ProjectCategory } from "../types";
import { CategoryFilter } from "../components/CategoryFilter";
import { PortfolioTabs } from "../components/PortfolioTabs";
import { ProjectGrid } from "../components/ProjectGrid";

type FilmsViewProps = {
  locale: Locale;
  dict: Dictionary["portfolio"];
  category?: ProjectCategory;
};

export async function FilmsView({ locale, dict, category }: FilmsViewProps) {
  const projects = await getProjects(category);
  const basePath = localePath(locale, ROUTES.portfolio);

  return (
    <>
      <PageHeader title={dict.title} subtitle={dict.subtitle}>
        <PortfolioTabs
          tabs={[
            { href: basePath, label: dict.tabs.films, current: true },
            { href: localePath(locale, ROUTES.photos), label: dict.tabs.photos, current: false },
          ]}
        />
      </PageHeader>

      <section aria-labelledby="films-title" className="container-site pb-20">
        <h2 id="films-title" className="sr-only">
          {dict.tabs.films}
        </h2>
        <div className="mb-8">
          <CategoryFilter
            basePath={basePath}
            active={category}
            label={dict.filtersLabel}
            options={[
              { label: dict.filters.all },
              ...PROJECT_CATEGORIES.map((value) => ({ value, label: dict.filters[value] })),
            ]}
          />
        </div>

        {projects.length > 0 ? (
          <ProjectGrid projects={projects.map((p) => toCardData(p, locale))} eagerCount={2} />
        ) : (
          <p className="py-20 text-center text-muted">{dict.empty}</p>
        )}
      </section>
    </>
  );
}
