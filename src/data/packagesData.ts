import pkgMahakal from "@/assets/pkg-mahakal.jpg";
import pkgHeritagePilgrimage from "@/assets/pkg-heritage-pilgrimage.jpg";
import pkgMarvelsMalwa from "@/assets/pkg-marvels-malwa.jpg";
import pkgJyotirlingaHeritage from "@/assets/pkg-jyotirlinga-heritage.jpg";
import pkgHeritageTrailsSacred from "@/assets/pkg-heritage-trails-sacred.jpg";

export interface PackageData {
  id: string;
  name: string;
  location: string;
  duration: string;
  days: number;
  price: number;
  originalPrice: number;
  category: string;
  tourCategory?: string;
  image: string;
  highlights: string[];
  description: string;
  itinerary: { day: number; title: string; description: string }[];
  included: string[];
  excluded: string[];
  /** Curated for the home "Special Offers & Featured Packages" slider */
  featured?: boolean;
  /** Marked as a current promotional offer */
  offer?: boolean;
}

/* ─────────────────────────────────────────────────────────────
   Common inclusions / exclusions (from source brochure)
   ───────────────────────────────────────────────────────────── */
const baseExcluded = [
  "Air fares, train or flight tickets",
  "Guides, entrance fees & activity charges",
  "Meals other than those mentioned",
  "Personal expenses (telephone, laundry, drinks, camera fees, tips)",
  "5% GST",
];

const inclusions1N = [
  "Meeting & assistance on arrival/departure at Airport/Hotel",
  "Accommodation for 01 night on twin-sharing basis (Room + Breakfast)",
  "01 Breakfast as per the program",
  "All transfers & sightseeing by Air-Conditioned Vehicle",
  "Mineral water, tissues, sanitizers & masks in vehicle",
];

const inclusions2N = [
  "Meeting & assistance on arrival/departure at Airport/Hotel",
  "Accommodation for 02 nights on twin-sharing (Room + Breakfast). MAP plan in Maheshwar (3★ / 3★ Deluxe / 4★)",
  "02 Breakfasts & 01 Dinner (in Maheshwar 3★ / 3★ Deluxe / 4★)",
  "All transfers & sightseeing by Air-Conditioned Vehicle",
  "Mineral water, tissues, sanitizers & masks in vehicle",
];

const inclusions3N = [
  "Meeting & assistance on arrival/departure at Airport/Hotel",
  "Accommodation for 03 nights on twin-sharing (Room + Breakfast). MAP plan in Maheshwar (3★ / 3★ Deluxe / 4★)",
  "03 Breakfasts & 01 Dinner (in Maheshwar 3★ / 3★ Deluxe / 4★)",
  "All transfers & sightseeing by Air-Conditioned Vehicle",
  "Mineral water, tissues, sanitizers & masks in vehicle",
];

const inclusions4N = [
  "Meeting & assistance on arrival/departure at Airport/Hotel",
  "Accommodation for 04 nights on twin-sharing (Room + Breakfast). MAP plan in Maheshwar (3★ / 3★ Deluxe / 4★)",
  "04 Breakfasts & 01 Dinner (in Maheshwar 3★ / 3★ Deluxe / 4★)",
  "All transfers & sightseeing by Air-Conditioned Vehicle",
  "Mineral water, tissues, sanitizers & masks in vehicle",
];

/* ─────────────────────────────────────────────────────────────
   The 5 Packages (from EXIDR01.xlsx)
   ───────────────────────────────────────────────────────────── */
