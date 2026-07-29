import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ReviewsPanel } from "@/components/ReviewsPanel";
import {
  brand,
  contact,
  socials,
  about,
  skills,
  metrics,
  services,
  servicesIntro,
  successRatings,
  portfolio,
  portfolioIntro,
  team,
  teamIntro,
  teamLocations,
  contactIntro,
  footer,
} from "@/content/site";

const TABS = ["About", "Services", "Reviews", "Portfolio", "Team", "Contact"] as const;
type Tab = (typeof TABS)[number];

function LocalTime() {
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    const tick = () =>
      setNow(
        new Intl.DateTimeFormat("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
          timeZone: brand.presence.timezone,
        }).format(new Date()),
      );
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  if (!now) return null;
  return <span>{now} local time</span>;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brainboxworld — Shopify & eCommerce Agency" },
      {
        name: "description",
        content:
          "Brainboxworld builds, optimizes and manages high-converting Shopify stores. Development, design, SEO, ads and store management for eCommerce brands.",
      },
      { property: "og:title", content: "Brainboxworld — Shopify & eCommerce Agency" },
      {
        property: "og:description",
        content:
          "Shopify development, redesign, SEO and conversion optimization for growing eCommerce brands.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function SocialIcon({ name }: { name?: string }) {
  const cls = "h-4 w-4";
  switch (name) {
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden="true">
          <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.3 8.2h4.4V24H.3V8.2Zm7.5 0h4.2v2.2h.06c.6-1.1 2.05-2.2 4.2-2.2 4.5 0 5.34 2.9 5.34 6.7V24h-4.4v-7.7c0-1.84-.03-4.2-2.6-4.2-2.6 0-3 2-3 4.07V24H7.8V8.2Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden="true">
          <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.42.37 1.06.42 2.23.06 1.25.07 1.62.07 4.8s-.01 3.55-.07 4.8c-.05 1.17-.25 1.8-.42 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.17-1.06.37-2.23.42-1.25.06-1.62.07-4.85.07s-3.6-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.42a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.17-.42-.37-1.06-.42-2.23C2.21 15.55 2.2 15.18 2.2 12s.01-3.55.07-4.8c.05-1.17.25-1.8.42-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.17 1.06-.37 2.23-.42C8.45 2.21 8.82 2.2 12 2.2Zm0 3.05A6.75 6.75 0 1 0 18.75 12 6.75 6.75 0 0 0 12 5.25Zm0 11.13A4.38 4.38 0 1 1 16.38 12 4.38 4.38 0 0 1 12 16.38Zm6.99-11.4a1.58 1.58 0 1 1-1.58-1.57 1.58 1.58 0 0 1 1.58 1.57Z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden="true">
          <path d="M16.6 5.82A4.9 4.9 0 0 1 15.4 2h-3.32v13.3a2.9 2.9 0 1 1-2.06-2.78V9.1a6.2 6.2 0 1 0 5.38 6.14V8.9a8.2 8.2 0 0 0 4.8 1.54V7.12a4.9 4.9 0 0 1-3.6-1.3Z" />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden="true">
          <path d="M18.24 2.25h3.3l-7.2 8.24L23 21.75h-6.63l-5.2-6.8-5.94 6.8H1.92l7.7-8.8L1.25 2.25h6.8l4.7 6.21 5.49-6.21Zm-1.16 17.52h1.83L7.01 4.13H5.05l12.03 15.64Z" />
        </svg>
      );
    default:
      return null;
  }
}

function SectionHeader({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
      {intro && (
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {intro}
        </p>
      )}
    </div>
  );
}


