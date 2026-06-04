import type { DestinationContent } from "./types";

import tawaattraction1 from "@/assets/destimages/tawaattraction1.jpeg";
import tawaattraction2 from "@/assets/destimages/tawaattraction2.jpeg";
import tawaattraction3 from "@/assets/destimages/tawaattraction3.jpeg";
import tawaattraction4 from "@/assets/destimages/tawaattraction4.jpeg";

// gallery

import tawagallary1 from "@/assets/destimages/tawagallary1.jpeg";
import tawagallary2 from "@/assets/destimages/tawagallary2.jpeg";
import tawagallary3 from "@/assets/destimages/tawagallary3.jpeg";
import tawagallary4 from "@/assets/destimages/tawagallary4.jpeg";
import tawagallary5 from "@/assets/destimages/tawagallary5.jpeg";
import tawagallary6 from "@/assets/destimages/tawagallary6.jpeg";

const tawa: DestinationContent = {
  overviewParagraphs: [
    "Tawa Reservoir is one of Madhya Pradesh’s most scenic eco-tourism destinations, known for its vast backwaters, islands and stunning natural beauty.",
    "Located near Satpura National Park, Tawa offers a unique combination of water-based adventure, wildlife experiences and peaceful landscapes.",
    "From boat safaris and birdwatching to breathtaking sunsets over the reservoir, Tawa is a perfect getaway for nature lovers and adventure seekers.",
  ],

  attractions: [
    {
      title: "Tawa Reservoir",
      description:
        "A massive reservoir surrounded by hills and forests, famous for its scenic beauty and boating experiences.",
      image: tawaattraction1,
    },
    {
      title: "Boat Safari",
      description:
        "Enjoy thrilling boat safaris across the vast waters while exploring islands and wildlife-rich surroundings.",
      image: tawaattraction2,
    },
    {
      title: "Bird Watching",
      description:
        "Spot migratory and resident bird species along the reservoir and nearby wetlands.",
      image: tawaattraction3,
    },
    {
      title: "Sunset Point",
      description:
        "Witness spectacular sunset views over the calm waters of the Tawa Reservoir.",
      image: tawaattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Boat Safari",
      description: "Explore the reservoir and enjoy scenic water adventures.",
      icon: "🚤",
    },
    {
      title: "Bird Watching",
      description: "Observe a variety of migratory and native birds.",
      icon: "🦜",
    },
    {
      title: "Nature Photography",
      description: "Capture stunning landscapes, wildlife and sunsets.",
      icon: "📸",
    },
    {
      title: "Sunset Viewing",
      description: "Enjoy breathtaking sunset views across the reservoir.",
      icon: "🌅",
    },
    {
      title: "Eco Tourism",
      description: "Experience the natural beauty of the Satpura region.",
      icon: "🌿",
    },
    {
      title: "Relaxation",
      description: "Spend peaceful time amidst water, forests and hills.",
      icon: "🏞️",
    },
  ],

  experiences: [
    {
      title: "Water Adventure",
      description:
        "Enjoy unique boat safaris through one of Madhya Pradesh's largest reservoirs.",
    },
    {
      title: "Natural Beauty",
      description:
        "Experience stunning landscapes of water, forests and hills.",
    },
    {
      title: "Birding Paradise",
      description:
        "Discover diverse birdlife in a peaceful natural setting.",
    },
    {
      title: "Scenic Escape",
      description:
        "Relax amidst serene surroundings away from city life.",
    },
  ],

  gallery: [
    tawagallary1,
    tawagallary2,
    tawagallary3,
    tawagallary4,
    tawagallary5,
    tawagallary6,
  ],

  travelInfo: {
    bestTime:
      "October to March — ideal weather for boating, birdwatching and sightseeing",
    road:
      "Well-connected by road from Hoshangabad (Narmadapuram), Itarsi and Bhopal.",
    rail:
      "The nearest railway station is Itarsi Junction.",
    air:
      "The nearest airport is Raja Bhoj Airport, Bhopal.",
  },

  duration: "1 Day / 1 Night",
};

export default tawa;