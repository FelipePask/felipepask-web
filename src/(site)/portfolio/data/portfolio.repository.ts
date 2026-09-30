import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/config";
import { ROUTES } from "@/lib/routes";
import { FEATURED_LIMIT } from "../lib/constants";
import type { Photo, Project, ProjectCardData, ProjectCategory } from "../types";
import { PHOTOS_MOCK } from "./mocks/photos.mock";
import { PROJECTS_MOCK } from "./mocks/projects.mock";

/*
 * Único punto de entrada de datos del portafolio. Hoy lee mocks locales;
 * más adelante se cambian los cuerpos por un fetch a un CMS / Sanity / Notion sin tocar la UI.
 */

export const getProjects = async (category?: ProjectCategory): Promise<Project[]> =>
  category ? PROJECTS_MOCK.filter((p) => p.category === category) : PROJECTS_MOCK;

export const getFeaturedProjects = async (): Promise<Project[]> =>
  PROJECTS_MOCK.filter((p) => p.featured).slice(0, FEATURED_LIMIT);

export const getProjectBySlug = async (slug: string): Promise<Project | undefined> =>
  PROJECTS_MOCK.find((p) => p.slug === slug);

export const getNextProject = async (slug: string): Promise<Project> => {
  const index = PROJECTS_MOCK.findIndex((p) => p.slug === slug);
  return PROJECTS_MOCK[(index + 1) % PROJECTS_MOCK.length];
};

export const getPhotos = async (): Promise<Photo[]> => PHOTOS_MOCK;

export const toCardData = (project: Project, locale: Locale): ProjectCardData => ({
  slug: project.slug,
  href: localePath(locale, ROUTES.project(project.slug)),
  title: project.title[locale],
  client: project.client,
  poster: project.poster,
  previewSrc: project.previewSrc,
});
