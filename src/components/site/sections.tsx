import { useState } from "react";
import { SectionHeader } from "@/components/site/SiteLayout";
import { flagUrl } from "@/lib/reviews";
import {
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
  contact,
  contactIntro,
  brand,
} from "@/content/site";

export function AboutContent() {
  const [showAllSkills, setShowAllSkills] = useState(false);

  return (
    <>
      <section className="surface-card p-6 md:p-8">
        <h2 className="text-xl font-semibold tracking-tight">{about.heading}</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{about.body}</p>
      </section>

      <section className="surface-card p-6 md:p-8">
        <h2 className="text-xl font-semibold tracking-tight">Skills & Expertise</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {(showAllSkills ? skills : skills.slice(0, 8)).map((s) => (
            <li
              key={s}
              className="rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-secondary-foreground"
            >
              {s}
            </li>
          ))}
        </ul>
        {skills.length > 8 && (
          <button
            type="button"
            onClick={() => setShowAllSkills((v) => !v)}
            className="mt-4 rounded-lg border border-border px-4 py-2 text-xs font-semibold transition-colors hover:bg-muted"
          >
            {showAllSkills ? "Show fewer skills" : `Show all ${skills.length} skills`}
          </button>
        )}
      </section>

      <KeyMetrics />
    </>
  );
}

export function KeyMetrics() {
  return (
    <section className="surface-card p-6 md:p-8">
      <h2 className="text-xl font-semibold tracking-tight">Key Metrics</h2>
      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-xl bg-muted p-4 text-center">
            <p className="text-xl font-bold">{m.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{m.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


export function ServicesContent() {
  const [openService, setOpenService] = useState<(typeof services)[number] | null>(null);

  return (
    <>
      {openService ? (
        <section className="surface-card overflow-hidden">
          <img
            src={openService.image}
            alt={openService.title}
            loading="lazy"
            className="w-full object-contain"
          />
          <div className="p-5 sm:p-6 md:p-8">
            <button
              onClick={() => setOpenService(null)}
              className="text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              ← Back to all services
            </button>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              {openService.title}
            </h2>
            <p className="mt-1 text-sm font-medium">
              ★ {openService.rating}{" "}
              <span className="text-muted-foreground">({openService.reviews} reviews)</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {openService.details.overview}
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide">What's included</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {openService.details.includes.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide">How we work</h3>
                <ol className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {openService.details.process.map((p, i) => (
                    <li key={p} className="flex gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted text-[11px] font-bold text-foreground">
                        {i + 1}
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="mt-6 grid gap-3 rounded-xl bg-muted p-4 sm:grid-cols-3">
              <div>
                <p className="text-sm font-bold">{openService.price}</p>
                <p className="text-xs text-muted-foreground">Starting price</p>
              </div>
              <div>
                <p className="text-sm font-bold">{openService.details.timeline}</p>
                <p className="text-xs text-muted-foreground">Typical turnaround</p>
              </div>
              <div>
                <p className="text-sm font-bold">{openService.experts}</p>
                <p className="text-xs text-muted-foreground">{openService.returning}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-gradient-brand px-6 py-3 text-center text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
              >
                Get started
              </a>
              <a
                href={`mailto:${contact.email}?subject=${encodeURIComponent(openService.title)}`}
                className="rounded-lg border border-border px-6 py-3 text-center text-sm font-semibold transition-colors hover:bg-muted"
              >
                Ask a question
              </a>
            </div>
          </div>
        </section>
      ) : (
        <section className="surface-card p-4 sm:p-6 md:p-8">
          <SectionHeader title="Our Services" intro={servicesIntro} />
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {services.map((s) => (
              <article
                key={s.title}
                className="flex flex-col overflow-hidden rounded-xl border border-border"
              >
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="w-full bg-muted object-contain"
                />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  <p className="mt-3 text-sm font-medium">
                    ★ {s.rating} <span className="text-muted-foreground">({s.reviews})</span>
                  </p>
                  <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                    <li>{s.experts}</li>
                    <li>{s.returning}</li>
                    <li>Offers video consultation</li>
                  </ul>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-1">
                    <span className="text-sm font-bold">{s.price}</span>
                    <button
                      onClick={() => {
                        setOpenService(s);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="rounded-lg bg-gradient-brand px-4 py-2 text-xs font-semibold text-brand-foreground transition-opacity hover:opacity-90"
                    >
                      View {s.title} details
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

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
  );
}

export function PortfolioProjects() {
  return (
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
              className="max-h-72 w-full bg-muted object-contain"
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
  );
}

export function TeamContent() {
  return (
    <section className="surface-card p-6 md:p-8">
      <SectionHeader title="Our Expert Team" intro={teamIntro} />

      <div className="mt-6 rounded-xl bg-muted p-5">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Global Presence
        </h3>
        <ul className="mt-3 flex flex-wrap gap-3 text-sm">
          {teamLocations.map((l) => (
            <li
              key={l.label}
              className="flex items-center gap-2 rounded-full bg-background px-3 py-1.5"
            >
              <img
                src={flagUrl(l.code)}
                alt=""
                width={20}
                height={14}
                loading="lazy"
                className="h-3.5 w-5 shrink-0 rounded-[2px] object-cover"
              />
              <span>{l.label}</span>
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
            <div className="aspect-[4/5] w-full overflow-hidden bg-muted sm:aspect-[3/4]">
              <img
                src={m.photo}
                alt={`${m.name} — ${m.role}`}
                width={512}
                height={640}
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="p-5">
              <h3 className="font-semibold">{m.name}</h3>
              <p className="mt-1 text-xs font-medium text-primary">{m.role}</p>
              {m.website ? (
                <a
                  href={m.website}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center justify-center rounded-lg bg-gradient-brand px-4 py-2 text-xs font-semibold text-brand-foreground transition-opacity hover:opacity-90"
                >
                  Visit website
                </a>
              ) : m.email ? (
                <a
                  href={`mailto:${m.email}`}
                  className="mt-2 block break-all text-xs text-muted-foreground hover:underline"
                >
                  {m.email}
                </a>
              ) : null}
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{m.bio}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ContactContent() {
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
          Ask our AI assistant a question right here, or connect on WhatsApp for immediate
          assistance from the team
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent("open-live-chat"))}
            className="rounded-lg bg-gradient-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
          >
            Start Live Chat
          </button>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-muted"
          >
            Start WhatsApp Chat
          </a>
        </div>
      </section>
    </div>
  );
}

export function WhatsAppCta() {
  return (
    <section className="surface-card p-6 text-center md:p-8">
      <h2 className="text-xl font-bold tracking-tight md:text-2xl">
        Want a store that looks and sells like these?
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Send your store URL and what's not working. We'll review it and reply within the hour.
      </p>
      <a
        href={contact.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-block rounded-lg bg-gradient-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
      >
        Message on WhatsApp
      </a>
    </section>
  );
}
