import type { DestinationContent } from "./types";

import amarkantakattraction1 from "@/assets/destimages/amarkantakattraction1.jpeg";
import amarkantakattraction2 from "@/assets/destimages/amarkantakattraction2.jpeg";
import amarkantakattraction3 from "@/assets/destimages/amarkantakattraction3.jpeg";
import amarkantakattraction4 from "@/assets/destimages/amarkantakattraction4.jpeg";

// gallery

import amarkantakgallary1 from "@/assets/destimages/amarkantakgallary1.jpeg";
import amarkantakgallary2 from "@/assets/destimages/amarkantakgallary2.jpeg";
import amarkantakgallary3 from "@/assets/destimages/amarkantakgallary3.jpeg";
import amarkantakgallary4 from "@/assets/destimages/amarkantakgallary4.jpeg";
import amarkantakgallary5 from "@/assets/destimages/amarkantakgallary5.jpeg";
import amarkantakgallary6 from "@/assets/destimages/amarkantakgallary6.jpeg";

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
      image: amarkantakattraction1,
    },
    {
      title: "Kapil Dhara Waterfall",
      description:
        "A spectacular waterfall where the Narmada cascades down amidst lush greenery.",
      image: amarkantakattraction2,
    },
    {
      title: "Shri Yantra Mandir",
      description:
        "A unique spiritual temple dedicated to the sacred Shri Yantra, renowned for its intricate architecture and peaceful atmosphere.",
      image: amarkantakattraction3,
    },
    {
      title: "Sonmuda",
      description:
        "A scenic viewpoint and the origin point of the Son River offering panoramic valley views.",
      image: amarkantakattraction4,
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
    amarkantakgallary1,
    amarkantakgallary2,
    amarkantakgallary3,
    amarkantakgallary4,
    amarkantakgallary5,
    amarkantakgallary6,
  ],

  travelInfo: {
    bestTime:
      "October to March — ideal weather for pilgrimage and sightseeing",
    road:
      "Well-connected by road from Anuppur, Shahdol and Jabalpur.",
    rail:
      "The nearest railway station is Pendra Road Railway Station (~40 km).",
    air:
      "The nearest airport is Jabalpur Airport.",
  },

  duration: "2 Days / 1 Night",
};

export default amarkantak;