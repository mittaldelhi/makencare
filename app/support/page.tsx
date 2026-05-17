import { ArrowRight, Headphones } from "lucide-react";
import { ButtonLink } from "../../components/ButtonLink";
import { PageHero } from "../../components/PageHero";
import { pageMetadata } from "../../lib/seo";
import { supportTopics } from "../../lib/site";

export const metadata = pageMetadata({
  title: "Support / Help",
  description:
    "Find Make N Care help topics for app downloads, bookings, payments, cancellations, professional support, and account deletion.",
  path: "/support"
});

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title="Help for customers and professionals."
        subtitle="Use these topics to find the right support path. Bookings and booking changes are handled inside the mobile app."
      />
      <section className="section-pad bg-brand-paper">
        <div className="container-pad grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {supportTopics.map((topic) => (
            <article key={topic} className="rounded-md border border-brand-green/10 bg-white p-6 shadow-sm">
              <Headphones className="text-brand-green" />
              <h2 className="mt-5 text-xl font-extrabold text-brand-ink">{topic}</h2>
              <p className="mt-3 text-sm leading-6 text-brand-ink/70">
                Contact the Make N Care team for help with this topic.
              </p>
              <div className="mt-5 flex items-center gap-2 text-sm font-bold text-brand-orange">
                Contact support <ArrowRight size={17} />
              </div>
            </article>
          ))}
        </div>
        <div className="container-pad mt-10">
          <div className="rounded-md bg-white p-8 text-center shadow-sm">
            <h2 className="text-3xl font-extrabold text-brand-ink">Still need help?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-brand-ink/70">
              Send us your details and support reason so the right team can
              respond. For active bookings, use the Make N Care app when possible.
            </p>
            <ButtonLink href="/contact" className="mt-6">
              Contact support
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
