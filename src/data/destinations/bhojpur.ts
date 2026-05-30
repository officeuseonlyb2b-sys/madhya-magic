import type { DestinationContent } from "./types";

import bhojpurattraction1 from "@/assets/destimages/bhojpurattraction1.jpeg";
import bhojpurattraction2 from "@/assets/destimages/bhojpurattraction2.jpeg";
import bhojpurattraction3 from "@/assets/destimages/bhojpurattraction3.jpeg";
import bhojpurattraction4 from "@/assets/destimages/bhojpurattraction4.jpeg";

// gallery

import bhojpurgallary1 from "@/assets/destimages/bhojpurgallary1.jpeg";
import bhojpurgallary2 from "@/assets/destimages/bhojpurgallary2.jpeg";
import bhojpurgallary3 from "@/assets/destimages/bhojpurgallary3.jpeg";
import bhojpurgallary4 from "@/assets/destimages/bhojpurgallary4.jpeg";
import bhojpurgallary5 from "@/assets/destimages/bhojpurgallary5.jpeg";
import bhojpurgallary6 from "@/assets/destimages/bhojpurgallary6.jpeg";


const bhojpur: DestinationContent = {
  overviewParagraphs: [
    "Bhojpur — a historic and spiritual destination near Bhopal — is renowned for its magnificent Shiva temple and architectural heritage.",
    "Built by the legendary Raja Bhoj in the 11th century, Bhojpur is home to one of the largest Shiva Lingas in India.",
    "With ancient monuments, unfinished architectural marvels and spiritual significance, Bhojpur attracts devotees, history enthusiasts and architecture lovers alike.",
  ],

  attractions: [
    {
      title: "Bhojeshwar Temple",
      description:
        "A magnificent Shiva temple housing one of the largest Shiva Lingas in India.",
      image: bhojpurattraction1,
    },
    {
      title: "Giant Shiva Linga",
      description:
        "A massive monolithic Shiva Linga that stands as the spiritual centerpiece of Bhojpur.",
      image: bhojpurattraction2,
    },
    {
      title: "Ancient Rock Carvings",
      description:
        "Historic carvings and inscriptions showcasing the architectural vision of Raja Bhoj.",
      image: bhojpurattraction3,
    },
    {
      title: "Betwa River Viewpoint",
      description:
        "A scenic spot overlooking the Betwa River and surrounding landscapes.",
      image: bhojpurattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Temple Darshan",
      description: "Seek blessings at the sacred Bhojeshwar Temple.",
      icon: "🛕",
    },
    {
      title: "Photography",
      description: "Capture the grandeur of ancient architecture and sculptures.",
      icon: "📸",
    },
    {
      title: "Spiritual Experience",
      description: "Immerse yourself in the peaceful temple atmosphere.",
      icon: "🪔",
    },
    {
      title: "Heritage Exploration",
      description: "Discover the fascinating history of Raja Bhoj’s masterpiece.",
      icon: "🏛️",
    },
    {
      title: "Sightseeing",
      description: "Enjoy panoramic views of the surrounding countryside.",
      icon: "🌄",
    },
    {
      title: "Cultural Exploration",
      description: "Learn about medieval architecture and temple engineering.",
      icon: "📚",
    },
  ],

  experiences: [
    {
      title: "Spiritual Journey",
      description:
        "Experience devotion at one of Madhya Pradesh’s most revered Shiva temples.",
    },
    {
      title: "Architectural Wonder",
      description:
        "Witness the grandeur of an unfinished yet magnificent medieval temple.",
    },
    {
      title: "Historical Heritage",
      description:
        "Explore the legacy of Raja Bhoj and his remarkable vision.",
    },
    {
      title: "Peaceful Ambience",
      description:
        "Enjoy a tranquil setting surrounded by history and spirituality.",
    },
  ],

  gallery: [
    bhojpurgallary1,
    bhojpurgallary2,
    bhojpurgallary3,
    bhojpurgallary4,
    bhojpurgallary5,
    bhojpurgallary6,
  ],

  travelInfo: {
    bestTime:
      "October to March — ideal weather for temple visits and sightseeing",
    road:
      "Well-connected by road from Bhopal and nearby cities.",
    rail:
      "The nearest railway station is Bhopal Junction (~32 km).",
    air:
      "The nearest airport is Raja Bhoj Airport, Bhopal.",
  },

  duration: "1 Day",
};

export default bhojpur;