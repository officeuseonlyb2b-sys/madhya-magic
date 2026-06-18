import type { DestinationContent } from "./types";

// All images served from Cloudinary
const images = {
  attraction1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781764501/amarkantakattraction1_u3q7cu.jpg",
  attraction2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781764505/amarkantakattraction2_oauumy.jpg",
  attraction3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781764509/amarkantakattraction3_sxoq6j.jpg",
  attraction4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781764503/amarkantakattraction4_zvn3eh.jpg",

  gallery1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781764502/amarkantakgallary1_dpfh67.jpg",
  gallery2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781764502/amarkantakgallary2_anlhrb.jpg",
  gallery3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781764503/amarkantakgallary3_nbznqh.jpg",
  gallery4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781764523/amarkantakgallary4_mmnatw.jpg",
  gallery5:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781764550/amarkantakgallary5_gh2mev.jpg",
  gallery6:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781764560/amarkantakgallary6_pwea6y.jpg",
};

const amarkantak: DestinationContent = {
  overviewParagraphs: [
    "Amarkantak — the sacred origin of the Narmada River — is one of the most important pilgrimage destinations in Madhya Pradesh.",
    "Nestled in the Maikal Hills, Amarkantak is known for its temples, waterfalls, dense forests and spiritual significance.",
    "From the holy Narmada Kund to breathtaking waterfalls and ancient ashrams, Amarkantak offers a perfect blend of spirituality and natural beauty.",
  ],

  attractions: [
    {
      title: "Narmada Udgam Kund",
      description:
        "The sacred source of the Narmada River and the most revered site in Amarkantak.",
      image: images.attraction1,
    },
    {
      title: "Kapil Dhara Waterfall",
      description:
        "A spectacular waterfall where the Narmada cascades down amidst lush greenery.",
      image: images.attraction2,
    },
    {
      title: "Shri Yantra Mandir",
      description:
        "A unique spiritual temple dedicated to the sacred Shri Yantra, renowned for its intricate architecture and peaceful atmosphere.",
      image: images.attraction3,
    },
    {
      title: "Sonmuda",
      description:
        "A scenic viewpoint and the origin point of the Son River offering panoramic valley views.",
      image: images.attraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Narmada Darshan",
      description: "Visit the sacred origin of the Narmada River.",
      icon: "🛕",
    },
    {
      title: "Waterfall Exploration",
      description: "Witness the beauty of Kapil Dhara and nearby waterfalls.",
      icon: "🌊",
    },
    {
      title: "Temple Visits",
      description: "Explore ancient temples and spiritual landmarks.",
      icon: "🪔",
    },
    {
      title: "Nature Walks",
      description: "Enjoy peaceful forest trails and scenic landscapes.",
      icon: "🌿",
    },
    {
      title: "Photography",
      description: "Capture stunning waterfalls, temples and valley views.",
      icon: "📸",
    },
    {
      title: "Meditation",
      description: "Experience tranquility in the spiritual surroundings.",
      icon: "🧘",
    },
  ],

  experiences: [
    {
      title: "Spiritual Journey",
      description:
        "Experience the sacred atmosphere at the birthplace of the Narmada.",
    },
    {
      title: "Natural Beauty",
      description:
        "Enjoy waterfalls, forests and scenic mountain landscapes.",
    },
    {
      title: "Sacred Heritage",
      description:
        "Discover ancient temples, ashrams and pilgrimage traditions.",
    },
    {
      title: "Peaceful Escape",
      description:
        "Reconnect with nature in one of Madhya Pradesh’s most serene destinations.",
    },
  ],

  gallery: [
    images.gallery1,
    images.gallery2,
    images.gallery3,
    images.gallery4,
    images.gallery5,
    images.gallery6,
  ],

  travelInfo: {
    bestTime:
      "October to March — ideal weather for pilgrimage and sightseeing",
    road: "Well-connected by road from Anuppur, Shahdol and Jabalpur.",
    rail: "The nearest railway station is Pendra Road Railway Station (~40 km).",
    air: "The nearest airport is Jabalpur Airport.",
  },

  duration: "2 Days / 1 Night",
};

export default amarkantak;