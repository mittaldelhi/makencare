export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  light = false
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p className={`mb-3 text-sm font-bold uppercase tracking-[0.12em] ${light ? "text-brand-orange" : "text-brand-green"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h1 className={`${light ? "text-white" : "text-brand-ink"} text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl`}>
        {title}
      </h1>
      {subtitle ? (
        <p className={`mt-4 text-base leading-7 sm:text-lg ${light ? "text-white/72" : "text-brand-ink/70"}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
