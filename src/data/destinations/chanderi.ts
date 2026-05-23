import type { DestinationContent } from "./types";

import chanderiattraction1 from "@/assets/destimages/chanderiattraction1.jpeg";
import chanderiattraction2 from "@/assets/destimages/chanderiattraction2.jpeg";
import chanderiattraction3 from "@/assets/destimages/chanderiattraction3.jpeg";
import chanderiattraction4 from "@/assets/destimages/chanderiattraction4.jpeg";

// gallery

import chanderigallary1 from "@/assets/destimages/chanderigallary1.jpeg";
import chanderigallary2 from "@/assets/destimages/chanderigallary2.jpeg";
import chanderigallary3 from "@/assets/destimages/chanderigallary3.jpeg";
import chanderigallary4 from "@/assets/destimages/chanderigallary4.jpeg";
import chanderigallary5 from "@/assets/destimages/chanderigallary5.jpeg";
import chanderigallary6 from "@/assets/destimages/chanderigallary6.jpeg";

const chanderi: DestinationContent = {
  overviewParagraphs: [
    "Chanderi — a timeless heritage town of Madhya Pradesh — is famous for its majestic forts, ancient architecture and world-renowned handwoven sarees.",
    "Nestled between hills and lakes, Chanderi beautifully blends Rajput, Sultanate and Mughal influences into a charming historical landscape.",
    "From grand gateways and peaceful temples to vibrant weaving traditions and scenic viewpoints, Chanderi offers a unique cultural and heritage experience.",
  ],

  attractions: [
    {
      title: "Chanderi Fort",
      description:
        "A historic hilltop fort offering panoramic views of the town and surrounding landscape.",
      image: chanderiattraction1,
    },
    {
      title: "Koshak Mahal",
      description:
        "An unfinished yet magnificent palace showcasing Afghan-style architecture.",
      image: chanderiattraction2,
    },
    {
      title: "Badal Mahal Gate",
      description:
        "An iconic ornamental gateway admired for its elegant Indo-Islamic design.",
      image: chanderiattraction3,
    },
    {
      title: "Jama Masjid",
      description:
        "A grand mosque reflecting the rich architectural heritage of medieval Chanderi.",
      image: chanderiattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Fort Exploration",
      description: "Discover ancient fort walls, gateways and scenic viewpoints.",
      icon: "🏰",
    },
    {
      title: "Saree Weaving Tour",
      description: "Experience the craftsmanship behind famous Chanderi sarees.",
      icon: "🧵",
    },
    {
      title: "Heritage Photography",
      description: "Capture timeless architecture and cultural beauty.",
      icon: "📸",
    },
    {
      title: "Temple & Mosque Visits",
      description: "Explore spiritual and historic landmarks across the town.",
      icon: "🛕",
    },
    {
      title: "Local Market Walk",
      description: "Shop for authentic Chanderi textiles and handicrafts.",
      icon: "🛍️",
    },
    {
      title: "Sunset Views",
      description: "Enjoy peaceful sunset panoramas from the fort area.",
      icon: "🌅",
    },
  ],

  experiences: [
    {
      title: "Heritage Charm",
      description:
        "Walk through centuries-old streets filled with history and culture.",
    },
    {
      title: "Artisan Traditions",
      description:
        "Witness the delicate artistry of Chanderi's master weavers.",
    },
    {
      title: "Architectural Grandeur",
      description:
        "Admire the blend of Rajput, Mughal and Sultanate styles.",
    },
    {
      title: "Peaceful Exploration",
      description:
        "Experience a slower, quieter side of Madhya Pradesh tourism.",
    },
  ],

  gallery: [
    chanderigallary1,
    chanderigallary2,
    chanderigallary3,
    chanderigallary4,
    chanderigallary5,
    chanderigallary6,
  ],

  travelInfo: {
    bestTime: "October to March — ideal weather for sightseeing and heritage walks",
    road:
      "Well-connected by road from Gwalior, Jhansi, Bhopal and nearby cities.",
    rail:
      "The nearest major railway station is Lalitpur, connected to key rail routes.",
    air:
      "The nearest airport is Gwalior Airport with domestic connectivity.",
  },

  duration: "1 Day / 1 Night",
};

export default chanderi;

