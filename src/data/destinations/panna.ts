import type { DestinationContent } from "./types";

// All images served from Cloudinary
const images = {
  // Attraction images – mapped to pannaattraction1..4
  pannaattraction1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778765/pannaattraction1_gukicp.jpg",
  pannaattraction2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778767/pannaattraction2_dkwu6p.jpg",
  pannaattraction3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778769/pannaattraction3_iedkw6.jpg",
  pannaattraction4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778773/pannaattraction4_da4hmd.jpg",

  // Gallery images – mapped to pannagallary1..9
  pannagallary1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778775/pannagallary1_lubajo.jpg",
  pannagallary2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778778/pannagallary2_rj3lta.jpg",
  pannagallary3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778782/pannagallary3_puqxwl.jpg",
  pannagallary4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778785/pannagallary4_j86j4v.jpg",
  pannagallary5:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778788/pannagallary5_wlmq5m.jpg",
  pannagallary6:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778791/pannagallary6_wedafz.jpg",
  pannagallary7:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778794/pannagallary7_zfxz63.jpg",
  pannagallary8:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778797/pannagallary8_smktvo.jpg",
  pannagallary9:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778800/pannagallary9_onsbjn.jpg",
};

const panna: DestinationContent = {
  overviewParagraphs: [
    "Panna National Park — one of Madhya Pradesh’s most stunning wildlife destinations — is famous for its tiger reserve, waterfalls and scenic forest landscapes.",
    "Located near Khajuraho, Panna offers thrilling wildlife safaris, rich biodiversity and breathtaking natural beauty along the Ken River.",
    "From tiger sightings and jungle adventures to waterfalls and river safaris, Panna delivers a perfect blend of wildlife and nature experiences.",
  ],

  attractions: [
    {
      title: "Panna National Park",
      description:
        "A renowned tiger reserve famous for its rich wildlife, dense forests and scenic jungle landscapes.",
      image: images.pannaattraction1,
    },
    {
      title: "Jeep Safari",
      description:
        "Experience thrilling jungle safaris through Panna’s wildlife-rich forest zones.",
      image: images.pannaattraction2,
    },
    {
      title: "Tiger Spotting",
      description:
        "Witness majestic Royal Bengal Tigers roaming freely in their natural habitat.",
      image: images.pannaattraction3,
    },
    {
      title: "Ken River Wildlife Safari",
      description:
        "Enjoy scenic river safaris while spotting crocodiles, birds and diverse wildlife species.",
      image: images.pannaattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Jungle Safari",
      description: "Explore wildlife-rich forest trails and tiger habitats.",
      icon: "🛻",
    },
    {
      title: "Tiger Spotting",
      description: "Witness majestic Royal Bengal Tigers in their natural habitat.",
      icon: "🐅",
    },
    {
      title: "Boat Ride",
      description: "Enjoy peaceful boat rides along the scenic Ken River.",
      icon: "🚤",
    },
    {
      title: "Bird Watching",
      description: "Observe exotic birds and vibrant wildlife species.",
      icon: "🦜",
    },
    {
      title: "Nature Photography",
      description: "Capture breathtaking wildlife and waterfall landscapes.",
      icon: "📸",
    },
    {
      title: "Waterfall Exploration",
      description: "Visit scenic waterfalls and dramatic canyon views.",
      icon: "🌊",
    },
  ],

  experiences: [
    {
      title: "Wildlife Adventure",
      description:
        "Experience thrilling safaris in one of India’s famous tiger reserves.",
    },
    {
      title: "Natural Beauty",
      description:
        "Enjoy forests, waterfalls, rivers and peaceful landscapes.",
    },
    {
      title: "River Exploration",
      description:
        "Discover the scenic charm of the Ken River and surrounding wilderness.",
    },
    {
      title: "Photography Paradise",
      description:
        "Capture unforgettable moments of wildlife and natural scenery.",
    },
  ],

  gallery: [
    images.pannagallary1,
    images.pannagallary2,
    images.pannagallary3,
    images.pannagallary4,
    images.pannagallary5,
    images.pannagallary6,
    images.pannagallary7,
    images.pannagallary8,
    images.pannagallary9,
  ],

  travelInfo: {
    bestTime:
      "October to June — ideal season for wildlife safaris and sightseeing",
    road:
      "Well-connected by road from Khajuraho, Satna and nearby cities.",
    rail:
      "The nearest railway station is Khajuraho Railway Station (~25 km).",
    air:
      "The nearest airport is Khajuraho Airport.",
  },

  duration: "2 Days / 1 Night",
};

export default panna;