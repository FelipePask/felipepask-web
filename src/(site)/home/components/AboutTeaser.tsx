import Image from "next/image";
import { ButtonLink } from "@/(site)/common/components/ButtonLink";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

type AboutTeaserProps = {
  dict: Dictionary["home"]["about"];
  image: string;
  imageAlt: string;
  href: string;
};

export function AboutTeaser({ dict, image, imageAlt, href }: AboutTeaserProps) {
  return (
    <section aria-labelledby="about-teaser-title" className="container-site py-20 sm:py-28">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-ink-850">
          <Image src={image} alt={imageAlt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
        <div>
          <p className="eyebrow mb-4">{dict.eyebrow}</p>
          <h2
            id="about-teaser-title"
            className="font-display text-3xl leading-tight font-medium tracking-tight text-balance sm:text-5xl"
          >
            {dict.title}
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-pretty text-muted">{dict.text}</p>
          <ButtonLink href={href} variant="outline" className="mt-8">
            {dict.cta}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
