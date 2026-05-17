import { LegalPage } from "../../components/LegalPage";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "Refund & Cancellation Policy",
  description:
    "Read the Make N Care refund and cancellation policy for service bookings, failed payments, disputes, and support contact.",
  path: "/refund-cancellation-policy"
});

export default function RefundPage() {
  return (
    <LegalPage
      title="Refund & Cancellation Policy"
      intro="This policy explains launch-safe refund and cancellation handling for Make N Care app bookings."
      sections={[
        ["Cancellation before assignment", "If a booking is cancelled before a professional is assigned, cancellation charges may be lower or waived depending on the app policy shown at that time."],
        ["Cancellation after assignment", "If a booking is cancelled after a professional is assigned or close to the service time, cancellation charges may apply."],
        ["Failed payment refund", "If payment is deducted but the booking is not confirmed, Make N Care or the payment provider will review the transaction and process eligible refunds."],
        ["Service issue dispute", "If there is a service quality issue, customers should contact support through the app or Contact Us page with booking details and evidence where possible."],
        ["Refund timeline", "Approved refunds may take several business days depending on the payment method, bank, wallet, UPI provider, or payment gateway processing time."],
        ["Contact support", "For cancellation or refund help, contact Make N Care support through the app or website Contact Us page."]
      ]}
    />
  );
}
