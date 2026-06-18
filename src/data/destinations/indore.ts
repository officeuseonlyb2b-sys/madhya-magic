import type { DestinationContent } from "./types";

// All images served from Cloudinary
const images = {
  // Attraction images – mapped to the exact variable names
  indoreattraction1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781770122/indoreattraction1_yf4twt.jpg",
  indoreattraction2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781770123/indoreattraction2_u8ngb7.jpg",
  indoreattraction3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781770125/indoreattraction3_slftnu.jpg",
  indoreattraction4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781770127/indoreattraction4_fn8dbf.jpg",

  // Gallery images – mapped to indoregallary1..9
  indoregallary1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781770130/indoregallary1_jhltwa.jpg",
  indoregallary2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781770132/indoregallary2_hvurwf.jpg",
  indoregallary3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781770133/indoregallary3_u7el3m.jpg",
  indoregallary4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781770135/indoregallary4_sx9c8o.jpg",
  indoregallary5:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781770137/indoregallary5_wkvowk.jpg",
  indoregallary6:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781770138/indoregallary6_es8jus.jpg",
  indoregallary7:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781770141/indoregallary7_s1asri.jpg",
  indoregallary8:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781770143/indoregallary8_mnf3ob.jpg",
  indoregallary9:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781770144/indoregallary9_dcan9d.jpg",
};

const indore: DestinationContent = {
  overviewParagraphs: [
    "Indore — the commercial capital of Madhya Pradesh — is a vibrant city known for its royal heritage, modern lifestyle and legendary food culture.",
    "Founded by the Holkar dynasty, Indore beautifully blends historic palaces, bustling markets and contemporary urban charm.",
    "From the grandeur of Rajwada Palace and serene temples to the famous night food streets of Sarafa Bazaar, Indore offers an energetic and unforgettable travel experience.",
  ],

  attractions: [
    {
      title: "Rajwada Palace",
      description:
        "A magnificent seven-storey palace showcasing the grandeur of the Holkar dynasty.",
      image: images.indoreattraction1,
    },
    {
      title: "Sarafa Bazaar",
      description:
        "A world-famous night street food market known for its unique flavors and lively atmosphere.",
      image: images.indoreattraction2,
    },
    {
      title: "Lal Bagh Palace",
      description:
        "An elegant royal palace inspired by European architecture and luxury interiors.",
      image: images.indoreattraction3,
    },
    {
      title: "Khajrana Ganesh Temple",
      description:
        "A revered temple attracting devotees from across the country.",
      image: images.indoreattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Street Food Tour",
      description: "Taste Indore's famous poha, jalebi and Sarafa delicacies.",
      icon: "🍴",
    },
    {
      title: "Heritage Walk",
      description: "Explore royal palaces and historic city landmarks.",
      icon: "🏛️",
    },
    {
      title: "Night Market Experience",
      description: "Enjoy the vibrant atmosphere of Sarafa Bazaar at night.",
      icon: "🌃",
    },
    {
      title: "Temple Visits",
      description: "Experience spirituality at iconic temples and shrines.",
      icon: "🛕",
    },
    {
      title: "Shopping Exploration",
      description: "Shop for textiles, handicrafts and local specialties.",
      icon: "🛍️",
    },
    {
      title: "Photography Tour",
      description: "Capture the city's heritage architecture and lively streets.",
      icon: "📸",
    },
  ],

  experiences: [
    {
      title: "Royal Holkar Legacy",
      description:
        "Discover the rich heritage and architectural beauty of the Holkar era.",
    },
    {
      title: "Food Lover's Paradise",
      description:
        "Experience one of India's most celebrated street food cultures.",
    },
    {
      title: "Modern Urban Energy",
      description:
        "Enjoy Indore's lively cafes, markets and youthful atmosphere.",
    },
    {
      title: "Cultural Vibrance",
      description:
        "Witness the perfect blend of tradition, spirituality and modernity.",
    },
  ],

  gallery: [
    images.indoregallary1,
    images.indoregallary2,
    images.indoregallary3,
    images.indoregallary4,
    images.indoregallary5,
    images.indoregallary6,
    images.indoregallary7,
    images.indoregallary8,
    images.indoregallary9,
  ],

  travelInfo: {
    bestTime: "October to March — ideal weather for sightseeing and food exploration",
    road:
      "Well-connected by highways from Bhopal, Ujjain and nearby cities.",
    rail:
      "Indore Junction is a major railway hub with excellent nationwide connectivity.",
    air:
      "Devi Ahilya Bai Holkar Airport offers regular domestic and international connectivity.",
  },

  duration: "2 Days / 1 Night",
};

export default indore;