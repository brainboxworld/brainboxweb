import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, NAV } from "@/components/site/SiteLayout";
import { AboutContent } from "@/components/site/sections";
import { brand, reviewSummary, services, servicesIntro } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brainboxworld — eCommerce & Shopify Growth Agency" },
      {
        name: "description",
        content:
          "Brainboxworld builds, optimizes and manages high-converting Shopify stores. Development, design, SEO, ads and store management for eCommerce brands.",
      },
      { property: "og:title", content: "Brainboxworld — eCommerce & Shopify Growth Agency" },
      {
        property: "og:description",
        content:
          "Shopify development, redesign, SEO and conversion optimization for growing eCommerce brands.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://brainboxweb.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://brainboxweb.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://brainboxweb.lovable.app/#organization",
              name: brand.name,
              url: "https://brainboxweb.lovable.app/",
              description: brand.tagline,
              slogan: brand.quote,
              areaServed: brand.locations,
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: reviewSummary.average,
                reviewCount: Number(reviewSummary.total.replace(/[^\d]/g, "")),
                bestRating: 5,
                worstRating: 1,
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://brainboxweb.lovable.app/#website",
              url: "https://brainboxweb.lovable.app/",
              name: brand.name,
              publisher: { "@id": "https://brainboxweb.lovable.app/#organization" },
            },
            ...services.map((s) => ({
              "@type": "Service",
              name: s.title,
              description: s.details?.overview ?? servicesIntro,
              provider: { "@id": "https://brainboxweb.lovable.app/#organization" },
            })),
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout isHome>
      <AboutContent />

      <section className="surface-card p-6 md:p-8">
        <h2 className="text-xl font-semibold tracking-tight">Explore Brainboxworld</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-xl border border-border p-4 text-sm font-semibold transition-colors hover:bg-muted"
            >
              {n.label}
              <span className="ml-1 text-primary" aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
