import type { DestinationContent } from "./types";

// All images served from Cloudinary
const images = {
  // Attraction images – mapped to the exact variable names
  kunoattraction1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781775825/kunoattraction1_qsxtzp.jpg",
  kunoattraction2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781775827/kunoattraction2_y5ss5e.jpg",
  kunoattraction3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781775830/kunoattraction3_v2dsaq.jpg",
  kunoattraction4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781775832/kunoattraction4_gy1qvn.jpg",

  // Gallery images – mapped to kunogallary1..6
  kunogallary1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781775834/kunogallary1_mhcjlv.jpg",
  kunogallary2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781775837/kunogallary2_quoszk.jpg",
  kunogallary3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781775839/kunogallary3_sysebo.jpg",
  kunogallary4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781775841/kunogallary4_b8kt9k.jpg",
  kunogallary5:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781775844/kunogallary5_mgynue.jpg",
  kunogallary6:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781775846/kunogallary6_ogn19e.jpg",
};

const kuno: DestinationContent = {
  overviewParagraphs: [
    "Kuno National Park — one of India’s most exciting wildlife destinations — is famous for its cheetah reintroduction project, rich biodiversity and scenic forest landscapes.",
    "Located in Madhya Pradesh, Kuno offers thrilling jungle safaris, rare wildlife sightings and untouched wilderness experiences.",
    "From spotting cheetahs and leopards to exploring scenic forest trails, Kuno provides a unique and unforgettable wildlife adventure.",
  ],

  attractions: [
    {
      title: "Kuno National Park",
      description:
        "A renowned wildlife reserve known for its cheetah conservation project and rich biodiversity.",
      image: images.kunoattraction1,
    },
    {
      title: "Cheetah Safari",
      description:
        "Experience thrilling safaris with opportunities to spot the majestic cheetahs in the wild.",
      image: images.kunoattraction2,
    },
    {
      title: "Bird Watching",
      description:
        "Explore Kuno’s rich birdlife and spot colorful migratory and native bird species in the forest.",
      image: images.kunoattraction3,
    },
    {
      title: "Jungle Safari",
      description:
        "Explore scenic forest routes filled with wildlife, birds and natural beauty.",
      image: images.kunoattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Cheetah Safari",
      description: "Enjoy thrilling wildlife safaris to spot cheetahs and rare species.",
      icon: "🐆",
    },
    {
      title: "Wildlife Photography",
      description: "Capture breathtaking moments of wildlife and forest landscapes.",
      icon: "📸",
    },
    {
      title: "Bird Watching",
      description: "Observe colorful birds and diverse wildlife species.",
      icon: "🦜",
    },
    {
      title: "Nature Exploration",
      description: "Experience peaceful forest trails and untouched wilderness.",
      icon: "🌿",
    },
    {
      title: "Jeep Safari",
      description: "Explore dense forests and scenic wildlife zones.",
      icon: "🛻",
    },
    {
      title: "Wildlife Observation",
      description: "Spot leopards, deer and other forest animals.",
      icon: "🦌",
    },
  ],

  experiences: [
    {
      title: "Cheetah Experience",
      description:
        "Witness India’s historic cheetah conservation success in the wild.",
    },
    {
      title: "Wildlife Adventure",
      description:
        "Feel the excitement of exploring untouched forests and wildlife zones.",
    },
    {
      title: "Natural Beauty",
      description:
        "Enjoy scenic landscapes, forests and peaceful surroundings.",
    },
    {
      title: "Photography Paradise",
      description:
        "Capture unforgettable wildlife and jungle moments.",
    },
  ],

  gallery: [
    images.kunogallary1,
    images.kunogallary2,
    images.kunogallary3,
    images.kunogallary4,
    images.kunogallary5,
    images.kunogallary6,
  ],

  travelInfo: {
    bestTime:
      "October to June — ideal season for wildlife safaris and cheetah sightings",
    road:
      "Well-connected by road from Gwalior, Shivpuri and nearby cities.",
    rail:
      "The nearest railway station is Shivpuri Railway Station.",
    air:
      "The nearest airport is Gwalior Airport.",
  },

  duration: "2 Days / 1 Night",
};

export default kuno;