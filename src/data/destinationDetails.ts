import { mapDestinations, MapDestination } from "./mapDestinations";

export interface ThingToDo { title: string; description: string; icon?: string }
export interface AttractionCard { title: string; description: string; image: string }
export interface Stay { name: string; type: "Budget" | "Mid-range" | "Luxury" | "Resort" | "Heritage"; price?: string; description?: string }
export interface FoodItem { name: string; description: string }
export interface NearbyPlace { id?: string; name: string; distance: string; image: string }
export interface TravelInfo {
  bestTime: string;
  road: string;
  rail: string;
  air: string;
}
export interface DestinationDetails {
  overviewParagraphs: string[];
  attractions: AttractionCard[];
  thingsToDo: ThingToDo[];
  experiences: { title: string; description: string }[];
  stays: Stay[];
  food: FoodItem[];
  gallery: string[];
  travelInfo: TravelInfo;
  duration: string;
}

const generic = (d: MapDestination | undefined, name: string, image: string, category: string[]): DestinationDetails => {
  const cat = category[0] || "Heritage";
  const overview = d?.description ?? `${name} is one of Madhya Pradesh's most cherished destinations.`;
  return {
    overviewParagraphs: [
      overview,
      `Steeped in centuries of history and culture, ${name} blends timeless heritage with the soulful landscape of central India. From its earliest mentions in regional lore to its modern-day charm, the place has welcomed travellers, pilgrims and seekers alike.`,
      `Whether you come for the architecture, the natural beauty or simply to slow down, ${name} rewards every visitor with quiet wonder, vibrant local culture and unforgettable views — making it a must-visit on any Madhya Pradesh itinerary.`,
    ],
    attractions: [
      { title: `Heart of ${name}`, description: `Explore the most iconic landmark and cultural soul of ${name}.`, image },
      { title: `Scenic Surroundings`, description: `Lush landscapes, riversides and panoramic viewpoints around the area.`, image },
      { title: `Local Markets`, description: `Vibrant bazaars where you can sample crafts, textiles and street food.`, image },
      { title: `Hidden Gems`, description: `Quieter corners loved by locals — perfect for slow, mindful exploration.`, image },
    ],
    thingsToDo: cat === "Wildlife"
      ? [
          { title: "Jungle Safari", description: "Spot tigers, leopards and exotic birds.", icon: "🐯" },
          { title: "Nature Walk", description: "Guided trails through dense sal forests.", icon: "🌿" },
          { title: "Bird Watching", description: "Over 200 species in their natural habitat.", icon: "🦜" },
          { title: "Photography", description: "Capture wildlife and landscapes.", icon: "📷" },
          { title: "Tribal Village Visit", description: "Experience local Gond culture.", icon: "🏘️" },
        ]
      : cat === "Spiritual"
      ? [
          { title: "Temple Darshan", description: "Visit ancient sacred shrines.", icon: "🛕" },
          { title: "Evening Aarti", description: "Witness the soul-stirring river aarti.", icon: "🪔" },
          { title: "Heritage Walk", description: "Explore ghats and old quarters.", icon: "🚶" },
          { title: "Boat Ride", description: "Sail along the holy waters.", icon: "⛵" },
          { title: "Local Cuisine", description: "Savour authentic prasad and street food.", icon: "🍲" },
        ]
      : cat === "Nature"
      ? [
          { title: "Boating", description: "Glide across calm waters.", icon: "⛵" },
          { title: "Fishing", description: "Try angling at scenic spots.", icon: "🎣" },
          { title: "Sunset Viewing", description: "Golden hour over the landscape.", icon: "🌅" },
          { title: "Nature Walk", description: "Trails through forest and hills.", icon: "🌿" },
          { title: "Camping", description: "Spend a night under the stars.", icon: "🏕️" },
        ]
      : [
          { title: "Heritage Walk", description: "Walk through centuries of history.", icon: "🏛️" },
          { title: "Photography Tour", description: "Capture stunning architecture.", icon: "📷" },
          { title: "Local Cuisine", description: "Taste authentic regional delicacies.", icon: "🍲" },
          { title: "Shopping", description: "Handicrafts and traditional textiles.", icon: "🛍️" },
          { title: "Cultural Show", description: "Folk music and dance performances.", icon: "🎭" },
        ],
    experiences: [
      { title: "Sunrise Magic", description: `Watch ${name} wake up in golden light — a moment that stays with you.` },
      { title: "Local Stories", description: `Meet locals and hear legends passed down for generations.` },
      { title: "Cultural Immersion", description: `Folk music, traditional crafts and warm hospitality define the experience.` },
      { title: "Slow Travel", description: `Unhurried days, scenic spots, and time to truly absorb the surroundings.` },
    ],
    stays: [
      { name: "MPT Tourist Lodge", type: "Mid-range", price: "₹2,500/night", description: "Comfortable government-run stay with local charm." },
      { name: `${name} Heritage Resort`, type: "Luxury", price: "₹6,500/night", description: "Premium resort with modern amenities and views." },
      { name: "Riverside Camp", type: "Budget", price: "₹1,200/night", description: "Tented stays close to nature for adventure travellers." },
    ],
    food: [
      { name: "Poha Jalebi", description: "MP's beloved breakfast — flattened rice with crispy jalebis." },
      { name: "Dal Bafla", description: "Wheat dough balls served with spicy dal and ghee." },
      { name: "Bhutte Ka Kees", description: "Grated corn cooked with milk and aromatic spices." },
      { name: "Malpua", description: "Sweet pancakes soaked in saffron syrup — a regional favourite." },
    ],
    gallery: [image, image, image, image, image, image],
    travelInfo: {
      bestTime: "October to March",
      road: `Well-connected by state highways. Regular buses and taxis from Bhopal, Indore and nearby cities.`,
      rail: `Nearest railway station is connected to major Indian cities via the central railway network.`,
      air: `Closest airports: Bhopal (Raja Bhoj) or Indore (Devi Ahilya Bai Holkar) — both well-connected to metros.`,
    },
    duration: "2 Days / 1 Night",
  };
};

