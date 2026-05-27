import type { DestinationContent } from "./types";

import manduattraction1 from "@/assets/destimages/manduattraction1.jpeg";
import manduattraction2 from "@/assets/destimages/manduattraction2.jpeg";
import manduattraction3 from "@/assets/destimages/manduattraction3.jpeg";
import manduattraction4 from "@/assets/destimages/manduattraction4.jpeg";

// gallery

import mandugallary1 from "@/assets/destimages/mandugallary1.jpeg";
import mandugallary2 from "@/assets/destimages/mandugallary2.jpeg";
import mandugallary3 from "@/assets/destimages/mandugallary3.jpeg";
import mandugallary4 from "@/assets/destimages/mandugallary4.jpeg";
import mandugallary5 from "@/assets/destimages/mandugallary5.jpeg";
import mandugallary6 from "@/assets/destimages/mandugallary6.jpeg";
import mandugallary7 from "@/assets/destimages/mandugallary7.jpeg";
import mandugallary8 from "@/assets/destimages/mandugallary8.jpeg";
import mandugallary9 from "@/assets/destimages/mandugallary9.jpeg";
import mandugallary10 from "@/assets/destimages/mandugallary10.jpeg";
import mandugallary11 from "@/assets/destimages/mandugallary11.jpeg";

const mandu: DestinationContent = {
  overviewParagraphs: [
    "Mandu — the city of joy and romance — is a historic hilltop destination in Madhya Pradesh known for its Afghan architecture, ancient forts and scenic beauty.",
    "Surrounded by lush greenery and dramatic valleys, Mandu offers a perfect blend of history, architecture and peaceful landscapes.",
    "From the legendary love story of Baz Bahadur and Rani Roopmati to magnificent palaces and monsoon charm, Mandu creates an unforgettable travel experience.",
  ],

  attractions: [
    {
      title: "Jahaz Mahal",
      description:
        "An iconic ship-shaped palace surrounded by water, famous for its unique architecture.",
      image: manduattraction1,
    },
    {
      title: "Rani Roopmati Pavilion",
      description:
        "A scenic hilltop pavilion offering breathtaking valley and Narmada River views.",
      image: manduattraction2,
    },
    {
      title: "Baz Bahadur Palace",
      description:
        "A beautiful palace known for its Mughal-style courtyards and romantic history.",
      image: manduattraction3,
    },
    {
      title: "Hoshang Shah Tomb",
      description:
        "India’s first marble mausoleum admired for its elegant Afghan architecture.",
      image: manduattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Fort Exploration",
      description: "Discover ancient palaces, gateways and historic ruins.",
      icon: "🏰",
    },
    {
      title: "Sunset Views",
      description: "Enjoy mesmerizing sunsets from Roopmati Pavilion.",
      icon: "🌅",
    },
    {
      title: "Photography",
      description: "Capture stunning architecture and monsoon landscapes.",
      icon: "📸",
    },
    {
      title: "Heritage Walks",
      description: "Walk through centuries-old monuments and royal pathways.",
      icon: "🚶",
    },
    {
      title: "Monsoon Getaway",
      description: "Experience Mandu’s magical greenery during the rainy season.",
      icon: "🌧️",
    },
    {
      title: "Local Food Tasting",
      description: "Try delicious local Malwa cuisine and street food.",
      icon: "🍴",
    },
  ],

  experiences: [
    {
      title: "Romantic Heritage",
      description:
        "Relive the legendary love story of Baz Bahadur and Rani Roopmati.",
    },
    {
      title: "Architectural Grandeur",
      description:
        "Witness stunning Afghan and Mughal-inspired structures.",
    },
    {
      title: "Scenic Beauty",
      description:
        "Enjoy panoramic valley views, greenery and peaceful surroundings.",
    },
    {
      title: "Historic Atmosphere",
      description:
        "Experience the timeless charm of Mandu’s royal past.",
    },
  ],

  gallery: [
  mandugallary1,
  mandugallary2,
  mandugallary3,
  mandugallary4,
  mandugallary5,
  mandugallary6,
  mandugallary7,
  mandugallary8,
  mandugallary9,
  mandugallary10,
  mandugallary11,
],

  travelInfo: {
    bestTime:
      "July to March — monsoon and winter are the best seasons to explore Mandu",
    road:
      "Well-connected by road from Indore, Dhar and nearby cities.",
    rail:
      "The nearest major railway station is Indore Junction (~100 km).",
    air:
      "The nearest airport is Devi Ahilya Bai Holkar Airport in Indore.",
  },

  duration: "2 Days / 1 Night",
};

export default mandu;