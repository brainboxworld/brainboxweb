import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { AboutContent } from "@/components/site/sections";

const TITLE = "About Brainboxworld | Shopify & eCommerce Growth Agency";
const DESC =
  "Brainboxworld is a Shopify-focused eCommerce agency covering development, SEO, paid media and retention marketing for growing online stores.";
const URL = "https://brainboxweb.lovable.app/about";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <AboutContent />
    </SiteLayout>
  );
}
