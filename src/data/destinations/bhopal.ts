import type { DestinationContent } from "./types";

import bhopalattraction1 from "@/assets/destimages/bhopalattraction1.jpeg";
import bhopalattraction2 from "@/assets/destimages/bhopalattraction2.jpeg";
import bhopalattraction3 from "@/assets/destimages/bhopalattraction3.jpeg";
import bhopalattraction4 from "@/assets/destimages/bhopalattraction4.jpeg";

// gallery

import bhopalgallary1 from "@/assets/destimages/bhopalgallary1.jpeg";
import bhopalgallary2 from "@/assets/destimages/bhopalgallary2.jpeg";
import bhopalgallary3 from "@/assets/destimages/bhopalgallary3.jpeg";
import bhopalgallary4 from "@/assets/destimages/bhopalgallary4.jpeg";
import bhopalgallary5 from "@/assets/destimages/bhopalgallary5.jpeg";
import bhopalgallary6 from "@/assets/destimages/bhopalgallary6.jpeg";

const bhopal: DestinationContent = {
  overviewParagraphs: [
    "Bhopal — the City of Lakes — blends royal heritage, spiritual calm and modern culture in the heart of Madhya Pradesh.",
    "Known for its beautiful Upper Lake, Mughal-era architecture and vibrant street food, Bhopal offers a perfect balance of history and urban charm.",
    "From sunrise views at Van Vihar to the grandeur of Taj-ul-Masajid and the tribal art of Bharat Bhavan, Bhopal delivers a soulful cultural experience.",
  ],

  attractions: [
    {
      title: "Upper Lake",
      description:
        "The iconic Bhojtal lake offers boating, sunset views and a peaceful escape in the center of the city.",
      image: bhopalattraction1,
    },
    {
      title: "Taj-ul-Masajid",
      description:
        "One of the largest mosques in India, admired for its pink facade, domes and stunning Mughal architecture.",
      image: bhopalattraction2,
    },
    {
      title: "Van Vihar National Park",
      description:
        "A unique urban national park where wildlife and nature thrive beside the Upper Lake.",
      image: bhopalattraction3,
    },
    {
      title: "Bharat Bhavan",
      description:
        "A renowned multi-arts complex showcasing tribal art, theatre, poetry and cultural performances.",
      image: bhopalattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Lakefront Boating",
      description: "Enjoy boating and sunset views at Upper Lake.",
      icon: "🚤",
    },
    {
      title: "Street Food Trail",
      description: "Taste Bhopal's famous poha, jalebi and kebabs.",
      icon: "🍴",
    },
    {
      title: "Wildlife Safari",
      description: "Spot tigers, deer and birds at Van Vihar.",
      icon: "🦌",
    },
    {
      title: "Heritage Walk",
      description: "Explore old city lanes and Mughal architecture.",
      icon: "🏛️",
    },
    {
      title: "Museum Exploration",
      description: "Discover tribal culture and art galleries.",
      icon: "🎭",
    },
    {
      title: "Sunset Photography",
      description: "Capture golden-hour reflections across the lakes.",
      icon: "📸",
    },
  ],

  experiences: [
    {
      title: "Sunrise at Upper Lake",
      description:
        "Watch the calm waters glow with the first rays of sunlight.",
    },
    {
      title: "Old Bhopal Evenings",
      description:
        "Experience bustling bazaars, chai stalls and authentic local culture.",
    },
    {
      title: "Art & Culture",
      description:
        "Attend live performances and exhibitions at Bharat Bhavan.",
    },
    {
      title: "Nature Escapes",
      description:
        "Reconnect with nature through lakeside walks and green parks.",
    },
  ],

  gallery: [
    bhopalgallary1,
    bhopalgallary2,
    bhopalgallary3,
    bhopalgallary4,
    bhopalgallary5,
    bhopalgallary6,
  ],

  travelInfo: {
    bestTime: "October to March — pleasant weather and ideal sightseeing",
    road:
      "Well-connected by highways from Indore, Jabalpur and nearby cities.",
    rail:
      "Bhopal Junction and Habibganj Railway Station connect major Indian routes.",
    air:
      "Raja Bhoj Airport offers direct flights from Delhi, Mumbai, Bengaluru and more.",
  },

  duration: "2 Days / 1 Night",
};

export default bhopal;