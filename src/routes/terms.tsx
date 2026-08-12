import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { LegalPage } from "@/components/site/LegalPage";
import { contact } from "@/content/site";

const TITLE = "Terms & Conditions | Brainboxworld";
const DESC =
  "The terms that apply when you use the Brainboxworld website or engage us for Shopify and eCommerce services.";
const URL = "https://brainboxweb.lovable.app/terms";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteLayout>
      <LegalPage
        title="Terms & Conditions"
        sections={[
          {
            heading: "Agreement",
            body: [
              "By using this website or engaging Brainboxworld for any service, you agree to these terms. If you do not agree with them, please do not use the site or our services.",
            ],
          },
          {
            heading: "Services and quotes",
            body: [
              "Prices shown on this website are starting prices. The final scope, timeline and cost of any project are confirmed in writing before work begins.",
              "Timelines depend on how quickly we receive the access, content and feedback needed from your side.",
            ],
          },
          {
            heading: "Payment",
            body: [
              "Unless agreed otherwise, projects begin after the agreed deposit is paid, with the balance due on completion. Ongoing retainers are billed for each agreed period in advance.",
            ],
          },
          {
            heading: "Client responsibilities",
            body: [
              "You are responsible for providing accurate information, any required store or account access, and the rights to any content, images or trademarks you ask us to publish.",
            ],
          },
          {
            heading: "Revisions and cancellation",
            body: [
              "Each project includes the number of revision rounds agreed in the project scope. Work already completed at the time of cancellation remains payable.",
            ],
          },
          {
            heading: "Intellectual property",
            body: [
              "Once a project is paid in full, the deliverables created specifically for you belong to you. We may display non-confidential work in our portfolio unless you ask us not to.",
            ],
          },
          {
            heading: "Third-party platforms",
            body: [
              "We work with platforms such as Shopify, Google and Meta. Their policies, approvals, pricing and outages are outside our control.",
            ],
          },
          {
            heading: "Liability",
            body: [
              "Our liability for any claim connected to a project is limited to the fees you paid us for that project. We are not liable for indirect or consequential losses.",
            ],
          },
          {
            heading: "Contact",
            body: [
              `Questions about these terms? Email ${contact.email} or message us on WhatsApp at ${contact.phoneDisplay}.`,
            ],
          },
        ]}
      />
    </SiteLayout>
  );
}