// Per-destination overrides (rich detailed content)
const overrides: Record<string, Partial<DestinationDetails>> = {
  tawa: {
    overviewParagraphs: [
      "Tawa Reservoir, formed by the Tawa Dam at the confluence of the Tawa and Denwa rivers, is one of Madhya Pradesh's largest and most scenic water bodies. Bordering Satpura Tiger Reserve, it offers a rare blend of vast blue waters and dense green forests.",
      "Originally built in the 1970s for irrigation, the reservoir has evolved into a beloved eco-tourism destination. The calm backwaters, untouched islands, and the silhouette of the Satpura hills create a setting that feels worlds away from city life.",
      "Visit Tawa for tranquil boat rides, sunset cruises, fishing, and curated nature experiences. It's the perfect base to combine with a Satpura jungle safari for a complete wildlife-and-water getaway.",
    ],
    thingsToDo: [
      { title: "Boating", description: "Calm rides across the vast reservoir.", icon: "⛵" },
      { title: "Fishing", description: "Anglers' paradise with permitted fishing zones.", icon: "🎣" },
      { title: "Sunset Cruise", description: "Golden skies reflected on still waters.", icon: "🌅" },
      { title: "Nature Walk", description: "Trails along the dam and forest edges.", icon: "🌿" },
      { title: "Satpura Safari", description: "Combine with a jungle safari nearby.", icon: "🐯" },
      { title: "Camping", description: "Riverside tents under starlit skies.", icon: "🏕️" },
    ],
  },
  "chambal-gharial": {
    overviewParagraphs: [
      "The National Chambal Gharial Sanctuary stretches along the crystal-clear Chambal river in northern Madhya Pradesh, protecting one of India's last unpolluted rivers. Established in 1979, it is a tri-state sanctuary spanning MP, Rajasthan, and Uttar Pradesh.",
      "It is the most important refuge for the critically endangered gharial — the long-snouted, fish-eating crocodile — alongside healthy populations of mugger crocodiles, the rare Gangetic river dolphin, smooth-coated otters, and several species of freshwater turtles.",
      "A boat safari through the dramatic ravine landscape offers unmatched sightings of basking gharials, soaring Indian skimmers, sarus cranes, and over 290 species of resident and migratory birds — making it a paradise for wildlife and bird photographers.",
    ],
    attractions: [],
    thingsToDo: [
      { title: "Gharial Boat Safari", description: "Glide along the Chambal to spot gharials and muggers basking on sandbanks.", icon: "🛶" },
      { title: "River Dolphin Spotting", description: "Catch glimpses of the rare Gangetic river dolphin.", icon: "🐬" },
      { title: "Bird Watching", description: "290+ species including Indian skimmers and sarus cranes.", icon: "🦜" },
      { title: "Ravine Trekking", description: "Explore the dramatic Chambal badlands and ravines.", icon: "🥾" },
      { title: "Wildlife Photography", description: "Capture turtles, otters and crocodiles in pristine habitat.", icon: "📷" },
      { title: "Visit Bateshwar", description: "Cluster of 200+ ancient sandstone temples nearby.", icon: "🛕" },
    ],
    travelInfo: {
      bestTime: "November to March",
      road: "Well-connected by road from Gwalior (~70 km) and Agra (~70 km) via NH-44.",
      rail: "Nearest railway stations are Morena and Gwalior, both on the main Delhi-Mumbai line.",
      air: "Closest airport is Gwalior (~70 km); Agra and Delhi airports are also viable options.",
    },
    duration: "1 Day / Half-Day Safari",
  },
};

// Per-destination overrides now live in `src/data/destinations/*` for clean
// manual content management. Legacy `overrides` above is kept as a fallback.
import { getDestinationContent } from "@/data/destinations/index";

export const getDestinationDetails = (id: string, name: string, image: string, category: string[]): DestinationDetails => {
  const d = mapDestinations.find((m) => m.id === id);
  const base = generic(d, name, image, category);
  const legacy = overrides[id];
  const registry = getDestinationContent(id);
  return { ...base, ...(legacy ?? {}), ...(registry ?? {}) };
};

export const getNearbyDestinations = (id: string, category: string[], limit = 4): NearbyPlace[] => {
  // Per-destination override takes precedence
  const override = getDestinationContent(id)?.nearbyDestinations;
  if (override && override.length > 0) {
    return override
      .map((entry, i) => {
        if (typeof entry !== "string") return entry;
        const m = mapDestinations.find((d) => d.id === entry);
        if (!m) return null;
        return {
          id: m.id,
          name: m.name,
          distance: `${40 + i * 35} km`,
          image: m.image,
        } as NearbyPlace;
      })
      .filter(Boolean)
      .slice(0, limit) as NearbyPlace[];
  }

  const others = mapDestinations.filter((d) => d.id !== id);
  // simple proximity: same category first, then others
  const sameCat = others.filter((d) => d.category.some((c) => category.includes(c)));
  const list = [...sameCat, ...others.filter((o) => !sameCat.includes(o))].slice(0, limit);
  return list.map((d, i) => ({
    id: d.id,
    name: d.name,
    distance: `${40 + i * 35} km`,
    image: d.image,
  }));
};

/** Returns the `relatedPackageTags` declared in a destination's data file. */
export const getRelatedPackageTagsForDestination = (id: string): string[] =>
  getDestinationContent(id)?.relatedPackageTags ?? [];
