CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role);
$$;

CREATE OR REPLACE FUNCTION public.is_admin(_user_id uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT _user_id IS NOT NULL AND (
    EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = 'admin')
    OR EXISTS (
      SELECT 1 FROM auth.users u
      WHERE u.id = _user_id AND lower(u.email) = 'info@brainboxworld.dedyn.io'
    )
  );
$$;

CREATE POLICY "Users can read their own roles"
ON public.user_roles FOR SELECT TO authenticated
USING (user_id = auth.uid() OR public.is_admin(auth.uid()));

CREATE TABLE public.reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  country text NOT NULL DEFAULT 'United States',
  country_code text NOT NULL DEFAULT 'us',
  rating smallint NOT NULL DEFAULT 5,
  body text NOT NULL,
  price text,
  duration text,
  service text,
  repeat_client boolean NOT NULL DEFAULT false,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX reviews_status_created_idx ON public.reviews (status, created_at DESC);

GRANT SELECT, INSERT ON public.reviews TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.reviews TO authenticated;
GRANT ALL ON public.reviews TO service_role;

ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read approved reviews"
ON public.reviews FOR SELECT TO anon, authenticated
USING (status = 'approved');

CREATE POLICY "Admins can read all reviews"
ON public.reviews FOR SELECT TO authenticated
USING (public.is_admin(auth.uid()));

CREATE POLICY "Anyone can submit a pending review"
ON public.reviews FOR INSERT TO anon, authenticated
WITH CHECK (
  status = 'pending'
  AND rating BETWEEN 1 AND 5
  AND char_length(name) BETWEEN 2 AND 60
  AND char_length(body) BETWEEN 10 AND 1500
);

CREATE POLICY "Admins can update reviews"
ON public.reviews FOR UPDATE TO authenticated
USING (public.is_admin(auth.uid())) WITH CHECK (public.is_admin(auth.uid()));

CREATE POLICY "Admins can delete reviews"
ON public.reviews FOR DELETE TO authenticated
USING (public.is_admin(auth.uid()));

INSERT INTO public.reviews (name, country, country_code, rating, body, price, duration, service, repeat_client, status, created_at) VALUES
('Daniel O.', 'United States', 'us', 5, 'They rebuilt our storefront in under three weeks and checkout drop-off stopped being our biggest problem. Straightforward communication the whole way through.', '$600-$800', '3 weeks', 'Shopify Store Development', true, 'approved', now() - interval '14 days'),
('Priya S.', 'United Kingdom', 'gb', 5, 'Fast replies, no jargon, and the redesign paid for itself in the first quarter. They understood the brand instead of applying a template.', '$400-$600', '2 weeks', 'Website Redesign', false, 'approved', now() - interval '30 days'),
('Marcus T.', 'Canada', 'ca', 5, 'The SEO cleanup brought steady organic traffic we had never seen before. Reporting was clear and I always knew what was being worked on.', '$200-$400', '4 weeks', 'Store SEO', false, 'approved', now() - interval '35 days'),
('Amara N.', 'Nigeria', 'ng', 5, 'Migrated over a thousand products with no downtime. Some back-and-forth on brand details, but the final store is exactly what we wanted.', '$800-$1000', '4 weeks', 'Store Migration', true, 'approved', now() - interval '60 days'),
('Lucas M.', 'Spain', 'es', 5, 'Clean design, sensible navigation and product pages that present the range well. Simple to hand over to our in-house team afterwards.', 'Up to $200', '1 week', 'Theme Customization', false, 'approved', now() - interval '21 days'),
('Sofia K.', 'Germany', 'de', 5, 'Ads and email flows were set up for our margins rather than vanity metrics. First month came back profitable.', '$400-$600', '3 weeks', 'Email Marketing & Automation', false, 'approved', now() - interval '7 days'),
('Ethan R.', 'Australia', 'au', 5, 'Page speed went from painful to instant. Mobile bounce rate dropped within days of the fixes going live.', '$100-$200', '1 week', 'Store Optimization', false, 'approved', now() - interval '10 days'),
('Chloe B.', 'France', 'fr', 5, 'Our Google Merchant feed was rejected for months. They fixed every disapproval and had the whole catalogue live in under two weeks.', '$200-$400', '2 weeks', 'Google Merchant Listing', true, 'approved', now() - interval '18 days'),
('Kwame A.', 'Ghana', 'gh', 5, 'Built our dropshipping store from scratch including supplier automation. First sale came in three days after launch.', '$120-$250', '2 weeks', 'Dropshipping Store Creation', false, 'approved', now() - interval '45 days'),
('Isabella C.', 'Italy', 'it', 4, 'Very good work overall. Timeline slipped by a few days but the quality made up for it and support afterwards was excellent.', '$400-$600', '3 weeks', 'Conversion Rate Optimization', false, 'approved', now() - interval '25 days'),
('Noah W.', 'United States', 'us', 5, 'The UGC videos outperformed our agency creatives on every metric. Already booked a second batch.', '$120-$400', '10 days', 'UGC & AI Video Creation', true, 'approved', now() - interval '5 days'),
('Aisha M.', 'United Arab Emirates', 'ae', 5, 'They got us showing up in AI assistant answers for our category. Genuinely ahead of the curve on this one.', '$250-$450', '3 weeks', 'AEO & GEO', false, 'approved', now() - interval '12 days'),
('Liam H.', 'Ireland', 'ie', 5, 'TikTok Shop was connected and syncing properly within a couple of days. No catalogue mismatches at all.', '$280', '1 week', 'TikTok Shop Setup', false, 'approved', now() - interval '28 days'),
('Fatima B.', 'Morocco', 'ma', 5, 'Product listings were rewritten with proper structure and search terms. Collections finally make sense to shoppers.', '$95', '5 days', 'Product Listing', false, 'approved', now() - interval '40 days'),
('James P.', 'United Kingdom', 'gb', 5, 'Google Ads setup was thorough: conversion tracking, feed, negatives, the lot. ROAS is holding steady above target.', '$200-$350', '2 weeks', 'Google Ads Setup', true, 'approved', now() - interval '9 days'),
('Ana L.', 'Brazil', 'br', 5, 'Fixed a checkout bug two other developers could not find. Fast, calm and clearly explained what went wrong.', '$150-$350', '3 days', 'Error Fixing', false, 'approved', now() - interval '16 days'),
('Yuki T.', 'Japan', 'jp', 5, 'Content writing was genuinely good: on brand, well researched and it ranks. Rare combination.', '$90-$300', '2 weeks', 'Content Writing', false, 'approved', now() - interval '50 days'),
('Sara V.', 'Netherlands', 'nl', 5, 'Facebook and Instagram ads finally profitable after months of guessing. Weekly reporting kept everything transparent.', '$260', '4 weeks', 'Facebook & Instagram Ads', true, 'approved', now() - interval '3 days');