function Index() {
  const [tab, setTab] = useState<Tab>("About");

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-3">
          <img
            src={brand.shopifyPartnerBadge}
            alt="Shopify Partner"
            width={556}
            height={200}
            className="h-8 w-auto max-w-full object-contain sm:h-10"
          />
        </div>
      </div>

      <div className="relative h-36 w-full overflow-hidden sm:h-44 md:h-60">
        <img
          src={brand.banner}
          alt={`${brand.name} eCommerce agency banner`}
          width={1920}
          height={640}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 px-3 py-6 sm:px-4 sm:py-8 lg:grid-cols-[320px_1fr]">
        {/* Sidebar */}
        <aside className="space-y-4">
          <div className="surface-card p-5 text-center sm:p-6">

            <img
              src={brand.logo}
              alt={`${brand.name} logo`}
              width={768}
              height={768}
              className="mx-auto mt-4 h-28 w-28 rounded-full border border-border bg-card object-contain p-2"
            />
            <h1 className="mt-4 text-2xl font-bold tracking-tight">{brand.name}</h1>
            <p className="mt-1 text-sm text-muted-foreground">{brand.tagline}</p>

            <p className="mt-3 text-sm font-medium">
              ★ {brand.rating}{" "}
              <span className="text-muted-foreground">({brand.reviewCount})</span>
            </p>

            <span className="mt-3 inline-block rounded-full bg-gradient-brand px-3 py-1 text-xs font-semibold text-brand-foreground">
              {brand.partnerBadgeLabel}
            </span>


            <p className="mt-4 text-sm italic text-muted-foreground">“{brand.quote}”</p>

            <dl className="mt-5 space-y-2 text-left text-sm">
              <div>
                <dt className="text-muted-foreground">Serving</dt>
                <dd className="font-medium">{brand.locations}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Languages</dt>
                <dd className="font-medium">{brand.languages}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Average response time</dt>
                <dd className="font-medium">{brand.responseTime}</dd>
              </div>
            </dl>

            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-5 block rounded-lg bg-gradient-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
            >
              Contact Us
            </a>
            <button
              onClick={() => setTab("Contact")}
              className="mt-2 w-full rounded-lg border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              Send a message
            </button>
          </div>

          <div className="surface-card p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Follow us
            </h2>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  title={s.label}
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-gradient-brand hover:text-brand-foreground"
                >
                  <SocialIcon name={s.icon} />
                </a>
              ))}
            </div>

          </div>
        </aside>

        {/* Main */}
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
              <section className="surface-card p-6 md:p-8">
                <h2 className="text-xl font-semibold tracking-tight">{about.heading}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{about.body}</p>
              </section>

              <section className="surface-card p-6 md:p-8">
                <h2 className="text-xl font-semibold tracking-tight">Skills & Expertise</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <li
                      key={s}
                      className="rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="surface-card p-6 md:p-8">
                <h2 className="text-xl font-semibold tracking-tight">Key Metrics</h2>
                <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-5">
                  {metrics.map((m) => (
                    <div key={m.label} className="rounded-xl bg-muted p-4 text-center">
                      <p className="text-xl font-bold">{m.value}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{m.label}</p>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}

          {tab === "Services" && (
            <>
              <section className="surface-card p-6 md:p-8">
                <SectionHeader title="Our Services" intro={servicesIntro} />
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  {services.map((s) => (
                    <article
                      key={s.title}
                      className="overflow-hidden rounded-xl border border-border"
                    >
                      <img
                        src={s.image}
                        alt={s.title}
                        width={768}
                        height={512}
                        loading="lazy"
                        className="h-40 w-full object-cover"
                      />
                      <div className="p-5">
                        <h3 className="font-semibold">{s.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {s.body}
                        </p>
                        <p className="mt-3 text-sm font-medium">
                          ★ {s.rating}{" "}
                          <span className="text-muted-foreground">({s.reviews})</span>
                        </p>
                        <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                          <li>{s.experts}</li>
                          <li>{s.returning}</li>
                          <li>Offers video consultation</li>
                        </ul>
                        <div className="mt-4 flex items-center justify-between gap-3">
                          <span className="text-sm font-bold">{s.price}</span>
                          <a
                            href={contact.whatsapp}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-lg bg-gradient-brand px-4 py-2 text-xs font-semibold text-brand-foreground transition-opacity hover:opacity-90"
                          >
                            Get started
                          </a>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className="surface-card p-6 md:p-8">
                <h2 className="text-xl font-semibold tracking-tight">Our Success Ratings</h2>
                <div className="mt-4 space-y-4">
                  {successRatings.map((r) => (
                    <div key={r.label}>
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{r.label}</span>
                        <span className="text-muted-foreground">{r.value}%</span>
                      </div>
                      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-gradient-brand"
                          style={{ width: `${r.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}

          {tab === "Reviews" && <ReviewsPanel />}

          {tab === "Portfolio" && (
            <section className="surface-card p-6 md:p-8">
              <SectionHeader title="Our Portfolio" intro={portfolioIntro} />
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {portfolio.map((p) => (
                  <article key={p.title} className="overflow-hidden rounded-xl border border-border">
                    <img
                      src={p.image}
                      alt={p.title}
                      width={768}
                      height={512}
                      loading="lazy"
                      className="h-44 w-full object-cover"
                    />
                    <div className="p-5">
                      <h3 className="font-semibold">{p.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                      <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
                        <span className="rounded-full bg-muted px-2.5 py-1">{p.category}</span>
                        <span className="rounded-full bg-muted px-2.5 py-1">{p.duration}</span>
                        <span className="rounded-full bg-muted px-2.5 py-1">♥ {p.likes}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {tab === "Team" && (
            <section className="surface-card p-6 md:p-8">
              <SectionHeader title="Our Expert Team" intro={teamIntro} />

              <div className="mt-6 rounded-xl bg-muted p-5">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Global Presence
                </h3>
                <ul className="mt-3 flex flex-wrap gap-3 text-sm">
                  {teamLocations.map((l) => (
                    <li key={l.label} className="rounded-full bg-background px-3 py-1.5">
                      {l.flag} {l.label}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {team.map((m) => (
                  <article
                    key={m.name}
                    className="overflow-hidden rounded-xl border border-border text-center"
                  >
                    <img
                      src={m.photo}
                      alt={`${m.name} — ${m.role}`}
                      width={512}
                      height={640}
                      loading="lazy"
                      className="h-56 w-full object-cover object-top"
                    />
                    <div className="p-5">
                      <h3 className="font-semibold">{m.name}</h3>
                      <p className="mt-1 text-xs font-medium text-primary">{m.role}</p>
                      <a
                        href={`mailto:${m.email}`}
                        className="mt-2 block break-all text-xs text-muted-foreground hover:underline"
                      >
                        {m.email}
                      </a>
                      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{m.bio}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {tab === "Contact" && <ContactPanel />}
        </main>
      </div>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        <p className="font-semibold text-foreground">{brand.name}</p>
        <p className="mt-2">{footer.text}</p>
      </footer>

      <a
        href={contact.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label={`Chat with ${brand.name} on WhatsApp`}
        className="fixed bottom-6 right-6 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-lg transition-opacity hover:opacity-90"
      >
        WhatsApp
      </a>
    </div>
  );
}

function ContactPanel() {
  const [sent, setSent] = useState(false);

  return (
    <div className="space-y-6">
      <section className="surface-card p-6 md:p-8">
        <SectionHeader title="Get In Touch" intro={contactIntro} />

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-border p-5 text-center transition-colors hover:bg-muted"
          >
            <p className="font-semibold">WhatsApp</p>
            <p className="mt-1 text-sm text-muted-foreground">{contact.phoneDisplay}</p>
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="rounded-xl border border-border p-5 text-center transition-colors hover:bg-muted"
          >
            <p className="font-semibold">Email</p>
            <p className="mt-1 break-all text-sm text-muted-foreground">{contact.email}</p>
          </a>
          <div className="rounded-xl border border-border p-5 text-center">
            <p className="font-semibold">Response Time</p>
            <p className="mt-1 text-sm text-muted-foreground">{brand.responseTime}</p>
          </div>
        </div>
      </section>

      <section className="surface-card p-6 md:p-8">
        <h2 className="text-xl font-semibold tracking-tight">Send Us a Message</h2>
        <form
          className="mt-5 grid gap-4 md:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get(
              "phone",
            )}\n\n${data.get("message")}`;
            window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
              String(data.get("subject") ?? "New enquiry"),
            )}&body=${encodeURIComponent(body)}`;
            setSent(true);
          }}
        >
          <label className="text-sm font-medium">
            Full Name *
            <input
              name="name"
              required
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </label>
          <label className="text-sm font-medium">
            Email *
            <input
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </label>
          <label className="text-sm font-medium">
            Phone Number
            <input
              name="phone"
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </label>
          <label className="text-sm font-medium">
            Subject *
            <input
              name="subject"
              required
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </label>
          <label className="text-sm font-medium md:col-span-2">
            Message *
            <textarea
              name="message"
              required
              rows={5}
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </label>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="rounded-lg bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
            >
              Send Message
            </button>
            {sent && (
              <p className="mt-3 text-sm text-muted-foreground">
                Your email app should now be open with the message ready to send.
              </p>
            )}
          </div>
        </form>
      </section>

      <section className="surface-card p-6 text-center md:p-8">
        <h2 className="text-xl font-semibold tracking-tight">Prefer Instant Chat?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Connect with us on WhatsApp for immediate assistance
        </p>
        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-block rounded-lg bg-gradient-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
        >
          Start WhatsApp Chat
        </a>
      </section>

      <section className="surface-card p-6 md:p-8">
        <h2 className="text-xl font-semibold tracking-tight">Follow us</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              title={s.label}
              aria-label={s.label}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-gradient-brand hover:text-brand-foreground"
            >
              <SocialIcon name={s.icon} />
            </a>
          ))}
        </div>

      </section>
    </div>
  );
}
