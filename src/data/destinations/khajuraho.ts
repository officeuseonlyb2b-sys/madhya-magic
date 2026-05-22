import type { DestinationContent } from "./types";

import khajurahoattraction1 from "@/assets/destimages/khajurahoattraction1.jpeg";
import khajurahoattraction2 from "@/assets/destimages/khajurahoattraction2.jpeg";
import khajurahoattraction3 from "@/assets/destimages/khajurahoattraction3.jpeg";
import khajurahoattraction4 from "@/assets/destimages/khajurahoattraction4.jpeg";

// gallery

import khajurahogallary1 from "@/assets/destimages/khajurahogallary1.jpeg";
import khajurahogallary2 from "@/assets/destimages/khajurahogallary2.jpeg";
import khajurahogallary3 from "@/assets/destimages/khajurahogallary3.jpeg";
import khajurahogallary4 from "@/assets/destimages/khajurahogallary4.jpeg";
import khajurahogallary5 from "@/assets/destimages/khajurahogallary5.jpeg";
import khajurahogallary6 from "@/assets/destimages/khajurahogallary6.jpeg";

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
      image: khajurahoattraction1,
    },
    {
      title: "Lakshmana Temple",
      description:
        "A beautifully preserved temple dedicated to Lord Vishnu with detailed sculptural artwork.",
      image: khajurahoattraction2,
    },
    {
      title: "Chitragupta Temple",
      description:
        "An ancient temple devoted to the Sun God, admired for its elegant architecture.",
      image: khajurahoattraction3,
    },
    {
      title: "Raneh Falls",
      description:
        "A stunning canyon waterfall surrounded by colorful volcanic rock formations near Khajuraho.",
      image: khajurahoattraction4,
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
    khajurahogallary1,
    khajurahogallary2,
    khajurahogallary3,
    khajurahogallary4,
    khajurahogallary5,
    khajurahogallary6,
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