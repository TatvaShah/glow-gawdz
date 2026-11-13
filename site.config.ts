import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Glow Gawdz",
  tagline: "Soft glam, smokey, brownie and full glam, by appointment.",
  category: "Makeup studio",
  schemaType: "BeautySalon",
  area: "Scarborough, Toronto, ON",
  siteUrl: "https://glow-gawdz-ca.vercel.app",

  theme: {
    preset: "salon-chic",
    colors: { accent: "#785750" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    eyebrow: "Makeup studio in Scarborough",
    headline: "Soft glam, smokey and full glam for your day",
    subhead: "Glow Gawdz is a makeup studio at 80 Barbados Blvd, Unit 3, Scarborough, open Monday to Sunday by appointment, with travel makeup services too. Book a time through the scheduling link.",
    images: [
      { src: "/images/post-1.jpg", alt: "Soft smokey glam by Glow Gawdz", width: 1080, height: 1440 },
      { src: "/images/post-5.jpg", alt: "Brownie glam by Glow Gawdz", width: 1080, height: 1315 },
      { src: "/images/post-3.jpg", alt: "Soft smokey glam in a red top by Glow Gawdz", width: 1080, height: 1439 },
    ],
    primaryCta: { label: "Book a makeup appointment", href: "https://glowgawdz.as.me/" },
    secondaryCta: { label: "See the work", href: "#gallery" },
  },

  highlights: [
    "Soft glam, soft smokey glam, brownie glam and full glam",
    "Studio at 80 Barbados Blvd, Unit 3, Scarborough",
    "Monday to Sunday, by appointment only",
    "Travel makeup services available",
  ],

  about: {
    title: "Welcome to Glow Gawdz",
    body: [
      "Glow Gawdz is a makeup studio in Scarborough for soft glam, soft smokey glam, brownie glam and full glam. Travel makeup services are also available. Accessories and punch are available at the studio.",
      "The studio is at 80 Barbados Blvd, Unit 3, Scarborough, and is open Monday to Sunday by appointment only. Book a makeup appointment through the scheduling link.",
    ],
    image: { src: "/images/post-1.jpg", alt: "Soft smokey glam by Glow Gawdz", width: 1080, height: 1440 },
  },

  menu: {
    label: "Services",
    title: "Makeup services",
    variant: "list",
    showPrices: false,
    priceNote: "Book through the scheduling link to ask about current pricing and to pick a time.",
    groups: [
      {
        title: "Glam",
        items: [
          { name: "Soft glam" },
          { name: "Soft smokey glam" },
          { name: "Brownie glam" },
          { name: "Full glam" },
        ],
      },
      {
        title: "Also available",
        items: [
          { name: "Travel makeup services" },
          { name: "Accessories and punch" },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent looks",
    items: [
      { src: "/images/post-1.jpg", width: 1080, height: 1440, alt: "Soft smokey glam by Glow Gawdz", caption: "Soft smokey glam", href: "https://www.instagram.com/p/Dfni7a8m-T1/" },
      { src: "/images/post-2.jpg", width: 910, height: 1213, alt: "Soft glam by Glow Gawdz", caption: "Soft glam", href: "https://www.instagram.com/p/Dfh74GrG-W-/" },
      { src: "/images/post-3.jpg", width: 1080, height: 1439, alt: "Soft smokey glam in a red top by Glow Gawdz", caption: "Soft smokey glam", href: "https://www.instagram.com/p/Dfc9aznGweS/" },
      { src: "/images/post-4.jpg", width: 1080, height: 1440, alt: "Travel soft glam by Glow Gawdz", caption: "Travel soft glam", href: "https://www.instagram.com/p/Dfa_plAm-Nt/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1315, alt: "Brownie glam by Glow Gawdz", caption: "Brownie glam", href: "https://www.instagram.com/p/Dfa4wrmmwaK/" },
      { src: "/images/post-6.jpg", width: 720, height: 1280, alt: "Brownie glam with curls by Glow Gawdz", caption: "Brownie glam", href: "https://www.instagram.com/reel/DfDmiG5xFpC/" },
      { src: "/images/post-7.jpg", width: 720, height: 1280, alt: "Full glam by Glow Gawdz", caption: "Full glam", href: "https://www.instagram.com/reel/DfA7RwYJTq-/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "glowgawdz",
    embeds: ["https://www.instagram.com/p/Dfni7a8m-T1/", "https://www.instagram.com/p/Dfa4wrmmwaK/", "https://www.instagram.com/p/Dfc9aznGweS/"],
  },

  order: {
    label: "How to book",
    title: "Book a time on the scheduling link",
    intro: "Use the booking link to schedule a makeup appointment. The studio is at 80 Barbados Blvd, Unit 3, Scarborough, and is open Monday to Sunday by appointment only.",
    dmMessage: "Hi Glow Gawdz! I would like to book.\nPreferred date:\nLook (soft glam, smokey, brownie or full glam):",
    headerCtaLabel: "Book now",
    links: [
      { label: "Book a makeup appointment", href: "https://glowgawdz.as.me/" },
    ],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Use the scheduling link to book a makeup appointment." },
    { q: "Where is the studio?", a: "Glow Gawdz is at 80 Barbados Blvd, Unit 3, Scarborough, and is open Monday to Sunday by appointment only." },
    { q: "What looks do you offer?", a: "Soft glam, soft smokey glam, brownie glam and full glam, plus travel makeup services." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Scarborough, Toronto, Ontario",
    address: "80 Barbados Blvd, Unit 3, Scarborough, ON",
    socials: [{ label: "Instagram", href: "https://www.instagram.com/glowgawdz/" }],
  },

  seo: {
    title: "Glow Gawdz | Makeup studio in Scarborough",
    description: "Soft glam, smokey, brownie and full glam in Scarborough, by appointment Monday to Sunday. Travel makeup available. Book through the scheduling link.",
    keywords: ["makeup studio Scarborough", "soft glam Toronto", "Glow Gawdz"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
