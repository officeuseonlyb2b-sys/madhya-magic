// Per-destination SEO metadata. Used by DestinationDetail to inject
// unique title, description, keywords and FAQ schema per destination.

export interface DestinationSEO {
  title: string;
  description: string;
  keywords: string;
  faq?: { question: string; answer: string }[];
}

const generic = (name: string): DestinationSEO => ({
  title: `${name} Tour Package | Visit ${name} in Madhya Pradesh`,
  description: `Plan your ${name} trip with curated Madhya Pradesh tour packages — attractions, best time to visit, travel tips and itineraries from Enchanting MP.`,
  keywords: `${name} tour package, ${name} Madhya Pradesh, visit ${name}, ${name} travel guide, MP Tourism ${name}`,
});

export const destinationSEO: Record<string, DestinationSEO> = {
  ujjain: {
    title: "Ujjain Tour Package | Mahakaleshwar Jyotirlinga & Spiritual Madhya Pradesh",
    description:
      "Book Ujjain tour packages to visit Mahakaleshwar Jyotirlinga, Ram Ghat, Kal Bhairav and the sacred Shipra river. Spiritual tourism in Madhya Pradesh with Enchanting MP.",
    keywords:
      "Ujjain Tour Package, Mahakaleshwar Jyotirlinga, Spiritual Tourism Madhya Pradesh, Ujjain travel guide, Kumbh Mela Ujjain, MP Tourism",
    faq: [
      { question: "What is the best time to visit Ujjain?", answer: "October to March offers pleasant weather for darshan and sightseeing in Ujjain." },
      { question: "How many days are enough for Ujjain?", answer: "A 2-day Ujjain tour package covers Mahakaleshwar, Kal Bhairav, Harsiddhi Temple and Ram Ghat aarti comfortably." },
    ],
  },
  maheshwar: {
    title: "Maheshwar Tour Package | Narmada Ghats & Ahilya Fort Heritage Travel",
    description:
      "Explore Maheshwar tour packages — Ahilya Fort, Narmada ghats, Maheshwari handlooms and riverside temples. Heritage tourism in Madhya Pradesh with Enchanting MP.",
    keywords:
      "Maheshwar Tour Package, Ahilya Fort, Narmada Ghats, Heritage Tourism Madhya Pradesh, Maheshwari sarees, MP Tourism",
  },
  omkareshwar: {
    title: "Omkareshwar Tour Package | Jyotirlinga on the Narmada, Madhya Pradesh",
    description:
      "Visit Omkareshwar with curated tour packages — sacred Jyotirlinga, Mamleshwar temple and Narmada parikrama. Spiritual tourism in Madhya Pradesh with Enchanting MP.",
    keywords:
      "Omkareshwar Tour Package, Omkareshwar Jyotirlinga, Spiritual Tourism Madhya Pradesh, Narmada parikrama, MP Tourism",
  },
  khajuraho: {
    title: "Khajuraho Tour Package | UNESCO Temples & Heritage Tourism Madhya Pradesh",
    description:
      "Book Khajuraho tour packages to explore UNESCO World Heritage temples, intricate sculptures and the iconic Light & Sound show. Heritage travel across Madhya Pradesh.",
    keywords:
      "Khajuraho Tour Package, Khajuraho Temples, UNESCO World Heritage, Heritage Tourism Madhya Pradesh, MP Tourism",
    faq: [
      { question: "Why is Khajuraho famous?", answer: "Khajuraho is famed for its UNESCO-listed Western, Eastern and Southern temple groups built by the Chandela dynasty." },
      { question: "How many days do you need in Khajuraho?", answer: "Two days are ideal — one for the temple groups and Light & Sound show, another for Raneh Falls and Panna excursions." },
    ],
  },
  orchha: {
    title: "Orchha Tour Package | Bundela Palaces, Temples & Betwa River",
    description:
      "Discover Orchha with curated tour packages — Jahangir Mahal, Raj Mahal, Ram Raja Temple and Betwa riverside cenotaphs. Heritage tourism in Madhya Pradesh.",
    keywords:
      "Orchha Tour Package, Jahangir Mahal, Ram Raja Temple, Heritage Tourism Madhya Pradesh, MP Tourism",
  },
  sanchi: {
    title: "Sanchi Tour Package | Great Stupa & Buddhist Heritage Madhya Pradesh",
    description:
      "Visit Sanchi with curated tour packages — UNESCO Great Stupa, Buddhist monasteries and ancient toranas. Heritage tourism in Madhya Pradesh with Enchanting MP.",
    keywords:
      "Sanchi Tour Package, Great Stupa of Sanchi, Buddhist Heritage, UNESCO World Heritage, Heritage Tourism Madhya Pradesh, MP Tourism",
  },
  bhedaghat: {
    title: "Bhedaghat Tour Package | Marble Rocks & Dhuandhar Falls on the Narmada",
    description:
      "Plan your Bhedaghat trip with curated tour packages — Marble Rocks boat ride, Dhuandhar Falls and Chausath Yogini Temple on the Narmada in Madhya Pradesh.",
    keywords:
      "Bhedaghat Tour Package, Marble Rocks Jabalpur, Dhuandhar Falls, Nature Tourism Madhya Pradesh, MP Tourism",
  },
  pachmarhi: {
    title: "Pachmarhi Tour Package | Hill Station in the Satpura Range, Madhya Pradesh",
    description:
      "Book Pachmarhi tour packages — Bee Falls, Dhoopgarh sunset, Pandava Caves and Jata Shankar. Nature and adventure tourism in Madhya Pradesh with Enchanting MP.",
    keywords:
      "Pachmarhi Tour Package, Satpura Hill Station, Weekend Getaways in Madhya Pradesh, Adventure Tourism Madhya Pradesh, MP Tourism",
  },
  kanha: {
    title: "Kanha National Park Safari | Tiger Reserve Tour Packages, Madhya Pradesh",
    description:
      "Book Kanha National Park safari packages — jungle jeep safaris, Royal Bengal tigers, barasingha and Banjar valley stays. Wildlife tourism in Madhya Pradesh.",
    keywords:
      "Kanha National Park Safari, Kanha Tiger Reserve, Wildlife Tourism Madhya Pradesh, Kanha Tour Package, MP Tourism",
    faq: [
      { question: "When is the best time for Kanha safari?", answer: "October to June is open for safaris; March–May offers the best tiger sightings around waterholes." },
      { question: "How many safari zones are in Kanha?", answer: "Kanha has four core zones — Kisli, Kanha, Mukki and Sarhi — plus buffer routes." },
    ],
  },
  bandhavgarh: {
    title: "Bandhavgarh Safari | Tiger Reserve Tour Packages, Madhya Pradesh",
    description:
      "Book Bandhavgarh safari packages with highest tiger density in India — Tala, Magadhi and Khitauli zones, fort treks and jungle lodges. Wildlife tourism in MP.",
    keywords:
      "Bandhavgarh Safari, Bandhavgarh National Park, Wildlife Tourism Madhya Pradesh, Tiger Safari India, MP Tourism",
  },
  jabalpur: {
    title: "Jabalpur Tour Package | Marble Rocks, Madan Mahal & Spiritual Madhya Pradesh",
    description:
      "Plan your Jabalpur trip — Bhedaghat Marble Rocks, Dhuandhar Falls, Madan Mahal Fort and Pisanhari Ki Madiya. Curated Madhya Pradesh tour packages.",
    keywords:
      "Jabalpur Tour Package, Bhedaghat Marble Rocks, Madan Mahal Fort, Madhya Pradesh Travel Guide, MP Tourism",
  },
};

export const getDestinationSEO = (id: string, name: string): DestinationSEO =>
  destinationSEO[id] ?? generic(name);
