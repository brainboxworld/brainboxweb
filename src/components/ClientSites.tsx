import { clientSites, clientSitesIntro } from "@/content/site";

function previewUrl(url: string) {
  return `https://image.thum.io/get/width/800/${url}`;
}

export function ClientSites() {
  return (
    <section className="mt-8 rounded-xl border border-border p-4 sm:p-6">
      <h3 className="text-lg font-bold tracking-tight sm:text-xl">Live Client Websites</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{clientSitesIntro}</p>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        {clientSites.map((s) => (
          <a
            key={s.url}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="group overflow-hidden rounded-xl border border-border transition-colors hover:border-primary"
          >
            <div className="aspect-[16/10] w-full overflow-hidden bg-muted">
              <img
                src={previewUrl(s.url)}
                alt={`${s.name} website preview`}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-4">
              <p className="truncate text-sm font-semibold">{s.name}</p>
              <p className="mt-1 break-all text-xs text-muted-foreground">
                {s.url.replace(/^https?:\/\//, "")}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.work}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                Visit live site
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-3.5 w-3.5"
                >
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ClientSites;
