import { useRef, useState } from "react";
import { videoReviews, videoReviewsIntro } from "@/content/site";
import { flagUrl } from "@/lib/reviews";

function VideoReviewCard({ item }: { item: (typeof videoReviews)[number] }) {
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
          controlsList="nodownload noplaybackrate noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          onContextMenu={(e) => e.preventDefault()}
          playsInline
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
          className="aspect-[9/16] max-h-[85vh] w-full bg-background object-cover"
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
        <h3 className="text-sm font-semibold">{item.title}</h3>
        {(item.name || item.location) && (
          <p className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            {item.flag && (
              <img
                src={flagUrl(item.flag)}
                alt=""
                width={20}
                height={14}
                loading="lazy"
                className="h-3.5 w-5 rounded-[2px] object-cover"
              />
            )}
            {[item.name, item.location].filter(Boolean).join(" • ")}
          </p>
        )}
        {item.note && (
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.note}</p>
        )}
      </div>
    </article>
  );
}

export function VideoReviews() {
  if (videoReviews.length === 0) return null;

  return (
    <section className="surface-card p-4 sm:p-6 md:p-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Video Reviews</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {videoReviewsIntro}
        </p>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {videoReviews.map((v) => (
          <VideoReviewCard key={v.src} item={v} />
        ))}
      </div>
    </section>
  );
}

export default VideoReviews;
