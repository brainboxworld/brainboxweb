import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ContactContent } from "@/components/site/sections";

const TITLE = "Contact Brainboxworld | Shopify & eCommerce Growth";
const DESC =
  "Talk to Brainboxworld about your Shopify or eCommerce store. Message us on WhatsApp, email info@brainboxworld.com or send us a message — average reply under an hour.";
const URL = "https://brainboxweb.lovable.app/contact";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <h1 className="sr-only">Contact Brainboxworld</h1>
      <ContactContent />
    </SiteLayout>
  );
}
