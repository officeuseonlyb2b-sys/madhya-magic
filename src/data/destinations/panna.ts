import type { DestinationContent } from "./types";

import pannaattraction1 from "@/assets/destimages/pannaattraction1.jpeg";
import pannaattraction2 from "@/assets/destimages/pannaattraction2.jpeg";
import pannaattraction3 from "@/assets/destimages/pannaattraction3.jpeg";
import pannaattraction4 from "@/assets/destimages/pannaattraction4.jpeg";

// gallery

import pannagallary1 from "@/assets/destimages/pannagallary1.jpeg";
import pannagallary2 from "@/assets/destimages/pannagallary2.jpeg";
import pannagallary3 from "@/assets/destimages/pannagallary3.jpeg";
import pannagallary4 from "@/assets/destimages/pannagallary4.jpeg";
import pannagallary5 from "@/assets/destimages/pannagallary5.jpeg";
import pannagallary6 from "@/assets/destimages/pannagallary6.jpeg";
import pannagallary7 from "@/assets/destimages/pannagallary7.jpeg";
import pannagallary8 from "@/assets/destimages/pannagallary8.jpeg";
import pannagallary9 from "@/assets/destimages/pannagallary9.jpeg";

const panna: DestinationContent = {
  overviewParagraphs: [
    "Panna National Park — one of Madhya Pradesh’s most stunning wildlife destinations — is famous for its tiger reserve, waterfalls and scenic forest landscapes.",
    "Located near Khajuraho, Panna offers thrilling wildlife safaris, rich biodiversity and breathtaking natural beauty along the Ken River.",
    "From tiger sightings and jungle adventures to waterfalls and river safaris, Panna delivers a perfect blend of wildlife and nature experiences.",
  ],

  attractions: [
  {
    title: "Panna National Park",
    description:
      "A renowned tiger reserve famous for its rich wildlife, dense forests and scenic jungle landscapes.",
    image: pannaattraction1,
  },
  {
    title: "Jeep Safari",
    description:
      "Experience thrilling jungle safaris through Panna’s wildlife-rich forest zones.",
    image: pannaattraction2,
  },
  {
    title: "Tiger Spotting",
    description:
      "Witness majestic Royal Bengal Tigers roaming freely in their natural habitat.",
    image: pannaattraction3,
  },
  {
    title: "Ken River Wildlife Safari",
    description:
      "Enjoy scenic river safaris while spotting crocodiles, birds and diverse wildlife species.",
    image: pannaattraction4,
  },
],

  thingsToDo: [
    {
      title: "Jungle Safari",
      description: "Explore wildlife-rich forest trails and tiger habitats.",
      icon: "🛻",
    },
    {
      title: "Tiger Spotting",
      description: "Witness majestic Royal Bengal Tigers in their natural habitat.",
      icon: "🐅",
    },
    {
      title: "Boat Ride",
      description: "Enjoy peaceful boat rides along the scenic Ken River.",
      icon: "🚤",
    },
    {
      title: "Bird Watching",
      description: "Observe exotic birds and vibrant wildlife species.",
      icon: "🦜",
    },
    {
      title: "Nature Photography",
      description: "Capture breathtaking wildlife and waterfall landscapes.",
      icon: "📸",
    },
    {
      title: "Waterfall Exploration",
      description: "Visit scenic waterfalls and dramatic canyon views.",
      icon: "🌊",
    },
  ],

  experiences: [
    {
      title: "Wildlife Adventure",
      description:
        "Experience thrilling safaris in one of India’s famous tiger reserves.",
    },
    {
      title: "Natural Beauty",
      description:
        "Enjoy forests, waterfalls, rivers and peaceful landscapes.",
    },
    {
      title: "River Exploration",
      description:
        "Discover the scenic charm of the Ken River and surrounding wilderness.",
    },
    {
      title: "Photography Paradise",
      description:
        "Capture unforgettable moments of wildlife and natural scenery.",
    },
  ],

  gallery: [
    pannagallary1,
    pannagallary2,
    pannagallary3,
    pannagallary4,
    pannagallary5,
    pannagallary6,
    pannagallary7,
    pannagallary8,
    pannagallary9,

  ],

  travelInfo: {
    bestTime:
      "October to June — ideal season for wildlife safaris and sightseeing",
    road:
      "Well-connected by road from Khajuraho, Satna and nearby cities.",
    rail:
      "The nearest railway station is Khajuraho Railway Station (~25 km).",
    air:
      "The nearest airport is Khajuraho Airport.",
  },

  duration: "2 Days / 1 Night",
};

export default panna;