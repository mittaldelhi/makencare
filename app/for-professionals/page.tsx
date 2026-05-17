import { CheckCircle2, FileText, UserRoundCheck } from "lucide-react";
import { ButtonLink } from "../../components/ButtonLink";
import { PageHero } from "../../components/PageHero";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "For Professionals",
  description:
    "Join Make N Care as a service professional and receive digital home-service requests through the platform.",
  path: "/for-professionals"
});

export default function ForProfessionalsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Professionals"
        title="Grow your work with Make N Care."
        subtitle="Join as a service partner and receive digital service requests through our platform."
      />
      <section className="section-pad bg-brand-paper">
        <div className="container-pad grid gap-6 lg:grid-cols-2">
          <Panel title="Why join Make N Care" items={["Receive service requests", "Build your professional profile", "Manage jobs from the app", "Track earnings", "Get customer ratings", "Grow with a trusted local brand"]} />
          <Panel title="Who can apply" items={["Cleaners", "Electricians", "Plumbers", "AC technicians", "Appliance repair professionals", "Cooks", "Laundry service providers", "Other home-service workers"]} />
          <Panel title="Documents required" icon="doc" items={["Government ID proof", "Address proof", "Recent photo", "Skill or work experience details", "Bank or payout details where required"]} />
          <Panel title="How onboarding works" icon="user" items={["Submit your interest", "Share documents and category details", "Complete verification", "Set service area and availability", "Start receiving app-based requests"]} />
        </div>
        <div className="container-pad mt-10">
          <div className="rounded-md bg-brand-green p-8 text-white">
            <h2 className="text-3xl font-extrabold">Apply or contact our team.</h2>
            <p className="mt-3 max-w-2xl text-white/78">
              Tell us your service category and city. Our onboarding team will
              guide you through the next steps.
            </p>
            <ButtonLink href="/contact" variant="light" className="mt-6">
              Apply as Professional
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

function Panel({ title, items, icon }: { title: string; items: string[]; icon?: "doc" | "user" }) {
  const Icon = icon === "doc" ? FileText : icon === "user" ? UserRoundCheck : CheckCircle2;
  return (
    <article className="rounded-md border border-brand-green/10 bg-white p-7 shadow-sm">
      <Icon className="text-brand-green" size={30} />
      <h2 className="mt-5 text-2xl font-extrabold text-brand-ink">{title}</h2>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3 text-sm font-semibold text-brand-ink/78">
            <CheckCircle2 className="shrink-0 text-brand-green" size={18} />
            {item}
          </div>
        ))}
      </div>
    </article>
  );
}
