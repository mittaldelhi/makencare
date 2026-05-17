import { PageHero } from "../../components/PageHero";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "Account Deletion",
  description:
    "Request deletion of your Make N Care account and associated personal data, with details about deleted and retained records.",
  path: "/account-deletion"
});

export default function AccountDeletionPage() {
  return (
    <>
      <PageHero
        eyebrow="Account Deletion"
        title="Request deletion of your Make N Care account."
        subtitle="Users can request deletion of their Make N Care account and associated personal data."
      />
      <section className="section-pad bg-brand-paper">
        <div className="container-pad grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <Info title="Data deleted" items={["Name", "Phone number", "Email address", "Saved addresses", "Profile information", "App account details"]} />
            <Info title="Data that may be retained" items={["Payment records", "Booking invoices", "Support tickets", "Fraud prevention logs", "Records required by law"]} />
            <div className="rounded-md border border-brand-orange/30 bg-white p-6">
              <h2 className="text-xl font-extrabold text-brand-ink">Retention</h2>
              <p className="mt-3 leading-7 text-brand-ink/72">
                Some transaction, legal, dispute, or fraud-prevention records
                may be retained for up to 90 days or as required by applicable law.
              </p>
            </div>
          </div>
          <form className="rounded-md border border-brand-green/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-extrabold text-brand-ink">Account deletion request form</h2>
            <div className="mt-6 grid gap-5">
              <Field label="Full name" name="fullName" />
              <Field label="Registered phone number" name="phone" type="tel" />
              <Field label="Registered email, optional" name="email" type="email" required={false} />
              <label className="grid gap-2 text-sm font-bold text-brand-ink">
                Reason, optional
                <textarea name="reason" rows={5} className="focus-ring rounded-md border border-brand-green/15 px-3 py-3 text-brand-ink" />
              </label>
            </div>
            <button type="submit" className="focus-ring mt-6 min-h-12 rounded-md bg-brand-green px-6 text-sm font-bold text-white">
              Submit deletion request
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Info({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="rounded-md border border-brand-green/10 bg-white p-6">
      <h2 className="text-xl font-extrabold text-brand-ink">{title}</h2>
      <ul className="mt-4 grid gap-2 text-brand-ink/72">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </article>
  );
}

function Field({ label, name, type = "text", required = true }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="grid gap-2 text-sm font-bold text-brand-ink">
      {label}
      <input required={required} name={name} type={type} className="focus-ring min-h-12 rounded-md border border-brand-green/15 px-3 text-brand-ink" />
    </label>
  );
}
