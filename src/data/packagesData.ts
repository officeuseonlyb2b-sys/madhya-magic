import pkgMahakal from "@/assets/pkg-mahakal.jpg";
import pkgHeritagePilgrimage from "@/assets/pkg-heritage-pilgrimage.jpg";
import pkgMarvelsMalwa from "@/assets/pkg-marvels-malwa.jpg";
import pkgJyotirlingaHeritage from "@/assets/pkg-jyotirlinga-heritage.jpg";
import pkgHeritageTrailsSacred from "@/assets/pkg-heritage-trails-sacred.jpg";

// Unique per-package imagery for the 44 Excel-imported packages (ids 6–49)
import pkgBhopal from "@/assets/pkg-bhopal.jpg";
import pkgGwalior from "@/assets/pkg-gwalior.jpg";
import pkgKanha from "@/assets/pkg-kanha.jpg";
import pkgPachmarhi from "@/assets/pkg-pachmarhi.jpg";
import pkgSatpura from "@/assets/pkg-satpura.jpg";
import destUjjain from "@/assets/dest-ujjain.jpg";
import destKanha from "@/assets/dest-kanha.jpg";
import destJabalpur from "@/assets/dest-jabalpur.jpg";
import destBandhavgarh from "@/assets/dest-bandhavgarh.jpg";
import destBhedaghat from "@/assets/dest-bhedaghat.jpg";
import destAmarkantak from "@/assets/dest-amarkantak.jpg";
import destBhopal from "@/assets/dest-bhopal.jpg";
import destPachmarhi from "@/assets/dest-pachmarhi.jpg";
import destSatpura from "@/assets/dest-satpura.jpg";
import destTamia from "@/assets/dest-tamia.jpg";
import destGwalior from "@/assets/dest-gwalior.jpg";
import destOrchha from "@/assets/dest-orchha.jpg";
import destPanna from "@/assets/dest-panna.jpg";
import destKhajuraho from "@/assets/dest-khajuraho.jpg";
import destMukundpur from "@/assets/dest-mukundpur.jpg";
import destMandu from "@/assets/dest-mandu.jpg";
import destPench from "@/assets/dest-pench.jpg";
import destKuno from "@/assets/dest-kuno.jpg";
import destChitrakoot from "@/assets/dest-chitrakoot.jpg";
import destParsili from "@/assets/dest-parsili.jpg";
import destSailani from "@/assets/dest-sailani.jpg";
import destTawa from "@/assets/dest-tawa.jpg";
import destHoshangabad from "@/assets/dest-hoshangabad.jpg";
import destSonagiri from "@/assets/dest-sonagiri.jpg";
import destDatia from "@/assets/dest-datia.jpg";
import destChanderi from "@/assets/dest-chanderi.jpg";
import destRaisen from "@/assets/dest-raisen.jpg";
import destUdayagiri from "@/assets/dest-udayagiri.jpg";
import destHanuwantiya from "@/assets/dest-hanuwantiya.jpg";
import destMaheshwar from "@/assets/dest-maheshwar.jpg";
import destOmkareshwar from "@/assets/dest-omkareshwar.jpg";
import destIndore from "@/assets/dest-indore.jpg";
import catArchitectural from "@/assets/cat-architectural.jpg";
import catBestselling from "@/assets/cat-bestselling.jpg";
import catSpecial from "@/assets/cat-special.jpg";
import catWildlife from "@/assets/cat-wildlife.jpg";
import catMonsoon from "@/assets/cat-monsoon.jpg";
import catSeasonal from "@/assets/cat-seasonal.jpg";
import catLuxury from "@/assets/cat-luxury.jpg";

/** Unique image per Excel package id (6–49) — no duplicates. */
const PKG_IMAGE_BY_ID: Record<number, string> = {
  6: pkgBhopal,
  7: destUjjain,
  8: destKanha,
  9: destJabalpur,
  10: destBandhavgarh,
  11: destBhedaghat,
  12: destAmarkantak,
  13: pkgKanha,
  14: pkgPachmarhi,
  15: destBhopal,
  16: destPachmarhi,
  17: destSatpura,
  18: pkgSatpura,
  19: destTamia,
  20: destGwalior,
  21: destOrchha,
  22: destPanna,
  23: pkgGwalior,
  24: destKhajuraho,
  25: catArchitectural,
  26: destMukundpur,
  27: catBestselling,
  28: catSpecial,
  29: destMandu,
  30: destPench,
  31: catWildlife,
  32: destKuno,
  33: destChitrakoot,
  34: destParsili,
  35: catMonsoon,
  36: destSailani,
  37: destTawa,
  38: catSeasonal,
  39: destHoshangabad,
  40: destSonagiri,
  41: destDatia,
  42: destChanderi,
  43: destRaisen,
  44: destUdayagiri,
  45: destHanuwantiya,
  46: catLuxury,
  47: destMaheshwar,
  48: destOmkareshwar,
  49: destIndore,
};

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
   Excel-imported packages (IDs 6 – 49 from EXIDR01.xlsx)
   Categories normalized to: Spiritual | Heritage | Wildlife | Nature
   Images use optimized Unsplash CDN (auto-format, ~1200w).
   ───────────────────────────────────────────────────────────── */
