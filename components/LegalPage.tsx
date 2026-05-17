import { PageHero } from "./PageHero";

export function LegalPage({
  title,
  intro,
  sections
}: {
  title: string;
  intro: string;
  sections: [string, string][];
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} subtitle={intro} />
      <section className="section-pad bg-brand-paper">
        <article className="container-pad">
          <div className="mx-auto max-w-4xl rounded-md border border-brand-green/10 bg-white p-6 shadow-sm sm:p-10">
            <div className="space-y-8">
              {sections.map(([heading, body]) => (
                <section key={heading}>
                  <h2 className="text-2xl font-extrabold text-brand-ink">{heading}</h2>
                  <p className="mt-3 leading-7 text-brand-ink/72">{body}</p>
                </section>
              ))}
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
