import { clientSites, clientSitesIntro } from "@/content/site";

function domainOf(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

function faviconUrl(url: string) {
  return `https://www.google.com/s2/favicons?domain=${domainOf(url)}&sz=128`;
}

export function ClientSites() {
  return (
    <section className="mt-8 rounded-xl border border-border p-4 sm:p-6">
      <h3 className="text-lg font-bold tracking-tight sm:text-xl">Live Client Websites</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{clientSitesIntro}</p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {clientSites.map((s) => (
          <a
            key={s.url}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="group flex h-full flex-col rounded-xl border border-border p-4 transition-colors hover:border-primary hover:bg-muted/40"
          >
            <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-lg border border-border bg-background">
                <img
                  src={faviconUrl(s.url)}
                  alt=""
                  width={28}
                  height={28}
                  loading="lazy"
                  className="h-7 w-7 object-contain"
                />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{s.name}</p>
                <p className="truncate text-xs text-muted-foreground">{domainOf(s.url)}</p>
              </div>
            </div>

            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.work}</p>

            <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
              Visit live site
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              >
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ClientSites;
