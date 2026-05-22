import type { DestinationContent } from "./types";

import gwaliorattraction1 from "@/assets/destimages/gwalliorattraction1.jpeg";
import gwaliorattraction2 from "@/assets/destimages/gwalliorattraction2.jpeg";
import gwaliorattraction3 from "@/assets/destimages/gwalliorattraction3.jpeg";
import gwaliorattraction4 from "@/assets/destimages/gwalliorattraction4.jpeg";

// gallery

import gwaliorgallary1 from "@/assets/destimages/gwalliorgallary1.jpeg";
import gwaliorgallary2 from "@/assets/destimages/gwalliorgallary2.jpeg";
import gwaliorgallary3 from "@/assets/destimages/gwalliorgallary3.jpeg";
import gwaliorgallary4 from "@/assets/destimages/gwalliorgallary4.jpeg";
import gwaliorgallary5 from "@/assets/destimages/gwalliorgallary5.jpeg";
import gwaliorgallary6 from "@/assets/destimages/gwalliorgallary6.jpeg";

const gwalior: DestinationContent = {
  overviewParagraphs: [
    "Gwalior — the majestic fortress city of Madhya Pradesh — is known for its royal history, grand architecture and rich musical heritage.",
    "Dominated by the iconic Gwalior Fort, the city blends Rajput glory, Mughal influence and timeless cultural traditions.",
    "From ancient palaces and intricately carved temples to bustling bazaars and classical music roots, Gwalior offers a regal travel experience.",
  ],

  attractions: [
    {
      title: "Gwalior Fort",
      description:
        "A massive hilltop fortress admired for its stunning architecture and panoramic city views.",
      image: gwaliorattraction1,
    },
    {
      title: "Jai Vilas Palace",
      description:
        "A luxurious royal palace showcasing European-inspired interiors and a grand museum.",
      image: gwaliorattraction2,
    },
    {
      title: "Sas Bahu Temples",
      description:
        "Beautiful 11th-century temples famous for intricate carvings and ancient craftsmanship.",
      image: gwaliorattraction3,
    },
    {
      title: "Tansen Tomb",
      description:
        "The memorial of legendary musician Tansen, surrounded by peaceful Mughal gardens.",
      image: gwaliorattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Fort Exploration",
      description: "Walk through ancient gates, palaces and hidden passages.",
      icon: "🏰",
    },
    {
      title: "Museum Visit",
      description: "Explore royal artifacts and historical collections.",
      icon: "🖼️",
    },
    {
      title: "Light & Sound Show",
      description: "Experience Gwalior Fort's history through evening storytelling.",
      icon: "🎆",
    },
    {
      title: "Heritage Photography",
      description: "Capture majestic architecture and city views.",
      icon: "📸",
    },
    {
      title: "Street Food Trail",
      description: "Enjoy local kachoris, bedai and traditional sweets.",
      icon: "🍴",
    },
    {
      title: "Music Heritage Tour",
      description: "Discover the roots of Hindustani classical music.",
      icon: "🎶",
    },
  ],

  experiences: [
    {
      title: "Royal Grandeur",
      description:
        "Feel the regal atmosphere while exploring palaces and fort walls.",
    },
    {
      title: "Sunset from the Fort",
      description:
        "Watch the city glow golden beneath the ancient sandstone fort.",
    },
    {
      title: "Cultural Legacy",
      description:
        "Experience Gwalior's timeless contribution to Indian art and music.",
    },
    {
      title: "Historic Old City",
      description:
        "Stroll through colorful markets and centuries-old streets.",
    },
  ],

  gallery: [
    gwaliorgallary1,
    gwaliorgallary2,
    gwaliorgallary3,
    gwaliorgallary4,
    gwaliorgallary5,
    gwaliorgallary6,
  ],

  travelInfo: {
    bestTime: "October to March — pleasant weather for sightseeing and fort exploration",
    road:
      "Well-connected by highways from Agra, Jhansi, Bhopal and nearby cities.",
    rail:
      "Gwalior Junction is a major railway station with connections across India.",
    air:
      "Rajmata Vijaya Raje Scindia Airport offers regular domestic flights.",
  },

  duration: "2 Days / 1 Night",
};

export default gwalior;