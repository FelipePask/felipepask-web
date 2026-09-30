import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail, getProjectBySlug, getProjects } from "@/(site)/portfolio";
import { resolveLocale } from "@/lib/i18n/resolve";
import { buildMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/routes";

export const dynamicParams = false;

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/portfolio/[slug]">): Promise<Metadata> {
  const { locale } = await resolveLocale(params);
  const project = await getProjectBySlug((await params).slug);
  if (!project) return {};
  return buildMetadata({
    locale,
    path: ROUTES.project(project.slug),
    title: project.title[locale],
    description: project.summary[locale],
    image: project.poster,
  });
}

export default async function Page({ params }: PageProps<"/[lang]/portfolio/[slug]">) {
  const { locale, dict } = await resolveLocale(params);
  const project = await getProjectBySlug((await params).slug);
  if (!project) notFound();
  return <ProjectDetail locale={locale} dict={dict.portfolio} project={project} />;
}
