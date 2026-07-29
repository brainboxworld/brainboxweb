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
 *               import teamAdam from "@/assets/team-adam.jpg";
 *             becomes
 *               import teamAdam from "@/assets/my-new-photo.jpg";
 *
 *  • ADD a team member / service / review → copy one block
 *    (from "{" to "}," ) and paste it below, then edit it.
 * ─────────────────────────────────────────────────────────────
 */

import logo from "@/assets/brainboxworld-logo.png";
import banner from "@/assets/brainboxworld-banner.jpg";
import partnerBadge from "@/assets/partner-badge.png";
import shopifyPartner from "@/assets/shopify-partner.jpg.asset.json";

// Team photos
import teamAdam from "@/assets/team-adam.jpg";
import teamPlaceholder from "@/assets/team-placeholder.jpg";
import teamFawazAsset from "@/assets/team-fawaz-new.png.asset.json";
import teamHakeemAsset from "@/assets/team-hakeem.jpg.asset.json";
import teamRosheedAsset from "@/assets/team-rosheed.jpg.asset.json";
import teamQudusAsset from "@/assets/team-qudus.png.asset.json";
import teamYunusAsset from "@/assets/team-yunus-amamat.jpg.asset.json";
import teamTeslimAsset from "@/assets/team-teslim.png.asset.json";
import teamLukmanAsset from "@/assets/team-lukman.jpg.asset.json";


// Service images
import svcStore from "@/assets/service-store-development.jpg";
import svcDropshipping from "@/assets/service-dropshipping.jpg";
import svcOptimization from "@/assets/service-optimization.jpg";
import svcSeo from "@/assets/service-seo.jpg";
import svcListings from "@/assets/service-listings.jpg";
import svcSocialShop from "@/assets/service-social-shop.jpg";
import svcErrors from "@/assets/service-error-fixing.jpg";
import svcSocialAds from "@/assets/service-social-ads.jpg";
import svcSearchAds from "@/assets/service-search-ads.jpg";
import svcAiVisibility from "@/assets/service-ai-visibility.jpg";
import svcContentWriting from "@/assets/service-content-writing.jpg";
import svcUgcVideo from "@/assets/service-ugc-video.jpg";
import svcMarketplace from "@/assets/service-marketplace.jpg";
import svcAeoGeo from "@/assets/service-aeo-geo.jpg";
import svcMerchantListing from "@/assets/service-merchant-listing.jpg";
import svcGoogleAds from "@/assets/service-google-ads.jpg";
import svcEmailAutomation from "@/assets/service-email-automation.jpg";
import svcCro from "@/assets/service-cro.jpg";

// Portfolio images
import workMerchant from "@/assets/work-merchant.jpg";
import workSeo from "@/assets/work-skincare.jpg";
import workSpeed from "@/assets/work-speed.jpg";
import workSales from "@/assets/work-sales.jpg";
import workAds from "@/assets/work-fashion.jpg";
import workDecor from "@/assets/work-home-decor.jpg";


export const brand = {
  name: "Brainboxworld",
  shortName: "Brainboxworld",
  initials: "BB",
  tagline: "eCommerce & Shopify Growth Agency",
  quote: "Turning storefronts into steady, profitable sales channels",
  logo,
  banner,
  partnerBadge,
  shopifyPartnerBadge: shopifyPartner.url,
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
    body: "Funnel analysis, A/B testing and page-level fixes that lift add-to-cart and checkout completion without spending more on traffic.",
    rating: "5.0",
    reviews: "126",
    experts: "6 specialists available",
    returning: "54 returning clients",
    price: "$250 - $600",
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
    { stars: 5, count: 972 },
    { stars: 4, count: 41 },
    { stars: 3, count: 7 },
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

export const teamIntro =
  "Meet the people behind Brainboxworld. Our team works across development, marketing and project delivery to keep every build on track.";

export const teamLocations = [
  { flag: "🇺🇸", label: "United States" },
  { flag: "🇬🇧", label: "United Kingdom" },
  { flag: "🇳🇬", label: "Nigeria" },
];

export const team = [
  {
    photo: teamAdam,
    name: "Bawa Aliyu Adam",
    role: "Founder & Lead Strategist",
    email: "info@brainboxworld.dedyn.io",
    bio: "Leads strategy and client delivery, with years of experience taking eCommerce brands from first build to steady growth.",
  },
  {
    photo: teamFawazAsset.url,
    name: "Bawa Aliyu Fawaz",
    role: "Shopify & Frontend Engineering",
    email: "alwaysonalowkey@gmail.com",
    bio: "Builds and customises Shopify themes, handles integrations and keeps storefronts fast and stable.",
  },
  {
    photo: teamHakeemAsset.url,
    name: "Yusuf Abdul Hakeem",
    role: "Project Manager & Marketing Specialist",
    email: "blaqachraf@gmail.com",
    bio: "Coordinates projects end to end and runs multi-channel marketing so work ships on time and performs after launch.",
  },
  {
    photo: teamRosheedAsset.url,
    name: "Muhd Soliu Abdul Rosheed",
    role: "Business Planner & Marketing Strategist",
    email: "crowntech.partner@gmail.com",
    bio: "Strategic business planning and comprehensive marketing strategy development for eCommerce success.",
  },
  {
    photo: teamQudusAsset.url,
    name: "Yusuf Abdul Qudus",
    role: "Social Media Manager & Marketing Expert",
    email: "hiluxetech@gmail.com",
    bio: "Specializes in creating engaging social media campaigns across Facebook, Instagram, TikTok and Pinterest for maximum brand visibility.",
  },
  {
    photo: teamPlaceholder,
    name: "Sulyman Mubaraq",
    role: "Google Developer & SEO Specialist",
    email: "info.theheroesagency@gmail.com",
    bio: "Google certified developer focusing on technical SEO, Google Ads optimization and search engine ranking improvement.",
  },
  {
    photo: teamYunusAsset.url,
    name: "Yunus Amamat",
    role: "Backend Developer & Technical Optimization Specialist",
    email: "triumphproagency@gmail.com",
    bio: "Backend expert handling complex integrations, app development and technical optimizations for high-performance stores.",
  },
  {
    photo: teamTeslimAsset.url,
    name: "Muhammed Teslim",
    role: "Content Marketing & SEO Specialist",
    email: "theonlypeaceexpert@gmail.com",
    bio: "Content strategist and SEO expert creating compelling content that ranks well and converts visitors into customers.",
  },
  {
    photo: teamLukmanAsset.url,
    name: "Soliu Lukman",
    role: "UGC & AI Video Specialist",
    email: "mrbrightugc@gmail.com",
    bio: "Produces creator-style UGC and AI-generated video ads that give products scroll-stopping presence on social.",
  },


];

export const contactIntro =
  "Before starting a project with any of our experts, talk to our team. We will answer your questions and point you to the right solution for your store.";

export const footer = {
  text: `© ${new Date().getFullYear()} Brainboxworld. All rights reserved.`,
};
