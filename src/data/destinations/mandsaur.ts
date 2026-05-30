import type { DestinationContent } from "./types";

import mandsaurattraction1 from "@/assets/destimages/mandsaurattraction1.jpeg";
import mandsaurattraction2 from "@/assets/destimages/mandsaurattraction2.jpeg";
import mandsaurattraction3 from "@/assets/destimages/mandsaurattraction3.jpeg";
import mandsaurattraction4 from "@/assets/destimages/mandsaurattraction4.jpeg";

// gallery

import mandsaurgallary1 from "@/assets/destimages/mandsaurgallary1.jpeg";
import mandsaurgallary2 from "@/assets/destimages/mandsaurgallary2.jpeg";
import mandsaurgallary3 from "@/assets/destimages/mandsaurgallary3.jpeg";
import mandsaurgallary4 from "@/assets/destimages/mandsaurgallary4.jpeg";
import mandsaurgallary5 from "@/assets/destimages/mandsaurgallary5.jpeg";
import mandsaurgallary6 from "@/assets/destimages/mandsaurgallary6.jpeg";

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
      image: mandsaurattraction1,
    },
    {
      title: "Gandhi Sagar Dam",
      description:
        "A scenic reservoir on the Chambal River known for beautiful views and boating opportunities.",
      image: mandsaurattraction2,
    },
    {
      title: "Hinglajgarh Fort",
      description:
        "A historic hill fort renowned for its archaeological remains and ancient sculptures.",
      image: mandsaurattraction3,
    },
    {
      title: "Shivna River Ghat",
      description:
        "A peaceful riverside location popular for spiritual activities and local gatherings.",
      image: mandsaurattraction4,
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
    mandsaurgallary1,
    mandsaurgallary2,
    mandsaurgallary3,
    mandsaurgallary4,
    mandsaurgallary5,
    mandsaurgallary6,
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