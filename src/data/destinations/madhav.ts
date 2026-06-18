import type { DestinationContent } from "./types";

// All images served from Cloudinary
const images = {
  // Attraction images – mapped to the exact variable names
  madhavattraction1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781776032/madhavattraction1_mv0tul.jpg",
  madhavattraction2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781776034/madhavattraction2_uliyfc.jpg",
  madhavattraction3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781776037/madhavattraction3_mcxd4y.jpg",
  madhavattraction4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781776039/madhavattraction4_yeh70z.jpg",

  // Gallery images – mapped to madhavgallary1..6
  madhavgallary1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781776042/madhavgallary1_idl1lv.jpg",
  madhavgallary2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781776045/madhavgallary2_xkx3u3.jpg",
  madhavgallary3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781776051/madhavgallary3_inrmoj.jpg",
  madhavgallary4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781776054/madhavgallary4_i3oito.jpg",
  madhavgallary5:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781776057/madhavgallary5_pf5zhe.jpg",
  madhavgallary6:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781776061/madhavgallary6_xnnbwr.jpg",
};

const madhav: DestinationContent = {
  overviewParagraphs: [
    "Madhav National Park — a scenic wildlife destination in Madhya Pradesh — is known for its forests, lakes and rich biodiversity.",
    "Located near Shivpuri, the park offers peaceful jungle landscapes, thrilling wildlife experiences and historic charm.",
    "From jeep safaris and birdwatching to beautiful lakes and forest trails, Madhav National Park is a perfect getaway for nature lovers.",
  ],

  attractions: [
    {
      title: "Madhav National Park",
      description:
        "A beautiful wildlife reserve known for forests, grasslands and scenic natural beauty.",
      image: images.madhavattraction1,
    },
    {
      title: "Jeep Safari",
      description:
        "Experience thrilling safaris through wildlife-rich forest routes and open grasslands.",
      image: images.madhavattraction2,
    },
    {
      title: "Nilgai Spotting",
      description:
        "Spot graceful nilgai and other wildlife roaming freely across Madhav National Park’s grasslands.",
      image: images.madhavattraction3,
    },
    {
      title: "Bird Watching",
      description:
        "Spot colorful migratory and native bird species across the park’s lakes and forests.",
      image: images.madhavattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Jungle Safari",
      description: "Explore wildlife-rich forests and scenic safari routes.",
      icon: "🛻",
    },
    {
      title: "Bird Watching",
      description: "Observe colorful migratory and native birds.",
      icon: "🦜",
    },
    {
      title: "Nature Photography",
      description: "Capture breathtaking wildlife and lake landscapes.",
      icon: "📸",
    },
    {
      title: "Lake Exploration",
      description: "Enjoy peaceful views around Sakhya Sagar Lake.",
      icon: "🌊",
    },
    {
      title: "Forest Walks",
      description: "Experience peaceful nature trails and greenery.",
      icon: "🌿",
    },
    {
      title: "Wildlife Observation",
      description: "Spot deer, nilgai and various forest animals.",
      icon: "🦌",
    },
  ],

  experiences: [
    {
      title: "Wildlife Adventure",
      description:
        "Experience thrilling safaris in a peaceful forest environment.",
    },
    {
      title: "Natural Beauty",
      description:
        "Enjoy scenic lakes, forests and lush greenery.",
    },
    {
      title: "Birdwatching Paradise",
      description:
        "Discover diverse bird species near lakes and wetlands.",
    },
    {
      title: "Photography Escape",
      description:
        "Capture stunning wildlife and landscape moments.",
    },
  ],

  gallery: [
    images.madhavgallary1,
    images.madhavgallary2,
    images.madhavgallary3,
    images.madhavgallary4,
    images.madhavgallary5,
    images.madhavgallary6,
  ],

  travelInfo: {
    bestTime:
      "October to March — ideal season for wildlife exploration and birdwatching",
    road:
      "Well-connected by road from Gwalior, Jhansi and nearby cities.",
    rail:
      "The nearest railway station is Shivpuri Railway Station.",
    air:
      "The nearest airport is Gwalior Airport.",
  },

  duration: "2 Days / 1 Night",
};

export default madhav;