import { useState } from "react";
import { clientSites, clientSitesIntro } from "@/content/site";
import mobileDrugsScreen from "@/assets/site-previews/mobile-drugs-screen.jpg";
import musicBoxAttic from "@/assets/site-previews/music-box-attic.jpg";
import childrensHha from "@/assets/site-previews/childrens-hha.jpg";
import retrospec from "@/assets/site-previews/retrospec.jpg";
import darnTough from "@/assets/site-previews/darn-tough.jpg";
import weightliftingHouse from "@/assets/site-previews/weightlifting-house.jpg";
import landmarkProject from "@/assets/site-previews/landmark-project.jpg";
import slickGorilla from "@/assets/site-previews/slick-gorilla.jpg";
import mensCompressionShirt from "@/assets/site-previews/mens-compression-shirt.jpg";
import goodKiddyCollection from "@/assets/site-previews/good-kiddy-collection.jpg";
import stayLoaded from "@/assets/site-previews/stay-loaded.jpg";
import bellyBandit from "@/assets/site-previews/belly-bandit.jpg";
import afflictionClothing from "@/assets/site-previews/affliction-clothing.jpg";
import greedierSocialMedia from "@/assets/site-previews/greedier-social-media.jpg";
import maisonette from "@/assets/site-previews/maisonette.jpg";

function domainOf(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

function faviconUrl(url: string) {
  return `https://www.google.com/s2/favicons?domain=${domainOf(url)}&sz=128`;
}

function initialsOf(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? "")
    .join("");
}

const previews = [
  mobileDrugsScreen, musicBoxAttic, childrensHha, retrospec, darnTough,
  weightliftingHouse, landmarkProject, slickGorilla, mensCompressionShirt,
  goodKiddyCollection, stayLoaded, bellyBandit, afflictionClothing,
  greedierSocialMedia, maisonette,
];

function SiteCard({
  site,
  preview,
}: {
  site: { url: string; name: string; work: string };
  preview?: string;
}) {
  const [imageFailed, setImageFailed] = useState(false);
  const [iconFailed, setIconFailed] = useState(false);
  const showImage = Boolean(preview) && !imageFailed;

  return (
    <a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:border-primary"
    >
      {/* browser chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-muted px-3 py-2">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        </span>
        <span className="min-w-0 flex-1 truncate rounded-md bg-background px-2 py-1 text-[11px] text-muted-foreground">
          {domainOf(site.url)}
        </span>
      </div>

      <div className="relative aspect-[16/10] w-full overflow-hidden bg-background">
        {showImage ? (
          <img
            src={preview}
            alt={`${site.name} website preview`}
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="grid h-full w-full place-items-center bg-gradient-brand">
            <span className="text-2xl font-black tracking-tight text-brand-foreground">
              {initialsOf(site.name)}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-lg border border-border bg-background text-[11px] font-bold text-muted-foreground">
            {iconFailed ? (
              initialsOf(site.name)
            ) : (
              <img
                src={faviconUrl(site.url)}
                alt=""
                width={20}
                height={20}
                loading="lazy"
                onError={() => setIconFailed(true)}
                className="h-5 w-5 object-contain"
              />
            )}
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">{site.name}</p>
            <p className="truncate text-xs text-muted-foreground">{domainOf(site.url)}</p>
          </div>
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{site.work}</p>

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
      </div>
    </a>
  );
}

export function ClientSites() {
  return (
    <section className="mt-8 rounded-xl border border-border p-4 sm:p-6">
      <h3 className="text-lg font-bold tracking-tight sm:text-xl">Live Client Websites</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{clientSitesIntro}</p>

      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {clientSites.map((site, index) => (
          <SiteCard key={site.url} site={site} preview={previews[index]} />
        ))}
      </div>
    </section>
  );
}

/** Auto-scrolling (marquee) version used on the Reviews page. */
export function ClientSitesMarquee() {
  const loop = [...clientSites, ...clientSites];

  return (
    <section className="surface-card p-4 sm:p-6 md:p-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Live Client Websites</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {clientSitesIntro}
        </p>
      </div>

      <div className="marquee mt-6">
        <div className="marquee-track">
          {loop.map((site, index) => (
            <div key={`${site.url}-${index}`} className="w-[260px] shrink-0 sm:w-[320px]">
              <SiteCard site={site} preview={previews[index % clientSites.length]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientSites;

