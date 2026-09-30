"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { cn } from "@/lib/cn";
import { useCanAutoplayVideo } from "@/(site)/common/hooks/useCanAutoplayVideo";
import type { HeroMedia } from "../types";

type HeroVideoProps = {
  media: HeroMedia;
  label: string;
  pauseLabel: string;
  playLabel: string;
};

const MOBILE_QUERY = "(max-width: 767px)";
const subscribeMobile = (cb: () => void) => {
  const mq = window.matchMedia(MOBILE_QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

/**
 * Estrategia de carga (lo que importa en celulares con datos móviles):
 * 1. El póster <Image> se renderiza en el servidor y se precarga → es el LCP, pinta en ~1 s.
 * 2. Tras la hidratación, el <video> se monta solo si la conexión/dispositivo lo permite,
 *    con el archivo 720p en celulares y el 1080p en escritorio.
 * 3. El video aparece con un fade cuando realmente reproduce; si nunca lo hace, queda el póster.
 * 4. Un botón de pausa cumple WCAG 2.2.2 (el contenido en movimiento > 5 s debe poder pausarse).
 */
export function HeroVideo({ media, label, pauseLabel, playLabel }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canPlay = useCanAutoplayVideo();
  const isMobile = useSyncExternalStore(subscribeMobile, () => window.matchMedia(MOBILE_QUERY).matches, () => true);
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);

  const sources = media.video ? (isMobile ? media.video.mobile : media.video.desktop) : [];
  const showVideo = canPlay && sources.length > 0;

  // Recarga al cambiar entre las fuentes de celular/escritorio.
  useEffect(() => {
    videoRef.current?.load();
  }, [isMobile]);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => undefined);
      setPaused(false);
    } else {
      video.pause();
      setPaused(true);
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden bg-ink-950">
      <Image
        src={media.poster}
        alt=""
        fill
        preload
        fetchPriority="high"
        quality={75}
        sizes="100vw"
        className="object-cover"
      />

      {showVideo && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label={label}
          disablePictureInPicture
          onPlaying={() => setPlaying(true)}
          className={cn(
            "absolute inset-0 size-full object-cover transition-opacity duration-1000",
            playing ? "opacity-100" : "opacity-0",
          )}
        >
          {sources.map((s) => (
            <source key={s.src} src={s.src} type={s.type} />
          ))}
        </video>
      )}

      {/* Viñeta cinematográfica + degradado inferior hacia la página */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-ink-950" />

      {showVideo && playing && (
        <button
          type="button"
          onClick={toggle}
          aria-label={paused ? playLabel : pauseLabel}
          className="absolute right-4 bottom-4 z-10 inline-flex size-11 items-center justify-center rounded-full bg-black/40 text-fg ring-1 ring-white/20 backdrop-blur hover:bg-black/60 sm:right-8 sm:bottom-8"
        >
          {paused ? <Play aria-hidden="true" className="size-4" /> : <Pause aria-hidden="true" className="size-4" />}
        </button>
      )}
    </div>
  );
}
