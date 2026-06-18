import type { DestinationContent } from "./types";

// All images served from Cloudinary
const images = {
  // Attraction images – mapped to the exact variable names
  khajurahoattraction1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781775575/khajurahoattraction1_iyt9ru.jpg",
  khajurahoattraction2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781775576/khajurahoattraction2_adylba.jpg",
  khajurahoattraction3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781775577/khajurahoattraction3_kpffgq.jpg",
  khajurahoattraction4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781775580/khajurahoattraction4_lxfr4d.jpg",

  // Gallery images – mapped to khajurahogallary1..10
  khajurahogallary1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781775583/khajurahogallary1_qemrvj.jpg",
  khajurahogallary2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781775585/khajurahogallary2_yqgcar.jpg",
  khajurahogallary3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781775588/khajurahogallary3_ql2exa.jpg",
  khajurahogallary4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781775590/khajurahogallary4_mwh1bx.jpg",
  khajurahogallary5:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781775592/khajurahogallary5_sole3m.jpg",
  khajurahogallary6:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781775595/khajurahogallary6_w62hby.jpg",
  khajurahogallary7:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781775597/khajurahogallary7_fbla3h.jpg",
  khajurahogallary8:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781775599/khajurahogallary8_mwqded.jpg",
  khajurahogallary9:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781775602/khajurahogallary9_ash36r.jpg",
  khajurahogallary10:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781775604/khajurahogallary10_y5rqdr.jpg",
};

const khajuraho: DestinationContent = {
  overviewParagraphs: [
    "Khajuraho — a UNESCO World Heritage destination in Madhya Pradesh — is globally celebrated for its magnificent temples and intricate stone carvings.",
    "Built by the Chandela dynasty between the 9th and 12th centuries, the temples reflect extraordinary artistry, spirituality and architectural brilliance.",
    "From breathtaking sandstone sculptures and peaceful temple complexes to cultural performances and ancient legends, Khajuraho offers a timeless heritage experience.",
  ],

  attractions: [
    {
      title: "Western Group of Temples",
      description:
        "The most iconic temple complex featuring Kandariya Mahadeva and world-famous carvings.",
      image: images.khajurahoattraction1,
    },
    {
      title: "Lakshmana Temple",
      description:
        "A beautifully preserved temple dedicated to Lord Vishnu with detailed sculptural artwork.",
      image: images.khajurahoattraction2,
    },
    {
      title: "Chitragupta Temple",
      description:
        "An ancient temple devoted to the Sun God, admired for its elegant architecture.",
      image: images.khajurahoattraction3,
    },
    {
      title: "Raneh Falls",
      description:
        "A stunning canyon waterfall surrounded by colorful volcanic rock formations near Khajuraho.",
      image: images.khajurahoattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Temple Exploration",
      description: "Discover ancient temples and intricate stone carvings.",
      icon: "🛕",
    },
    {
      title: "Light & Sound Show",
      description: "Learn Khajuraho's history through immersive storytelling.",
      icon: "🎇",
    },
    {
      title: "Heritage Photography",
      description: "Capture stunning temple architecture and sculptures.",
      icon: "📸",
    },
    {
      title: "Cultural Dance Shows",
      description: "Experience classical Indian dance performances.",
      icon: "💃",
    },
    {
      title: "Nature Excursion",
      description: "Visit nearby waterfalls and natural landscapes.",
      icon: "🌿",
    },
    {
      title: "Local Handicraft Shopping",
      description: "Explore traditional art, souvenirs and stone crafts.",
      icon: "🛍️",
    },
  ],

  experiences: [
    {
      title: "Sunrise at the Temples",
      description:
        "Watch the golden sunlight illuminate the ancient sandstone carvings.",
    },
    {
      title: "Architectural Wonder",
      description:
        "Admire the incredible craftsmanship and storytelling through sculptures.",
    },
    {
      title: "Cultural Heritage",
      description:
        "Experience centuries-old traditions through art, music and spirituality.",
    },
    {
      title: "Peaceful Evenings",
      description:
        "Enjoy serene temple surroundings under soft evening lights.",
    },
  ],

  gallery: [
    images.khajurahogallary1,
    images.khajurahogallary2,
    images.khajurahogallary3,
    images.khajurahogallary4,
    images.khajurahogallary5,
    images.khajurahogallary6,
    images.khajurahogallary7,
    images.khajurahogallary8,
    images.khajurahogallary9,
    images.khajurahogallary10,
  ],

  travelInfo: {
    bestTime: "October to March — ideal weather for temple sightseeing and cultural tours",
    road:
      "Well-connected by road from Jhansi, Satna and nearby cities.",
    rail:
      "Khajuraho Railway Station connects major regional routes.",
    air:
      "Khajuraho Airport offers domestic flight connectivity from major Indian cities.",
  },

  duration: "2 Days / 1 Night",
};

export default khajuraho;