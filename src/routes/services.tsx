import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ServicesContent } from "@/components/site/sections";

const TITLE = "Shopify & eCommerce Services | Brainboxworld";
const DESC =
  "Shopify store development, SEO, Google and social ads, email automation, CRO and store management services from Brainboxworld.";
const URL = "https://brainboxweb.lovable.app/services";

export const Route = createFileRoute("/services")({
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
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <h1 className="sr-only">Shopify and eCommerce services by Brainboxworld</h1>
      <ServicesContent />
    </SiteLayout>
  );
}
