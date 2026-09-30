"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { useCanAutoplayVideo } from "@/(site)/common/hooks/useCanAutoplayVideo";
import type { ProjectCardData } from "../../types";

type ProjectCardProps = {
  project: ProjectCardData;
  /** Solo la(s) primera(s) tarjeta(s) visibles deben cargar de inmediato, para ayudar al LCP. */
  eager?: boolean;
};

/**
 * Primero el póster, el clip de preview solo cuando se necesita:
 *  - escritorio: carga y reproduce al pasar el mouse / al recibir foco
 *  - táctil: reproduce mientras la tarjeta está ≥60% en pantalla
 * El clip nunca se descarga en conexiones lentas o con ahorro de datos.
 */
export function ProjectCard({ project, eager = false }: ProjectCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canPlay = useCanAutoplayVideo();
  const hasPreview = Boolean(project.previewSrc) && canPlay;

  const [active, setActive] = useState(false);
  const [requested, setRequested] = useState(false);
  const [playing, setPlaying] = useState(false);

  const activate = (on: boolean) => {
    if (!hasPreview) return;
    if (on) setRequested(true);
    setActive(on);
  };

  useEffect(() => {
    if (!hasPreview || window.matchMedia("(hover: hover)").matches) return;
    const el = cardRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.intersectionRatio >= 0.6;
        if (visible) setRequested(true);
        setActive(visible);
      },
      { threshold: [0, 0.6] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [hasPreview]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (active) video.play().catch(() => undefined);
    else video.pause();
  }, [active, requested]);

  const showVideo = active && playing;

  return (
    <Link
      ref={cardRef}
      href={project.href}
      onPointerEnter={(e) => e.pointerType === "mouse" && activate(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && activate(false)}
      onFocus={() => activate(true)}
      onBlur={() => activate(false)}
      className="group relative block aspect-video overflow-hidden rounded-2xl bg-ink-850"
    >
      <Image
        src={project.poster}
        alt=""
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        quality={75}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        className={cn(
          "object-cover transition-all duration-700 ease-(--ease-cinematic) group-hover:scale-[1.03]",
          showVideo && "opacity-0",
        )}
      />

      {requested && project.previewSrc && (
        <video
          ref={videoRef}
          src={project.previewSrc}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          tabIndex={-1}
          onPlaying={() => setPlaying(true)}
          className={cn(
            "absolute inset-0 size-full object-cover transition-opacity duration-500",
            showVideo ? "opacity-100" : "opacity-0",
          )}
        />
      )}

      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(0_0_0/0.55),rgb(0_0_0/0.3)_70%)] transition-opacity duration-500",
          showVideo && "opacity-30",
        )}
      />

      <div
        className={cn(
          "absolute inset-0 flex flex-col items-center justify-center p-6 text-center [text-shadow:0_1px_12px_rgb(0_0_0/0.6)] transition-opacity duration-500",
          showVideo && "sm:opacity-0",
        )}
      >
        <h3 className="font-display text-xl font-medium tracking-wide text-balance sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-2 text-xs font-medium tracking-[0.2em] text-white/70 uppercase">{project.client}</p>
      </div>
    </Link>
  );
}
