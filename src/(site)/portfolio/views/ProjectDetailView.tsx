import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { localePath, type Locale } from "@/lib/i18n/config";
import { ROUTES } from "@/lib/routes";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { getNextProject } from "../data/portfolio.repository";
import type { Project } from "../types";
import { VideoEmbed } from "../components/VideoEmbed";

type ProjectDetailViewProps = {
  locale: Locale;
  dict: Dictionary["portfolio"];
  project: Project;
};

export async function ProjectDetailView({ locale, dict, project }: ProjectDetailViewProps) {
  const next = await getNextProject(project.slug);
  const title = project.title[locale];
  const d = dict.detail;

  const facts = [
    { label: d.client, value: project.client },
    { label: d.year, value: String(project.year) },
    { label: d.role, value: project.role[locale] },
    { label: d.category, value: dict.filters[project.category] },
  ];

  return (
    <article className="container-site pt-28 pb-20 sm:pt-36">
      <Link
        href={localePath(locale, ROUTES.portfolio)}
        className="mb-8 inline-flex min-h-11 items-center gap-2 text-xs font-semibold tracking-[0.2em] text-muted uppercase hover:text-fg"
      >
        <ArrowLeft aria-hidden="true" className="size-4" />
        {d.back}
      </Link>

      <header className="mb-8 sm:mb-12">
        <p className="eyebrow mb-3">{project.client}</p>
        <h1 className="animate-fade-up font-display text-4xl font-medium tracking-tight text-balance sm:text-6xl">
          {title}
        </h1>
      </header>

      <VideoEmbed embed={project.embed} poster={project.poster} title={title} playLabel={d.play} />

      <div className="mt-10 grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
        <dl className="grid grid-cols-2 gap-6 self-start md:grid-cols-1">
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="eyebrow">{f.label}</dt>
              <dd className="mt-1 text-fg">{f.value}</dd>
            </div>
          ))}
        </dl>
        <p className="text-lg leading-relaxed text-pretty text-muted sm:text-xl">{project.summary[locale]}</p>
      </div>

      {project.stills && project.stills.length > 0 && (
        <ul className="mt-14 grid gap-3 sm:grid-cols-3">
          {project.stills.map((src, i) => (
            <li key={src} className="relative aspect-video overflow-hidden rounded-2xl bg-ink-850">
              <Image
                src={src}
                alt={`${title} — still ${i + 1}`}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover"
              />
            </li>
          ))}
        </ul>
      )}

      <nav aria-label={d.next} className="mt-20 border-t border-ink-800 pt-10">
        <Link
          href={localePath(locale, ROUTES.project(next.slug))}
          className="group flex items-center justify-between gap-6"
        >
          <span>
            <span className="eyebrow block">{d.next}</span>
            <span className="mt-2 block font-display text-2xl font-medium sm:text-4xl">{next.title[locale]}</span>
          </span>
          <ArrowRight
            aria-hidden="true"
            className="size-8 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </nav>
    </article>
  );
}
