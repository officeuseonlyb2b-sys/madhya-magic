import type { DestinationContent } from "./types";

// All images served from Cloudinary
const images = {
  // Attraction images – mapped to mandsaurattraction1..4
  mandsaurattraction1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777161/mandsaurattraction1_r3rsny.jpg",
  mandsaurattraction2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777161/mandsaurattraction2_jyxoua.jpg",
  mandsaurattraction3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777163/mandsaurattraction3_oqgqx2.jpg",
  mandsaurattraction4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777167/mandsaurattraction4_hbmfbe.jpg",

  // Gallery images – mapped to mandsaurgallary1..6
  mandsaurgallary1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777170/mandsaurgallary1_p10i0q.jpg",
  mandsaurgallary2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777172/mandsaurgallary2_wgtcbq.jpg",
  mandsaurgallary3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777175/mandsaurgallary3_l0toft.jpg",
  mandsaurgallary4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777177/mandsaurgallary4_giy7v9.jpg",
  mandsaurgallary5:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777181/mandsaurgallary5_aoy2xc.jpg",
  mandsaurgallary6:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777183/mandsaurgallary6_mk7jck.jpg",
};

const mandsaur: DestinationContent = {
  overviewParagraphs: [
    "Mandsaur is a historic city in Madhya Pradesh known for its ancient temples, archaeological heritage and spiritual significance.",
    "The city is closely associated with Lord Pashupatinath and features remarkable monuments dating back to ancient and medieval India.",
    "From sacred temples and historic forts to scenic reservoirs and cultural landmarks, Mandsaur offers a fascinating blend of history and spirituality.",
  ],

  attractions: [
    {
      title: "Pashupatinath Temple",
      description:
        "A famous Shiva temple housing the unique eight-faced idol of Lord Pashupatinath.",
      image: images.mandsaurattraction1,
    },
    {
      title: "Gandhi Sagar Dam",
      description:
        "A scenic reservoir on the Chambal River known for beautiful views and boating opportunities.",
      image: images.mandsaurattraction2,
    },
    {
      title: "Hinglajgarh Fort",
      description:
        "A historic hill fort renowned for its archaeological remains and ancient sculptures.",
      image: images.mandsaurattraction3,
    },
    {
      title: "Shivna River Ghat",
      description:
        "A peaceful riverside location popular for spiritual activities and local gatherings.",
      image: images.mandsaurattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Temple Darshan",
      description: "Visit the sacred Pashupatinath Temple and seek blessings.",
      icon: "🛕",
    },
    {
      title: "Heritage Exploration",
      description: "Discover ancient monuments and archaeological sites.",
      icon: "🏛️",
    },
    {
      title: "Photography",
      description: "Capture temples, forts and scenic landscapes.",
      icon: "📸",
    },
    {
      title: "Boating",
      description: "Enjoy boating and scenic views at Gandhi Sagar.",
      icon: "🚤",
    },
    {
      title: "Cultural Exploration",
      description: "Experience the history and traditions of Mandsaur.",
      icon: "📚",
    },
    {
      title: "Sightseeing",
      description: "Explore historic and spiritual attractions across the city.",
      icon: "🌄",
    },
  ],

  experiences: [
    {
      title: "Spiritual Heritage",
      description:
        "Experience devotion at one of the region’s most revered Shiva temples.",
    },
    {
      title: "Ancient History",
      description:
        "Explore centuries-old monuments and archaeological treasures.",
    },
    {
      title: "Scenic Beauty",
      description:
        "Enjoy rivers, reservoirs and picturesque landscapes.",
    },
    {
      title: "Cultural Discovery",
      description:
        "Immerse yourself in the traditions and heritage of Mandsaur.",
    },
  ],

  gallery: [
    images.mandsaurgallary1,
    images.mandsaurgallary2,
    images.mandsaurgallary3,
    images.mandsaurgallary4,
    images.mandsaurgallary5,
    images.mandsaurgallary6,
  ],

  travelInfo: {
    bestTime:
      "October to March — pleasant weather for sightseeing and temple visits",
    road:
      "Well-connected by road from Ujjain, Ratlam, Neemuch and Indore.",
    rail:
      "Mandsaur Railway Station provides connectivity to major cities.",
    air:
      "The nearest airport is Devi Ahilya Bai Holkar Airport, Indore.",
  },

  duration: "1 Day / 1 Night",
};

export default mandsaur;