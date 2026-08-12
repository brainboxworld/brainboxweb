import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { LegalPage } from "@/components/site/LegalPage";
import { contact } from "@/content/site";

const TITLE = "Disclaimer | Brainboxworld";
const DESC =
  "Important notes about the results, examples and information shown on the Brainboxworld website.";
const URL = "https://brainboxweb.lovable.app/disclaimer";

export const Route = createFileRoute("/disclaimer")({
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
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <SiteLayout>
      <LegalPage
        title="Disclaimer"
        sections={[
          {
            heading: "General information",
            body: [
              "The content on this website is provided for general information about Brainboxworld and the services we offer. It does not constitute legal, financial or tax advice.",
            ],
          },
          {
            heading: "Results are not guaranteed",
            body: [
              "The dashboards, screen recordings, case studies and reviews shown on this site reflect work carried out for specific stores. Results depend on the product, market, budget, competition and how the store is run, so similar outcomes cannot be guaranteed for every project.",
            ],
          },
          {
            heading: "Client work and trademarks",
            body: [
              "Client store names, logos and websites shown in our portfolio remain the property of their owners and are displayed only to illustrate work we have carried out.",
            ],
          },
          {
            heading: "External links",
            body: [
              "This website links to external websites, including client stores and platform providers. We are not responsible for the content, availability or policies of those websites.",
            ],
          },
          {
            heading: "AI assistant",
            body: [
              "Our live chat assistant provides general guidance based on the information published on this website. For anything project-specific, please confirm details with our team directly.",
            ],
          },
          {
            heading: "Contact",
            body: [
              `If anything on this website looks unclear or inaccurate, email ${contact.email} or message us on WhatsApp at ${contact.phoneDisplay}.`,
            ],
          },
        ]}
      />
    </SiteLayout>
  );
}
