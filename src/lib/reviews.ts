import { supabase } from "@/integrations/supabase/client";

export type Review = {
  id: string;
  name: string;
  country: string;
  country_code: string;
  rating: number;
  body: string;
  price: string | null;
  duration: string | null;
  service: string | null;
  repeat_client: boolean;
  status: string;
  created_at: string;
};

export const PAGE_SIZE = 6;

export function flagUrl(code: string) {
  return `https://flagcdn.com/w40/${(code || "us").toLowerCase()}.png`;
}

export function timeAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const day = 86_400_000;
  const days = Math.max(0, Math.floor(diff / day));
  if (days === 0) return "today";
  if (days === 1) return "1 day ago";
  if (days < 7) return `${days} days ago`;
  if (days < 30) return `${Math.floor(days / 7)} week${days < 14 ? "" : "s"} ago`;
  if (days < 365) return `${Math.floor(days / 30)} month${days < 60 ? "" : "s"} ago`;
  return `${Math.floor(days / 365)} year${days < 730 ? "" : "s"} ago`;
}

export async function fetchApprovedReviews(page: number) {
  const from = page * PAGE_SIZE;
  const { data, error, count } = await supabase
    .from("reviews")
    .select("*", { count: "exact" })
    .eq("status", "approved")
    .order("created_at", { ascending: false })
    .range(from, from + PAGE_SIZE - 1);
  if (error) throw error;
  return { rows: (data ?? []) as Review[], count: count ?? 0 };
}

export type NewReview = {
  name: string;
  country: string;
  country_code: string;
  rating: number;
  body: string;
  price?: string;
  duration?: string;
  service?: string;
};

export async function submitReview(input: NewReview) {
  const { error } = await supabase.from("reviews").insert({
    name: input.name.trim(),
    country: input.country.trim() || "United States",
    country_code: (input.country_code || "us").toLowerCase().slice(0, 2),
    rating: input.rating,
    body: input.body.trim(),
    price: input.price || null,
    duration: input.duration || null,
    service: input.service || null,
    status: "pending",
  });
  if (error) throw error;
}

export const COUNTRIES: { name: string; code: string }[] = [
  { name: "United States", code: "us" },
  { name: "United Kingdom", code: "gb" },
  { name: "Canada", code: "ca" },
  { name: "Australia", code: "au" },
  { name: "Ireland", code: "ie" },
  { name: "Germany", code: "de" },
  { name: "France", code: "fr" },
  { name: "Spain", code: "es" },
  { name: "Italy", code: "it" },
  { name: "Netherlands", code: "nl" },
  { name: "Sweden", code: "se" },
  { name: "Norway", code: "no" },
  { name: "Denmark", code: "dk" },
  { name: "Switzerland", code: "ch" },
  { name: "Portugal", code: "pt" },
  { name: "Poland", code: "pl" },
  { name: "Nigeria", code: "ng" },
  { name: "Ghana", code: "gh" },
  { name: "Kenya", code: "ke" },
  { name: "South Africa", code: "za" },
  { name: "Morocco", code: "ma" },
  { name: "Egypt", code: "eg" },
  { name: "United Arab Emirates", code: "ae" },
  { name: "Saudi Arabia", code: "sa" },
  { name: "India", code: "in" },
  { name: "Pakistan", code: "pk" },
  { name: "Singapore", code: "sg" },
  { name: "Japan", code: "jp" },
  { name: "China", code: "cn" },
  { name: "Brazil", code: "br" },
  { name: "Mexico", code: "mx" },
  { name: "Argentina", code: "ar" },
  { name: "New Zealand", code: "nz" },
];
