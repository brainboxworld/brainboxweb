import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/brainboxworld-logo.png";
import banner from "@/assets/brainboxworld-banner.jpg";

const WHATSAPP = "https://wa.me/13312782900";
const EMAIL = "info@brainboxworld.dedyn.io";
const SOCIALS = [
  { label: "Brand LinkedIn", href: "https://www.linkedin.com/company/brainboxworld/" },
  { label: "Founder LinkedIn", href: "https://www.linkedin.com/in/adam-bawa-aliyu-8463a93b2" },
  { label: "Instagram", href: "https://www.instagram.com/brainboxproworld" },
  { label: "TikTok", href: "https://www.tiktok.com/@brainboxworld" },
  { label: "X", href: "https://x.com/Brainboxworld" },
];

const TABS = ["About", "Services", "Reviews", "Portfolio", "Team", "Contact"] as const;
type Tab = (typeof TABS)[number];

const SKILLS = [
  "Shopify Store Development",
  "Dropshipping Store Builds",
  "Website Design & Redesign",
  "Shopify SEO",
  "Landing Page Optimization",
  "Conversion Rate Optimization",
  "Theme Customization",
  "Product Research",
  "Email & SMS Marketing",
  "Paid Social Ads",
  "Store Migration",
  "Ongoing Store Management",
];

const METRICS = [
  { value: "450+", label: "Projects Delivered" },
  { value: "6+", label: "Years Experience" },
  { value: "280+", label: "Happy Clients" },
  { value: "98%", label: "On-time Delivery" },
  { value: "4.9/5", label: "Average Rating" },
];

const SERVICES = [
  {
    title: "Shopify Store Development",
    body: "Custom-built storefronts engineered for speed, clarity and checkout completion — from a blank slate to launch-ready.",
  },
  {
    title: "Design & Redesign",
    body: "A brand-accurate visual system applied across home, collection and product pages so every screen sells consistently.",
  },
  {
    title: "Conversion Optimization",
    body: "We audit the funnel, test the friction points and ship changes that move add-to-cart and checkout rates, not just opinions.",
  },
  {
    title: "SEO & Content",
    body: "Technical fixes, structured data and product copy that helps your catalogue get found without paying for every click.",
  },
  {
    title: "Store Management",
    body: "Day-to-day operations: catalogue updates, app hygiene, speed monitoring and monthly performance reporting.",
  },
  {
    title: "Growth Marketing",
    body: "Email flows, retention campaigns and paid social creative built around your actual margins.",
  },
];

const REVIEWS = [
  {
    name: "Daniel O.",
    role: "Apparel brand owner",
    text: "They rebuilt our storefront in under three weeks and the checkout drop-off finally stopped being our biggest problem.",
  },
  {
    name: "Priya S.",
    role: "Home goods founder",
    text: "Clear communication, fast replies and no jargon. The redesign paid for itself in the first quarter.",
  },
  {
    name: "Marcus T.",
    role: "DTC electronics",
    text: "The SEO cleanup alone brought steady organic traffic we had never seen before. Genuinely reliable team.",
  },
];

const PORTFOLIO = [
  { title: "Skincare storefront rebuild", result: "+41% conversion rate" },
  { title: "Fashion catalogue migration", result: "1,200 SKUs, zero downtime" },
  { title: "Electronics SEO overhaul", result: "3.4x organic sessions" },
  { title: "Home decor launch", result: "Launched in 18 days" },
];

