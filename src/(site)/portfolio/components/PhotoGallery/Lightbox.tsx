"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryPhoto } from "./PhotoGallery";

export type LightboxLabels = { close: string; previous: string; nextPhoto: string };

type LightboxProps = {
  photos: GalleryPhoto[];
  index: number | null;
  onIndexChange: (index: number | null) => void;
  labels: LightboxLabels;
};

export function Lightbox({ photos, index, onIndexChange, labels }: LightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const photo = index === null ? null : photos[index];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index !== null && !dialog.open) dialog.showModal();
    if (index === null && dialog.open) dialog.close();
  }, [index]);

  const go = (delta: number) => {
    if (index === null) return;
    onIndexChange((index + delta + photos.length) % photos.length);
  };

  return (
    <dialog
      ref={dialogRef}
      aria-label={photo?.alt}
      onClose={() => onIndexChange(null)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
      className="m-auto max-h-dvh max-w-none bg-transparent p-0 text-fg"
    >
      {photo && (
        <div
          onClick={(e) => e.target === e.currentTarget && dialogRef.current?.close()}
          className="relative flex h-dvh w-screen items-center justify-center p-4 sm:p-16">
          <Image
            key={photo.id}
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes="100vw"
            quality={85}
            className="h-auto max-h-full w-auto max-w-full rounded-lg object-contain"
          />

          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label={labels.close}
            autoFocus
            className="absolute top-4 right-4 inline-flex size-11 items-center justify-center rounded-full bg-black/60 ring-1 ring-white/20 hover:bg-black/80"
          >
            <X aria-hidden="true" className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label={labels.previous}
            className="absolute bottom-4 left-4 inline-flex size-11 items-center justify-center rounded-full bg-black/60 ring-1 ring-white/20 hover:bg-black/80 sm:top-1/2 sm:bottom-auto sm:-translate-y-1/2"
          >
            <ChevronLeft aria-hidden="true" className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label={labels.nextPhoto}
            className="absolute right-4 bottom-4 inline-flex size-11 items-center justify-center rounded-full bg-black/60 ring-1 ring-white/20 hover:bg-black/80 sm:top-1/2 sm:bottom-auto sm:-translate-y-1/2"
          >
            <ChevronRight aria-hidden="true" className="size-5" />
          </button>
        </div>
      )}
    </dialog>
  );
}
