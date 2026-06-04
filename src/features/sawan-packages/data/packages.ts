// Seasonal package dataset. Replace `image` URLs and `startingPrice` later.
// All Unsplash links are temporary placeholders.
import type { SawanPackage } from "../types";

const UJJAIN_TEMPLE =
  "https://images.unsplash.com/photo-1591777334757-1b13fc4e8baa?auto=format&fit=crop&w=1600&q=80";
const OMKAR =
  "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80";
const NARMADA =
  "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1600&q=80";
const HELI =
  "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&w=1600&q=80";
const HELI_2 =
  "https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=1600&q=80";
const HELI_3 =
  "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1600&q=80";
const MAHESHWAR =
  "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1600&q=80";
const MANDU =
  "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=80";

const COMMON_EXCLUSIONS = [
  "Airfare / train tickets and personal expenses",
  "Meals other than those mentioned",
  "Camera fees, tips, laundry & telephone calls",
  "Any services not explicitly mentioned as inclusions",
];

export const sawanPackages: SawanPackage[] = [
  // ────────────── NORMAL (HOTEL) PACKAGES ──────────────
  {
    id: "mahakaal-blessings-yatra",
    kind: "normal",
    name: "Mahakaal Blessings Yatra",
    tagline: "Sawan Exclusive · 3-Star / 4-Star Hotels",
    duration: "3 Days / 2 Nights",
    route: "Indore → Ujjain → Omkareshwar → Indore",
    validity: "30 July – 30 August",
    badge: "Sawan Exclusive",
    startingPrice: "On Request",
    image: UJJAIN_TEMPLE,
    description:
      "A curated 3-day Sawan pilgrimage covering Mahakaleshwar and Omkareshwar Jyotirlingas with VVIP darshan, evening aartis and Indore heritage.",
    highlights: [
      "Kingdom of Mahakaal with ancient temples and mystical shrines",
      "Harsiddhi Mata Temple Aarti – a mesmerizing devotional spectacle",
      "Omkareshwar – sacred island where the Om symbol is etched naturally",
      "Indore – flavours, heritage and bustling markets of MP",
    ],
    inclusions: [
      "Meet & assist on arrival / departure at Airport / Hotel",
      "2 Nights stay on twin-sharing with breakfast",
      "Arrival, departure & sightseeing in AC vehicle",
      "VVIP Darshan at Mahakaleshwar & Omkar Mandhata Temples",
      "VIP entry ticket to Kaal Bhairav Temple, Ujjain",
      "English / Hindi speaking local professional guides",
      "Mineral water bottles, tissues & sanitizers in vehicle",
    ],
    exclusions: COMMON_EXCLUSIONS,
    itinerary: [
      {
        day: "Day 1",
        title: "Indore → Ujjain (55 km / 1.5 hrs) – Sawan Begins",
        body:
          "Arrive Indore, drive to Ujjain. Check-in and visit Sandipani Ashram, Mangal Nath, Kaal Bhairav Temple, Ram Ghat on Shipra, Harsiddhi Mata Temple. Evening Mahakaal Corridor walk and VVIP Darshan at Shri Mahakaleshwar Jyotirlinga, followed by Sandhya Aarti. Overnight Ujjain.",
      },
      {
        day: "Day 2",
        title: "Ujjain → Omkareshwar → Indore (220 km / 5.5 hrs)",
        body:
          "After breakfast, drive to Omkareshwar. VVIP Darshan at Shri Omkareshwar Jyotirlinga, visit Siddhanath, Gouri Somnath and Annapurna temples. Optional Narmada boat ride at the Sangam (direct payment). Drive to Indore. Overnight Indore.",
      },
      {
        day: "Day 3",
        title: "Indore Sightseeing & Departure",
        body:
          "Visit Rajwada, Bada Ganpati, Khajrana Ganesh, Kanch Mandir, Boliya Chattri and the famous 56 Dukaan street. Timely transfer to airport / railway station for onward journey.",
      },
    ],
  },
  {
    id: "divine-jyotirlinga-yatra",
    kind: "normal",
    name: "Divine Jyotirlinga Yatra",
    tagline: "Sawan Exclusive · Spiritual & Heritage",
    duration: "4 Days / 3 Nights",
    route: "Indore → Ujjain → Omkareshwar → Maheshwar → Indore",
    validity: "30 July – 30 August",
    badge: "Sawan Exclusive",
    startingPrice: "On Request",
    image: OMKAR,
    description:
      "A 4-day spiritual journey across two Jyotirlingas plus the queenly riverside town of Maheshwar — including a Narmada sunset boat ride.",
    highlights: [
      "Kingdom of Mahakaal & sacred Shipra ghats",
      "Harsiddhi Mata Temple evening aarti",
      "Omkareshwar Jyotirlinga island darshan",
      "Maheshwar – kingdom of Maheshmati with majestic forts & ghats",
      "Maheshwar sunset boat ride on the Narmada",
      "Indore street culture & local cuisine",
    ],
    inclusions: [
      "Meet & assist on arrival / departure",
      "3 Nights twin-sharing stay with breakfast (Maheshwar on MAP basis)",
      "3 Breakfasts & 1 Dinner",
      "AC vehicle for all transfers & sightseeing",
      "Scenic Narmada boat ride at Maheshwar",
      "VVIP Darshan at Mahakaleshwar & Omkar Mandhata",
      "VIP Entry to Kaal Bhairav Temple, Ujjain",
      "English / Hindi local guides",
    ],
    exclusions: COMMON_EXCLUSIONS,
    itinerary: [
      { day: "Day 1", title: "Indore → Ujjain", body: "Arrive Indore. Drive to Ujjain. Sandipani Ashram, Mangal Nath, Kaal Bhairav, Ram Ghat, Harsiddhi Mata. Evening Mahakaal Corridor & VVIP Darshan with Sandhya Aarti. Overnight Ujjain." },
      { day: "Day 2", title: "Ujjain → Omkareshwar → Maheshwar", body: "Drive to Omkareshwar. VVIP Darshan, visit Siddhanath, Gouri Somnath, Annapurna. Continue to Maheshwar — check-in riverside, evening at the Narmada ghats. Overnight Maheshwar (MAP)." },
      { day: "Day 3", title: "Maheshwar → Indore", body: "Morning Ahilya Fort, Maheshwari weaving units, sunset boat ride on Narmada. Drive to Indore. Overnight Indore." },
      { day: "Day 4", title: "Indore Sightseeing & Departure", body: "Rajwada, Bada Ganpati, Khajrana Ganesh, Kanch Mandir, 56 Dukaan. Transfer to airport / station for departure." },
    ],
  },
  {
    id: "jyotirlinga-monsoon-escape",
    kind: "normal",
    name: "Jyotirlinga Monsoon Escape",
    tagline: "Sawan Exclusive · Spiritual & Heritage",
    duration: "5 Days / 4 Nights",
    route: "Indore → Ujjain → Omkareshwar → Maheshwar → Mandu → Indore",
    validity: "30 July – 30 August",
    badge: "Sawan Exclusive",
    startingPrice: "On Request",
    image: MAHESHWAR,
    description:
      "Five days of monsoon-soaked devotion and heritage — Mahakal, Omkareshwar, Maheshwar and the romantic ruins of Mandu.",
    highlights: [
      "Mahakaleshwar VVIP Darshan & Harsiddhi Aarti",
      "Omkareshwar Jyotirlinga island darshan",
      "Maheshwar Fort & Narmada sunset boat ride",
      "Mandu – whispers of romance and valour through ancient ruins",
      "Rani Roopmati Pavilion sunset at Mandu",
      "Indore – heritage walks & 56 Dukaan tasting",
    ],
    inclusions: [
      "Meet & assist on arrival / departure",
      "4 Nights twin-sharing stay with breakfast (Maheshwar MAP basis)",
      "3 Breakfasts & 1 Dinner as per program",
      "AC vehicle for all transfers & sightseeing",
      "Scenic Narmada boat ride at Maheshwar",
      "VVIP Darshan at Mahakaleshwar & Omkar Mandhata",
      "VIP Entry to Kaal Bhairav Temple, Ujjain",
      "English / Hindi local guides",
    ],
    exclusions: COMMON_EXCLUSIONS,
    itinerary: [
      { day: "Day 1", title: "Indore → Ujjain", body: "Arrive Indore. Drive to Ujjain. Spiritual sightseeing & VVIP Darshan at Mahakaleshwar with Sandhya Aarti. Overnight Ujjain." },
      { day: "Day 2", title: "Ujjain → Omkareshwar → Maheshwar", body: "VVIP Darshan at Omkareshwar Jyotirlinga; visit nearby temples. Drive to Maheshwar. Overnight Maheshwar (MAP)." },
      { day: "Day 3", title: "Maheshwar → Mandu", body: "Ahilya Fort & Maheshwari weaves. Narmada sunset boat ride. Drive to Mandu. Overnight Mandu." },
      { day: "Day 4", title: "Mandu → Indore", body: "Jahaz Mahal, Hindola Mahal, Rupmati Pavilion sunset. Drive to Indore. Overnight Indore." },
      { day: "Day 5", title: "Indore Departure", body: "Heritage walk through Rajwada, Khajrana Ganesh, Kanch Mandir & 56 Dukaan. Transfer to airport / station." },
    ],
  },

  // ────────────── HELICOPTER (VIP) PACKAGES ──────────────
  {
    id: "heli-jyotirlinga-experience",
    kind: "helicopter",
    name: "A Spiritual Experience of Jyotirlingas",
    tagline: "Helicopter VIP · Same Day Darshan",
    duration: "1 Day",
    route: "Indore ⇋ Ujjain ⇋ Omkareshwar ⇋ Indore (by Helicopter)",
    validity: "30 July – 30 August",
    badge: "Helicopter VIP",
    startingPrice: "On Request",
    image: HELI,
    description:
      "Same-day darshan of Mahakaleshwar and Omkareshwar Jyotirlingas by chartered helicopter — the most exclusive way to receive Sawan blessings.",
    highlights: [
      "Same-day Mahakal & Omkareshwar Jyotirlinga Darshan",
      "Helicopter pick-up & drop from Indore",
      "VVIP escorted darshan, no queues",
      "Sandhya Aarti experience at Mahakaleshwar",
      "Personal chauffeur & temple coordinator",
    ],
    inclusions: [
      "Round-trip helicopter charter (Indore ⇋ Ujjain ⇋ Omkareshwar ⇋ Indore)",
      "VVIP Darshan at both Jyotirlingas with temple coordinator",
      "Luxury AC vehicle for local temple transfers",
      "Bottled water, towels & welcome amenities",
      "Professional spiritual guide",
    ],
    exclusions: COMMON_EXCLUSIONS,
    itinerary: [
      { day: "Morning", title: "Indore → Ujjain (by Helicopter)", body: "Heli transfer to Ujjain. VVIP Darshan at Shri Mahakaleshwar Jyotirlinga, Kaal Bhairav & Harsiddhi temples." },
      { day: "Afternoon", title: "Ujjain → Omkareshwar (by Helicopter)", body: "Heli transfer to Omkareshwar. VVIP Darshan at Omkar Mandhata Jyotirlinga and Mamleshwar." },
      { day: "Evening", title: "Omkareshwar → Indore", body: "Heli return to Indore. Drop at airport / hotel." },
    ],
  },
  {
    id: "heli-spiritual-journeys",
    kind: "helicopter",
    name: "Spiritual Journeys, Timeless Memories",
    tagline: "Helicopter VIP · 2 Days Luxury Pilgrimage",
    duration: "2 Days / 1 Night",
    route: "Indore ⇋ Ujjain ⇋ Omkareshwar ⇋ Indore (by Helicopter)",
    validity: "30 July – 30 August",
    badge: "Helicopter VIP",
    startingPrice: "On Request",
    image: HELI_2,
    description:
      "A 2-day VIP pilgrimage by helicopter with overnight at a luxury hotel in Ujjain, premium Bhasma Aarti experience and Omkareshwar darshan.",
    highlights: [
      "Luxury overnight stay in Ujjain",
      "VVIP Bhasma Aarti Experience",
      "Helicopter darshan of both Jyotirlingas",
      "Curated sattvik cuisine",
      "Private chauffeur & temple liaison",
    ],
    inclusions: [
      "Helicopter charter for the full itinerary",
      "1 Night luxury hotel stay in Ujjain (breakfast included)",
      "VVIP Darshan with priority access at both Jyotirlingas",
      "Premium AC vehicle for temple transfers",
      "Welcome kit, refreshments & spiritual guide",
    ],
    exclusions: COMMON_EXCLUSIONS,
    itinerary: [
      { day: "Day 1", title: "Indore → Ujjain (Heli)", body: "Heli to Ujjain. VVIP Darshan, Mahakaal Lok walk, Sandhya Aarti at Mahakaleshwar. Overnight luxury stay in Ujjain." },
      { day: "Day 2", title: "Ujjain → Omkareshwar → Indore (Heli)", body: "Early Bhasma Aarti at Mahakaleshwar. Heli to Omkareshwar – VVIP Darshan. Heli return to Indore." },
    ],
  },
  {
    id: "heli-divine-essence-mp",
    kind: "helicopter",
    name: "The Divine Essence of Madhya Pradesh",
    tagline: "Helicopter VIP · 3 Days Spiritual & Heritage",
    duration: "3 Days / 2 Nights",
    route: "Indore ⇋ Ujjain ⇋ Omkareshwar ⇋ Indore (by Helicopter)",
    validity: "30 July – 30 August",
    badge: "Helicopter VIP",
    startingPrice: "On Request",
    image: HELI_3,
    gallery: [HELI_3, OMKAR, MANDU],
    description:
      "The most complete VIP Sawan experience — three days of helicopter-led pilgrimage, Bhasma Aarti, Omkareshwar darshan and curated heritage of MP.",
    highlights: [
      "Helicopter charter across both Jyotirlingas",
      "VVIP Bhasma Aarti Experience at Mahakaleshwar",
      "Omkareshwar VVIP Darshan & Narmada Aarti",
      "Luxury accommodation throughout",
      "Personal concierge for darshan, dining & rituals",
    ],
    inclusions: [
      "Helicopter charter for all sectors of the itinerary",
      "2 Nights luxury stay with breakfast",
      "Premium AC vehicle for all temple & local transfers",
      "VVIP Bhasma Aarti & priority Darshan at both Jyotirlingas",
      "Curated sattvik meals, welcome kit & spiritual guide",
    ],
    exclusions: COMMON_EXCLUSIONS,
    itinerary: [
      { day: "Day 1", title: "Indore → Ujjain (Heli)", body: "Heli to Ujjain. VVIP Darshan at Mahakaleshwar, Kaal Bhairav, Harsiddhi. Sandhya Aarti. Overnight luxury stay Ujjain." },
      { day: "Day 2", title: "Ujjain Bhasma Aarti & Heritage", body: "VVIP Bhasma Aarti. Mahakaal Lok and Ujjain old-city heritage walk. Overnight Ujjain." },
      { day: "Day 3", title: "Ujjain → Omkareshwar → Indore (Heli)", body: "Heli to Omkareshwar. VVIP Darshan and Narmada Aarti. Heli return to Indore — drop at airport." },
    ],
  },
];

export const sawanHeroImage =
  "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1920&q=80";
