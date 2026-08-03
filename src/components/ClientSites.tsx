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

function domainOf(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

function faviconUrl(url: string) {
  return `https://www.google.com/s2/favicons?domain=${domainOf(url)}&sz=128`;
}

const previews = [
  mobileDrugsScreen, musicBoxAttic, childrensHha, retrospec, darnTough,
  weightliftingHouse, landmarkProject, slickGorilla, mensCompressionShirt,
  goodKiddyCollection, stayLoaded, bellyBandit, afflictionClothing, greedierSocialMedia,
];

export function ClientSites() {
  return (
    <section className="mt-8 rounded-xl border border-border p-4 sm:p-6">
      <h3 className="text-lg font-bold tracking-tight sm:text-xl">Live Client Websites</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{clientSitesIntro}</p>

      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {clientSites.map((s, index) => (
          <a
            key={s.url}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="group flex h-full flex-col overflow-hidden rounded-xl border border-border transition-colors hover:border-primary"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
              <img
                src={previews[index]}
                alt={`${s.name} website preview`}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>


            <div className="flex flex-1 flex-col p-4">
              <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-lg border border-border bg-background">
                  <img
                    src={faviconUrl(s.url)}
                    alt=""
                    width={20}
                    height={20}
                    loading="lazy"
                    className="h-5 w-5 object-contain"
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
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ClientSites;
