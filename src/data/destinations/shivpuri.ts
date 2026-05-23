import type { DestinationContent } from "./types";

import shivpuriattraction1 from "@/assets/destimages/shivpuriattraction1.jpeg";
import shivpuriattraction2 from "@/assets/destimages/shivpuriattraction2.jpeg";
import shivpuriattraction3 from "@/assets/destimages/shivpuriattraction3.jpeg";
import shivpuriattraction4 from "@/assets/destimages/shivpuriattraction4.jpeg";

// gallery

import shivpurigallary1 from "@/assets/destimages/shivpurigallary1.jpeg";
import shivpurigallary2 from "@/assets/destimages/shivpurigallary2.jpeg";
import shivpurigallary3 from "@/assets/destimages/shivpurigallary3.jpeg";
import shivpurigallary4 from "@/assets/destimages/shivpurigallary4.jpeg";
import shivpurigallary5 from "@/assets/destimages/shivpurigallary5.jpeg";
import shivpurigallary6 from "@/assets/destimages/shivpurigallary6.jpeg";

const shivpuri: DestinationContent = {
  overviewParagraphs: [
    "Shivpuri — a serene heritage and nature destination of Madhya Pradesh — is known for its royal palaces, lush forests and peaceful lakes.",
    "Once the summer capital of the Scindia rulers, Shivpuri beautifully combines history, spirituality and wildlife experiences.",
    "From tranquil boating spots and ancient cenotaphs to thrilling jungle safaris and waterfalls, Shivpuri offers a refreshing escape into nature and heritage.",
  ],

  attractions: [
    {
      title: "Madhav National Park",
      description:
        "A scenic wildlife reserve home to deer, leopards, birds and beautiful forest landscapes.",
      image: shivpuriattraction1,
    },
    {
      title: "Scindia Chhatris",
      description:
        "Elegant royal cenotaphs showcasing magnificent Rajput and Mughal architecture.",
      image: shivpuriattraction2,
    },
    {
      title: "Bhadaiya Kund",
      description:
        "A crystal-clear natural water reservoir surrounded by greenery and peaceful views.",
      image: shivpuriattraction3,
    },
    {
      title: "Sakhya Sagar Lake",
      description:
        "A tranquil lake ideal for boating, birdwatching and sunset photography.",
      image: shivpuriattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Wildlife Safari",
      description: "Explore forests and spot wildlife in Madhav National Park.",
      icon: "🦌",
    },
    {
      title: "Boating Experience",
      description: "Enjoy peaceful boating at Sakhya Sagar Lake.",
      icon: "🚣",
    },
    {
      title: "Heritage Exploration",
      description: "Visit royal cenotaphs and historic architectural sites.",
      icon: "🏛️",
    },
    {
      title: "Nature Photography",
      description: "Capture forests, lakes and beautiful sunset landscapes.",
      icon: "📸",
    },
    {
      title: "Picnic by Bhadaiya Kund",
      description: "Relax amidst nature beside crystal-clear water.",
      icon: "🌿",
    },
    {
      title: "Bird Watching",
      description: "Spot migratory and native birds around lakes and forests.",
      icon: "🕊️",
    },
  ],

  experiences: [
    {
      title: "Royal Legacy",
      description:
        "Experience the elegance of Shivpuri's royal Scindia heritage.",
    },
    {
      title: "Peaceful Nature Escapes",
      description:
        "Reconnect with nature through forests, lakes and calm surroundings.",
    },
    {
      title: "Wildlife Adventure",
      description:
        "Enjoy thrilling safaris and encounters with diverse wildlife.",
    },
    {
      title: "Serene Sunsets",
      description:
        "Watch golden sunsets reflecting beautifully across Shivpuri's lakes.",
    },
  ],

  gallery: [
    shivpurigallary1,
    shivpurigallary2,
    shivpurigallary3,
    shivpurigallary4,
    shivpurigallary5,
    shivpurigallary6,
  ],

  travelInfo: {
    bestTime: "October to March — ideal weather for safaris and sightseeing",
    road:
      "Well-connected by road from Gwalior, Jhansi and nearby cities.",
    rail:
      "Shivpuri Railway Station provides connectivity to regional rail routes.",
    air:
      "The nearest airport is Gwalior Airport (~115 km) with domestic flights.",
  },

  duration: "2 Days / 1 Night",
};

export default shivpuri;

