import { WhatsAppCta, KeyMetrics } from "@/components/site/sections";
import { VideoReviews } from "@/components/VideoReviews";
import { SalesVideos } from "@/components/SalesVideos";
import { ReviewsPanel } from "@/components/ReviewsPanel";
import { ClientSitesMarquee } from "@/components/ClientSites";

/**
 * The reviews experience, shared by the landing page (/) and /reviews so both
 * stay in the same order: metrics, video reviews, sales proof, live sites,
 * written reviews, CTA.
 */
export function ReviewsBody() {
  return (
    <>
      {/* 1. Key Metrics */}
      <KeyMetrics />

      {/* 2. Video Reviews */}
      <VideoReviews />

      {/* 3. Shopify Sales Proof */}
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

      {/* 4. Live Client Websites */}
      <ClientSitesMarquee />

      {/* 5. Shopify Store Owner Reviews */}
      <ReviewsPanel />

      {/* 6. CTA */}
      <WhatsAppCta />
    </>
  );
}

export default ReviewsBody;
