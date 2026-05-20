import type { DestinationContent } from "./types";

import bhedaGhatImg from "@/assets/destimages/Jabalpur-Bheda-Ghat.webp";
import chausathImg from "@/assets/destimages/Jabalpur-Chausath-Yogini.webp";
import ropewayImg from "@/assets/destimages/Jabalpur-Dhuadhar-Ropeway.webp";
import dhuadharImg from "@/assets/destimages/Jabalpur-Dhuadhar-Waterfall.webp";

// Gallery Images (Local Assets)
import gallery1 from "@/assets/destimages/bhedaghatgallary1.jpeg";
import gallery2 from "@/assets/destimages/bhedaghatgallary2.jpeg";
import gallery3 from "@/assets/destimages/bhedaghatgallary3.jpeg";
import gallery4 from "@/assets/destimages/bhedaghatgallary4.jpeg";
import gallery5 from "@/assets/destimages/bhedaghatgallary5.jpeg";
import gallery6 from "@/assets/destimages/bhedaghatgallary6.jpeg";
import gallery7 from "@/assets/destimages/bhedaghatgallary7.jpeg";
import gallery8 from "@/assets/destimages/bhedaghatgallary8.jpeg";

const amarkantak: DestinationContent = {
  overviewParagraphs: [
    "Bhedaghat is one of Madhya Pradesh's most spectacular natural wonders — a 25-kilometre stretch where the Narmada river carves its way through gleaming white marble cliffs that soar nearly 100 feet above the water.",

    "Famous for the thundering Dhuandhar Falls — literally the 'smoke cascade' — and the surreal marble gorge that glows silver under the moon, Bhedaghat has inspired poets, painters and pilgrims for centuries.",

    "Pair a sunrise boat ride through the marble canyons with the bird's-eye ropeway view of Dhuandhar, and you have one of the most photogenic short escapes in central India.",
  ],

  attractions: [
    {
      title: "Dhuandhar Falls",
      description:
        "The mighty Narmada plunges 30 metres through a narrow chasm, throwing up clouds of mist that give the falls their name.",
      image: dhuadharImg,
    },
    {
      title: "Marble Rocks",
      description:
        "Glistening white and pale-pink marble cliffs flank both sides of the river — best seen from a slow gondola at sunset or under the full moon.",
      image: bhedaGhatImg,
    },
    {
      title: "Dhuandhar Ropeway",
      description:
        "Glide across the gorge in a cable car for a breathtaking aerial view of the falls and the marble canyon.",
      image: ropewayImg,
    },
    {
      title: "Chausath Yogini Temple",
      description:
        "A 10th-century circular temple of 64 yoginis perched on a hilltop overlooking the Narmada.",
      image: chausathImg,
    },
  ],

  thingsToDo: [
    {
      title: "Marble Gorge Boat Ride",
      description:
        "Glide between towering marble cliffs on a traditional rowboat.",
      icon: "⛵",
    },
    {
      title: "Dhuandhar Ropeway",
      description:
        "Aerial cable-car view across the thundering falls.",
      icon: "🚠",
    },
    {
      title: "Sunset at Panchvati Ghat",
      description:
        "Golden hour over the Narmada — pure magic.",
      icon: "🌅",
    },
    {
      title: "Full-Moon Boating",
      description:
        "On full-moon nights the marble glows silver.",
      icon: "🌕",
    },
    {
      title: "Chausath Yogini Trek",
      description:
        "Short climb to the ancient hilltop temple.",
      icon: "🛕",
    },
    {
      title: "Riverside Photography",
      description:
        "One of India's most photogenic gorges.",
      icon: "📷",
    },
  ],

  experiences: [
    {
      title: "Moonlight on Marble",
      description:
        "On Sharad Purnima nights, the marble cliffs shimmer under the full moon — an unforgettable boat ride.",
    },
    {
      title: "Smoke of the Narmada",
      description:
        "Stand on the viewing deck as Dhuandhar Falls roars and mist drifts up to soak you.",
    },
    {
      title: "Stone-Carved Stories",
      description:
        "Local boatmen narrate legends embedded in every marble formation along the gorge.",
    },
    {
      title: "Sunrise Aarti at the Ghats",
      description:
        "Watch the river wake up to chants, lamps and birdsong.",
    },
  ],

  // Gallery Images
  gallery: [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
  ],

  travelInfo: {
    bestTime:
      "October to March (full-moon nights are extra special)",

    road:
      "Just 25 km from Jabalpur on a smooth state highway — taxis and auto-rickshaws run all day.",

    rail:
      "Jabalpur Junction (25 km) is the nearest major railhead, connected to Delhi, Mumbai, Kolkata and Chennai.",

    air:
      "Jabalpur Dumna Airport (~30 km) has direct flights from Delhi, Mumbai, Hyderabad and Bengaluru.",
  },

  duration: "1 Day / Half-Day Excursion",
};

export default amarkantak;
