"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import type { VideoEmbed as VideoEmbedData } from "../types";

type VideoEmbedProps = {
  embed: VideoEmbedData;
  poster: string;
  title: string;
  playLabel: string;
};

const embedUrl = ({ provider, id }: VideoEmbedData) =>
  provider === "vimeo"
    ? `https://player.vimeo.com/video/${id}?autoplay=1&dnt=1&title=0&byline=0&portrait=0`
    : `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;

/**
 * Patrón "facade": solo renderiza un póster + botón de play. El reproductor pesado de
 * Vimeo/YouTube (~500 KB+ de JS) carga únicamente cuando el visitante hace clic, lo que
 * mantiene alto el puntaje de Lighthouse. Luego Vimeo/YouTube hacen streaming adaptativo
 * (HLS/DASH): un máster 4K se ve en 720p en un celular lento y en 4K con fibra, automáticamente.
 */
export function VideoEmbed({ embed, poster, title, playLabel }: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl bg-ink-900">
      {playing ? (
        <iframe
          src={embedUrl(embed)}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
          allowFullScreen
          className="absolute inset-0 size-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`${playLabel}: ${title}`}
          className="group absolute inset-0 size-full"
        >
          <Image
            src={poster}
            alt=""
            fill
            sizes="(min-width: 1280px) 1216px, 100vw"
            loading="eager"
            fetchPriority="high"
            quality={85}
            className="object-cover"
          />
          <span aria-hidden="true" className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/15" />
          <span
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 flex size-20 -translate-1/2 items-center justify-center rounded-full bg-fg/95 text-ink-950 shadow-2xl transition-transform duration-300 group-hover:scale-110 sm:size-24"
          >
            <Play className="ml-1 size-8 fill-current" />
          </span>
        </button>
      )}
    </div>
  );
}
