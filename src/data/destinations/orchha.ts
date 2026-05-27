import type { DestinationContent } from "./types";

import orchhaattraction1 from "@/assets/destimages/orchhaattraction1.jpeg";
import orchhaattraction2 from "@/assets/destimages/orchhaattraction2.jpeg";
import orchhaattraction3 from "@/assets/destimages/orchhaattraction3.jpeg";
import orchhaattraction4 from "@/assets/destimages/orchhaattraction4.jpeg";

// gallery

import orchhagallary1 from "@/assets/destimages/orchhagallary1.jpeg";
import orchhagallary2 from "@/assets/destimages/orchhagallary2.jpeg";
import orchhagallary3 from "@/assets/destimages/orchhagallary3.jpeg";
import orchhagallary4 from "@/assets/destimages/orchhagallary4.jpeg";
import orchhagallary5 from "@/assets/destimages/orchhagallary5.jpeg";
import orchhagallary6 from "@/assets/destimages/orchhagallary6.jpeg";
import orchhagallary7 from "@/assets/destimages/orchhagallary7.jpeg";
import orchhagallary8 from "@/assets/destimages/orchhagallary8.jpeg";
import orchhagallary9 from "@/assets/destimages/orchhagallary9.jpeg";
import orchhagallary10 from "@/assets/destimages/orchhagallary10.jpeg";
import orchhagallary11 from "@/assets/destimages/orchhagallary11.jpeg";

const orchha: DestinationContent = {
  overviewParagraphs: [
    "Orchha — a hidden heritage gem of Madhya Pradesh — is known for its majestic palaces, riverside cenotaphs and timeless Bundela architecture.",
    "Nestled on the banks of the Betwa River, Orchha feels like a living medieval town where history, spirituality and tranquility blend beautifully.",
    "From grand forts and royal temples to peaceful ghats and sunset views, Orchha offers a regal yet soulful travel experience.",
  ],

  attractions: [
    {
      title: "Orchha Fort Complex",
      description:
        "A magnificent collection of palaces and courtyards showcasing Bundela-era architecture.",
      image: orchhaattraction1,
    },
    {
      title: "Jahangir Mahal",
      description:
        "A stunning royal palace built to honor Emperor Jahangir's visit to Orchha.",
      image: orchhaattraction2,
    },
    {
      title: "Chaturbhuj Temple",
      description:
        "A towering temple admired for its grand structure and panoramic town views.",
      image: orchhaattraction3,
    },
    {
      title: "Betwa River Cenotaphs",
      description:
        "Iconic royal chhatris lining the Betwa River, especially magical at sunset.",
      image: orchhaattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Fort Exploration",
      description: "Walk through ancient palaces, halls and royal courtyards.",
      icon: "🏰",
    },
    {
      title: "Sunset by Betwa River",
      description: "Enjoy peaceful golden-hour views near the cenotaphs.",
      icon: "🌅",
    },
    {
      title: "Temple Visits",
      description: "Explore sacred temples and spiritual landmarks.",
      icon: "🛕",
    },
    {
      title: "River Rafting",
      description: "Experience adventure activities on the Betwa River.",
      icon: "🚣",
    },
    {
      title: "Heritage Photography",
      description: "Capture timeless architecture and scenic landscapes.",
      icon: "📸",
    },
    {
      title: "Light & Sound Show",
      description: "Discover Orchha's royal history through evening storytelling.",
      icon: "🎇",
    },
  ],

  experiences: [
    {
      title: "Royal Heritage",
      description:
        "Feel the grandeur of Bundela kings while exploring ancient palaces.",
    },
    {
      title: "Peaceful Riverside Evenings",
      description:
        "Relax beside the Betwa River surrounded by historic cenotaphs.",
    },
    {
      title: "Architectural Beauty",
      description:
        "Admire intricate murals, domes and medieval craftsmanship.",
    },
    {
      title: "Spiritual Atmosphere",
      description:
        "Experience the calm and devotion of Orchha's temples and ghats.",
    },
  ],

  gallery: [
    orchhagallary1,
    orchhagallary2,
    orchhagallary3,
    orchhagallary4,
    orchhagallary5,
    orchhagallary6,
    orchhagallary7,
    orchhagallary8,
    orchhagallary9,
    orchhagallary10,
    orchhagallary11,
  ],

  travelInfo: {
    bestTime: "October to March — pleasant weather for heritage walks and sightseeing",
    road:
      "Well-connected by road from Jhansi, Gwalior and nearby cities.",
    rail:
      "Jhansi Railway Station (~18 km) is the nearest major railhead.",
    air:
      "The nearest airport is Gwalior Airport, with connectivity to major Indian cities.",
  },

  duration: "2 Days / 1 Night",
};

export default orchha;