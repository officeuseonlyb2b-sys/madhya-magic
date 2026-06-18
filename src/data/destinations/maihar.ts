import type { DestinationContent } from "./types";

// All images served from Cloudinary
const images = {
  // Attraction images – mapped to maiharattraction1..4
  maiharattraction1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781776755/maiharattraction1_rsio9c.jpg",
  maiharattraction2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781776755/maiharattraction2_hhovb5.jpg",
  maiharattraction3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781776758/maiharattraction3_fzic79.jpg",
  maiharattraction4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781776759/maiharattraction4_zayylx.jpg",

  // Gallery images – mapped to maihargallary1..5
  maihargallary1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781776763/maihargallary1_nmsuxg.jpg",
  maihargallary2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781776765/maihargallary2_armth9.jpg",
  maihargallary3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781776768/maihargallary3_eubivi.jpg",
  maihargallary4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781776770/maihargallary4_xaht2s.jpg",
  maihargallary5:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781776774/maihargallary5_wswmbz.jpg",
};

const maihar: DestinationContent = {
  overviewParagraphs: [
    "Maihar is one of the most revered pilgrimage destinations in Madhya Pradesh, famous for the sacred Maa Sharda Devi Temple.",
    "Situated atop the Trikuta Hills, Maihar attracts millions of devotees seeking blessings from Goddess Sharda, an incarnation of Maa Saraswati.",
    "With its spiritual atmosphere, ropeway rides and panoramic hill views, Maihar offers a memorable religious and cultural experience.",
  ],

  attractions: [
    {
      title: "Maa Sharda Devi Temple",
      description:
        "A renowned hilltop temple dedicated to Goddess Sharda, attracting devotees from across India.",
      image: images.maiharattraction1,
    },
    {
      title: "Sharda Ropeway",
      description:
        "A scenic ropeway ride offering breathtaking views while ascending to the temple.",
      image: images.maiharattraction2,
    },
    {
      title: "Trikuta Hills",
      description:
        "The sacred hill range that houses the famous Maa Sharda Temple and offers panoramic views.",
      image: images.maiharattraction3,
    },
    {
      title: "Alha Udal Akhada",
      description:
        "A historic and spiritual site associated with the legendary warriors Alha and Udal.",
      image: images.maiharattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Temple Darshan",
      description: "Seek blessings of Maa Sharda at the sacred hilltop shrine.",
      icon: "🛕",
    },
    {
      title: "Ropeway Ride",
      description: "Enjoy stunning aerial views while traveling to the temple.",
      icon: "🚡",
    },
    {
      title: "Spiritual Exploration",
      description: "Experience the devotion and religious significance of Maihar.",
      icon: "🪔",
    },
    {
      title: "Photography",
      description: "Capture panoramic hill views and temple architecture.",
      icon: "📸",
    },
    {
      title: "Hill Trekking",
      description: "Climb the sacred steps leading to the temple.",
      icon: "🥾",
    },
    {
      title: "Local Culture",
      description: "Explore local traditions and religious festivities.",
      icon: "🎭",
    },
  ],

  experiences: [
    {
      title: "Divine Blessings",
      description:
        "Experience the spiritual energy of one of India's most revered Shakti Peeths.",
    },
    {
      title: "Sacred Hill Journey",
      description:
        "Enjoy a memorable pilgrimage atop the Trikuta Hills.",
    },
    {
      title: "Scenic Beauty",
      description:
        "Witness breathtaking views of the surrounding landscape.",
    },
    {
      title: "Cultural Heritage",
      description:
        "Discover the legends and traditions associated with Maa Sharda.",
    },
  ],

  gallery: [
    images.maihargallary1,
    images.maihargallary2,
    images.maihargallary3,
    images.maihargallary4,
    images.maihargallary5,
  ],

  travelInfo: {
    bestTime:
      "October to March — pleasant weather for pilgrimage and sightseeing",
    road:
      "Well-connected by road from Satna, Rewa, Jabalpur and nearby cities.",
    rail:
      "Maihar Railway Station is well connected to major Indian cities.",
    air:
      "The nearest airport is Khajuraho Airport.",
  },

  duration: "1 Day / 1 Night",
};

export default maihar;