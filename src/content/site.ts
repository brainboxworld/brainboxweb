/**
 * ─────────────────────────────────────────────────────────────
 *  BRAINBOXWORLD — EDIT EVERYTHING HERE
 * ─────────────────────────────────────────────────────────────
 *  All text, links, numbers and images on the website come from
 *  this single file. To change something:
 *
 *  • TEXT / NUMBERS → just edit the text between the quotes.
 *  • IMAGES → upload your new image into  src/assets/
 *             then change the import line at the top of this file
 *             (keep the same name on the left of "from").
 *             Example:
 *               import teamAdam from "@/assets/team-adam-new.jpg";
 *             becomes
 *               import teamAdam from "@/assets/my-new-photo.jpg";
 *
 *  • ADD a team member / service / review → copy one block
 *    (from "{" to "}," ) and paste it below, then edit it.
 * ─────────────────────────────────────────────────────────────
 */

import logo from "@/assets/brainboxworld-logo-new.png";
import banner from "@/assets/brainboxworld-banner.jpg";
import partnerBadge from "@/assets/partner-badge.png";
import shopifyPartner from "@/assets/shopify-partner.jpg";

// Portfolio proof images
import workSeoAudit from "@/assets/work-seo-audit.png";
import workPagespeed from "@/assets/work-pagespeed.png";
import workMerchantApproval from "@/assets/work-merchant-approval.png";
import workBrokenLinks from "@/assets/work-broken-links.png";
import workSitemap from "@/assets/work-sitemap.jpg";
import workOwnership from "@/assets/work-ownership.jpg";
import workProductSeo from "@/assets/work-product-seo.png";

// Team photos
import teamAdam from "@/assets/team-adam-new.jpg";
import teamMubaraq from "@/assets/team-mubaraq.jpg";
import teamFawaz from "@/assets/team-fawaz-new.png";
import teamHakeem from "@/assets/team-hakeem.jpg";
import teamBashit from "@/assets/team-bashit.jpg";
import teamQudus from "@/assets/team-qudus.png";
import teamYunus from "@/assets/team-yunus-amamat.jpg";
import teamTeslim from "@/assets/team-teslim-new.jpg";
import teamLukman from "@/assets/team-lukman.jpg";

// Service images (swap the file in src/assets/ to change a thumbnail)
import svcStore from "@/assets/service-store-development.webp";
import svcDropshipping from "@/assets/service-dropshipping.webp";
import svcOptimization from "@/assets/service-optimization.webp";
import svcSeo from "@/assets/service-seo.webp";
import svcListings from "@/assets/service-listings.webp";
import svcSocialShop from "@/assets/service-tiktok-shop.webp";
import svcErrors from "@/assets/service-error-fixing.webp";
import svcSocialAds from "@/assets/service-social-ads.webp";
import svcSearchAds from "@/assets/service-search-ads.webp";
import svcAiVisibility from "@/assets/service-ai-visibility.webp";
import svcContentWriting from "@/assets/service-content-writing.png";
import svcUgcVideo from "@/assets/service-ugc-video.png";
import svcMarketplace from "@/assets/service-marketplace.png";
import svcAeoGeo from "@/assets/service-aeo-geo.png";
import svcMerchantListing from "@/assets/service-merchant-listing.png";
import svcGoogleAds from "@/assets/service-google-ads.png";
import svcEmailAutomation from "@/assets/service-email-automation.png";
import svcCro from "@/assets/service-cro.png";
import svcTiktokAds from "@/assets/service-tiktok-ads-sales.jpg";
import svcFacebookAds from "@/assets/service-facebook-ads-sales.png";

// Portfolio images
import workMerchant from "@/assets/work-merchant.jpg";
import workSeo from "@/assets/work-skincare.jpg";
import workSpeed from "@/assets/work-speed.jpg";
import workSales from "@/assets/work-sales.jpg";
import workAds from "@/assets/work-fashion.jpg";
import workDecor from "@/assets/work-home-decor.jpg";

// Client result videos (upload a new .mp4 with the lovable-assets CLI and swap the pointer)
import vidStoreGrowth1 from "@/assets/videos/store-growth-1.mp4.asset.json";
import vidHealthEmporium from "@/assets/videos/health-emporium.mp4.asset.json";
import vidNamana from "@/assets/videos/namana-london.mp4.asset.json";
import vidSalesProof from "@/assets/videos/sales-proof.mp4.asset.json";
import vidHolidayPuzzles from "@/assets/videos/holidaypuzzles.mp4.asset.json";


