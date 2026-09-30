import { ButtonLink } from "./ButtonLink";

type CtaSectionProps = {
  title: string;
  text?: string;
  button: string;
  href: string;
};

export function CtaSection({ title, text, button, href }: CtaSectionProps) {
  return (
    <section aria-labelledby="cta-title" className="container-site py-20 sm:py-28">
      <div className="rounded-3xl border border-ink-700 bg-ink-900 px-6 py-14 text-center sm:px-12 sm:py-20">
        <h2 id="cta-title" className="font-display text-3xl font-medium tracking-tight text-balance sm:text-5xl">
          {title}
        </h2>
        {text && <p className="mx-auto mt-4 max-w-lg text-pretty text-muted">{text}</p>}
        <ButtonLink href={href} className="mt-8">
          {button}
        </ButtonLink>
      </div>
    </section>
  );
}
