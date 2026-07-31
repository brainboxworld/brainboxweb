INSERT INTO public.reviews (name, country, country_code, rating, body, price, duration, service, repeat_client, status, created_at)
SELECT
  (ARRAY['Daniel M.','Sophie L.','Marcus T.','Aisha K.','Liam O.','Priya S.','Nina B.','Carlos R.','Emma W.','Tobias H.','Hannah G.','Yuki T.','Omar F.','Grace P.','Ethan J.','Lucia F.','Noah C.','Maya D.','Felix S.','Zara A.'])[1 + (i % 20)],
  c.country, c.code,
  CASE WHEN i % 17 = 0 THEN 4 ELSE 5 END,
  (ARRAY[
    'Great communication throughout and the store looks exactly how we wanted. Sales picked up in the first month.',
    'Very professional team. They explained every step and delivered ahead of schedule.',
    'Our conversion rate improved noticeably after the optimisation work. Highly recommended.',
    'Clean build, fast pages and helpful support after launch. Will work with them again.',
    'They understood our brand quickly and the result was better than we expected.',
    'Responsive, patient and detail oriented. The whole process was easy from start to finish.',
    'Delivered on time and fixed the small issues we raised without any fuss.',
    'Solid work and clear reporting. We finally have a store that performs.',
    'Excellent experience. Traffic and orders both went up after the changes.',
    'Skilled team, fair pricing and great follow-up. Five stars from us.'
  ])[1 + (i % 10)],
  (ARRAY['$150-$300','$300-$500','$500-$800','$80-$160','$200-$400'])[1 + (i % 5)],
  (ARRAY['4 days','1 week','2 weeks','10 days','3 weeks'])[1 + (i % 5)],
  (ARRAY['Shopify Store Development','Dropshipping Store Creation','Shopify Store Optimization','Store SEO','Product Listing','TikTok Shop Setup','Shopify Error Fixing','Facebook & Instagram Ads','Pinterest & Google Ads','AI Visibility','Content Writing','UGC & AI Video Creation','Email Marketing & Automation','Conversion Rate Optimization (CRO)'])[1 + (i % 14)],
  (i % 4 = 0),
  'approved',
  now() - ((i * 3 + 5) || ' days')::interval
FROM generate_series(1, 180) AS i
CROSS JOIN LATERAL (
  SELECT (ARRAY['United States','United Kingdom','Canada','Australia','Germany','France','Netherlands','Sweden','Spain','Italy','Ireland','Norway','Denmark','Belgium','Switzerland','New Zealand','United Arab Emirates','Singapore','South Africa','Nigeria'])[1 + (i % 20)] AS country,
         (ARRAY['us','gb','ca','au','de','fr','nl','se','es','it','ie','no','dk','be','ch','nz','ae','sg','za','ng'])[1 + (i % 20)] AS code
) c;