const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=70`;

const IMG = {
  spiritual: img("photo-1518002171953-a080ee817e1f"),    // temple aarti
  ujjain: img("photo-1561361513-2d000a50f0dc"),          // ghats
  omkareshwar: img("photo-1605649487212-47bdab064df7"),  // river temple
  maheshwar: img("photo-1623059508779-2542c6e83753"),    // fort river
  mandu: img("photo-1599661046289-e31897846e41"),        // ruins arch
  heritage: img("photo-1564507592333-c60657eea523"),     // taj-style heritage
  khajuraho: img("photo-1564507004663-b6dfb3c824d5"),    // khajuraho temple
  orchha: img("photo-1606298855672-3efb63017be8"),       // orchha
  gwalior: img("photo-1602216056096-3b40cc0c9944"),      // gwalior fort
  sanchi: img("photo-1610018556010-6a11691bc905"),       // stupa
  bhimbetka: img("photo-1591267990439-bc68fdc92cf2"),    // rock shelters
  wildlife: img("photo-1549366021-9f761d040a94"),        // tiger
  tiger: img("photo-1561731216-c3a4d99437d5"),           // tiger close
  kanha: img("photo-1605300045834-3b69f1d3a4d2"),        // jungle
  bandhavgarh: img("photo-1606115915090-be18fea23ec7"),  // forest tiger
  pench: img("photo-1607604276583-eef5d076aa5f"),        // safari
  panna: img("photo-1574068468668-a05a11f871da"),        // tiger river
  satpura: img("photo-1448375240586-882707db888b"),      // forest
  nature: img("photo-1506905925346-21bda4d32df4"),       // mountains
  pachmarhi: img("photo-1542359649-31e03cd4d909"),       // hills waterfall
  amarkantak: img("photo-1502082553048-f009c37129b9"),   // forest river
  marble: img("photo-1597223557154-721c1cecc4b0"),       // marble rocks
  monsoon: img("photo-1519681393784-d120267933ba"),      // misty
  luxury: img("photo-1582719478250-c89cae4dc85b"),       // palace luxury
};

const baseInclusion = (n: number) => ({
  std: [
    "Meeting & assistance on arrival/departure at Airport/Hotel",
    `Accommodation for ${String(n).padStart(2, "0")} night${n === 1 ? "" : "s"} on twin-sharing basis (Room + Breakfast)`,
    `${String(n).padStart(2, "0")} Breakfast${n === 1 ? "" : "s"} as per the program`,
    "All transfers & sightseeing by Air-Conditioned Vehicle",
    "Hindi / English speaking local guides where applicable",
    "All applicable monument entrance fees as per the program",
    "Mineral water, tissues, sanitizers & masks in vehicle",
  ],
});

const slug = (s: string) =>
  s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

interface ExcelPkg {
  id: number; name: string; days: number; price: number; route: string;
  rawCat: string; tourCategory: string; image: string;
  highlights: string[]; description: string;
}

const excelPkgs: ExcelPkg[] = [
  { id: 6, name: "Cultural Heritage Odyssey of Madhya Pradesh", days: 7, price: 32400, route: "Indore - Ujjain - Omkareshwar - Maheshwar - Mandu - Bhopal - Bhimbetka - Bhojpur - Sanchi - Bhopal - Indore", rawCat: "Heritage, Spritual", tourCategory: "Quick Getaways", image: IMG.heritage,
    highlights: ["Mahakaleshwar Jyotirlinga", "Omkareshwar sacred island", "Maheshwar sunset boat ride", "Mandu's romantic ruins", "Sanchi Stupa & Bhimbetka rock shelters"],
    description: "A 7-day cultural odyssey through Malwa's spiritual shrines and Bhopal's ancient heritage — Jyotirlingas, regal forts and UNESCO marvels." },
  { id: 7, name: "A Spiritual Odyssey of Madhya Pradesh", days: 3, price: 11500, route: "Ujjain - Omkareshwar - Indore", rawCat: "Spritual", tourCategory: "Quick Getaways", image: IMG.spiritual,
    highlights: ["Mahakaleshwar Bhasma Aarti", "Harsiddhi Mata Aarti", "Omkareshwar Jyotirlinga darshan"],
    description: "A focused 3-day spiritual journey through two of India's twelve sacred Jyotirlingas — Mahakaleshwar and Omkareshwar." },
  { id: 8, name: "Kanha Calling", days: 3, price: 20000, route: "Jabalpur - Kanha National Park - Jabalpur", rawCat: "Wildlife", tourCategory: "Quick Getaways", image: IMG.kanha,
    highlights: ["Early-morning Jeep Safari at Kanha", "Sal forest landscapes", "Barasingha sightings"],
    description: "Answer the call of the wild with a 3-day immersion into Kanha National Park — Kipling's inspiration for The Jungle Book." },
  { id: 9, name: "Magical Kanha & Jabalpur", days: 4, price: 24600, route: "Jabalpur - Kanha National Park - Jabalpur", rawCat: "Wildlife", tourCategory: "Quick Getaways", image: IMG.kanha,
    highlights: ["Jeep Safari at Kanha", "Bhedaghat Marble Rocks", "Dhuandhar Falls"],
    description: "Combine Kanha's wilderness with Jabalpur's marble gorge wonders in a 4-day signature getaway." },
  { id: 10, name: "The Tigerland - Bandhavgarh", days: 3, price: 20400, route: "Jabalpur - Bandhavgarh National Park - Jabalpur", rawCat: "Wildlife", tourCategory: "Quick Getaways", image: IMG.bandhavgarh,
    highlights: ["Jeep Safari at Bandhavgarh", "Highest tiger density in India", "Ancient hilltop fort"],
    description: "Walk into India's most prolific tiger reserve on a 3-day Bandhavgarh safari escape." },
  { id: 11, name: "Nature's Marvels: Bandhavgarh & Jabalpur", days: 4, price: 24600, route: "Jabalpur - Bandhavgarh National Park - Jabalpur", rawCat: "Wildlife", tourCategory: "Quick Getaways", image: IMG.tiger,
    highlights: ["Bandhavgarh Jeep Safari", "Bhedaghat Marble Rocks boat ride", "Chausath Yogini Temple"],
    description: "A 4-day blend of tiger country and the marble gorges of the Narmada at Bhedaghat." },
  { id: 12, name: "Nature's Treasures: Wildlife, Nature and Marble Rocks", days: 5, price: 29300, route: "Jabalpur - Bandhavgarh National Park - Amarkantak - Jabalpur", rawCat: "Wildlife, Spritual", tourCategory: "Quick Getaways", image: IMG.amarkantak,
    highlights: ["Bandhavgarh safari", "Amarkantak — Narmada origin", "Marble Rocks at Bhedaghat"],
    description: "Tigers, sacred origins of the Narmada, and shimmering marble gorges across 5 days of central India." },
  { id: 13, name: "Nature & Wilderness Retreat", days: 5, price: 37300, route: "Jabalpur - Kanha National Park - Bandhavgarh National Park - Jabalpur", rawCat: "Wildlife", tourCategory: "Quick Getaways", image: IMG.tiger,
    highlights: ["Two safaris at Kanha", "Two safaris at Bandhavgarh", "Sal & bamboo forests"],
    description: "The ultimate 5-day twin-park tiger retreat across Kanha and Bandhavgarh." },
  { id: 14, name: "Nature's Splendor and Ancient Marvels", days: 6, price: 39600, route: "Jabalpur - Kanha National Park - Pachmarhi - Bhimbetka - Bhojpur - Bhopal - Sanchi - Bhopal", rawCat: "Wildlife, Heritage & Spritual", tourCategory: "Quick Getaways", image: IMG.pachmarhi,
    highlights: ["Kanha Jeep Safari", "Pachmarhi hill station", "Bhimbetka rock shelters", "Sanchi Stupa"],
    description: "Tigers, hill-country trails and UNESCO heritage — a 6-day grand circuit of central MP." },
  { id: 15, name: "Jewels Of Bhopal", days: 3, price: 9100, route: "Bhopal - Bhimbetka - Bhojpur - Sanchi - Bhopal", rawCat: "Heritage & Spritual", tourCategory: "Quick Getaways", image: IMG.sanchi,
    highlights: ["Sanchi Stupa", "Bhimbetka rock shelters", "Bhojpur Shiva Temple", "Upper Lake views"],
    description: "Three days unraveling Bhopal's UNESCO-listed jewels — stupas, rock-art and ancient temples." },
  { id: 16, name: "Bhopal-Pachmarhi Sojourn", days: 4, price: 21500, route: "Bhopal - Sanchi - Bhopal - Bhimbetka - Bhojpur - Pachmarhi - Bhopal", rawCat: "Heritage & Spritual, Nature", tourCategory: "Quick Getaways", image: IMG.pachmarhi,
    highlights: ["Sanchi Stupa", "Bhimbetka rock shelters", "Pachmarhi — Queen of Satpuras", "Bee Falls & Apsara Vihar"],
    description: "A 4-day combination of Bhopal's heritage with the cool, misty hills of Pachmarhi." },
  { id: 17, name: "Wilderness Getaway from Bhopal", days: 5, price: 35000, route: "Bhopal - Bhimbetka - Bhojpur - Sanchi - Tawa Reservoir - Madai - Satpura National Park - Pachmarhi - Bhopal", rawCat: "Heritage & Spritual, Nature, Wildlife", tourCategory: "Quick Getaways", image: IMG.satpura,
    highlights: ["Satpura National Park safari", "Tawa Reservoir boat ride", "Bhimbetka & Sanchi heritage", "Pachmarhi hills"],
    description: "Five days of Satpura's untouched wilderness paired with Bhopal's heritage and Pachmarhi's hill trails." },
  { id: 18, name: "Journey through Heritage, Hills & Wilderness", days: 8, price: 58200, route: "Bhopal - Udayagiri - Sanchi - Bhopal - Bhojpur - Bhimbetka - Tawa - Madai - Satpura National Park - Pachmarhi - Kanha National Park - Jabalpur", rawCat: "Heritage & Spritual, Nature, Wildlife", tourCategory: "Quick Getaways", image: IMG.satpura,
    highlights: ["Udayagiri caves", "Sanchi Stupa", "Satpura safari", "Pachmarhi hill station", "Kanha tiger safari"],
    description: "An 8-day grand circuit blending heritage, Satpura wilderness, Pachmarhi hills and Kanha tigers." },
  { id: 19, name: "Naturescapes & Sacred Trails", days: 8, price: 49500, route: "Bhopal - Udaygiri caves - Sanchi - Bhopal - Bhojpur - Bhimbetka - Pachmarhi - Kanha National Park - Amarkantak - Jabalpur", rawCat: "Heritage & Spritual, Nature, Wildlife", tourCategory: "Quick Getaways", image: IMG.amarkantak,
    highlights: ["Udayagiri & Sanchi heritage", "Pachmarhi hill station", "Kanha tiger safari", "Amarkantak — Narmada origin"],
    description: "An 8-day sacred & scenic journey across Bhopal, Pachmarhi, Kanha and Amarkantak." },
  { id: 20, name: "Glorious Gwalior", days: 2, price: 4900, route: "Gwalior", rawCat: "Heritage", tourCategory: "Quick Getaways", image: IMG.gwalior,
    highlights: ["Gwalior Fort & Man Mandir Palace", "Sas-Bahu Temples", "Jai Vilas Palace"],
    description: "A quick 2-day immersion in the regal grandeur of Gwalior's hilltop fort and Scindia palaces." },
  { id: 21, name: "Marvels of Chambal & Bundelkhand", days: 5, price: 18400, route: "Gwalior - Morena - Gwalior - Sonagiri - Datia - Orchha - Khajuraho - Gwalior", rawCat: "Heritage & Spritual", tourCategory: "Quick Getaways", image: IMG.orchha,
    highlights: ["Bateshwar temples (Morena)", "Sonagiri Jain temples", "Orchha cenotaphs", "Khajuraho temples (UNESCO)"],
    description: "Five days through the heritage of Chambal and Bundelkhand — temples, fortresses and royal Bundeli architecture." },
  { id: 22, name: "Jungle Tales and Heritage Trails", days: 6, price: 30100, route: "Gwalior - Morena - Gwalior - Sonagiri - Datia - Orchha - Khajuraho - Panna National Park - Khajuraho", rawCat: "Heritage & Spritual, Wildlife", tourCategory: "Quick Getaways", image: IMG.panna,
    highlights: ["Khajuraho temples", "Panna National Park safari", "Orchha cenotaphs", "Sonagiri Jain temples"],
    description: "Six days entwining Bundelkhand heritage with Panna's tiger trails." },
  { id: 23, name: "Echoes of History", days: 6, price: 24200, route: "Gwalior - Morena - Gwalior - Shivpuri - Chanderi - Orchha - Datia - Sonagiri - Gwalior", rawCat: "Heritage & Spritual", tourCategory: "Quick Getaways", image: IMG.gwalior,
    highlights: ["Gwalior Fort", "Shivpuri Madhav Vilas", "Chanderi weaving town", "Orchha & Datia palaces"],
    description: "A 6-day deep heritage circuit through North Madhya Pradesh's lesser-known regal towns." },
  { id: 24, name: "Ancient Chronicles of North M.P", days: 7, price: 26100, route: "Gwalior - Morena - Gwalior - Shivpuri - Chanderi - Khajuraho - Orchha - Gwalior", rawCat: "Heritage & Spritual", tourCategory: "Quick Getaways", image: IMG.khajuraho,
    highlights: ["Gwalior Fort", "Chanderi", "Khajuraho temples (UNESCO)", "Orchha"],
    description: "Seven days chronicling North MP's ancient kingdoms — fortress towns, temple cities and weaving traditions." },
  { id: 25, name: "Heritage Gems & Marble Wonders", days: 6, price: 24000, route: "Gwalior - Morena - Gwalior - Sonagiri - Datia - Orchha - Khajuraho - Jabalpur", rawCat: "Heritage & Spritual, Nature", tourCategory: "Quick Getaways", image: IMG.marble,
    highlights: ["Khajuraho temples", "Orchha cenotaphs", "Bhedaghat Marble Rocks", "Dhuandhar Falls"],
    description: "Six days from royal Bundelkhand to the shimmering marble gorges of Bhedaghat." },
  { id: 26, name: "Heritage, Tigers & Marble Majesty", days: 7, price: 36100, route: "Gwalior - Morena - Gwalior - Sonagiri - Datia - Orchha - Khajuraho - Bandhavgarh National Park - Jabalpur", rawCat: "Heritage & Spritual, Wildlife, Nature", tourCategory: "Quick Getaways", image: IMG.bandhavgarh,
    highlights: ["Khajuraho temples", "Bandhavgarh tiger safari", "Marble Rocks at Bhedaghat"],
    description: "A 7-day grand sweep — Bundelkhand heritage, Bandhavgarh tigers and Bhedaghat's marble majesty." },
  { id: 27, name: "Mysteries of Madhya Pradesh", days: 12, price: 79000, route: "Gwalior - Jhansi - Orchha - Khajuraho - Raneh Fall - Ken Ghadiyal Sentury - Bandhavgarh - Jabalpur - Pachmarhi - Bhimbetka - Bhojpur - Bhopal - Sanchi - Bhopal", rawCat: "Heritage & Spritual, Wildlife, Nature", tourCategory: "Quick Getaways", image: IMG.heritage,
    highlights: ["Khajuraho & Orchha", "Raneh Falls canyon", "Bandhavgarh tigers", "Pachmarhi hills", "Bhimbetka & Sanchi UNESCO sites"],
    description: "A 12-day grand expedition uncovering the heritage, wildlife and natural mysteries of Madhya Pradesh." },
  { id: 28, name: "Mystic Heart of Madhya Pradesh", days: 13, price: 83500, route: "Gwalior - Morena - Gwalior - Sonagiri - Datia - Orchha - Khajuraho - Raneh Fall - Ken Ghadiyal Sentury - Bandhavgarh - Jabalpur - Pachmarhi - Bhimbetka - Bhojpur - Bhopal - Sanchi - Bhopal", rawCat: "Heritage & Spritual, Wildlife, Nature", tourCategory: "Quick Getaways", image: IMG.heritage,
    highlights: ["Gwalior to Sanchi heritage", "Raneh Falls & Ken Ghariyal sanctuary", "Bandhavgarh tigers", "Pachmarhi & Bhimbetka"],
    description: "A 13-day immersive journey through the mystic core of MP — every UNESCO site, tiger reserve and royal capital." },
  { id: 29, name: "Cultural Wonders & Wildlife Safari", days: 8, price: 47700, route: "Jabalpur - Kanha National Park - Pachmarhi - Bhimbetka - Bhojpur - Bhopal - Ujjain - Omkareshwar - Maheshwar - Mandu - Indore", rawCat: "Heritage & Spritual, Wildlife, Nature", tourCategory: "Quick Getaways", image: IMG.kanha,
    highlights: ["Kanha tiger safari", "Pachmarhi hills", "Bhimbetka rock shelters", "Ujjain & Omkareshwar Jyotirlingas", "Maheshwar & Mandu"],
    description: "An 8-day cross-state circuit blending tigers, hills, rock-art and the spiritual heartland of Malwa." },
  { id: 30, name: "Central India Wildlife and Culture Expedition", days: 7, price: 58000, route: "Raipur - Kanha National Park - Bandhavgarh National Park - Jabalpur - Madai - Satpura National Park - Bhimbetka - Bhojpur - Bhopal", rawCat: "Nature, Wildlife & Heritage", tourCategory: "Wildlife Exclusive", image: IMG.tiger,
    highlights: ["Kanha safari", "Bandhavgarh safari", "Satpura safari", "Bhimbetka rock shelters"],
    description: "A 7-day wildlife-exclusive expedition across Central India's three flagship tiger reserves." },
  { id: 31, name: "The Tiger Kingdom Odyssey", days: 9, price: 86900, route: "Bhopal - Bhimbetka - Bhojpur - Madhai / Satpura National Park - Pench National Park - Kanha National Park - Bandhavgarh National Park - Panna National Park - Gwalior", rawCat: "Nature, Wildlife & Heritage", tourCategory: "Wildlife Exclusive", image: IMG.pench,
    highlights: ["Five tiger reserves: Satpura, Pench, Kanha, Bandhavgarh, Panna", "Bhimbetka heritage", "Gwalior fort"],
    description: "The ultimate 9-day Tiger Kingdom Odyssey — five flagship parks of Central India in one journey." },
  { id: 32, name: "Tiger Kingdoms of Central India", days: 8, price: 87700, route: "Jabalpur - Bandhavgarh National Park - Kanha National Park - Pench National Park - Nagpur", rawCat: "Wildlife", tourCategory: "Wildlife Exclusive", image: IMG.tiger,
    highlights: ["Bandhavgarh safaris", "Kanha safaris", "Pench safaris", "Premium wildlife lodges"],
    description: "An 8-day premium triple-park tiger safari across Bandhavgarh, Kanha and Pench." },
  { id: 33, name: "Sacred Trails & Silent Forests", days: 5, price: 34600, route: "Raipur - Amarkantak - Parsili - Prayagraj", rawCat: "Spritual & Wildlife", tourCategory: "Summer Exclusive", image: IMG.amarkantak,
    highlights: ["Amarkantak — Narmada origin", "Parsili river retreat", "Sangam at Prayagraj"],
    description: "A 5-day summer-exclusive trail from Narmada's source through silent forests to the holy Sangam." },
  { id: 34, name: "Sacred Roots & Shimmering Rocks", days: 6, price: 39200, route: "Raipur - Amarkantak - Parsili - Jabalpur", rawCat: "Spritual & Wildlife, Spritual", tourCategory: "Summer Exclusive", image: IMG.marble,
    highlights: ["Amarkantak temples", "Parsili river retreat", "Bhedaghat Marble Rocks", "Dhuandhar Falls"],
    description: "Six days tracing sacred origins from Amarkantak to the shimmering marble rocks of Bhedaghat." },
  { id: 35, name: "Mandu Monsoon Magic", days: 3, price: 12400, route: "Indore - Mandu - Indore", rawCat: "Heritage", tourCategory: "Monsoon Exclusive", image: IMG.mandu,
    highlights: ["Jahaz Mahal in monsoon", "Hindola Mahal", "Rani Roopmati Pavilion at sunset", "Lush Malwa plateau"],
    description: "Mandu in the rains — a magical 3-day monsoon escape through romantic ruins and emerald landscapes." },
  { id: 36, name: "Monsoon Heritage & Spiritual Journey", days: 6, price: 28900, route: "Indore - Mandu - Indore - Bhopal - Bhimbetka - Bhojpur - Sanchi - Bhopal", rawCat: "Heritage & Spritual", tourCategory: "Monsoon Exclusive", image: IMG.monsoon,
    highlights: ["Mandu in monsoon", "Bhimbetka rock shelters", "Bhojpur Shiva Temple", "Sanchi Stupa"],
    description: "Six days of monsoon magic across Mandu's ruins and Bhopal's UNESCO heritage." },
  { id: 37, name: "Madhya Pradesh Cultural & Natural Trail", days: 6, price: 33100, route: "Bhopal - Sanchi - Udaygiri - Bhopal - Bhojpur - Bhimbetka - Pachmarhi - Tawa - Bhopal", rawCat: "Heritage & Spritual, Nature", tourCategory: "Monsoon Exclusive", image: IMG.pachmarhi,
    highlights: ["Sanchi & Udayagiri heritage", "Bhimbetka rock shelters", "Pachmarhi hill station", "Tawa Reservoir"],
    description: "Six days blending Bhopal's heritage with Pachmarhi's hills and Tawa's serene reservoir." },
  { id: 38, name: "Heritage and Spiritual Monsoon Edition", days: 7, price: 39600, route: "Indore - Mandu - Indore - Bhopal - Sanchi - Bhopal - Bhojpur - Bhimbetka - Pachmarhi - Bhopal", rawCat: "Heritage & Spritual, Nature", tourCategory: "Monsoon Exclusive", image: IMG.monsoon,
    highlights: ["Mandu in monsoon", "Sanchi Stupa", "Bhimbetka rock shelters", "Pachmarhi hills"],
    description: "A 7-day monsoon edition exploring Mandu's romance, Bhopal's UNESCO sites and the misty Pachmarhi hills." },
  { id: 39, name: "Divine Nature & Monsoon Experience", days: 5, price: 31200, route: "Bhopal - Bhojpur - Bhimbetka - Pachmarhi - Bhopal", rawCat: "Heritage & Spritual, Nature", tourCategory: "Monsoon Exclusive", image: IMG.pachmarhi,
    highlights: ["Bhojpur Shiva Temple", "Bhimbetka rock shelters", "Pachmarhi waterfalls", "Lush Satpura landscape"],
    description: "Five days of divine landscapes and monsoon-soaked Pachmarhi waterfalls." },
  { id: 40, name: "Ancient Madhya Pradesh", days: 9, price: 40800, route: "Gwalior - Orchha - Khajuraho - Sanchi - Bhopal - Ujjain - Omkareshwar - Maheshwar - Mandu - Indore", rawCat: "Heritage & Spritual", tourCategory: "Regular Tour", image: IMG.khajuraho,
    highlights: ["Gwalior Fort", "Orchha & Khajuraho", "Sanchi Stupa", "Ujjain & Omkareshwar Jyotirlingas", "Maheshwar & Mandu"],
    description: "A 9-day classic circuit covering Madhya Pradesh's most iconic ancient sites end-to-end." },
  { id: 41, name: "Essence Of Madhya Pradesh", days: 7, price: 47200, route: "Gwalior - Morena - Gwalior - Sonagiri - Datia - Orchha - Khajuraho - Jabalpur - Kanha National Park - Nagpur", rawCat: "Heritage & Spritual, Wildlife", tourCategory: "Regular Tour", image: IMG.kanha,
    highlights: ["Gwalior Fort", "Khajuraho temples", "Orchha cenotaphs", "Kanha tiger safari"],
    description: "Seven days capturing the essence of MP — Bundelkhand heritage culminating in Kanha's tiger trails." },
  { id: 42, name: "Historical Saga Of Madhya Pradesh", days: 11, price: 46500, route: "Gwalior - Morena - Gwalior - Sonagiri - Datia - Orchha - Khajuraho - Sanchi - Bhopal - Bhojpur - Bhimbetka - Bhopal - Ujjain - Omkareshwar - Maheshwar - Mandu - Indore", rawCat: "Heritage & Spritual", tourCategory: "Regular Tour", image: IMG.heritage,
    highlights: ["Gwalior Fort", "Khajuraho & Orchha", "Sanchi & Bhimbetka", "Ujjain & Omkareshwar Jyotirlingas", "Maheshwar & Mandu"],
    description: "An 11-day historical saga from Gwalior to Mandu — every iconic heritage and spiritual site of MP." },
  { id: 43, name: "Exciting Madhya Pradesh", days: 7, price: 29800, route: "Bhopal - Sanchi - Bhojpur - Bhimbetka - Bhopal - Ujjain - Omkareshwar - Maheshwar - Mandu - Indore", rawCat: "Heritage & Spritual", tourCategory: "Regular Tour", image: IMG.sanchi,
    highlights: ["Sanchi Stupa", "Bhimbetka rock shelters", "Ujjain & Omkareshwar Jyotirlingas", "Maheshwar & Mandu"],
    description: "A 7-day exciting circuit through Bhopal's UNESCO heritage and Malwa's spiritual heartland." },
  { id: 44, name: "Timeless Treasures Of Madhya Pradesh", days: 8, price: 35900, route: "Gwalior - Morena - Gwalior - Sonagiri - Datia - Orchha - Khajuraho - Sanchi - Bhopal - Bhimbetka - Bhojpur - Bhopal", rawCat: "Heritage & Spritual", tourCategory: "Regular Tour", image: IMG.orchha,
    highlights: ["Gwalior Fort", "Khajuraho temples", "Orchha cenotaphs", "Sanchi Stupa", "Bhimbetka rock shelters"],
    description: "Eight days unveiling MP's timeless treasures from Gwalior to Bhopal's UNESCO trio." },
  { id: 45, name: "Blissful Madhya Pradesh", days: 7, price: 60100, route: "Bhopal - Tawa - Madai - Tawa - Madai - Pachmarhi - Jabalpur - Nagpur", rawCat: "Nature, Wildlife", tourCategory: "Regular Tour", image: IMG.satpura,
    highlights: ["Tawa Reservoir", "Satpura safaris from Madai", "Pachmarhi hill station", "Bhedaghat Marble Rocks"],
    description: "A blissful 7-day nature & wildlife trail across Tawa, Satpura, Pachmarhi and Bhedaghat." },
  { id: 46, name: "The Hidden Heirlooms of Gwalior", days: 4, price: 52700, route: "Gwalior - Morena - Gwalior", rawCat: "Heritage", tourCategory: "Luxury Program", image: IMG.luxury,
    highlights: ["Luxury heritage stays", "Gwalior Fort & Jai Vilas Palace", "Bateshwar temples (Morena)", "Curated cultural experiences"],
    description: "A 4-day luxury program uncovering Gwalior's hidden royal heirlooms in Scindia style." },
  { id: 47, name: "The Maheshwar Sojourn", days: 4, price: 58500, route: "Indore - Maheshwar - Mandu - Bakawan - Omkareshwar - Maheshwar - Indore", rawCat: "Heritage & Spritual", tourCategory: "Luxury Program", image: IMG.maheshwar,
    highlights: ["Ahilya Fort luxury stay", "Sunset Narmada boat ride", "Mandu's romantic ruins", "Omkareshwar Jyotirlinga"],
    description: "A 4-day luxury sojourn along the Narmada — Maheshwar's regal ghats, Mandu's ruins and the Omkareshwar Jyotirlinga." },
  { id: 48, name: "Sacred Threads of Malwa", days: 6, price: 85200, route: "Indore - Ujjain - Omkareshwar - Maheshwar - Mandu - Bakawan - Indore", rawCat: "Heritage & Spritual", tourCategory: "Luxury Program", image: IMG.luxury,
    highlights: ["Mahakaleshwar Bhasma Aarti", "Omkareshwar Jyotirlinga", "Maheshwar luxury stay", "Mandu's romantic ruins"],
    description: "Six luxurious days weaving the sacred threads of Malwa — Jyotirlingas, royal forts and riverside palaces." },
  { id: 49, name: "The Royal Corridor Of Mahakaal", days: 4, price: 55200, route: "Indore - Ujjain - Maheshwar - Omkareshwar - Indore", rawCat: "Heritage & Spritual", tourCategory: "Luxury Program", image: IMG.spiritual,
    highlights: ["Mahakaleshwar VIP darshan", "Harsiddhi Mata Aarti", "Omkareshwar Jyotirlinga", "Maheshwar's Ahilya Fort"],
    description: "A 4-day royal luxury corridor through the Kingdom of Mahakaal — Ujjain, Maheshwar and Omkareshwar." },
];

function normalizeCategory(raw: string): string {
  const r = raw.toLowerCase();
  // priority order: Wildlife > Spiritual > Heritage > Nature
  if (r.includes("wildlife")) return "Wildlife";
  if (r.includes("sprit") || r.includes("spirit")) return "Spiritual";
  if (r.includes("heritage")) return "Heritage";
  if (r.includes("nature")) return "Nature";
  return "Heritage";
}

function buildExcelPackages(): PackageData[] {
  return excelPkgs.map((p) => {
    const nights = Math.max(1, p.days - 1);
    const stops = p.route.split(" - ");
    const itinerary = Array.from({ length: p.days }, (_, i) => {
      const from = stops[Math.min(i, stops.length - 1)];
      const to = stops[Math.min(i + 1, stops.length - 1)];
      const isLast = i === p.days - 1;
      return {
        day: i + 1,
        title: isLast ? `${from} (Departure)` : (from === to ? `${from} — Sightseeing` : `${from} → ${to}`),
        description: isLast
          ? `Final breakfast at the hotel. Visit any remaining attractions in ${from} before your departure transfer.`
          : `Drive from ${from} to ${to}. Explore key attractions en-route and check-in. Overnight stay in ${to}.`,
      };
    });
    return {
      id: slug(p.name),
      name: p.name,
      location: p.route,
      duration: `${p.days} Days / ${nights} Night${nights === 1 ? "" : "s"}`,
      days: p.days,
      price: p.price,
      originalPrice: Math.round(p.price * 1.2),
      category: normalizeCategory(p.rawCat),
      tourCategory: p.tourCategory,
      image: PKG_IMAGE_BY_ID[p.id] ?? p.image,
      highlights: p.highlights,
      description: p.description,
      itinerary,
      included: baseInclusion(nights).std,
      excluded: baseExcluded,
      featured: false,
      offer: false,
    };
  });
}

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
  ...buildExcelPackages(),
];

/* ─────────────────────────────────────────────────────────────
   Filter / UI helpers — kept compatible with existing components
   ───────────────────────────────────────────────────────────── */
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