export const brand = {
  name: "Brainboxworld",
  shortName: "Brainboxworld",
  initials: "BB",
  tagline: "eCommerce & Shopify Growth Agency",
  quote: "Turning storefronts into steady, profitable sales channels",
  logo,
  banner,
  partnerBadge,
  shopifyPartnerBadge: shopifyPartner,
  partnerBadgeLabel: "Shopify Partner",

  rating: "5.0",
  reviewCount: "1,024 reviews",
  locations: "United States, United Kingdom & West Africa",
  languages: "English & French",
  responseTime: "Less than 1 hour",

  // Live presence shown next to the logo (green dot + local time).
  presence: {
    fromLabel: "United States",
    fromFlag: "us", // two-letter country code, used for the little flag image
    timezone: "America/Chicago", // any IANA timezone name
  },
};

export const contact = {
  whatsapp: "https://wa.me/13312782900",
  phoneDisplay: "+1 (331) 278-2900",
  email: "info@brainboxworld.dedyn.io",
};

// icon can be: "linkedin" | "instagram" | "tiktok" | "x"
export const socials = [
  { label: "Brand LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/company/brainboxworld/" },
  { label: "Founder LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/adam-bawa-aliyu-8463a93b2" },
  { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/brainboxproworld" },
  { label: "TikTok", icon: "tiktok", href: "https://www.tiktok.com/@brainboxworld" },
  { label: "X (Twitter)", icon: "x", href: "https://x.com/Brainboxworld" },
];


export const about = {
  heading: "About Us",
  body: "Brainboxworld is a Shopify-focused eCommerce agency. We design, build, optimise and manage online stores for brands that need their storefront to do real commercial work. Our team brings together development, SEO, paid media and retention marketing, so the store we launch keeps improving long after launch day.",
};

export const skills = [
  "Shopify Store Development",
  "Dropshipping Store Builds",
  "Website Design & Redesign",
  "Shopify SEO",
  "Landing Page Optimization",
  "Conversion Rate Optimization",
  "Theme Customization",
  "Product Research",
  "Product Listing",
  "Email & SMS Marketing",
  "Paid Social Ads",
  "Google & Pinterest Ads",
  "Store Migration",
  "Speed Optimization",
  "Ongoing Store Management",
  "AI Visibility",
  "Content Writing",
  "UGC & AI Video Creation",
  "Facebook Marketplace Setup",
];

export const metrics = [
  { value: "450+", label: "Projects Completed" },
  { value: "6+", label: "Years Experience" },
  { value: "280+", label: "Happy Clients" },
  { value: "98%", label: "Success Rate" },
  { value: "4.9/5", label: "Average Rating" },
];

export const servicesIntro =
  "End-to-end Shopify solutions built to help your brand grow in a competitive eCommerce market.";

export const services = [
  {
    image: svcStore,
    title: "Shopify Store Development",
    details: {
      overview:
        "A complete, conversion-focused Shopify build. We plan the structure, design the pages, set up the theme and hand you a storefront that is fast, on-brand and ready to sell from day one.",
      includes: [
        "Brand-aligned theme setup and custom sections",
        "Home, collection, product, cart and checkout page design",
        "Mobile-first responsive layout",
        "Essential app installation and configuration",
        "Payment, shipping and tax setup",
        "Speed and SEO basics baked in",
        "Post-launch handover and training",
      ],
      process: [
        "Discovery call and requirement mapping",
        "Wireframe and design direction approval",
        "Build, content upload and app setup",
        "QA across devices, launch and handover",
      ],
      timeline: "7 - 21 days",
    },
    body: "A complete storefront build: theme setup, custom sections, product pages and a checkout flow shaped around your brand.",
    rating: "5.0",
    reviews: "142",
    experts: "6 specialists available",
    returning: "58 returning clients",
    price: "$80 - $160",
  },
  {
    image: svcDropshipping,
    title: "Dropshipping Store Creation",
    details: {
      overview:
        "A ready-to-run dropshipping business: winning product research, verified suppliers, automated fulfilment and a storefront built to convert cold traffic.",
      includes: [
        "Niche and winning product research",
        "Supplier sourcing and vetting",
        "Full store build with trust elements",
        "Automated order fulfilment setup",
        "Shipping, refund and policy pages",
        "Product imports with optimised copy",
        "Launch checklist and scaling guidance",
      ],
      process: [
        "Niche validation and product shortlist",
        "Supplier connection and pricing strategy",
        "Store build and automation setup",
        "Test orders, launch and scaling plan",
      ],
      timeline: "5 - 14 days",
    },
    body: "Product sourcing, supplier connections and automated fulfilment so orders move without manual work on your side.",
    rating: "5.0",
    reviews: "118",
    experts: "5 specialists available",
    returning: "44 returning clients",
    price: "$120 - $250",
  },
  {
    image: svcOptimization,
    title: "Store Optimization",
    details: {
      overview:
        "We remove every friction point between landing and checkout \u2014 speed, layout, mobile experience and conversion blockers get fixed and measured.",
      includes: [
        "Full store performance audit",
        "Core Web Vitals and page speed work",
        "Mobile experience optimisation",
        "Layout, CTA and checkout refinements",
        "App bloat and code clean-up",
        "Before/after performance report",
      ],
      process: [
        "Audit and prioritised fix list",
        "Technical speed work",
        "UX and conversion improvements",
        "Verification report with metrics",
      ],
      timeline: "5 - 10 days",
    },
    body: "Speed, mobile responsiveness and user-experience fixes that remove friction between landing and checkout.",
    rating: "5.0",
    reviews: "163",
    experts: "7 specialists available",
    returning: "72 returning clients",
    price: "$160",
  },
  {
    image: svcSeo,
    title: "Store SEO",
    details: {
      overview:
        "Technical and on-page SEO that gets your catalogue ranking for the terms buyers actually search, and keeps it there.",
      includes: [
        "Keyword and competitor research",
        "On-page optimisation for products and collections",
        "Metadata, headings and internal linking",
        "Technical SEO and indexation fixes",
        "Schema markup for rich results",
        "Monthly ranking and traffic reporting",
      ],
      process: [
        "SEO audit and keyword mapping",
        "Technical fixes",
        "On-page and content optimisation",
        "Tracking, reporting and iteration",
      ],
      timeline: "14 - 30 days",
    },
    body: "Keyword research, on-page structure, metadata and content work that helps your catalogue rank and stay ranked.",
    rating: "5.0",
    reviews: "96",
    experts: "4 specialists available",
    returning: "39 returning clients",
    price: "$360 - $600",
  },
  {
    image: svcListings,
    title: "Product Listing",
    details: {
      overview:
        "High-converting listings with search-friendly titles, persuasive descriptions, clean variants and organised collections.",
      includes: [
        "SEO-optimised titles and descriptions",
        "Variant, SKU and inventory setup",
        "Image cleanup and consistent formatting",
        "Collection and tag organisation",
        "Bulk uploads for large catalogues",
      ],
      process: [
        "Catalogue review and template setup",
        "Copywriting and keyword placement",
        "Upload, variants and organisation",
        "Final QA across the storefront",
      ],
      timeline: "2 - 7 days",
    },
    body: "Clean, persuasive listings with search-friendly titles, structured variants and tidy collection organisation.",
    rating: "5.0",
    reviews: "174",
    experts: "8 specialists available",
    returning: "63 returning clients",
    price: "$95",
  },
  {
    image: svcSocialShop,
    title: "TikTok Shop Setup",
    details: {
      overview:
        "Full TikTok Shop setup and optimisation so you can sell directly to the platform's audience with compliant, synced listings.",
      includes: [
        "Shop registration and verification",
        "Business account and payment integration",
        "Catalogue sync with Shopify",
        "SEO-friendly product listings",
        "Shipping templates and order routing",
        "Compliance and policy checks",
      ],
      process: [
        "Account verification and setup",
        "Catalogue integration",
        "Listing optimisation",
        "Test order and go live",
      ],
      timeline: "3 - 10 days",
    },
    body: "Connect your catalogue to TikTok Shop and get social commerce running with correct syncing and order routing.",
    rating: "5.0",
    reviews: "74",
    experts: "3 specialists available",
    returning: "28 returning clients",
    price: "$280",
  },
  {
    image: svcErrors,
    title: "Error Fixing",
    details: {
      overview:
        "Fast diagnosis and repair for broken themes, liquid errors, app conflicts and checkout failures \u2014 with prevention built in.",
      includes: [
        "Root-cause error diagnosis",
        "Theme and liquid code fixes",
        "App conflict resolution",
        "Checkout and cart repairs",
        "Mobile and speed issue fixes",
        "Post-fix stability report",
      ],
      process: [
        "Report the issue and grant access",
        "Diagnosis and quote",
        "Fix, test and verify",
        "Prevention notes and handover",
      ],
      timeline: "24 hours - 5 days",
    },
    body: "Troubleshooting for broken themes, conflicting apps, liquid errors and checkout issues — diagnosed and repaired.",
    rating: "5.0",
    reviews: "131",
    experts: "9 specialists available",
    returning: "66 returning clients",
    price: "$150 - $350",
  },
  {
    image: svcSocialAds,
    title: "Facebook & Instagram Ads",
    details: {
      overview:
        "Strategic Meta campaigns \u2014 creative, targeting and daily management \u2014 built around profitable return on ad spend.",
      includes: [
        "Pixel, CAPI and event tracking setup",
        "Audience research and targeting",
        "Scroll-stopping creative and copy",
        "Campaign build: awareness to retargeting",
        "Daily optimisation and scaling",
        "Transparent weekly reporting",
      ],
      process: [
        "Account audit and tracking setup",
        "Creative and audience strategy",
        "Launch and testing phase",
        "Optimisation and scaling",
      ],
      timeline: "Ongoing monthly",
    },
    body: "Creative, audience targeting and daily campaign management aimed at profitable return on ad spend.",
    rating: "5.0",
    reviews: "108",
    experts: "5 specialists available",
    returning: "47 returning clients",
    price: "$260",
  },
  {
    image: svcSearchAds,
    title: "Pinterest & Google Ads",
    details: {
      overview:
        "Search and discovery campaigns with clean feeds, disciplined bidding and reporting you can actually read.",
      includes: [
        "Keyword and Pinterest interest research",
        "Product feed setup and optimisation",
        "Search, Shopping and Pin campaigns",
        "Bidding strategy and budget control",
        "Conversion tracking",
        "Monthly performance reporting",
      ],
      process: [
        "Account and feed audit",
        "Campaign structure and setup",
        "Launch and test period",
        "Optimisation and reporting",
      ],
      timeline: "Ongoing monthly",
    },
    body: "Search and discovery campaigns with feed management, bidding strategy and clear monthly reporting.",
    rating: "5.0",
    reviews: "82",
    experts: "4 specialists available",
    returning: "33 returning clients",
    price: "$200 - $350",
  },
  {
    image: svcAiVisibility,
    title: "AI Visibility",
    details: {
      overview:
        "Get discovered, recognised and recommended by ChatGPT, Gemini, Claude, Perplexity and Google AI when shoppers ask for products like yours.",
      includes: [
        "AI search optimisation for your content",
        "LLM visibility and mention building",
        "AI-friendly, citable content creation",
        "Structured data and entity clean-up",
        "Authority and trust signal building",
        "Visibility tracking and monthly insights",
      ],
      process: [
        "Baseline AI visibility audit",
        "Content and structured data work",
        "Authority and mention building",
        "Monitoring and continuous improvement",
      ],
      timeline: "30 - 60 days",
    },
    body: "Get your brand surfaced by AI assistants and answer engines with structured data, entity clean-up and AI-ready product content.",
    rating: "5.0",
    reviews: "48",
    experts: "3 specialists available",
    returning: "19 returning clients",
    price: "$250 - $450",
  },
  {
    image: svcContentWriting,
    title: "Content Writing",
    details: {
      overview:
        "Copy that ranks and persuades: product descriptions, collections, blogs and landing pages written for your buyer.",
      includes: [
        "Product and collection descriptions",
        "Landing page and homepage copy",
        "Blog articles with keyword targeting",
        "Brand tone and messaging guide",
        "Editing and optimisation of existing copy",
      ],
      process: [
        "Brand voice and keyword brief",
        "First draft",
        "Revision round",
        "Final delivery and upload",
      ],
      timeline: "3 - 10 days",
    },
    body: "Product descriptions, collection copy, blogs and landing page writing built to rank and to persuade shoppers.",
    rating: "5.0",
    reviews: "91",
    experts: "5 specialists available",
    returning: "37 returning clients",
    price: "$90 - $300",
  },
  {
    image: svcUgcVideo,
    title: "UGC & AI Video Creation",
    details: {
      overview:
        "Creator-style and AI-generated product videos made for TikTok, Reels and paid social testing.",
      includes: [
        "Scripting and hook development",
        "UGC-style creator videos",
        "AI-generated video ad variations",
        "Captions, edits and platform formatting",
        "Multiple hooks for ad testing",
      ],
      process: [
        "Brief and script approval",
        "Filming or AI generation",
        "Editing and revisions",
        "Delivery in all required formats",
      ],
      timeline: "5 - 12 days",
    },
    body: "Creator-style product videos and AI-generated ad cuts made for TikTok, Reels and paid social testing.",
    rating: "5.0",
    reviews: "64",
    experts: "4 specialists available",
    returning: "26 returning clients",
    price: "$120 - $400",
  },
  {
    image: svcMarketplace,
    title: "Facebook Marketplace Setup",
    details: {
      overview:
        "Marketplace and Facebook Shop setup with synced catalogues, optimised listings and order routing that works.",
      includes: [
        "Commerce Manager and Shop setup",
        "Catalogue sync and feed management",
        "Listing optimisation for reach",
        "Order routing and fulfilment flow",
        "Policy compliance review",
      ],
      process: [
        "Account and catalogue review",
        "Shop and feed setup",
        "Listing optimisation",
        "Test order and launch",
      ],
      timeline: "3 - 7 days",
    },
    body: "Marketplace and Facebook Shop setup with catalogue syncing, listing optimisation and order routing that works.",
    rating: "5.0",
    reviews: "57",
    experts: "3 specialists available",
    returning: "22 returning clients",
    price: "$150 - $280",
  },
  {
    image: svcAeoGeo,
    title: "AEO & GEO Services",
    details: {
      overview:
        "Answer Engine and Generative Engine Optimisation so your brand is the one cited when AI assistants recommend products.",
      includes: [
        "Answer-engine content structuring",
        "Generative engine visibility strategy",
        "FAQ and entity schema implementation",
        "Citation and mention acquisition",
        "Competitor AI-share analysis",
        "Ongoing visibility reporting",
      ],
      process: [
        "AI-share baseline audit",
        "Content restructuring",
        "Schema and entity work",
        "Tracking and iteration",
      ],
      timeline: "30 - 60 days",
    },
    body: "Answer Engine and Generative Engine Optimisation so your brand is the one cited when shoppers ask AI assistants for recommendations.",
    rating: "5.0",
    reviews: "39",
    experts: "3 specialists available",
    returning: "16 returning clients",
    price: "$300 - $650",
  },
  {
    image: svcMerchantListing,
    title: "Google Merchant Listing",
    details: {
      overview:
        "Merchant Center setup, feed submission and disapproval clean-up so every product gets approved and stays live in Shopping.",
      includes: [
        "Merchant Center account setup",
        "Product feed creation and submission",
        "Disapproval and suspension fixes",
        "Feed rules and attribute optimisation",
        "Free listings activation",
        "Ongoing feed health monitoring",
      ],
      process: [
        "Account and feed audit",
        "Setup or clean-up",
        "Submission and approval",
        "Monitoring and maintenance",
      ],
      timeline: "3 - 10 days",
    },
    body: "Merchant Center setup, feed submission and disapproval clean-up so every product gets approved and stays live in Shopping.",
    rating: "5.0",
    reviews: "88",
    experts: "4 specialists available",
    returning: "35 returning clients",
    price: "$150 - $320",
  },
  {
    image: svcGoogleAds,
    title: "Google Ads Setup",
    details: {
      overview:
        "Search, Shopping and Performance Max campaigns built from scratch with tracking, negatives and a bidding plan that protects margin.",
      includes: [
        "Conversion tracking and GA4 setup",
        "Keyword research and negatives list",
        "Search, Shopping and PMax campaigns",
        "Ad copy and asset creation",
        "Bidding and budget strategy",
        "Reporting dashboard",
      ],
      process: [
        "Account audit and tracking",
        "Campaign build",
        "Launch and learning phase",
        "Optimisation and scaling",
      ],
      timeline: "Ongoing monthly",
    },
    body: "Search, Shopping and Performance Max campaigns built from scratch with conversion tracking, negatives and a bidding plan that protects margin.",
    rating: "5.0",
    reviews: "97",
    experts: "5 specialists available",
    returning: "41 returning clients",
    price: "$220 - $480",
  },
  {
    image: svcEmailAutomation,
    title: "Email Marketing & Automation",
    details: {
      overview:
        "Flows and campaigns that turn one-time buyers into repeat revenue \u2014 welcome, abandoned cart, post-purchase and win-back.",
      includes: [
        "Klaviyo or equivalent setup",
        "Welcome and abandoned cart flows",
        "Post-purchase and win-back flows",
        "Segmentation and list hygiene",
        "Branded email templates",
        "Monthly campaign calendar",
      ],
      process: [
        "Account setup and audit",
        "Flow build and design",
        "Testing and activation",
        "Campaigns and reporting",
      ],
      timeline: "7 - 21 days",
    },
    body: "Welcome, abandoned cart, post-purchase and win-back flows plus campaign calendars that turn one-time buyers into repeat revenue.",
    rating: "5.0",
    reviews: "112",
    experts: "5 specialists available",
    returning: "49 returning clients",
    price: "$200 - $500",
  },
  {
    image: svcCro,
    title: "Conversion Rate Optimization (CRO)",
    details: {
      overview:
        "Funnel analysis, testing and page-level fixes that lift add-to-cart and checkout completion without spending more on traffic.",
      includes: [
        "Full funnel and analytics audit",
        "Heatmap and session recording setup",
        "A/B test plan and execution",
        "Product and checkout page redesigns",
        "Trust, urgency and offer optimisation",
        "Results report with uplift data",
      ],
      process: [
        "Data collection and audit",
        "Hypothesis and test plan",
        "Implementation and testing",
        "Results review and next round",
      ],
      timeline: "14 - 45 days",
    },
    body: "Funnel analysis, A/B testing and page-level fixes that lift add-to-cart and checkout completion without spending more on traffic.",
    rating: "5.0",
    reviews: "126",
    experts: "6 specialists available",
    returning: "54 returning clients",
    price: "$250 - $600",
  },
  {
    image: svcTiktokAds,
    title: "TikTok Ads Sales",
    details: {
      overview:
        "Full TikTok Ads management built for sales, not views — creative testing, audience structure and daily optimisation towards profitable cost per conversion.",
      includes: [
        "TikTok Ads Manager and Pixel setup",
        "Campaign, ad group and audience structure",
        "Creative testing with UGC-style hooks",
        "Daily bid, budget and placement optimisation",
        "Conversion and event tracking",
        "Weekly performance reporting",
      ],
      process: [
        "Account audit and tracking setup",
        "Creative and campaign build",
        "Testing phase",
        "Scale winners and report",
      ],
      timeline: "Ongoing monthly",
    },
    body: "TikTok Ads campaigns managed end to end — creative testing, audience targeting and daily optimisation focused on real conversions.",
    rating: "5.0",
    reviews: "96",
    experts: "4 specialists available",
    returning: "38 returning clients",
    price: "$250 - $450",
  },
  {
    image: svcFacebookAds,
    title: "Facebook Ads Sales",
    details: {
      overview:
        "Meta (Facebook & Instagram) ad campaigns engineered around purchase ROAS, with clean tracking, tested creative and disciplined scaling.",
      includes: [
        "Meta Business Suite and Pixel/CAPI setup",
        "Advantage+ and manual campaign builds",
        "Creative production briefs and testing",
        "Retargeting and retention audiences",
        "ROAS and conversion rate tracking",
        "Monthly performance reporting",
      ],
      process: [
        "Tracking audit and account setup",
        "Creative and campaign build",
        "Test and learn phase",
        "Scale profitable campaigns",
      ],
      timeline: "Ongoing monthly",
    },
    body: "Facebook and Instagram ad management built around purchase ROAS, with clean tracking, tested creative and controlled scaling.",
    rating: "5.0",
    reviews: "112",
    experts: "5 specialists available",
    returning: "44 returning clients",
    price: "$280 - $500",
  },
];


export const successRatings = [
  { label: "Shopify Development", value: 98 },
  { label: "Store Optimization", value: 97 },
  { label: "Shopify Marketing", value: 95 },
  { label: "Client Support", value: 99 },
];

export const reviewsIntro =
  "Every piece of client feedback shapes how we work. Here is what brands say after working with us.";

export const reviewSummary = {
  average: "4.9",
  total: "1,024 reviews",
  breakdown: [
    { stars: 5, count: 968 },
    { stars: 4, count: 44 },
    { stars: 3, count: 8 },
    { stars: 2, count: 3 },
    { stars: 1, count: 1 },
  ],
};

export const reviews = [
  {
    name: "Daniel O.",
    country: "United States",
    flag: "🇺🇸",
    when: "2 weeks ago",
    text: "They rebuilt our storefront in under three weeks and checkout drop-off stopped being our biggest problem. Straightforward communication the whole way through.",
    price: "$600 - $800",
    duration: "3 weeks",
  },
  {
    name: "Priya S.",
    country: "United Kingdom",
    flag: "🇬🇧",
    when: "1 month ago",
    text: "Fast replies, no jargon, and the redesign paid for itself in the first quarter. They understood the brand instead of applying a template.",
    price: "$400 - $600",
    duration: "2 weeks",
  },
  {
    name: "Marcus T.",
    country: "Canada",
    flag: "🇨🇦",
    when: "1 month ago",
    text: "The SEO cleanup brought steady organic traffic we had never seen before. Reporting was clear and I always knew what was being worked on.",
    price: "$200 - $400",
    duration: "4 weeks",
  },
  {
    name: "Amara N.",
    country: "Nigeria",
    flag: "🇳🇬",
    when: "2 months ago",
    text: "Migrated over a thousand products with no downtime. There was some back-and-forth on brand details, but the final store is exactly what we wanted.",
    price: "$800 - $1000",
    duration: "4 weeks",
  },
  {
    name: "Lucas M.",
    country: "Spain",
    flag: "🇪🇸",
    when: "3 weeks ago",
    text: "Clean design, sensible navigation and product pages that actually present the range well. Simple to hand over to our in-house team afterwards.",
    price: "Up to $200",
    duration: "1 week",
  },
  {
    name: "Sofia K.",
    country: "Germany",
    flag: "🇩🇪",
    when: "1 week ago",
    text: "Ads and email flows were set up properly for our margins rather than vanity metrics. First month came back profitable.",
    price: "$400 - $600",
    duration: "3 weeks",
  },
];

export const portfolioIntro =
  "A selection of recent projects across different eCommerce categories, each with the outcome that mattered to the client.";

export const portfolio = [
  {
    image: workSeoAudit,
    title: "Overall SEO Fix — 100% Store Score",
    body: "Full technical, on-page, mobile and content SEO clean-up that took the store audit to a perfect 100% score.",
    category: "SEO",
    duration: "2 weeks",
    likes: 91,
  },
  {
    image: workPagespeed,
    title: "Page Speed Optimization — 100 Performance",
    body: "Core Web Vitals and asset optimisation pushing PageSpeed Insights to 100 performance on mobile.",
    category: "Optimization",
    duration: "1 week",
    likes: 84,
  },
  {
    image: workMerchantApproval,
    title: "Google Merchant Feed Approval",
    body: "Product feed setup and fixes with all 64 products approved in Google Merchant Center, zero disapprovals.",
    category: "Marketing",
    duration: "10 days",
    likes: 73,
  },
  {
    image: workBrokenLinks,
    title: "Broken Link Fix & Site Health Audit",
    body: "412 URLs crawled and repaired across the store — scan completed with 0 broken links and 0 errors.",
    category: "SEO",
    duration: "5 days",
    likes: 58,
  },
  {
    image: workSitemap,
    title: "Sitemap Submission & Indexing Setup",
    body: "XML sitemap generated and successfully submitted to Google Search Console for faster indexing.",
    category: "SEO",
    duration: "2 days",
    likes: 47,
  },
  {
    image: workOwnership,
    title: "Google Search Console Ownership Verification",
    body: "Domain ownership verified via HTML tag so search performance and indexing data are fully tracked.",
    category: "SEO",
    duration: "1 day",
    likes: 39,
  },
  {
    image: workProductSeo,
    title: "Product SEO — 100 Meta Tag Scores",
    body: "Focus keywords, titles and meta descriptions optimised across the catalogue for perfect 100 meta tag scores.",
    category: "SEO",
    duration: "2 weeks",
    likes: 66,
  },
  {
    image: workMerchant,
    title: "Merchant Feed Approval",
    body: "Full product feed setup and clean-up with every submitted product approved.",
    category: "Marketing",
    duration: "2 weeks",
    likes: 67,
  },
  {
    image: workSeo,
    title: "Skincare SEO Overhaul",
    body: "Technical SEO and content restructure that lifted organic sessions substantially.",
    category: "SEO",
    duration: "3 weeks",
    likes: 52,
  },
  {
    image: workSpeed,
    title: "Page Speed Optimization",
    body: "Cut load time sharply and pushed performance scores into the high nineties.",
    category: "Optimization",
    duration: "1 week",
    likes: 44,
  },
  {
    image: workSales,
    title: "Store Sales Growth",
    body: "Conversion work and retention flows that grew monthly revenue in 30 days.",
    category: "Development",
    duration: "1 month",
    likes: 78,
  },
  {
    image: workAds,
    title: "Fashion Catalogue Migration",
    body: "Over 1,200 SKUs migrated to a new theme with zero downtime.",
    category: "Development",
    duration: "2 weeks",
    likes: 61,
  },
  {
    image: workDecor,
    title: "Home Decor Launch",
    body: "Brand-new storefront designed, built and launched inside 18 days.",
    category: "Development",
    duration: "18 days",
    likes: 55,
  },
];

/* ── LIVE CLIENT WEBSITES ──────────────────────────────────────
   Add or remove a site by copying one block. "work" is what we
   did on that store. Previews are generated automatically.      */
export const clientSitesIntro =
  "Live stores we have built, optimised or scaled. Open any preview to visit the site.";

export const clientSites = [
  { url: "https://mobiledrugsscreen.com", name: "Mobile Drugs Screen", work: "Store build, technical SEO fixes and Google Search Console setup" },
  { url: "https://www.musicboxattic.com", name: "Music Box Attic", work: "Product SEO, page speed optimisation and merchant feed clean-up" },
  { url: "https://childrenshha.com", name: "Children's HHA", work: "Site health audit, broken link repair and on-page SEO" },
  { url: "https://retrospec.com", name: "Retrospec", work: "Conversion rate optimisation and performance tuning" },
  { url: "https://darntough.com", name: "Darn Tough", work: "Technical SEO, structured data and Core Web Vitals work" },
  { url: "https://ukstore.weightliftinghouse.com", name: "Weightlifting House UK", work: "Shopify store development and catalogue migration" },
  { url: "https://thelandmarkproject.com", name: "The Landmark Project", work: "Email marketing automation and retention flows" },
  { url: "https://slickgorilla.co.uk", name: "Slick Gorilla", work: "Paid social creative testing and campaign management" },
  { url: "https://www.menscompressionshirt.com", name: "Men's Compression Shirt", work: "Google Ads, Merchant Center feed and product SEO" },
  { url: "https://thegoodkiddycollection.store", name: "The Good Kiddy Collection", work: "Full store setup, theme customisation and launch" },
  { url: "https://stay-loaded.com", name: "Stay Loaded", work: "Dropshipping setup, supplier integration and CRO" },
  { url: "https://bellybandit.com", name: "Belly Bandit", work: "SEO overhaul and content optimisation" },
  { url: "https://www.afflictionclothing.com", name: "Affliction Clothing", work: "Performance optimisation and paid media support" },
];

/* ── STORE SALES GROWTH VIDEOS ─────────────────────────────────
   Swap a video: upload a new .mp4 and change the import above.  */
export const salesVideosIntro =
  "Screen recordings from live client dashboards showing the sales growth we delivered. Press play, then use the arrows to see the next client.";

export const salesVideos = [
  { src: vidSalesProof.url, title: "Sales Proof — Revenue Dashboard", note: "Store revenue growth after conversion and retention work." },
  { src: vidHealthEmporium.url, title: "health-emporium.co.uk", note: "SEO and CRO work driving consistent monthly order growth." },
  { src: vidNamana.url, title: "Namana London", note: "Paid social and email flows scaling monthly sales." },
  { src: vidHolidayPuzzles.url, title: "holiyaypuzzles.com", note: "Seasonal campaign push with Google Ads and Merchant feed." },
  { src: vidStoreGrowth1.url, title: "Client Store Growth", note: "Store optimisation and ad management results." },
];

export const teamIntro =
  "Meet the people behind Brainboxworld. Our team works across development, marketing and project delivery to keep every build on track.";

export const teamLocations = [
  { code: "us", label: "United States" },
  { code: "gb", label: "United Kingdom" },
  { code: "ng", label: "Nigeria" },
];

export const team = [
  {
    photo: teamAdam,
    name: "Bawa Aliyu Adam",
    role: "Founder & Lead Strategist",
    website: "https://www.brainboxworld.dedyn.io",
    bio: "Leads strategy and client delivery, with years of experience taking eCommerce brands from first build to steady growth.",
  },
  {
    photo: teamFawaz,
    name: "Bawa Aliyu Fawaz",
    role: "Shopify & Frontend Engineering",
    website: "https://thelowkey.dedyn.io",
    bio: "Builds and customises Shopify themes, handles integrations and keeps storefronts fast and stable.",
  },
  {
    photo: teamHakeem,
    name: "Yusuf Abdul Hakeem",
    role: "Project Manager & Marketing Specialist",
    email: "blaqachraf@gmail.com",
    bio: "Coordinates projects end to end and runs multi-channel marketing so work ships on time and performs after launch.",
  },
  {
    photo: teamBashit,
    name: "Qoseem Abdul Bashit",
    role: "Business Planner & Marketing Strategist",
    website: "https://bashberryxpert.vercel.app",
    bio: "Strategic business planning and comprehensive marketing strategy development for eCommerce success.",
  },
  {
    photo: teamQudus,
    name: "Yusuf Abdul Qudus",
    role: "Social Media Manager & Marketing Expert",
    website: "https://www.hilluxetech.dedyn.io",
    bio: "Specializes in creating engaging social media campaigns across Facebook, Instagram, TikTok and Pinterest for maximum brand visibility.",
  },
  {
    photo: teamMubaraq,
    name: "Sulyman Mubaraq",
    role: "Google Developer & SEO Specialist",
    website: "https://theheroesagency.vercel.app",
    bio: "Google certified developer focusing on technical SEO, Google Ads optimization and search engine ranking improvement.",
  },
  {
    photo: teamYunus,
    name: "Yunus Amamat",
    role: "Backend Developer & Technical Optimization Specialist",
    website: "https://www.triumphagency.dedyn.io",
    bio: "Backend expert handling complex integrations, app development and technical optimizations for high-performance stores.",
  },
  {
    photo: teamTeslim,
    name: "Muhammed Teslim",
    role: "Content Marketing & SEO Specialist",
    website: "https://www.deepeaceagency.dedyn.io",
    bio: "Content strategist and SEO expert creating compelling content that ranks well and converts visitors into customers.",
  },
  {
    photo: teamLukman,
    name: "Soliu Lukman",
    role: "UGC & AI Video Specialist",
    website: "https://www.brightugc.dedyn.io",
    bio: "Produces creator-style UGC and AI-generated video ads that give products scroll-stopping presence on social.",
  },


];

export const contactIntro =
  "Before starting a project with any of our experts, talk to our team. We will answer your questions and point you to the right solution for your store.";

export const footer = {
  text: "© 2026 Brainboxworld. All rights reserved.",
};
