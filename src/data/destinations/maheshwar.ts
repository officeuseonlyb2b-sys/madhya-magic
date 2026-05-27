import type { DestinationContent } from "./types";

import maheshwarattraction1 from "@/assets/destimages/maheswarattraction1.jpeg";
import maheshwarattraction2 from "@/assets/destimages/maheswarattraction2.jpeg";
import maheshwarattraction3 from "@/assets/destimages/maheswarattraction3.jpeg";
import maheshwarattraction4 from "@/assets/destimages/maheswarattraction4.jpeg";

// gallery

import maheshwargallary1 from "@/assets/destimages/maheswargallary1.jpeg";
import maheshwargallary2 from "@/assets/destimages/maheswargallary2.jpeg";
import maheshwargallary3 from "@/assets/destimages/maheswargallary3.jpeg";
import maheshwargallary4 from "@/assets/destimages/maheswargallary4.jpeg";
import maheshwargallary5 from "@/assets/destimages/maheswargallary5.jpeg";
import maheshwargallary6 from "@/assets/destimages/maheswargallary6.jpeg";
import maheshwargallary7 from "@/assets/destimages/maheswargallary7.jpeg";
import maheshwargallary8 from "@/assets/destimages/maheswargallary8.jpeg";
import maheshwargallary9 from "@/assets/destimages/maheswargallary9.jpeg";
import maheshwargallary10 from "@/assets/destimages/maheswargallary10.jpeg";
import maheshwargallary11 from "@/assets/destimages/maheswargallary11.jpeg";

const maheshwar: DestinationContent = {
  overviewParagraphs: [
    "Maheshwar — a serene riverside town in Madhya Pradesh — is famous for its majestic ghats, spiritual atmosphere and royal Holkar heritage.",
    "Situated gracefully on the banks of the sacred Narmada River, Maheshwar blends timeless temples, historic forts and peaceful riverfront beauty.",
    "From the grandeur of Ahilya Fort and evening Narmada aarti to the elegance of world-famous Maheshwari sarees, Maheshwar offers a soulful cultural experience.",
  ],

  attractions: [
  {
    title: "Ahilya Fort",
    description:
      "A magnificent riverside fort built by Queen Ahilyabai Holkar overlooking the Narmada River.",
    image: maheshwarattraction1,
  },
  {
    title: "Narmada Ghats",
    description:
      "Beautiful stone ghats where visitors enjoy peaceful river views and evening aarti ceremonies.",
    image: maheshwarattraction2,
  },
  {
    title: "Ahilyeshwar Temple",
    description:
      "A beautifully carved Shiva temple near Ahilya Fort known for its intricate architecture and spiritual ambience.",
    image: maheshwarattraction4,
  },
  {
    title: "Maheshwari Saree Weaving Centers",
    description:
      "Traditional weaving workshops famous for crafting elegant Maheshwari sarees.",
    image: maheshwarattraction3,
  },
],

  thingsToDo: [
    {
      title: "Narmada Aarti",
      description: "Witness the peaceful evening aarti beside the sacred river.",
      icon: "🪔",
    },
    {
      title: "Fort Exploration",
      description: "Discover royal architecture and historic Holkar heritage.",
      icon: "🏰",
    },
    {
      title: "Boat Ride",
      description: "Enjoy scenic boat rides on the calm waters of the Narmada.",
      icon: "🚤",
    },
    {
      title: "Saree Shopping",
      description: "Shop for authentic handwoven Maheshwari sarees and textiles.",
      icon: "🛍️",
    },
    {
      title: "Temple Visits",
      description: "Explore ancient temples and spiritual landmarks.",
      icon: "🛕",
    },
    {
      title: "Riverside Photography",
      description: "Capture stunning sunrise and sunset views at the ghats.",
      icon: "📸",
    },
  ],

  experiences: [
    {
      title: "Spiritual Serenity",
      description:
        "Experience peace and devotion beside the sacred Narmada River.",
    },
    {
      title: "Royal Holkar Legacy",
      description:
        "Discover the inspiring history of Queen Ahilyabai Holkar and her kingdom.",
    },
    {
      title: "Cultural Craftsmanship",
      description:
        "Witness the timeless artistry behind Maheshwari handloom weaving.",
    },
    {
      title: "Riverside Charm",
      description:
        "Relax amidst calm river views, historic architecture and spiritual ambience.",
    },
  ],

  gallery: [
    maheshwargallary1,
    maheshwargallary2,
    maheshwargallary3,
    maheshwargallary4,
    maheshwargallary5,
    maheshwargallary6,
    maheshwargallary7,
    maheshwargallary8,
    maheshwargallary9,
    maheshwargallary10,
    maheshwargallary11,
  ],

  travelInfo: {
    bestTime: "October to March — pleasant weather for sightseeing and riverfront experiences",
    road:
      "Well-connected by road from Indore, Omkareshwar and nearby cities.",
    rail:
      "The nearest major railway station is Indore Junction (~95 km).",
    air:
      "The nearest airport is Devi Ahilya Bai Holkar Airport in Indore.",
  },

  duration: "2 Days / 1 Night",
};

export default maheshwar;
