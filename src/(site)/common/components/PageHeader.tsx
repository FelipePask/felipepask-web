type PageHeaderProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  children?: React.ReactNode;
};

/** Bloque de título superior. Cada página interna tiene exactamente un <h1> aquí. */
export function PageHeader({ title, subtitle, eyebrow, children }: PageHeaderProps) {
  return (
    <header className="container-site pt-32 pb-10 text-center sm:pt-40 sm:pb-14">
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h1 className="animate-fade-up font-display text-4xl font-medium tracking-tight sm:text-6xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mx-auto mt-5 max-w-xl text-base text-pretty text-muted sm:text-lg">{subtitle}</p>
      )}
      {children}
    </header>
  );
}
