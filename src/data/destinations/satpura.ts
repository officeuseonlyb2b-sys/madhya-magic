import type { DestinationContent } from "./types";

// All images served from Cloudinary
const images = {
  // Attraction images – mapped to satpuraattraction1..4
  satpuraattraction1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780561/satpuraattraction1_tlatil.jpg",
  satpuraattraction2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780563/satpuraattraction2_rsmtw0.jpg",
  satpuraattraction3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780566/satpuraattraction3_rzdbxa.jpg",
  satpuraattraction4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780570/satpuraattraction4_nnbntg.jpg",

  // Gallery images – mapped to satpuragallary1..9
  satpuragallary1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780573/satpuragallary1_cakh9h.jpg",
  satpuragallary2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780577/satpuragallary2_pu2gds.jpg",
  satpuragallary3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780581/satpuragallary3_xldyew.jpg",
  satpuragallary4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780584/satpuragallary4_zspco1.jpg",
  satpuragallary5:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780588/satpuragallary5_ogjczo.jpg",
  satpuragallary6:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780592/satpuragallary6_sho1nx.jpg",
  satpuragallary7:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780596/satpuragallary7_qdmtpj.jpg",
  satpuragallary8:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780600/satpuragallary8_oavldz.jpg",
  satpuragallary9:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780604/satpuragallary9_u2dc30.jpg",
};

const satpura: DestinationContent = {
  overviewParagraphs: [
    "Satpura National Park — one of Madhya Pradesh’s most scenic wildlife destinations — is famous for its untouched forests, rugged landscapes and rich biodiversity.",
    "Located in the Satpura Hills near Pachmarhi, the park offers a unique blend of wildlife adventures, river safaris and peaceful natural beauty.",
    "From thrilling jeep safaris and boat rides to tiger sightings and dense forest exploration, Satpura promises an unforgettable jungle experience.",
  ],

  attractions: [
    {
      title: "Satpura National Park",
      description:
        "A breathtaking wildlife reserve known for dense forests, rugged hills and rich biodiversity.",
      image: images.satpuraattraction1,
    },
    {
      title: "Jeep Safari",
      description:
        "Experience thrilling jungle safaris through wildlife-rich forest trails and scenic landscapes.",
      image: images.satpuraattraction2,
    },
    {
      title: "Denwa River Boat Safari",
      description:
        "Enjoy peaceful boat safaris surrounded by forests while spotting crocodiles and exotic birds.",
      image: images.satpuraattraction3,
    },
    {
      title: "Walking Safari",
      description:
        "A unique guided forest walk experience allowing close exploration of Satpura’s untouched wilderness.",
      image: images.satpuraattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Jungle Safari",
      description: "Explore wildlife-rich forest trails and scenic landscapes.",
      icon: "🛻",
    },
    {
      title: "Boat Safari",
      description: "Enjoy calm boat rides on the Denwa River surrounded by nature.",
      icon: "🚤",
    },
    {
      title: "Tiger Spotting",
      description: "Witness majestic tigers in their natural habitat.",
      icon: "🐅",
    },
    {
      title: "Bird Watching",
      description: "Observe colorful birds and rare wildlife species.",
      icon: "🦜",
    },
    {
      title: "Nature Photography",
      description: "Capture breathtaking forest landscapes and wildlife moments.",
      icon: "📸",
    },
    {
      title: "Forest Walks",
      description: "Experience peaceful guided walks through untouched forests.",
      icon: "🌿",
    },
  ],

  experiences: [
    {
      title: "Wildlife Adventure",
      description:
        "Feel the thrill of exploring one of India’s most beautiful tiger reserves.",
    },
    {
      title: "Untouched Nature",
      description:
        "Enjoy peaceful forests, rivers and scenic hill landscapes.",
    },
    {
      title: "Unique Safaris",
      description:
        "Experience jeep safaris, walking safaris and boat rides together.",
    },
    {
      title: "Photography Paradise",
      description:
        "Capture unforgettable wildlife and jungle scenery.",
    },
  ],

  gallery: [
    images.satpuragallary1,
    images.satpuragallary2,
    images.satpuragallary3,
    images.satpuragallary4,
    images.satpuragallary5,
    images.satpuragallary6,
    images.satpuragallary7,
    images.satpuragallary8,
    images.satpuragallary9,
  ],

  travelInfo: {
    bestTime:
      "October to June — ideal season for safaris and wildlife sightings",
    road:
      "Well-connected by road from Pachmarhi, Pipariya and nearby cities.",
    rail:
      "The nearest railway station is Pipariya Railway Station (~55 km).",
    air:
      "The nearest airport is Raja Bhoj Airport in Bhopal.",
  },

  duration: "2 Days / 1 Night",
};

export default satpura;