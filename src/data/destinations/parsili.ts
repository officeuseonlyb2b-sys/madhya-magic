import type { DestinationContent } from "./types";

import parsiliattraction1 from "@/assets/destimages/parsiliattraction1.jpeg";
import parsiliattraction2 from "@/assets/destimages/parsiliattraction2.jpeg";
import parsiliattraction3 from "@/assets/destimages/parsiliattraction3.jpeg";
import parsiliattraction4 from "@/assets/destimages/parsiliattraction4.jpeg";

// gallery

import parsiligallary1 from "@/assets/destimages/parsiligallary1.jpeg";
import parsiligallary2 from "@/assets/destimages/parsiligallary2.jpeg";
import parsiligallary3 from "@/assets/destimages/parsiligallary3.jpeg";
import parsiligallary4 from "@/assets/destimages/parsiligallary4.jpeg";
import parsiligallary5 from "@/assets/destimages/parsiligallary5.jpeg";

const parsili: DestinationContent = {
  overviewParagraphs: [
    "Parsili is a hidden eco-tourism destination located on the banks of the Banas River near Sanjay Dubri Tiger Reserve in Madhya Pradesh.",
    "Surrounded by dense forests, river landscapes and rich wildlife, Parsili offers a peaceful escape for nature lovers and adventure seekers.",
    "Known for its riverside camping, wildlife experiences and untouched natural beauty, Parsili is often called the 'Mini Goa of Madhya Pradesh'.",
  ],

  attractions: [
    {
      title: "Banas River",
      description:
        "A scenic river flowing through Parsili, famous for its crystal-clear waters and tranquil surroundings.",
      image: parsiliattraction1,
    },
    {
      title: "Riverside Camping Area",
      description:
        "A picturesque camping destination where visitors can enjoy nature beside the river.",
      image: parsiliattraction2,
    },
    {
      title: "Sanjay Dubri Tiger Reserve",
      description:
        "A wildlife-rich forest reserve known for tigers, leopards, deer and diverse birdlife.",
      image: parsiliattraction3,
    },
    {
      title: "Forest Nature Trails",
      description:
        "Beautiful trails through dense forests offering opportunities for wildlife spotting and exploration.",
      image: parsiliattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Riverside Camping",
      description: "Enjoy a memorable stay beside the scenic Banas River.",
      icon: "🏕️",
    },
    {
      title: "Nature Walks",
      description: "Explore forest trails and natural landscapes.",
      icon: "🥾",
    },
    {
      title: "Wildlife Watching",
      description: "Spot birds and wildlife in nearby forest areas.",
      icon: "🦌",
    },
    {
      title: "Photography",
      description: "Capture stunning river, forest and wildlife scenes.",
      icon: "📸",
    },
    {
      title: "Bonfire Experience",
      description: "Relax with a campfire under the stars.",
      icon: "🔥",
    },
    {
      title: "Bird Watching",
      description: "Observe numerous resident and migratory bird species.",
      icon: "🦜",
    },
  ],

  experiences: [
    {
      title: "Riverside Escape",
      description:
        "Unwind amidst peaceful river views and untouched natural beauty.",
    },
    {
      title: "Forest Adventure",
      description:
        "Explore the wilderness surrounding Sanjay Dubri Tiger Reserve.",
    },
    {
      title: "Camping Experience",
      description:
        "Enjoy nights under the stars in one of Madhya Pradesh's most scenic camping destinations.",
    },
    {
      title: "Wildlife & Nature",
      description:
        "Experience rich biodiversity, forests and tranquil landscapes.",
    },
  ],

  gallery: [
    parsiligallary1,
    parsiligallary2,
    parsiligallary3,
    parsiligallary4,
    parsiligallary5,
  ],

  travelInfo: {
    bestTime:
      "October to March — ideal for camping, wildlife experiences and nature exploration",
    road:
      "Well-connected by road from Sidhi, Rewa and nearby towns.",
    rail:
      "The nearest railway station is Sidhi Railway Station.",
    air:
      "The nearest airport is Prayagraj Airport.",
  },

  duration: "2 Days / 1 Night",
};

export default parsili;