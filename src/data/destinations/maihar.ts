import type { DestinationContent } from "./types";

import maiharattraction1 from "@/assets/destimages/maiharattraction1.jpeg";
import maiharattraction2 from "@/assets/destimages/maiharattraction2.jpeg";
import maiharattraction3 from "@/assets/destimages/maiharattraction3.jpeg";
import maiharattraction4 from "@/assets/destimages/maiharattraction4.jpeg";

// gallery

import maihargallary1 from "@/assets/destimages/maihargallary1.jpeg";
import maihargallary2 from "@/assets/destimages/maihargallary2.jpeg";
import maihargallary3 from "@/assets/destimages/maihargallary3.jpeg";
import maihargallary4 from "@/assets/destimages/maihargallary4.jpeg";
import maihargallary5 from "@/assets/destimages/maihargallary5.jpeg";
import maihargallary6 from "@/assets/destimages/maihargallary6.jpeg";
import maihargallary7 from "@/assets/destimages/maihargallary7.jpeg";
import maihargallary8 from "@/assets/destimages/maihargallary8.jpeg";
import maihargallary9 from "@/assets/destimages/maihargallary9.jpeg";
import maihargallary10 from "@/assets/destimages/maihargallary10.jpeg";
import maihargallary11 from "@/assets/destimages/maihargallary11.jpeg";
import maihargallary12 from "@/assets/destimages/maihargallary12.jpeg";

const maihar: DestinationContent = {
  overviewParagraphs: [
    "Maihar is one of the most revered pilgrimage destinations in Madhya Pradesh, famous for the sacred Maa Sharda Devi Temple.",
    "Situated atop the Trikuta Hills, Maihar attracts millions of devotees seeking blessings from Goddess Sharda, an incarnation of Maa Saraswati.",
    "With its spiritual atmosphere, ropeway rides and panoramic hill views, Maihar offers a memorable religious and cultural experience.",
  ],

  attractions: [
    {
      title: "Maa Sharda Devi Temple",
      description:
        "A renowned hilltop temple dedicated to Goddess Sharda, attracting devotees from across India.",
      image: maiharattraction1,
    },
    {
      title: "Sharda Ropeway",
      description:
        "A scenic ropeway ride offering breathtaking views while ascending to the temple.",
      image: maiharattraction2,
    },
    {
      title: "Trikuta Hills",
      description:
        "The sacred hill range that houses the famous Maa Sharda Temple and offers panoramic views.",
      image: maiharattraction3,
    },
    {
      title: "Alha Udal Akhada",
      description:
        "A historic and spiritual site associated with the legendary warriors Alha and Udal.",
      image: maiharattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Temple Darshan",
      description: "Seek blessings of Maa Sharda at the sacred hilltop shrine.",
      icon: "🛕",
    },
    {
      title: "Ropeway Ride",
      description: "Enjoy stunning aerial views while traveling to the temple.",
      icon: "🚡",
    },
    {
      title: "Spiritual Exploration",
      description: "Experience the devotion and religious significance of Maihar.",
      icon: "🪔",
    },
    {
      title: "Photography",
      description: "Capture panoramic hill views and temple architecture.",
      icon: "📸",
    },
    {
      title: "Hill Trekking",
      description: "Climb the sacred steps leading to the temple.",
      icon: "🥾",
    },
    {
      title: "Local Culture",
      description: "Explore local traditions and religious festivities.",
      icon: "🎭",
    },
  ],

  experiences: [
    {
      title: "Divine Blessings",
      description:
        "Experience the spiritual energy of one of India's most revered Shakti Peeths.",
    },
    {
      title: "Sacred Hill Journey",
      description:
        "Enjoy a memorable pilgrimage atop the Trikuta Hills.",
    },
    {
      title: "Scenic Beauty",
      description:
        "Witness breathtaking views of the surrounding landscape.",
    },
    {
      title: "Cultural Heritage",
      description:
        "Discover the legends and traditions associated with Maa Sharda.",
    },
  ],

//   gallery: [
//     maihargallary1,
//     maihargallary2,
//     maihargallary3,
//     maihargallary4,
//     maihargallary5,
//     maihargallary6,
//   ],

  travelInfo: {
    bestTime:
      "October to March — pleasant weather for pilgrimage and sightseeing",
    road:
      "Well-connected by road from Satna, Rewa, Jabalpur and nearby cities.",
    rail:
      "Maihar Railway Station is well connected to major Indian cities.",
    air:
      "The nearest airport is Khajuraho Airport.",
  },

  duration: "1 Day / 1 Night",
};

export default maihar;
