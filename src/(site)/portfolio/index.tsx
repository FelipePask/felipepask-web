import type { Locale } from "@/lib/i18n/config";
import { getFeaturedProjects, toCardData } from "./data/portfolio.repository";
import { ProjectGrid } from "./components/ProjectGrid";

// Entrada pública del feature portfolio: las rutas de app/ y otros features importan solo desde aquí.
export { FilmsView as Portfolio } from "./views/FilmsView";
export { PhotosView as Photos } from "./views/PhotosView";
export { ProjectDetailView as ProjectDetail } from "./views/ProjectDetailView";
export { getProjectBySlug, getProjects } from "./data/portfolio.repository";
export { PROJECT_CATEGORIES } from "./lib/constants";
export type { ProjectCategory } from "./types";

/** Lo usa la página de inicio. */
export async function FeaturedProjects({ locale }: { locale: Locale }) {
  const projects = await getFeaturedProjects();
  return <ProjectGrid projects={projects.map((p) => toCardData(p, locale))} />;
}
