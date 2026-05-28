import type { DestinationContent } from "./types";

import satpuraattraction1 from "@/assets/destimages/satpuraattraction1.jpeg";
import satpuraattraction2 from "@/assets/destimages/satpuraattraction2.jpeg";
import satpuraattraction3 from "@/assets/destimages/satpuraattraction3.jpeg";
import satpuraattraction4 from "@/assets/destimages/satpuraattraction4.jpeg";

// gallery

import satpuragallary1 from "@/assets/destimages/satpuragallary1.jpeg";
import satpuragallary2 from "@/assets/destimages/satpuragallary2.jpeg";
import satpuragallary3 from "@/assets/destimages/satpuragallary3.jpeg";
import satpuragallary4 from "@/assets/destimages/satpuragallary4.jpeg";
import satpuragallary5 from "@/assets/destimages/satpuragallary5.jpeg";
import satpuragallary6 from "@/assets/destimages/satpuragallary6.jpeg";
import satpuragallary7 from "@/assets/destimages/satpuragallary7.jpeg";
import satpuragallary8 from "@/assets/destimages/satpuragallary8.jpeg";
import satpuragallary9 from "@/assets/destimages/satpuragallary9.jpeg";

const satpura: DestinationContent = {
  overviewParagraphs: [
    "Satpura National Park — one of Madhya Pradesh’s most scenic wildlife destinations — is famous for its untouched forests, rugged landscapes and rich biodiversity.",
    "Located in the Satpura Hills near Pachmarhi, the park offers a unique blend of wildlife adventures, river safaris and peaceful natural beauty.",
    "From thrilling jeep safaris and boat rides to tiger sightings and dense forest exploration, Satpura promises an unforgettable jungle experience.",
  ],

  attractions: [
  {
    title: "Satpura National Park",
    description:
      "A breathtaking wildlife reserve known for dense forests, rugged hills and rich biodiversity.",
    image: satpuraattraction1,
  },
  {
    title: "Jeep Safari",
    description:
      "Experience thrilling jungle safaris through wildlife-rich forest trails and scenic landscapes.",
    image: satpuraattraction2,
  },
  {
    title: "Denwa River Boat Safari",
    description:
      "Enjoy peaceful boat safaris surrounded by forests while spotting crocodiles and exotic birds.",
    image: satpuraattraction3,
  },
  {
    title: "Walking Safari",
    description:
      "A unique guided forest walk experience allowing close exploration of Satpura’s untouched wilderness.",
    image: satpuraattraction4,
  },
],

  thingsToDo: [
    {
      title: "Jungle Safari",
      description: "Explore wildlife-rich forest trails and scenic landscapes.",
      icon: "🛻",
    },
    {
      title: "Boat Safari",
      description: "Enjoy calm boat rides on the Denwa River surrounded by nature.",
      icon: "🚤",
    },
    {
      title: "Tiger Spotting",
      description: "Witness majestic tigers in their natural habitat.",
      icon: "🐅",
    },
    {
      title: "Bird Watching",
      description: "Observe colorful birds and rare wildlife species.",
      icon: "🦜",
    },
    {
      title: "Nature Photography",
      description: "Capture breathtaking forest landscapes and wildlife moments.",
      icon: "📸",
    },
    {
      title: "Forest Walks",
      description: "Experience peaceful guided walks through untouched forests.",
      icon: "🌿",
    },
  ],

  experiences: [
    {
      title: "Wildlife Adventure",
      description:
        "Feel the thrill of exploring one of India’s most beautiful tiger reserves.",
    },
    {
      title: "Untouched Nature",
      description:
        "Enjoy peaceful forests, rivers and scenic hill landscapes.",
    },
    {
      title: "Unique Safaris",
      description:
        "Experience jeep safaris, walking safaris and boat rides together.",
    },
    {
      title: "Photography Paradise",
      description:
        "Capture unforgettable wildlife and jungle scenery.",
    },
  ],

  gallery: [
    satpuragallary1,
    satpuragallary2,
    satpuragallary3,
    satpuragallary4,
    satpuragallary5,
    satpuragallary6,
    satpuragallary7,
    satpuragallary8,
    satpuragallary9,
  ],

  travelInfo: {
    bestTime:
      "October to June — ideal season for safaris and wildlife sightings",
    road:
      "Well-connected by road from Pachmarhi, Pipariya and nearby cities.",
    rail:
      "The nearest railway station is Pipariya Railway Station (~55 km).",
    air:
      "The nearest airport is Raja Bhoj Airport in Bhopal.",
  },

  duration: "2 Days / 1 Night",
};

export default satpura;