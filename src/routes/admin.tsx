import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Stars } from "@/components/Stars";
import { flagUrl, timeAgo, type Review } from "@/lib/reviews";
import { brand } from "@/content/site";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Review Moderation — Brainboxworld Admin" },
      { name: "description", content: "Approve or reject client reviews submitted to Brainboxworld." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Review Moderation — Brainboxworld Admin" },
      { property: "og:description", content: "Internal review moderation dashboard." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AdminPage,
});

type Filter = "pending" | "approved" | "rejected";

function AdminPage() {
  const [email, setEmail] = useState<string | null>(null);
  const [checking, setChecking] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);
  const [filter, setFilter] = useState<Filter>("pending");
  const [rows, setRows] = useState<Review[]>([]);
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setEmail(session?.user?.email ?? null);
    });
    supabase.auth.getSession().then(({ data }) => {
      setEmail(data.session?.user?.email ?? null);
      setChecking(false);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!email) return;
    setLoading(true);
    supabase
      .from("reviews")
      .select("*")
      .eq("status", filter)
      .order("created_at", { ascending: false })
      .then(({ data, error }) => {
        if (error) setNotice(error.message);
        setRows((data ?? []) as Review[]);
        setLoading(false);
      });
  }, [email, filter]);

  async function setStatus(id: string, status: Filter) {
    const { error } = await supabase.from("reviews").update({ status }).eq("id", id);
    if (error) {
      setNotice(error.message);
      return;
    }
    setRows((prev) => prev.filter((r) => r.id !== id));
    setNotice(status === "approved" ? "Review published." : "Review rejected.");
  }

  async function remove(id: string) {
    const { error } = await supabase.from("reviews").delete().eq("id", id);
    if (error) {
      setNotice(error.message);
      return;
    }
    setRows((prev) => prev.filter((r) => r.id !== id));
    setNotice("Review deleted.");
  }

  if (checking) {
    return <div className="p-10 text-center text-sm text-muted-foreground">Checking access…</div>;
  }

  if (!email) {
    return (
      <div className="mx-auto flex min-h-screen max-w-md items-center px-4">
        <div className="surface-card w-full p-6 sm:p-8">
          <h1 className="text-xl font-bold tracking-tight">Admin sign in</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in with your {brand.name} admin email to moderate reviews.
          </p>
          <form
            className="mt-5 space-y-4"
            onSubmit={async (e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const { error } = await supabase.auth.signInWithPassword({
                email: String(data.get("email")),
                password: String(data.get("password")),
              });
              if (error) setAuthError(error.message);
            }}
          >
            <label className="block text-sm font-medium">
              Email
              <input
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </label>
            <label className="block text-sm font-medium">
              Password
              <input
                name="password"
                type="password"
                required
                className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground"
            >
              Sign in
            </button>
            <button
              type="button"
              onClick={async () => {
                const form = document.querySelector("form") as HTMLFormElement | null;
                if (!form) return;
                const data = new FormData(form);
                const { error } = await supabase.auth.signUp({
                  email: String(data.get("email")),
                  password: String(data.get("password")),
                  options: { emailRedirectTo: `${window.location.origin}/admin` },
                });
                setAuthError(error ? error.message : "Account created — you can sign in now.");
              }}
              className="w-full rounded-lg border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted"
            >
              Create admin account
            </button>
            {authError && <p className="text-xs text-muted-foreground">{authError}</p>}
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <div className="min-w-0">
          <h1 className="truncate text-xl font-bold tracking-tight sm:text-2xl">Review moderation</h1>
          <p className="truncate text-xs text-muted-foreground">{email}</p>
        </div>
        <button
          onClick={() => supabase.auth.signOut()}
          className="shrink-0 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-muted"
        >
          Sign out
        </button>
      </header>

      <nav className="surface-card mt-6 flex flex-wrap gap-1 p-2">
        {(["pending", "approved", "rejected"] as Filter[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-lg px-4 py-2 text-sm font-medium capitalize transition-colors ${
              filter === f ? "bg-gradient-brand text-brand-foreground" : "text-muted-foreground hover:bg-muted"
            }`}
          >
            {f}
          </button>
        ))}
      </nav>

      {notice && <p className="mt-4 text-sm text-muted-foreground">{notice}</p>}

      <div className="mt-6 space-y-4">
        {loading && <p className="text-sm text-muted-foreground">Loading…</p>}
        {!loading && rows.length === 0 && (
          <p className="surface-card p-6 text-center text-sm text-muted-foreground">
            Nothing {filter} right now.
          </p>
        )}
        {rows.map((r) => (
          <article key={r.id} className="surface-card p-4 sm:p-5">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{r.name}</p>
                <p className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <img
                    src={flagUrl(r.country_code)}
                    alt=""
                    width={20}
                    height={14}
                    className="h-3.5 w-5 rounded-[2px] object-cover"
                  />
                  <span className="truncate">{r.country}</span>
                  <span>• {timeAgo(r.created_at)}</span>
                </p>
              </div>
              <Stars value={r.rating} className="shrink-0" />
            </div>
            <p className="mt-3 text-sm leading-relaxed">{r.body}</p>
            <p className="mt-2 text-xs text-muted-foreground">
              {[r.service, r.price, r.duration].filter(Boolean).join(" • ") || "No project details"}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {filter !== "approved" && (
                <button
                  onClick={() => setStatus(r.id, "approved")}
                  className="rounded-lg bg-gradient-brand px-4 py-2 text-xs font-semibold text-brand-foreground"
                >
                  Approve
                </button>
              )}
              {filter !== "rejected" && (
                <button
                  onClick={() => setStatus(r.id, "rejected")}
                  className="rounded-lg border border-border px-4 py-2 text-xs font-medium hover:bg-muted"
                >
                  Reject
                </button>
              )}
              <button
                onClick={() => remove(r.id)}
                className="rounded-lg border border-border px-4 py-2 text-xs font-medium text-destructive hover:bg-muted"
              >
                Delete
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
