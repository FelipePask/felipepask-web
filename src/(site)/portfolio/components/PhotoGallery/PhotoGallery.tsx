"use client";

import { useState } from "react";
import Image from "next/image";
import { Lightbox, type LightboxLabels } from "./Lightbox";

export type GalleryPhoto = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

type PhotoGalleryProps = {
  photos: GalleryPhoto[];
  labels: LightboxLabels & { open: string };
};

/** Masonry con columnas CSS (sin layout por JS), lightbox con <dialog> nativo. */
export function PhotoGallery({ photos, labels }: PhotoGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <ul className="columns-1 gap-3 sm:columns-2 lg:columns-3">
        {photos.map((photo, i) => (
          <li key={photo.id} className="mb-3 break-inside-avoid">
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`${labels.open}: ${photo.alt}`}
              className="group block w-full overflow-hidden rounded-2xl bg-ink-850"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                loading={i < 3 ? "eager" : "lazy"}
                quality={75}
                className="h-auto w-full transition-transform duration-700 ease-(--ease-cinematic) group-hover:scale-[1.03]"
              />
            </button>
          </li>
        ))}
      </ul>

      <Lightbox
        photos={photos}
        index={openIndex}
        onIndexChange={setOpenIndex}
        labels={labels}
      />
    </>
  );
}
