import type { DestinationContent } from "./types";

import indoreattraction1 from "@/assets/destimages/indoreattraction1.jpeg";
import indoreattraction2 from "@/assets/destimages/indoreattraction2.jpeg";
import indoreattraction3 from "@/assets/destimages/indoreattraction3.jpeg";
import indoreattraction4 from "@/assets/destimages/indoreattraction4.jpeg";

// gallery

import indoregallary1 from "@/assets/destimages/indoregallary1.jpeg";
import indoregallary2 from "@/assets/destimages/indoregallary2.jpeg";
import indoregallary3 from "@/assets/destimages/indoregallary3.jpeg";
import indoregallary4 from "@/assets/destimages/indoregallary4.jpeg";
import indoregallary5 from "@/assets/destimages/indoregallary5.jpeg";
import indoregallary6 from "@/assets/destimages/indoregallary6.jpeg";
import indoregallary7 from "@/assets/destimages/indoregallary7.jpeg";
import indoregallary8 from "@/assets/destimages/indoregallary8.jpeg";
import indoregallary9 from "@/assets/destimages/indoregallary9.jpeg";

const indore: DestinationContent = {
  overviewParagraphs: [
    "Indore — the commercial capital of Madhya Pradesh — is a vibrant city known for its royal heritage, modern lifestyle and legendary food culture.",
    "Founded by the Holkar dynasty, Indore beautifully blends historic palaces, bustling markets and contemporary urban charm.",
    "From the grandeur of Rajwada Palace and serene temples to the famous night food streets of Sarafa Bazaar, Indore offers an energetic and unforgettable travel experience.",
  ],

  attractions: [
    {
      title: "Rajwada Palace",
      description:
        "A magnificent seven-storey palace showcasing the grandeur of the Holkar dynasty.",
      image: indoreattraction1,
    },
    {
      title: "Sarafa Bazaar",
      description:
        "A world-famous night street food market known for its unique flavors and lively atmosphere.",
      image: indoreattraction2,
    },
    {
      title: "Lal Bagh Palace",
      description:
        "An elegant royal palace inspired by European architecture and luxury interiors.",
      image: indoreattraction3,
    },
    {
      title: "Khajrana Ganesh Temple",
      description:
        "A revered temple attracting devotees from across the country.",
      image: indoreattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Street Food Tour",
      description: "Taste Indore's famous poha, jalebi and Sarafa delicacies.",
      icon: "🍴",
    },
    {
      title: "Heritage Walk",
      description: "Explore royal palaces and historic city landmarks.",
      icon: "🏛️",
    },
    {
      title: "Night Market Experience",
      description: "Enjoy the vibrant atmosphere of Sarafa Bazaar at night.",
      icon: "🌃",
    },
    {
      title: "Temple Visits",
      description: "Experience spirituality at iconic temples and shrines.",
      icon: "🛕",
    },
    {
      title: "Shopping Exploration",
      description: "Shop for textiles, handicrafts and local specialties.",
      icon: "🛍️",
    },
    {
      title: "Photography Tour",
      description: "Capture the city's heritage architecture and lively streets.",
      icon: "📸",
    },
  ],

  experiences: [
    {
      title: "Royal Holkar Legacy",
      description:
        "Discover the rich heritage and architectural beauty of the Holkar era.",
    },
    {
      title: "Food Lover's Paradise",
      description:
        "Experience one of India's most celebrated street food cultures.",
    },
    {
      title: "Modern Urban Energy",
      description:
        "Enjoy Indore's lively cafes, markets and youthful atmosphere.",
    },
    {
      title: "Cultural Vibrance",
      description:
        "Witness the perfect blend of tradition, spirituality and modernity.",
    },
  ],

  gallery: [
    indoregallary1,
    indoregallary2,
    indoregallary3,
    indoregallary4,
    indoregallary5,
    indoregallary6,
    indoregallary7,
    indoregallary8,
    indoregallary9,
  ],

  travelInfo: {
    bestTime: "October to March — ideal weather for sightseeing and food exploration",
    road:
      "Well-connected by highways from Bhopal, Ujjain and nearby cities.",
    rail:
      "Indore Junction is a major railway hub with excellent nationwide connectivity.",
    air:
      "Devi Ahilya Bai Holkar Airport offers regular domestic and international connectivity.",
  },

  duration: "2 Days / 1 Night",
};

export default indore;