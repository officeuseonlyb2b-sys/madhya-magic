/**
 * Ujjain — manually managed luxury packages.
 *
 * HOW TO USE THIS FILE
 * --------------------
 * • To add a new package: copy any object below and edit the fields.
 * • To reorder packages on the site: change their order in this array
 *   (the first item appears first in the Ujjain listing).
 * • To temporarily disable a package: comment it out or add an
 *   `enabled: false` flag and filter it in `index.ts`.
 * • Keep `id` unique across the whole site.
 *
 * Image notes: imports are resolved by Vite — use any `@/assets/...` image
 * already in the project to keep bundle size low.
 */
import type { PackageData } from "./types";
import destUjjain from "@/assets/dest-ujjain.jpg";
import pkgJyotirlingaHeritage from "@/assets/pkg-jyotirlinga-heritage.jpg";

/** Shared exclusions for these luxury programs. */
const luxuryExcluded = [
  "Any services not specifically mentioned in the inclusions",
  "Air fares, train or flight tickets",
  "Personal expenses (telephone, laundry, drinks, camera fees, tips)",
  "Items of a personal nature",
];

/** Inclusions for the 2-night Sacred Jyotirlinga & Narmada Retreat. */
const inclusions2NLuxury = [
  "Meeting & assistance on arrival/departure at Airport/Hotel by our representative",
  "Accommodation for 02 nights on sharing basis with breakfast, lunch & dinner (fixed menu / buffet)",
  "02 Breakfasts, 02 Lunches & 02 Dinners as per the program",
  "All arrival/departure transfers, sightseeing & surface travel by Air-Conditioned Vehicle",
  "Sunset boat ride at Maheshwar with Hi-Tea (weather permitting)",
  "VVIP Darshan at Mahakaleshwar Temple, Ujjain and Omkar Mandhata Temple, Omkareshwar",
  "Hindi / English speaking local professional guide for complete city tour",
  "Mineral water (2 × 250 ml per person/day), tissues, sanitizers & masks in vehicle",
  "All presently applicable taxes",
];

/** Inclusions for the 4-night Majestic Land Of Mahakaal. */
const inclusions4NLuxury = [
  "Meeting & assistance on arrival/departure at Airport/Hotel by our representative",
  "Accommodation for 04 nights on sharing basis with breakfast, lunch & dinner (fixed menu / buffet)",
  "04 Breakfasts, 04 Lunches & 04 Dinners as per the program",
  "All arrival/departure transfers, sightseeing & surface travel by Air-Conditioned Vehicle",
  "Sunset boat ride at Maheshwar with Hi-Tea (weather permitting)",
  "VVIP Darshan at Mahakaleshwar Temple, Ujjain and Omkar Mandhata Temple, Omkareshwar",
  "Hindi / English speaking local professional guide for complete city tour",
  "Mineral water (2 × 250 ml per person/day), tissues, sanitizers & masks in vehicle",
  "All presently applicable taxes",
];

