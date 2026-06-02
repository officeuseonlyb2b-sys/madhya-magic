import type { DestinationContent } from "./types";

import sonagiriattraction1 from "@/assets/destimages/sonagiriattraction1.jpeg";
import sonagiriattraction2 from "@/assets/destimages/sonagiriattraction2.jpeg";
import sonagiriattraction3 from "@/assets/destimages/sonagiriattraction3.jpeg";
import sonagiriattraction4 from "@/assets/destimages/sonagiriattraction4.jpeg";

// gallery

import sonagirigallary1 from "@/assets/destimages/sonagirigallary1.jpeg";
import sonagirigallary2 from "@/assets/destimages/sonagirigallary2.jpeg";
import sonagirigallary3 from "@/assets/destimages/sonagirigallary3.jpeg";
import sonagirigallary4 from "@/assets/destimages/sonagirigallary4.jpeg";
import sonagirigallary5 from "@/assets/destimages/sonagirigallary5.jpeg";
import sonagirigallary6 from "@/assets/destimages/sonagirigallary6.jpeg";

const sonagiri: DestinationContent = {
  overviewParagraphs: [
    "Sonagiri is one of the most important Jain pilgrimage destinations in India, renowned for its hilltop temples and spiritual significance.",
    "Located near Datia in Madhya Pradesh, Sonagiri is home to more than 100 beautifully crafted Jain temples spread across a sacred hill.",
    "The serene atmosphere, white marble temples and panoramic views make Sonagiri a remarkable destination for spirituality and heritage exploration.",
  ],

  attractions: [
    {
      title: "Sonagiri Jain Temple Complex",
      description:
        "A magnificent group of white Jain temples spread across the sacred Sonagiri Hill.",
      image: sonagiriattraction1,
    },
    {
      title: "Chandraprabhu Temple",
      description:
        "The main temple dedicated to the 8th Jain Tirthankara, Lord Chandraprabhu.",
      image: sonagiriattraction2,
    },
    {
      title: "Hilltop Temple Viewpoint",
      description:
        "A scenic viewpoint offering breathtaking panoramic views of the temple complex and surrounding landscape.",
      image: sonagiriattraction3,
    },
    {
      title: "Ancient Jain Shrines",
      description:
        "Historic shrines showcasing beautiful Jain architecture and spiritual heritage.",
      image: sonagiriattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Temple Darshan",
      description: "Visit the sacred Jain temples and seek spiritual peace.",
      icon: "🛕",
    },
    {
      title: "Hill Climb",
      description: "Climb the sacred hill to explore the temple complex.",
      icon: "🥾",
    },
    {
      title: "Meditation",
      description: "Experience tranquility in the peaceful surroundings.",
      icon: "🧘",
    },
    {
      title: "Photography",
      description: "Capture stunning views of white temples and landscapes.",
      icon: "📸",
    },
    {
      title: "Heritage Exploration",
      description: "Discover the rich history and architecture of Jain culture.",
      icon: "🏛️",
    },
    {
      title: "Spiritual Retreat",
      description: "Enjoy the serene and devotional atmosphere.",
      icon: "🪔",
    },
  ],

  experiences: [
    {
      title: "Jain Pilgrimage",
      description:
        "Experience one of the holiest Jain pilgrimage sites in India.",
    },
    {
      title: "Architectural Beauty",
      description:
        "Admire the elegant white temples and intricate craftsmanship.",
    },
    {
      title: "Spiritual Serenity",
      description:
        "Find peace amidst sacred temples and tranquil surroundings.",
    },
    {
      title: "Hilltop Views",
      description:
        "Enjoy breathtaking panoramic views from the temple hill.",
    },
  ],

  gallery: [
    sonagirigallary1,
    sonagirigallary2,
    sonagirigallary3,
    sonagirigallary4,
    sonagirigallary5,
    sonagirigallary6,
  ],

  travelInfo: {
    bestTime:
      "October to March — ideal weather for pilgrimage and sightseeing",
    road:
      "Well-connected by road from Datia, Gwalior and Jhansi.",
    rail:
      "Sonagir Railway Station is located near the temple complex.",
    air:
      "The nearest airport is Gwalior Airport.",
  },

  duration: "1 Day",
};

export default sonagiri;