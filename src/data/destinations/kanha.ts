import type { DestinationContent } from "./types";

import kanhaattraction1 from "@/assets/destimages/kanhaattraction1.jpeg";
import kanhaattraction2 from "@/assets/destimages/kanhaattraction2.jpeg";
import kanhaattraction3 from "@/assets/destimages/kanhaattraction3.jpeg";
import kanhaattraction4 from "@/assets/destimages/kanhaattraction4.jpeg";

// gallery

import kanhagallary1 from "@/assets/destimages/kanhagallary1.jpeg";
import kanhagallary2 from "@/assets/destimages/kanhagallary2.jpeg";
import kanhagallary3 from "@/assets/destimages/kanhagallary3.jpeg";
import kanhagallary4 from "@/assets/destimages/kanhagallary4.jpeg";
import kanhagallary5 from "@/assets/destimages/kanhagallary5.jpeg";
import kanhagallary6 from "@/assets/destimages/kanhagallary6.jpeg";
import kanhagallary7 from "@/assets/destimages/kanhagallary7.jpeg";
import kanhagallary8 from "@/assets/destimages/kanhagallary8.jpeg";
import kanhagallary9 from "@/assets/destimages/kanhagallary9.jpeg";
import kanhagallary10 from "@/assets/destimages/kanhagallary10.jpeg";

const kanha: DestinationContent = {
  overviewParagraphs: [
    "Kanha National Park — one of India’s finest wildlife reserves — is famous for its lush sal forests, open meadows and majestic Royal Bengal Tigers.",
    "Located in Madhya Pradesh, Kanha inspired Rudyard Kipling’s famous Jungle Book with its rich biodiversity and natural beauty.",
    "From thrilling jeep safaris and rare wildlife sightings to scenic forest landscapes, Kanha offers an unforgettable jungle adventure.",
  ],

  attractions: [
    {
      title: "Kanha National Park",
      description:
        "A world-famous tiger reserve known for its rich biodiversity and scenic forest landscapes.",
      image: kanhaattraction1,
    },
    {
      title: "Jeep Safari",
      description:
        "Experience thrilling jungle safaris through Kanha’s dense forests and wildlife zones.",
      image: kanhaattraction2,
    },
    {
      title: "Bamni Dadar",
      description:
        "A beautiful sunset point offering breathtaking panoramic views of Kanha’s forests and meadows.",
      image: kanhaattraction3,
    },
    {
      title: "Barasingha Conservation Area",
      description:
        "A special zone dedicated to the rare hard-ground swamp deer, the pride of Kanha.",
      image: kanhaattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Jungle Safari",
      description: "Explore dense forests and wildlife-rich safari routes.",
      icon: "🛻",
    },
    {
      title: "Tiger Spotting",
      description: "Witness majestic Royal Bengal Tigers in their natural habitat.",
      icon: "🐅",
    },
    {
      title: "Bird Watching",
      description: "Observe colorful birds and diverse wildlife species.",
      icon: "🦜",
    },
    {
      title: "Nature Photography",
      description: "Capture breathtaking wildlife and forest landscapes.",
      icon: "📸",
    },
    {
      title: "Sunset Viewing",
      description: "Enjoy mesmerizing sunset views from Bamni Dadar.",
      icon: "🌅",
    },
    {
      title: "Forest Exploration",
      description: "Experience peaceful nature trails and scenic greenery.",
      icon: "🌿",
    },
  ],

  experiences: [
    {
      title: "Wildlife Adventure",
      description:
        "Feel the thrill of exploring one of India’s top tiger reserves.",
    },
    {
      title: "Natural Beauty",
      description:
        "Enjoy lush forests, grasslands and peaceful jungle surroundings.",
    },
    {
      title: "Rare Wildlife",
      description:
        "Spot Barasingha, leopards, deer species and exotic birds.",
    },
    {
      title: "Photography Paradise",
      description:
        "Capture unforgettable moments of wildlife and scenic landscapes.",
    },
  ],

  gallery: [
  kanhagallary1,
  kanhagallary2,
  kanhagallary3,
  kanhagallary4,
  kanhagallary5,
  kanhagallary6,
  kanhagallary7,
  kanhagallary8,
  kanhagallary9,
  kanhagallary10,
],
  travelInfo: {
    bestTime:
      "October to June — ideal season for wildlife safaris and tiger sightings",
    road:
      "Well-connected by road from Jabalpur, Nagpur and nearby cities.",
    rail:
      "The nearest railway station is Gondia Junction (~145 km).",
    air:
      "The nearest airport is Jabalpur Airport.",
  },

  duration: "2 Days / 1 Night",
};

export default kanha;