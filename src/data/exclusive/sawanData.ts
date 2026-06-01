// =============================================================
// Sawan in Ujjain — Seasonal Exclusive Campaign Data
// -------------------------------------------------------------
// This file owns ALL content for the /exclusive/sawan-ujjain page.
// To replace this campaign (Simhastha, Monsoon Special, etc.):
//   1. Replace images under src/assets/exclusive/<campaign>/
//   2. Swap this data file's contents
//   3. (optionally) rename the route/files
// =============================================================

import heroAsset from "@/assets/exclusive/sawan/sawan-hero.jpg.asset.json";
import s1 from "@/assets/exclusive/sawan/sawan-1.jpg.asset.json";
import s2 from "@/assets/exclusive/sawan/sawan-2.jpg.asset.json";
import s3 from "@/assets/exclusive/sawan/sawan-3.jpg.asset.json";
import s4 from "@/assets/exclusive/sawan/sawan-4.jpg.asset.json";

export interface SawanReel {
  id: string;
  title: string;
  location: string;
  image: string;
}

export interface SawanPackage {
  id: string;
  name: string;
  duration: string;
  price: string;
  image: string;
  highlights: string[];
  cta: string;
  ctaHref: string;
}

export interface SawanWhyItem {
  icon: string;
  title: string;
  description: string;
}

export const sawanCampaign = {
  slug: "sawan-ujjain",
  hero: {
    image: heroAsset.url,
    title: "Sawan in Ujjain",
    subtitle:
      "Experience the divine energy of Mahakal during the sacred month of Sawan.",
    primaryCta: { label: "Explore Packages", target: "#sawan-packages" },
    secondaryCta: { label: "Watch Reels", target: "#sawan-reels" },
  },
  intro: {
    image: s4.url,
    eyebrow: "Sacred Month • Shravan",
    title: "About Sawan in Ujjain",
    paragraphs: [
      "Sawan, the holiest month in the Hindu calendar, transforms Ujjain into a luminous river of devotion. Pilgrims from across the country converge at the banks of the Shipra to honour Lord Shiva at the revered Mahakaleshwar Jyotirlinga.",
      "The Mahakaleshwar Temple — one of the twelve Jyotirlingas — radiates a singular spiritual power. The pre-dawn Bhasma Aarti, performed only here, is an unforgettable encounter with the divine, drawing seekers, sadhus and devotees alike.",
      "Every Monday of Sawan, the grand Sawari procession of Mahakal winds through the old city — adorned palanquins, chanting devotees, and rhythmic dhol-tasha turn Ujjain's streets into a moving temple of celebration.",
      "From the ghats of Ram Ghat to the inner sanctum at Mahakal, the city's spiritual atmosphere during Sawan is unlike any other time of the year — making it the most blessed time to visit Ujjain.",
    ],
    highlights: [
      "Sacred significance of the Shravan month",
      "Mahakaleshwar Jyotirlinga darshan",
      "Iconic Bhasma Aarti experience",
      "Grand Monday Sawari processions",
      "Shipra ghats & evening aartis",
      "Curated spiritual itineraries",
    ],
  },
  reels: [
    { id: "sawari-1", title: "Mahakal Sawari Procession", location: "Ujjain", image: s4.url },
    { id: "ganesh-band", title: "Sawan Street Devotion", location: "Ujjain Old City", image: s1.url },
    { id: "palki", title: "Adorned Palki of Mata", location: "Sawan Yatra", image: s2.url },
    { id: "darshan", title: "Mahakal Darshan", location: "Mahakaleshwar Temple", image: s3.url },
    { id: "shipra", title: "Shipra Ghat Evening", location: "Ram Ghat, Ujjain", image: heroAsset.url },
  ] satisfies SawanReel[],
  packages: [
    {
      id: "sawan-mahakal-darshan-2n",
      name: "Sawan Mahakal Darshan",
      duration: "3 Days / 2 Nights",
      price: "₹18,500",
      image: s3.url,
      highlights: [
        "VVIP Bhasma Aarti Darshan",
        "Mahakaleshwar Jyotirlinga",
        "Kal Bhairav & Harsiddhi Temple",
        "Ram Ghat Sandhya Aarti",
      ],
      cta: "View Details",
      ctaHref: "/packages",
    },
    {
      id: "sawan-sawari-special-3n",
      name: "Sawan Sawari Special",
      duration: "4 Days / 3 Nights",
      price: "₹27,900",
      image: s4.url,
      highlights: [
        "Live Monday Sawari Procession",
        "Premium Darshan Access",
        "Old City Heritage Walk",
        "Curated Sattvik Meals",
      ],
      cta: "View Details",
      ctaHref: "/packages",
    },
    {
      id: "sawan-jyotirlinga-yatra-4n",
      name: "Sawan Jyotirlinga Yatra",
      duration: "5 Days / 4 Nights",
      price: "₹42,500",
      image: s2.url,
      highlights: [
        "Ujjain + Omkareshwar Jyotirlingas",
        "Maheshwar Narmada Ghat",
        "Luxury Riverside Stay",
        "Private AC Vehicle",
      ],
      cta: "View Details",
      ctaHref: "/packages",
    },
  ] satisfies SawanPackage[],
  whyBookWithUs: [
    { icon: "🛕", title: "Local Spiritual Experts", description: "Curated by Ujjain-based pandits and guides." },
    { icon: "✅", title: "Verified Guides", description: "Trained, multilingual and temple-protocol aware." },
    { icon: "🚐", title: "Comfortable Transport", description: "AC vehicles with dedicated chauffeurs." },
    { icon: "🪔", title: "Authentic Experiences", description: "VVIP darshan, Bhasma Aarti and aarti rituals." },
    { icon: "📞", title: "24/7 Support", description: "On-ground assistance throughout your yatra." },
    { icon: "🧭", title: "Custom Tours", description: "Tailor every itinerary to your devotion." },
  ] satisfies SawanWhyItem[],
  cta: {
    title: "Plan Your Spiritual Journey to Ujjain",
    subtitle: "Limited Sawan slots. Reserve your darshan & sawari experience today.",
    buttonLabel: "Book Now",
    buttonHref: "/contact",
  },
  seo: {
    title: "Sawan in Ujjain | Exclusive Spiritual Experiences",
    description:
      "Experience the divine Sawan celebrations in Ujjain with special packages, spiritual tours, Mahakal darshan, reels and curated experiences.",
    canonical: "/exclusive/sawan-ujjain",
    image: heroAsset.url,
  },
};

export type SawanCampaign = typeof sawanCampaign;