export const allPackages: PackageData[] = [
  {
    id: "mahakal-darshan",
    name: "Mahakal Darshan",
    location: "Indore - Ujjain - Indore",
    duration: "2 Days / 1 Night",
    days: 2,
    price: 7100,
    originalPrice: 8500,
    category: "Spiritual",
    image: pkgMahakal,
    highlights: [
      "Mahakaleshwar Jyotirlinga Darshan",
      "Harsiddhi Mata Temple Aarti",
      "Indore — city of flavors & flair",
    ],
    description:
      "The Kingdom of Mahakaal, where ancient spirituality reigns supreme — a curated 2-day journey covering the sacred shrines of Ujjain and the cultural delights of Indore.",
    itinerary: [
      { day: 1, title: "Indore → Ujjain", description: "Arrival at Indore, drive to Ujjain. Visit Mahakaleshwar Jyotirlinga, Harsiddhi Mata Temple aarti, Kal Bhairav and Ram Ghat. Overnight stay in Ujjain." },
      { day: 2, title: "Ujjain → Indore (Departure)", description: "Morning darshan, return to Indore. Explore Rajwada, Sarafa Bazaar & Lal Bagh Palace before departure transfer." },
    ],
    included: inclusions1N,
    excluded: baseExcluded,
    featured: true,
    offer: true,
  },
  {
    id: "heritage-pilgrimage",
    name: "Heritage Pilgrimage",
    location: "Indore - Ujjain - Omkareshwar - Maheshwar - Mandu - Indore",
    duration: "3 Days / 2 Nights",
    days: 3,
    price: 11500,
    originalPrice: 13800,
    category: "Spiritual",
    image: pkgHeritagePilgrimage,
    highlights: [
      "Mahakaleshwar Jyotirlinga & Bhasma Aarti",
      "Harsiddhi Mata Temple Aarti",
      "Omkareshwar sacred island darshan",
      "Maheshwar's Ahilya Fort & Narmada ghats",
      "Sunset boat ride on the Narmada",
      "Mandu — romantic ruins of Malwa",
    ],
    description:
      "A sacred 3-day pilgrimage covering two of Madhya Pradesh's most revered Jyotirlingas along with the regal heritage of Maheshwar and Mandu.",
    itinerary: [
      { day: 1, title: "Indore → Ujjain", description: "Arrival, transfer to Ujjain. Mahakaleshwar darshan, Harsiddhi aarti, Kal Bhairav. Overnight Ujjain." },
      { day: 2, title: "Ujjain → Omkareshwar → Maheshwar", description: "Drive to Omkareshwar for Jyotirlinga darshan, continue to Maheshwar — Ahilya Fort & sunset Narmada boat ride. Overnight Maheshwar." },
      { day: 3, title: "Maheshwar → Mandu → Indore", description: "Explore Mandu — Jahaz Mahal, Hindola Mahal, Rani Roopmati Pavilion at sunset. Drive to Indore for departure." },
    ],
    included: inclusions2N,
    excluded: baseExcluded,
    featured: true,
    offer: true,
  },
  {
    id: "marvels-of-malwa",
    name: "The Marvels Of Malwa",
    location: "Indore - Ujjain - Omkareshwar - Maheshwar - Mandu - Indore",
    duration: "4 Days / 3 Nights",
    days: 4,
    price: 17200,
    originalPrice: 20600,
    category: "Heritage",
    image: pkgMarvelsMalwa,
    highlights: [
      "Mahakaleshwar Jyotirlinga & Harsiddhi aarti",
      "Omkareshwar sacred island",
      "Maheshwar — Ahilya Fort & sunset boat ride",
      "Mandu's romantic ruins",
      "Sunset at Rani Roopmati Pavilion",
      "Indore's heritage & cuisine",
    ],
    description:
      "Discover the marvels of the Malwa plateau across 4 days — sacred shrines, regal forts, riverside ghats and the timeless romance of Mandu's ruins.",
    itinerary: [
      { day: 1, title: "Indore → Ujjain", description: "Arrival in Indore, transfer to Ujjain. Mahakaleshwar darshan, Harsiddhi aarti, Ram Ghat evening. Overnight Ujjain." },
      { day: 2, title: "Ujjain → Omkareshwar → Maheshwar", description: "Drive to Omkareshwar for Jyotirlinga darshan. Continue to Maheshwar — Ahilya Fort & Narmada sunset boat ride. Overnight Maheshwar." },
      { day: 3, title: "Maheshwar → Mandu", description: "Explore Mandu — Jahaz Mahal, Hindola Mahal, Hoshang Shah's Tomb. Sunset at Rani Roopmati Pavilion. Overnight near Mandu." },
      { day: 4, title: "Mandu → Indore (Departure)", description: "Drive back to Indore. Visit Rajwada & Lal Bagh Palace before departure transfer." },
    ],
    included: inclusions3N,
    excluded: baseExcluded,
    featured: true,
    offer: true,
  },
  {
    id: "jyotirlinga-heritage-trails",
    name: "Jyotirlinga & Heritage Trails of Madhya Pradesh",
    location: "Indore - Ujjain - Omkareshwar - Maheshwar - Mandu - Indore",
    duration: "5 Days / 4 Nights",
    days: 5,
    price: 20600,
    originalPrice: 24700,
    category: "Spiritual",
    image: pkgJyotirlingaHeritage,
    highlights: [
      "Two Jyotirlingas — Mahakaleshwar & Omkareshwar",
      "Harsiddhi Mata Temple Aarti",
      "Maheshwar's Ahilya Fort & sunset boat ride",
      "Mandu's romantic ruins & Rani Roopmati Pavilion",
      "Indore — Sarafa Bazaar nocturnal food market",
    ],
    description:
      "A 5-day immersive trail blending Madhya Pradesh's sacred Jyotirlingas with the heritage marvels of Maheshwar, Mandu and the cultural soul of Indore.",
    itinerary: [
      { day: 1, title: "Indore → Ujjain", description: "Arrival in Indore, drive to Ujjain. Mahakaleshwar darshan, Harsiddhi aarti, Kal Bhairav. Overnight Ujjain." },
      { day: 2, title: "Ujjain → Omkareshwar", description: "Bhasma aarti (optional), drive to Omkareshwar. Jyotirlinga darshan, parikrama. Overnight Omkareshwar / Maheshwar." },
      { day: 3, title: "Omkareshwar → Maheshwar", description: "Visit Ahilya Fort, Narmada ghats and sunset boat ride. Overnight Maheshwar." },
      { day: 4, title: "Maheshwar → Mandu", description: "Explore Mandu's monuments — Jahaz Mahal, Hindola Mahal, Hoshang Shah's Tomb. Sunset at Rani Roopmati Pavilion. Overnight near Mandu." },
      { day: 5, title: "Mandu → Indore (Departure)", description: "Return to Indore. Sarafa Bazaar food walk, Rajwada visit before departure transfer." },
    ],
    included: inclusions4N,
    excluded: baseExcluded,
    featured: true,
    offer: true,
  },
  {
    id: "heritage-trails-sacred-wonders",
    name: "Heritage Trails & Sacred Wonders",
    location: "Indore - Ujjain - Omkareshwar - Maheshwar - Mandu - Indore",
    duration: "5 Days / 4 Nights",
    days: 5,
    price: 21800,
    originalPrice: 26200,
    category: "Heritage",
    image: pkgHeritageTrailsSacred,
    highlights: [
      "Mahakaleshwar Jyotirlinga & Harsiddhi aarti",
      "Omkareshwar sacred island darshan",
      "Maheshwar's regal ghats & sunset boat ride",
      "Mandu — Jahaz Mahal & Roopmati Pavilion",
      "Indore — bustling markets & culinary delights",
    ],
    description:
      "An elevated 5-day exploration of sacred wonders and royal heritage across Ujjain, Omkareshwar, Maheshwar, Mandu and Indore.",
    itinerary: [
      { day: 1, title: "Indore → Ujjain", description: "Arrival, drive to Ujjain. Mahakaleshwar darshan, Harsiddhi aarti, Ram Ghat evening. Overnight Ujjain." },
      { day: 2, title: "Ujjain Heritage Day", description: "Visit Sandipani Ashram, Kal Bhairav, Mangalnath, Vedh Shala. Overnight Ujjain." },
      { day: 3, title: "Ujjain → Omkareshwar → Maheshwar", description: "Omkareshwar Jyotirlinga darshan. Continue to Maheshwar — Ahilya Fort & sunset Narmada boat ride. Overnight Maheshwar." },
      { day: 4, title: "Maheshwar → Mandu", description: "Mandu sightseeing — Jahaz Mahal, Hindola Mahal, Hoshang Shah's Tomb. Sunset at Rani Roopmati Pavilion. Overnight near Mandu." },
      { day: 5, title: "Mandu → Indore (Departure)", description: "Drive to Indore. Explore Rajwada, Sarafa Bazaar before departure." },
    ],
    included: inclusions4N,
    excluded: baseExcluded,
    featured: true,
    offer: true,
  },
];

