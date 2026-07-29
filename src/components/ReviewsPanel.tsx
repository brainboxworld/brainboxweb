import { useEffect, useState } from "react";
import { Stars } from "@/components/Stars";
import {
  COUNTRIES,
  PAGE_SIZE,
  type Review,
  fetchApprovedReviews,
  flagUrl,
  submitReview,
  timeAgo,
} from "@/lib/reviews";
import { reviewSummary, reviewsIntro, services } from "@/content/site";

function SummaryBlock({ total }: { total: number }) {
  const sum = reviewSummary.breakdown.reduce((a, c) => a + c.count, 0);
  return (
    <div className="mt-6 grid gap-6 rounded-xl bg-muted p-4 sm:p-5 md:grid-cols-[170px_1fr]">
      <div className="text-center">
        <p className="text-4xl font-bold">{reviewSummary.average}</p>
        <Stars value={5} className="mt-1 justify-center" />
        <p className="mt-1 text-xs text-muted-foreground">{reviewSummary.total}</p>
        <p className="mt-1 text-[11px] text-muted-foreground">{total} published here</p>
      </div>
      <div className="space-y-2">
        {reviewSummary.breakdown.map((b) => (
          <div key={b.stars} className="flex items-center gap-2 text-xs sm:gap-3">
            <span className="w-10 shrink-0 font-medium">{b.stars} star</span>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-background">
              <div
                className="h-full rounded-full bg-gradient-brand"
                style={{ width: `${(b.count / sum) * 100}%` }}
              />
            </div>
            <span className="w-10 shrink-0 text-right text-muted-foreground">{b.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReviewCard({ r }: { r: Review }) {
  return (
    <blockquote className="rounded-xl border border-border p-4 sm:p-5">
      <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-sm font-bold text-brand-foreground">
          {r.name.charAt(0).toUpperCase()}
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">{r.name}</p>
          <p className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground">
            <img
              src={flagUrl(r.country_code)}
              alt=""
              width={20}
              height={14}
              loading="lazy"
              className="h-3.5 w-5 shrink-0 rounded-[2px] object-cover"
            />
            <span className="truncate">{r.country}</span>
          </p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
        <Stars value={r.rating} />
        <span className="font-semibold text-foreground">{r.rating.toFixed(1)}</span>
        <span aria-hidden="true">•</span>
        <span>{timeAgo(r.created_at)}</span>
        {r.repeat_client && (
          <span className="rounded-full bg-muted px-2 py-0.5 font-medium text-foreground">
            Repeat client
          </span>
        )}
      </div>

      <p className="mt-3 text-sm leading-relaxed">{r.body}</p>

      <footer className="mt-4 grid grid-cols-2 gap-3 border-t border-border pt-3 text-xs sm:grid-cols-3">
        <div>
          <p className="font-semibold">{r.price ?? "—"}</p>
          <p className="text-muted-foreground">Price</p>
        </div>
        <div>
          <p className="font-semibold">{r.duration ?? "—"}</p>
          <p className="text-muted-foreground">Duration</p>
        </div>
        {r.service && (
          <div className="col-span-2 sm:col-span-1">
            <p className="truncate font-semibold">{r.service}</p>
            <p className="text-muted-foreground">Service</p>
          </div>
        )}
      </footer>
    </blockquote>
  );
}

function WriteReviewForm({ onDone }: { onDone: () => void }) {
  const [rating, setRating] = useState(5);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <form
      className="mt-5 grid gap-4 sm:grid-cols-2"
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        const country = String(data.get("country") ?? "United States");
        setBusy(true);
        setError(null);
        try {
          await submitReview({
            name: String(data.get("name") ?? ""),
            country,
            country_code: COUNTRIES.find((c) => c.name === country)?.code ?? "us",
            rating,
            body: String(data.get("body") ?? ""),
            price: String(data.get("price") ?? "") || undefined,
            duration: String(data.get("duration") ?? "") || undefined,
            service: String(data.get("service") ?? "") || undefined,
          });
          form.reset();
          setRating(5);
          onDone();
        } catch (err) {
          setError(err instanceof Error ? err.message : "Could not submit your review.");
        } finally {
          setBusy(false);
        }
      }}
    >
      <label className="text-sm font-medium">
        Your name *
        <input
          name="name"
          required
          minLength={2}
          maxLength={60}
          className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
        />
      </label>

      <label className="text-sm font-medium">
        Country *
        <select
          name="country"
          required
          defaultValue="United States"
          className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
        >
          {COUNTRIES.map((c) => (
            <option key={c.code} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </label>

      <label className="text-sm font-medium">
        Service used
        <select
          name="service"
          defaultValue=""
          className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.title} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </label>

      <div className="text-sm font-medium">
        Your rating *
        <div className="mt-2 flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <button
              key={i}
              type="button"
              onClick={() => setRating(i)}
              aria-label={`${i} star${i > 1 ? "s" : ""}`}
              className="p-0.5"
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`h-6 w-6 transition-colors ${
                  i <= rating ? "text-primary" : "text-muted-foreground/30"
                }`}
              >
                <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.78l-5.2 2.73.99-5.79-4.21-4.1 5.82-.85L10 1.5z" />
              </svg>
            </button>
          ))}
        </div>
      </div>

      <label className="text-sm font-medium">
        Project budget
        <input
          name="price"
          placeholder="$400-$600"
          className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
        />
      </label>

      <label className="text-sm font-medium">
        Project duration
        <input
          name="duration"
          placeholder="2 weeks"
          className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
        />
      </label>

      <label className="text-sm font-medium sm:col-span-2">
        Your review *
        <textarea
          name="body"
          required
          minLength={10}
          maxLength={1500}
          rows={5}
          className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
        />
      </label>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={busy}
          className="w-full rounded-lg bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto"
        >
          {busy ? "Submitting…" : "Submit review"}
        </button>
        <p className="mt-2 text-xs text-muted-foreground">
          Reviews are published once our team has reviewed them.
        </p>
        {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
      </div>
    </form>
  );
}

export function ReviewsPanel() {
  const [rows, setRows] = useState<Review[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [writing, setWriting] = useState(false);
  const [thanks, setThanks] = useState(false);

  useEffect(() => {
    let active = true;
    setLoading(true);
    fetchApprovedReviews(page)
      .then(({ rows: next, count }) => {
        if (!active) return;
        setRows((prev) => (page === 0 ? next : [...prev, ...next]));
        setTotal(count);
        setLoadError(null);
      })
      .catch((err: unknown) =>
        active ? setLoadError(err instanceof Error ? err.message : "Could not load reviews.") : null,
      )
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, [page]);

  const hasMore = rows.length < total;

  return (
    <section className="surface-card p-4 sm:p-6 md:p-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Client Reviews</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {reviewsIntro}
        </p>
      </div>

      <SummaryBlock total={total} />

      {loadError && (
        <p className="mt-6 rounded-lg border border-border p-4 text-sm text-muted-foreground">
          {loadError}
        </p>
      )}

      <div className="mt-6 space-y-4">
        {rows.map((r) => (
          <ReviewCard key={r.id} r={r} />
        ))}
        {loading && rows.length === 0 && (
          <p className="text-center text-sm text-muted-foreground">Loading reviews…</p>
        )}
      </div>

      <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        {hasMore && (
          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={loading}
            className="w-full rounded-lg border border-border px-6 py-2.5 text-sm font-semibold transition-colors hover:bg-muted disabled:opacity-60 sm:w-auto"
          >
            {loading ? "Loading…" : `Load More Reviews (${total - rows.length} left)`}
          </button>
        )}
        <button
          onClick={() => {
            setWriting((w) => !w);
            setThanks(false);
          }}
          className="w-full rounded-lg bg-gradient-brand px-6 py-2.5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90 sm:w-auto"
        >
          {writing ? "Close form" : "Write a Review"}
        </button>
      </div>

      {thanks && (
        <p className="mt-5 rounded-lg border border-border bg-muted p-4 text-center text-sm">
          Thank you — your review was submitted and will appear here once approved.
        </p>
      )}

      {writing && (
        <div className="mt-6 rounded-xl border border-border p-4 sm:p-6">
          <h3 className="text-lg font-semibold tracking-tight">Share your experience</h3>
          <WriteReviewForm
            onDone={() => {
              setWriting(false);
              setThanks(true);
            }}
          />
        </div>
      )}
    </section>
  );
}

export default ReviewsPanel;
