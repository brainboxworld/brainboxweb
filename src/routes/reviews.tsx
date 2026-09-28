import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ReviewsBody } from "@/components/site/ReviewsBody";

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
      <ReviewsBody />
    </SiteLayout>
  );
}
