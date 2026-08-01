import { useRef, useState } from "react";
import { salesVideos, salesVideosIntro } from "@/content/site";

export function SalesVideos() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  const current = salesVideos[index];
  if (!current) return null;

  const go = (dir: number) => {
    const next = (index + dir + salesVideos.length) % salesVideos.length;
    setIndex(next);
    setPlaying(false);
  };

  return (
    <section className="mt-8 rounded-xl border border-border p-4 sm:p-6">
      <h3 className="text-lg font-bold tracking-tight sm:text-xl">Store Sales Growth</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{salesVideosIntro}</p>

      <div className="mt-5 overflow-hidden rounded-xl border border-border bg-muted">
        <div className="relative">
          <video
            ref={ref}
            key={current.src}
            src={current.src}
            controls={playing}
            playsInline
            preload="metadata"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            className="max-h-[70vh] w-full bg-background object-contain"
          />
          {!playing && (
            <button
              type="button"
              aria-label={`Play ${current.title}`}
              onClick={() => {
                void ref.current?.play();
                setPlaying(true);
              }}
              className="absolute inset-0 grid place-items-center bg-background/40 transition-colors hover:bg-background/30"
            >
              <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-brand text-brand-foreground shadow-lg">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 translate-x-0.5">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous client video"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border transition-colors hover:bg-muted"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <div className="min-w-0 text-center">
          <p className="truncate text-sm font-semibold">{current.title}</p>
          <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">{current.note}</p>
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next client video"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border transition-colors hover:bg-muted"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {salesVideos.map((v, i) => (
          <button
            key={v.src}
            type="button"
            aria-label={`Show ${v.title}`}
            onClick={() => {
              setIndex(i);
              setPlaying(false);
            }}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-gradient-brand" : "w-2 bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default SalesVideos;
