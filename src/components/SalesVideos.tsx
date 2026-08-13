import { useRef, useState } from "react";
import { salesVideos, salesVideosIntro } from "@/content/site";

function SalesVideoCard({ item }: { item: (typeof salesVideos)[number] }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  return (
    <article className="overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)]">
      <div className="relative bg-background">
        <video
          ref={ref}
          src={item.src}
          poster={item.poster}
          controls={playing}
          playsInline
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
          className="max-h-[70vh] w-full bg-background object-contain"
        />
        {!playing && (
          <button
            type="button"
            aria-label={`Play ${item.title}`}
            onClick={() => {
              void ref.current?.play();
              setPlaying(true);
            }}
            className="absolute inset-0 grid place-items-center bg-background/30 transition-colors hover:bg-background/20"
          >
            <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-brand text-brand-foreground shadow-lg">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 translate-x-0.5">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>

      <div className="p-4">
        <h4 className="text-sm font-semibold">{item.title}</h4>
        {item.note && <p className="mt-1 text-xs text-muted-foreground">{item.note}</p>}
      </div>
    </article>
  );
}

export function SalesVideos() {
  if (salesVideos.length === 0) return null;

  return (
    <section className="mt-8">
      <h3 className="text-lg font-bold tracking-tight sm:text-xl">Store Sales Growth</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{salesVideosIntro}</p>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {salesVideos.map((v) => (
          <SalesVideoCard key={v.src} item={v} />
        ))}
      </div>
    </section>
  );
}

export default SalesVideos;
