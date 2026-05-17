export function PageHero({
  eyebrow,
  title,
  subtitle
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="bg-brand-mint py-16 sm:py-20">
      <div className="container-pad">
        <p className="text-sm font-bold uppercase tracking-[0.12em] text-brand-green">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight text-brand-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-brand-ink/72">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
