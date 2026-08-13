import { useEffect, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { LiveChat } from "@/components/LiveChat";
import { brand, contact, socials, footer, about } from "@/content/site";

export const NAV = [
  { label: "Reviews", to: "/reviews" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Services", to: "/services" },
  { label: "About Us", to: "/about" },
  { label: "Team", to: "/team" },
  { label: "Contact", to: "/contact" },
] as const;

const LEGAL = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Disclaimer", to: "/disclaimer" },
] as const;

export function SectionHeader({ title, intro }: { title: string; intro?: string }) {
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

export function SocialIcon({ name }: { name?: string }) {
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

function Sidebar({ heading }: { heading?: boolean }) {
  const Heading = heading ? "h1" : "p";
  return (
    <aside className="space-y-4">
      <div className="surface-card p-5 text-center sm:p-6">
        <div className="relative mx-auto mt-2 w-28">
          <img
            src={brand.logo}
            alt={`${brand.name} eCommerce & Shopify agency`}
            width={768}
            height={768}
            className="h-28 w-28 rounded-full border border-border bg-card object-contain p-2"
          />
          <span className="absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-card bg-emerald-500">
            <span className="sr-only">Online</span>
          </span>
        </div>
        <p className="mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5 font-medium text-emerald-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
            Online
          </span>
          <span aria-hidden="true">•</span>
          <span className="inline-flex items-center gap-1.5">
            <img
              src={`https://flagcdn.com/w40/${brand.presence.fromFlag}.png`}
              alt=""
              width={20}
              height={14}
              className="h-3.5 w-5 rounded-[2px] object-cover"
            />
            From {brand.presence.fromLabel}
          </span>
          <span aria-hidden="true">•</span>
          <LocalTime />
        </p>
        <Heading className="mt-4 text-lg font-bold tracking-tight sm:text-xl">
          {brand.name} — {brand.tagline}
        </Heading>

        <p className="mt-3 text-sm font-medium">
          ★ {brand.rating} <span className="text-muted-foreground">({brand.reviewCount})</span>
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
        <Link
          to="/contact"
          className="mt-2 block w-full rounded-lg border border-border px-4 py-2.5 text-center text-sm font-medium transition-colors hover:bg-muted"
        >
          Send a message
        </Link>
      </div>
    </aside>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={brand.logo}
              alt=""
              width={40}
              height={40}
              loading="lazy"
              className="h-10 w-10 rounded-full border border-border object-contain p-1"
            />
          </div>
        </div>


        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide">Explore</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-muted-foreground hover:text-foreground">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide">Legal</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {LEGAL.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-muted-foreground hover:text-foreground">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>

          <h2 className="mt-6 text-sm font-semibold uppercase tracking-wide">Follow us</h2>
          <div className="mt-3 flex flex-wrap gap-2">
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
      </div>

      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        {footer.text}
      </div>
    </footer>
  );
}

export function SiteLayout({
  children,
  isHome = false,
}: {
  children: ReactNode;
  isHome?: boolean;
}) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <div className="w-full border-b border-border bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-6 sm:py-10 md:py-14">
          <Link to="/">
            <img
              src={brand.shopifyPartnerBadge}
              alt={`${brand.name} — Shopify Partner`}
              width={556}
              height={200}
              className="h-16 w-auto max-w-full object-contain sm:h-24 md:h-32"
            />
          </Link>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 px-3 py-6 sm:px-4 sm:py-8 lg:grid-cols-[320px_1fr]">
        <Sidebar heading={isHome} />

        <main className="min-w-0 space-y-6">
          <nav className="surface-card flex flex-wrap gap-1 p-2">
            <Link
              to="/"
              activeOptions={{ exact: true }}
              activeProps={{ className: "bg-gradient-brand text-brand-foreground" }}
              inactiveProps={{ className: "text-muted-foreground hover:bg-muted" }}
              className="rounded-lg px-4 py-2 text-sm font-medium transition-colors"
            >
              Home
            </Link>
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeProps={{ className: "bg-gradient-brand text-brand-foreground" }}
                inactiveProps={{ className: "text-muted-foreground hover:bg-muted" }}
                className="rounded-lg px-4 py-2 text-sm font-medium transition-colors"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {children}
        </main>
      </div>

      <SiteFooter />
      <LiveChat />
    </div>
  );
}

export default SiteLayout;
