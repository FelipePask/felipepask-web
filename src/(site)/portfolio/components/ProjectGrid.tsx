import type { ProjectCardData } from "../types";
import { ProjectCard } from "./ProjectCard/ProjectCard";

type ProjectGridProps = {
  projects: ProjectCardData[];
  /** Cuántas tarjetas iniciales cargan de inmediato (visibles sin hacer scroll). */
  eagerCount?: number;
};

export function ProjectGrid({ projects, eagerCount = 0 }: ProjectGridProps) {
  return (
    <ul className="grid gap-3 md:grid-cols-2">
      {projects.map((project, i) => (
        <li key={project.slug}>
          <ProjectCard project={project} eager={i < eagerCount} />
        </li>
      ))}
    </ul>
  );
}
