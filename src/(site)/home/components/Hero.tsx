import { ChevronDown } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { HeroMedia } from "../types";
import { HeroVideo } from "./HeroVideo";

type HeroProps = {
  siteName: string;
  media: HeroMedia;
  home: Dictionary["home"];
  a11y: Dictionary["a11y"];
};

export function Hero({ siteName, media, home, a11y }: HeroProps) {
  return (
    <section className="relative flex h-svh min-h-[34rem] items-center justify-center overflow-hidden">
      <HeroVideo
        media={media}
        label={a11y.heroVideo}
        pauseLabel={a11y.pauseVideo}
        playLabel={a11y.playVideo}
      />

      <div className="relative z-10 container-site text-center">
        <h1 className="animate-fade-up font-display text-4xl leading-tight font-medium tracking-tight text-balance drop-shadow-[0_2px_24px_rgb(0_0_0/0.5)] sm:text-6xl lg:text-7xl">
          <span className="sr-only">{siteName} — </span>
          {home.roles.map((role, i) => (
            <span key={role} className="block lg:inline">
              {i > 0 && (
                <span aria-hidden="true" className="hidden px-4 lg:inline">
                  •
                </span>
              )}
              {role}
            </span>
          ))}
        </h1>
      </div>

      <a
        href="#featured"
        className="absolute bottom-6 left-1/2 z-10 flex min-h-11 -translate-x-1/2 flex-col items-center gap-1 text-xs font-semibold tracking-[0.3em] text-white/75 uppercase hover:text-fg sm:bottom-10"
      >
        {home.scrollDown}
        <ChevronDown aria-hidden="true" className="size-4 animate-bounce" />
      </a>
    </section>
  );
}
