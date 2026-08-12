import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PortfolioProjects } from "@/components/site/sections";
import { SalesVideos } from "@/components/SalesVideos";
import { ClientSites } from "@/components/ClientSites";

const TITLE = "Brainboxworld Portfolio | Shopify & eCommerce Projects";
const DESC =
  "Real Brainboxworld projects: Shopify builds, SEO fixes, page speed work, merchant feed approvals and live client stores we have grown.";
const URL = "https://brainboxweb.lovable.app/portfolio";

export const Route = createFileRoute("/portfolio")({
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
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <SiteLayout>
      <h1 className="sr-only">Brainboxworld portfolio</h1>
      <div>
        <PortfolioProjects />
        <div className="mx-auto max-w-none px-0">
          <SalesVideos />
          <ClientSites />
        </div>
      </div>
    </SiteLayout>
  );
}
