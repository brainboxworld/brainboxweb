import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { TeamContent } from "@/components/site/sections";

const TITLE = "Brainboxworld Team | Shopify & eCommerce Experts";
const DESC =
  "Meet the Brainboxworld team — Shopify developers, SEO specialists, marketers and project managers working across the US, UK and West Africa.";
const URL = "https://brainboxweb.lovable.app/team";

export const Route = createFileRoute("/team")({
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
  component: TeamPage,
});

function TeamPage() {
  return (
    <SiteLayout>
      <h1 className="sr-only">The Brainboxworld team</h1>
      <TeamContent />
    </SiteLayout>
  );
}