export const ujjainPackages: PackageData[] = [
  // ── #1 — 3 Days / 2 Nights — Luxury ──────────────────────────────────────
  {
    id: "sacred-jyotirlinga-narmada-retreat",
    name: "Sacred Jyotirlinga & Narmada Retreat",
    location: "Indore - Ujjain - Omkareshwar - Maheshwar - Indore",
    duration: "3 Days / 2 Nights",
    days: 3,
    price: 55000,
    originalPrice: 66000,
    category: "Spiritual",
    tourCategory: "Luxury Program",
    image: destUjjain,
    highlights: [
      "VVIP Darshan at Mahakaleshwar Jyotirlinga, Ujjain",
      "Harsiddhi Mata Temple Aarti",
      "Omkareshwar — Omkar Mandhata Jyotirlinga",
      "Maheshwar — Ahilya Fort & Narmada ghats",
      "Sunset boat ride on the Narmada with Hi-Tea",
      "Hand-picked luxury accommodation & curated meals",
    ],
    description:
      "A 3-day luxury spiritual retreat tracing two of India's sacred Jyotirlingas — Mahakaleshwar and Omkareshwar — paired with a regal Narmada-side stay at Maheshwar.",
    itinerary: [
      {
        day: 1,
        title: "Indore → Ujjain",
        description:
          "Arrival at Indore, drive to Ujjain. VVIP Darshan at Mahakaleshwar Jyotirlinga, evening Harsiddhi Mata aarti and Ram Ghat. Overnight in Ujjain.",
      },
      {
        day: 2,
        title: "Ujjain → Omkareshwar → Maheshwar",
        description:
          "Drive to Omkareshwar for VVIP darshan at Omkar Mandhata Temple. Continue to Maheshwar — explore Ahilya Fort, ghats and enjoy a sunset Narmada boat ride with Hi-Tea. Overnight in Maheshwar.",
      },
      {
        day: 3,
        title: "Maheshwar → Indore (Departure)",
        description:
          "Morning at leisure by the Narmada. Drive back to Indore for your onward departure transfer.",
      },
    ],
    included: inclusions2NLuxury,
    excluded: luxuryExcluded,
    featured: true,
    offer: true,
  },

  // ── #2 — 5 Days / 4 Nights — Luxury ──────────────────────────────────────
  {
    id: "majestic-land-of-mahakaal",
    name: "The Majestic Land Of Mahakaal",
    location: "Indore - Ujjain - Omkareshwar - Maheshwar - Mandu - Indore",
    duration: "5 Days / 4 Nights",
    days: 5,
    price: 85500,
    originalPrice: 102600,
    category: "Spiritual",
    tourCategory: "Luxury Program",
    image: pkgJyotirlingaHeritage,
    highlights: [
      "VVIP Darshan at Mahakaleshwar Jyotirlinga, Ujjain",
      "Harsiddhi Mata Temple Aarti & Kal Bhairav",
      "Omkareshwar — Omkar Mandhata Jyotirlinga",
      "Maheshwar — Ahilya Fort & sunset Narmada boat ride",
      "Mandu — Jahaz Mahal, Hindola Mahal & Rani Roopmati Pavilion",
      "Luxury riverside stays & curated dining",
    ],
    description:
      "Five regal days through the Kingdom of Mahakaal — sacred Jyotirlingas at Ujjain and Omkareshwar, the riverside grace of Maheshwar and the romantic ruins of Mandu, all in a luxury format.",
    itinerary: [
      {
        day: 1,
        title: "Indore → Ujjain",
        description:
          "Arrival at Indore, drive to Ujjain. VVIP darshan at Mahakaleshwar Jyotirlinga, Harsiddhi Mata aarti and Ram Ghat in the evening. Overnight in Ujjain.",
      },
      {
        day: 2,
        title: "Ujjain Heritage Day",
        description:
          "Optional Bhasma aarti at dawn. Visit Kal Bhairav, Mangalnath, Sandipani Ashram and Vedh Shala. Overnight in Ujjain.",
      },
      {
        day: 3,
        title: "Ujjain → Omkareshwar → Maheshwar",
        description:
          "Drive to Omkareshwar for VVIP darshan at Omkar Mandhata Temple. Continue to Maheshwar — Ahilya Fort, ghats and sunset Narmada boat ride with Hi-Tea. Overnight in Maheshwar.",
      },
      {
        day: 4,
        title: "Maheshwar → Mandu",
        description:
          "Explore Mandu — Jahaz Mahal, Hindola Mahal, Hoshang Shah's Tomb. Sunset at Rani Roopmati Pavilion. Overnight near Mandu.",
      },
      {
        day: 5,
        title: "Mandu → Indore (Departure)",
        description:
          "Drive back to Indore. Visit Rajwada / Lal Bagh Palace if time permits before your onward departure transfer.",
      },
    ],
    included: inclusions4NLuxury,
    excluded: luxuryExcluded,
    featured: true,
    offer: true,
  },
];

export default ujjainPackages;
