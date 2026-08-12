import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { WhatsAppCta } from "@/components/site/sections";
import { VideoReviews } from "@/components/VideoReviews";
import { SalesVideos } from "@/components/SalesVideos";
import { ReviewsPanel } from "@/components/ReviewsPanel";
import { ClientSitesMarquee } from "@/components/ClientSites";

const TITLE = "Brainboxworld Reviews | Shopify & eCommerce Growth";
const DESC =
  "Video reviews, Shopify sales proof and written reviews from store owners we work with, plus live client websites built and grown by Brainboxworld.";
const URL = "https://brainboxweb.lovable.app/reviews";

export const Route = createFileRoute("/reviews")({
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
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <SiteLayout>
      <h1 className="sr-only">Brainboxworld reviews</h1>

      {/* 1. Video Reviews */}
      <VideoReviews />

      {/* 2. Shopify Sales Proof */}
      <section className="surface-card p-4 sm:p-6 md:p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Shopify Sales Proof</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Real Shopify dashboards and ecommerce revenue screens from stores we've grown — not
            mockups.
          </p>
        </div>
        <SalesVideos />
      </section>

      {/* 3. Shopify Store Owner Reviews */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Shopify Store Owner Reviews
          </h2>
        </div>
        <ReviewsPanel />
      </section>

      {/* 4. Live Client Websites */}
      <ClientSitesMarquee />

      {/* 5. CTA */}
      <WhatsAppCta />
    </SiteLayout>
  );
}
