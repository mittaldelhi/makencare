import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms & Conditions",
  description:
    "Read the Make N Care Terms & Conditions for website and app use, service availability, payments, cancellations, and responsibilities.",
  path: "/terms-and-conditions"
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="These terms describe the conditions for using the Make N Care website, mobile app, and related home-service platform."
      sections={[
        ["Use of website and app", "The website provides brand, service, support, professional onboarding, and legal information. Service booking is available only through the Make N Care mobile app."],
        ["Service availability", "Services, pricing, time slots, professionals, and coverage areas may vary by city, category, and operational capacity."],
        ["Customer responsibilities", "Customers must provide accurate contact, address, service, and access information and must treat service professionals respectfully."],
        ["Professional responsibilities", "Professionals must provide truthful onboarding information, follow service standards, respect customers, and complete accepted jobs responsibly."],
        ["Pricing and payments", "Applicable pricing, fees, taxes, payment options, and offers are shown in the app before booking confirmation where available."],
        ["Booking and cancellation", "Booking creation, changes, and cancellations are managed inside the app and may depend on assignment status and service timing."],
        ["Refunds", "Refunds, where applicable, are handled according to the Refund & Cancellation Policy and payment provider timelines."],
        ["Account suspension", "Make N Care may restrict or suspend access if an account is misused, violates platform rules, creates safety risk, or breaches applicable law."],
        ["Limitation of liability", "Make N Care aims to support reliable services but is not liable for indirect, incidental, or consequential losses to the fullest extent permitted by law."],
        ["Contact", "For questions about these terms, contact Make N Care support through the Contact Us page."]
      ]}
    />
  );
}