const TEAM = [
  { name: "Adam Bawa Aliyu", role: "Founder & Lead Strategist" },
  { name: "Brainbox Dev Team", role: "Shopify & Frontend Engineering" },
  { name: "Brainbox Growth Team", role: "SEO, Ads & Retention" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brainboxworld — Shopify & eCommerce Agency" },
      {
        name: "description",
        content:
          "Brainboxworld builds, optimizes and manages high-converting Shopify stores. Design, SEO, CRO and growth marketing for eCommerce brands.",
      },
      { property: "og:title", content: "Brainboxworld — Shopify & eCommerce Agency" },
      {
        property: "og:description",
        content:
          "Shopify development, redesign, SEO and conversion optimization for growing eCommerce brands.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="surface-card p-6 md:p-8">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Index() {
  const [tab, setTab] = useState<Tab>("About");

  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-44 w-full overflow-hidden md:h-60">
        <img
          src={banner}
          alt="Brainboxworld eCommerce agency banner"
          width={1920}
          height={640}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 lg:grid-cols-[300px_1fr]">
        <aside className="space-y-4">
          <div className="surface-card p-6 text-center">
            <img
              src={logo}
              alt="Brainboxworld logo"
              width={768}
              height={768}
              loading="lazy"
              className="mx-auto h-28 w-28 rounded-full border border-border bg-card object-contain p-2"
            />
            <h1 className="mt-4 text-2xl font-bold tracking-tight">Brainboxworld</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              eCommerce & Shopify Growth Agency
            </p>

            <p className="mt-3 text-sm font-medium text-foreground">
              ★ 4.9 <span className="text-muted-foreground">(280+ clients)</span>
            </p>

            <p className="mt-4 text-sm italic text-muted-foreground">
              “We turn browsing into buying.”
            </p>

            <dl className="mt-5 space-y-2 text-left text-sm">
              <div>
                <dt className="text-muted-foreground">Serving</dt>
                <dd className="font-medium">United States, UK & West Africa</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Languages</dt>
                <dd className="font-medium">English & French</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Response time</dt>
                <dd className="font-medium">Under 1 hour</dd>
              </div>
            </dl>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-5 block rounded-lg bg-gradient-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
            >
              Chat on WhatsApp
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-2 block rounded-lg border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              Email us
            </a>
          </div>

          <div className="surface-card p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Follow us
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="space-y-6">
          <nav className="surface-card flex flex-wrap gap-1 p-2">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  tab === t
                    ? "bg-gradient-brand text-brand-foreground"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                {t}
              </button>
            ))}
          </nav>

          {tab === "About" && (
            <>
              <Section title="About Us">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Brainboxworld is an eCommerce agency focused on Shopify. We design, build,
                  optimize and manage online stores for brands that want their storefront to do
                  real commercial work — not just look tidy. Our team combines development, SEO
                  and growth marketing so the store you launch keeps improving after launch day.
                </p>
              </Section>

              <Section title="Skills & Expertise">
                <ul className="flex flex-wrap gap-2">
                  {SKILLS.map((s) => (
                    <li
                      key={s}
                      className="rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </Section>

              <Section title="Key Metrics">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
                  {METRICS.map((m) => (
                    <div key={m.label} className="rounded-xl bg-muted p-4 text-center">
                      <p className="text-xl font-bold">{m.value}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{m.label}</p>
                    </div>
                  ))}
                </div>
              </Section>
            </>
          )}

          {tab === "Services" && (
            <Section title="What We Do">
              <div className="grid gap-4 md:grid-cols-2">
                {SERVICES.map((s) => (
                  <article key={s.title} className="rounded-xl border border-border p-5">
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  </article>
                ))}
              </div>
            </Section>
          )}

          {tab === "Reviews" && (
            <Section title="Client Reviews">
              <div className="space-y-4">
                {REVIEWS.map((r) => (
                  <blockquote key={r.name} className="rounded-xl border border-border p-5">
                    <p className="text-sm leading-relaxed">“{r.text}”</p>
                    <footer className="mt-3 text-xs text-muted-foreground">
                      {r.name} — {r.role}
                    </footer>
                  </blockquote>
                ))}
              </div>
            </Section>
          )}

          {tab === "Portfolio" && (
            <Section title="Selected Work">
              <div className="grid gap-4 md:grid-cols-2">
                {PORTFOLIO.map((p) => (
                  <article key={p.title} className="rounded-xl border border-border p-5">
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="mt-2 text-sm font-medium text-primary">{p.result}</p>
                  </article>
                ))}
              </div>
            </Section>
          )}

          {tab === "Team" && (
            <Section title="Our Team">
              <div className="grid gap-4 md:grid-cols-3">
                {TEAM.map((t) => (
                  <article key={t.name} className="rounded-xl border border-border p-5 text-center">
                    <div className="mx-auto h-14 w-14 rounded-full bg-gradient-brand" />
                    <h3 className="mt-3 font-semibold">{t.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{t.role}</p>
                  </article>
                ))}
              </div>
            </Section>
          )}

          {tab === "Contact" && (
            <Section title="Get in Touch">
              <ul className="space-y-3 text-sm">
                <li>
                  <span className="text-muted-foreground">WhatsApp / Phone: </span>
                  <a href={WHATSAPP} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                    +1 (331) 278-2900
                  </a>
                </li>
                <li>
                  <span className="text-muted-foreground">Email: </span>
                  <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">
                    {EMAIL}
                  </a>
                </li>
                {SOCIALS.map((s) => (
                  <li key={s.label}>
                    <span className="text-muted-foreground">{s.label}: </span>
                    <a href={s.href} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                      {s.href}
                    </a>
                  </li>
                ))}
              </ul>
            </Section>
          )}
        </main>
      </div>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Brainboxworld. All rights reserved.
      </footer>

      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Brainboxworld on WhatsApp"
        className="fixed bottom-6 right-6 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-lg transition-opacity hover:opacity-90"
      >
        WhatsApp
      </a>
    </div>
  );
}
