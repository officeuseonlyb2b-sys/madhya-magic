import type { DestinationContent } from "./types";

import bandhavgarhattraction1 from "@/assets/destimages/bandhavgarhattraction1.jpeg";
import bandhavgarhattraction2 from "@/assets/destimages/bandhavgarhattraction2.jpeg";
import bandhavgarhattraction3 from "@/assets/destimages/bandhavgarhattraction3.jpeg";
import bandhavgarhattraction4 from "@/assets/destimages/bandhavgarhattraction4.jpeg";

// gallery

import bandhavgarhgallary1 from "@/assets/destimages/bandhavgarhgallary1.jpeg";
import bandhavgarhgallary2 from "@/assets/destimages/bandhavgarhgallary2.jpeg";
import bandhavgarhgallary3 from "@/assets/destimages/bandhavgarhgallary3.jpeg";
import bandhavgarhgallary4 from "@/assets/destimages/bandhavgarhgallary4.jpeg";
import bandhavgarhgallary5 from "@/assets/destimages/bandhavgarhgallary5.jpeg";
import bandhavgarhgallary6 from "@/assets/destimages/bandhavgarhgallary6.jpeg";
import bandhavgarhgallary7 from "@/assets/destimages/bandhavgarhgallary7.jpeg";
import bandhavgarhgallary8 from "@/assets/destimages/bandhavgarhgallary8.jpeg";
import bandhavgarhgallary9 from "@/assets/destimages/bandhavgarhgallary9.jpeg";
import bandhavgarhgallary10 from "@/assets/destimages/bandhavgarhgallary10.jpeg";
import bandhavgarhgallary11 from "@/assets/destimages/bandhavgarhgallary11.jpeg";

const bandhavgarh: DestinationContent = {
  overviewParagraphs: [
    "Bandhavgarh — one of India’s most famous wildlife destinations — is renowned for its dense forests, rich biodiversity and majestic Royal Bengal Tigers.",
    "Located in the Vindhya Hills of Madhya Pradesh, Bandhavgarh National Park offers thrilling jungle safaris and breathtaking natural landscapes.",
    "From tiger sightings and ancient caves to scenic forest trails and historic ruins, Bandhavgarh promises an unforgettable wildlife adventure.",
  ],

  attractions: [
  {
    title: "Bandhavgarh National Park",
    description:
      "A world-famous tiger reserve known for its rich wildlife, dense forests and frequent Royal Bengal Tiger sightings.",
    image: bandhavgarhattraction1,
  },
  {
    title: "Jeep Safari",
    description:
      "An exciting jungle safari experience through the dense forests and wildlife zones of Bandhavgarh.",
    image: bandhavgarhattraction2,
  },
  {
    title: "Shesh Shaiya",
    description:
      "A gigantic reclining statue of Lord Vishnu located amidst the lush forest landscape.",
    image: bandhavgarhattraction3,
  },
  {
    title: "Climbers Point",
    description:
      "A scenic viewpoint offering breathtaking panoramic views of Bandhavgarh’s forests and hills.",
    image: bandhavgarhattraction4,
  },
],

  thingsToDo: [
    {
      title: "Jungle Safari",
      description: "Experience thrilling jeep safaris through dense forests.",
      icon: "🛻",
    },
    {
      title: "Tiger Spotting",
      description: "Witness majestic Royal Bengal Tigers in their natural habitat.",
      icon: "🐅",
    },
    {
      title: "Bird Watching",
      description: "Observe exotic birds and vibrant wildlife species.",
      icon: "🦜",
    },
    {
      title: "Nature Photography",
      description: "Capture stunning wildlife and scenic jungle moments.",
      icon: "📸",
    },
    {
      title: "Fort Exploration",
      description: "Discover ancient ruins and historic caves inside the forest.",
      icon: "🏰",
    },
    {
      title: "Forest Walks",
      description: "Enjoy peaceful natural surroundings and forest landscapes.",
      icon: "🌿",
    },
  ],

  experiences: [
    {
      title: "Wildlife Adventure",
      description:
        "Feel the excitement of exploring one of India’s top tiger reserves.",
    },
    {
      title: "Natural Beauty",
      description:
        "Enjoy lush forests, scenic valleys and peaceful wilderness.",
    },
    {
      title: "Historic Exploration",
      description:
        "Discover ancient forts, caves and mythological landmarks.",
    },
    {
      title: "Photography Paradise",
      description:
        "Capture unforgettable moments of wildlife and nature.",
    },
  ],

  gallery: [
    bandhavgarhgallary1,
    bandhavgarhgallary2,
    bandhavgarhgallary3,
    bandhavgarhgallary4,
    bandhavgarhgallary5,
    bandhavgarhgallary6,
    bandhavgarhgallary7,
    bandhavgarhgallary8,
    bandhavgarhgallary9,
    bandhavgarhgallary10,
    bandhavgarhgallary11,
  ],

  travelInfo: {
    bestTime:
      "October to June — best season for wildlife safaris and tiger sightings",
    road:
      "Well-connected by road from Jabalpur, Katni and nearby cities.",
    rail:
      "The nearest railway station is Umaria Railway Station (~35 km).",
    air:
      "The nearest airport is Jabalpur Airport.",
  },

  duration: "2 Days / 1 Night",
};

export default bandhavgarh;