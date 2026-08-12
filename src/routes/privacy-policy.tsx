import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { LegalPage } from "@/components/site/LegalPage";
import { contact } from "@/content/site";

const TITLE = "Privacy Policy | Brainboxworld";
const DESC =
  "How Brainboxworld collects, uses and protects the information you share with us through our website, forms, WhatsApp and email.";
const URL = "https://brainboxweb.lovable.app/privacy-policy";

export const Route = createFileRoute("/privacy-policy")({
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
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <LegalPage
        title="Privacy Policy"
        sections={[
          {
            heading: "Information we collect",
            body: [
              "When you contact Brainboxworld through our website form, WhatsApp, email or live chat, we collect the details you choose to send us — typically your name, email address, phone number, store URL and the message itself.",
              "If you submit a review, we store the name, country, rating and review text you provide so it can be published after moderation.",
            ],
          },
          {
            heading: "How we use your information",
            body: [
              "We use your information only to reply to your enquiry, deliver the services you request, publish reviews you have submitted for publication, and keep records of the work we carry out for you.",
              "We do not sell your information, and we do not share it with third parties for their own marketing.",
            ],
          },
          {
            heading: "Service providers",
            body: [
              "We use trusted providers for website hosting, databases, analytics and messaging. These providers process data only on our instructions and only as needed to run this website and communicate with you.",
            ],
          },
          {
            heading: "Store and account access",
            body: [
              "When a project requires access to your Shopify store, ad accounts or analytics, we use the minimum access level needed, keep credentials confidential, and remove our access when the work is complete or when you ask us to.",
            ],
          },
          {
            heading: "Data retention",
            body: [
              "We keep enquiry and project information for as long as needed to provide our services and to meet legal or accounting obligations, then delete it.",
            ],
          },
          {
            heading: "Your rights",
            body: [
              `You can ask us to access, correct or delete the information we hold about you, or to remove a review you submitted. Email ${contact.email} and we will action reasonable requests.`,
            ],
          },
          {
            heading: "Cookies",
            body: [
              "This website uses only the cookies and local storage needed for the site to work correctly and to understand basic usage. You can clear or block them in your browser settings.",
            ],
          },
          {
            heading: "Contact",
            body: [
              `Questions about this policy? Email ${contact.email} or message us on WhatsApp at ${contact.phoneDisplay}.`,
            ],
          },
        ]}
      />
    </SiteLayout>
  );
}