/* ─────────────────────────────────────────────────────────────
   Filter / UI helpers — kept compatible with existing components
   ───────────────────────────────────────────────────────────── */
import { extraPackages } from "./extraPackages";
allPackages.push(...extraPackages);

export const destinations = [
  "All",
  "Indore - Ujjain - Indore",
  "Indore - Ujjain - Omkareshwar - Maheshwar - Mandu - Indore",
];

export const durations = [
  "All",
  ...Array.from({ length: 45 }, (_, i) => `${i + 1} Day${i === 0 ? "" : "s"}`),
];

export const categories = ["All", "Wildlife", "Heritage", "Spiritual", "Nature", "Quick Getaways", "Women Exclusive", "Special Interest Tours", "Best-Selling Tours", "Senior Citizen", "Seasonal Tours", "Group Join-in", "Luxury & Experiential"];
export const budgets = ["All", "Under ₹7,000", "₹7,000 – ₹12,000", "Above ₹12,000"];

export const months = [
  "All",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const interests = ["All", "Heritage", "Wild Life", "Spiritual", "Nature"];

// Map UI interest label → category value stored on packages
export const interestToCategory: Record<string, string> = {
  "Heritage": "Heritage",
  "Wild Life": "Wildlife",
  "Spiritual": "Spiritual",
  "Nature": "Nature",
};
