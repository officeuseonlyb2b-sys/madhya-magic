import type { DestinationContent } from "./types";

import sailaniattraction1 from "@/assets/destimages/sailaniattraction1.jpeg";
import sailaniattraction2 from "@/assets/destimages/sailaniattraction2.jpeg";
import sailaniattraction3 from "@/assets/destimages/sailaniattraction3.jpeg";
import sailaniattraction4 from "@/assets/destimages/sailaniattraction4.jpeg";

// gallery

import sailanigallary1 from "@/assets/destimages/sailanigallary1.jpeg";
import sailanigallary2 from "@/assets/destimages/sailanigallary2.jpeg";
import sailanigallary3 from "@/assets/destimages/sailanigallary3.jpeg";
import sailanigallary4 from "@/assets/destimages/sailanigallary4.jpeg";
import sailanigallary5 from "@/assets/destimages/sailanigallary5.jpeg";
import sailanigallary6 from "@/assets/destimages/sailanigallary6.jpeg";
import sailanigallary7 from "@/assets/destimages/sailanigallary7.jpeg";

const sailani: DestinationContent = {
  overviewParagraphs: [
    "Sailani Island is one of Madhya Pradesh's most scenic island tourism destinations, located amidst the vast backwaters of the Indira Sagar Reservoir in Khandwa district.",
    "Surrounded by crystal-clear waters, lush landscapes and breathtaking sunsets, Sailani Island offers a perfect escape for nature lovers and adventure enthusiasts.",
    "From boating and water sports to luxury stays and island experiences, Sailani Island delivers a unique blend of relaxation, adventure and eco-tourism.",
  ],

  attractions: [
    {
      title: "Sailani Island",
      description:
        "A picturesque island destination surrounded by the expansive waters of the Indira Sagar Reservoir.",
      image: sailaniattraction1,
    },
    {
      title: "Indira Sagar Backwaters",
      description:
        "Vast stretches of blue water creating stunning landscapes and unforgettable views.",
      image: sailaniattraction2,
    },
    {
      title: "Water Sports Zone",
      description:
        "A popular adventure area offering jet skiing, speed boating and other exciting activities.",
      image: sailaniattraction3,
    },
    {
      title: "Sunset Point",
      description:
        "A scenic location known for spectacular sunset views over the reservoir.",
      image: sailaniattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Speed Boating",
      description: "Experience thrilling rides across the reservoir waters.",
      icon: "🚤",
    },
    {
      title: "Water Sports",
      description: "Enjoy exciting adventure activities on the lake.",
      icon: "🌊",
    },
    {
      title: "Photography",
      description: "Capture stunning island landscapes and sunsets.",
      icon: "📸",
    },
    {
      title: "Nature Walks",
      description: "Explore the peaceful surroundings of the island.",
      icon: "🌿",
    },
    {
      title: "Island Stay",
      description: "Relax amidst scenic waterfront accommodations.",
      icon: "🏨",
    },
    {
      title: "Sunset Viewing",
      description: "Witness mesmerizing sunsets across the backwaters.",
      icon: "🌅",
    },
  ],

  experiences: [
    {
      title: "Island Getaway",
      description:
        "Escape into a peaceful environment surrounded by water and nature.",
    },
    {
      title: "Adventure Tourism",
      description:
        "Enjoy water sports, boating and exciting outdoor experiences.",
    },
    {
      title: "Scenic Beauty",
      description:
        "Witness breathtaking reservoir views and stunning sunsets.",
    },
    {
      title: "Eco Tourism",
      description:
        "Experience sustainable tourism in a pristine natural setting.",
    },
  ],

  gallery: [
    sailanigallary1,
    sailanigallary2,
    sailanigallary3,
    sailanigallary4,
    sailanigallary5,
    sailanigallary6,
    sailanigallary7,
  ],

  travelInfo: {
    bestTime:
      "October to March — ideal for water sports, boating and sightseeing",
    road:
      "Well-connected by road from Khandwa, Indore and nearby cities.",
    rail:
      "The nearest railway station is Khandwa Junction.",
    air:
      "The nearest airport is Devi Ahilya Bai Holkar Airport, Indore.",
  },

  duration: "2 Days / 1 Night",
};

export default sailani;