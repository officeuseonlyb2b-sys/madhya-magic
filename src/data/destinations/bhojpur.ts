import type { DestinationContent } from "./types";

// All images served from Cloudinary
// Mapped exactly to the original variable names used in the file
const images = {
  // Attraction images (order from provided URLs: attraction1, attraction4, attraction3, attraction2)
  // We assign each to its correct property name
  attraction1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781766372/bhojpurattraction1_n7837t.jpg",
  attraction2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781766374/bhojpurattraction2_ucdncs.jpg",
  attraction3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781766374/bhojpurattraction3_r8omsm.jpg",
  attraction4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781766373/bhojpurattraction4_e7iq0x.jpg",

  // Gallery images (in order: gallery1 to gallery6)
  gallery1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781766374/bhojpurgallary1_nurzvs.jpg",
  gallery2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781766377/bhojpurgallary2_b1rsdf.jpg",
  gallery3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781766378/bhojpurgallary3_devaui.jpg",
  gallery4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781766380/bhojpurgallary4_bksq82.jpg",
  gallery5:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781766381/bhojpurgallary5_id1us2.jpg",
  gallery6:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781766382/bhojpurgallary6_ooh6yh.jpg",
};

const bhojpur: DestinationContent = {
  overviewParagraphs: [
    "Bhojpur — a historic and spiritual destination near Bhopal — is renowned for its magnificent Shiva temple and architectural heritage.",
    "Built by the legendary Raja Bhoj in the 11th century, Bhojpur is home to one of the largest Shiva Lingas in India.",
    "With ancient monuments, unfinished architectural marvels and spiritual significance, Bhojpur attracts devotees, history enthusiasts and architecture lovers alike.",
  ],

  attractions: [
    {
      title: "Bhojeshwar Temple",
      description:
        "A magnificent Shiva temple housing one of the largest Shiva Lingas in India.",
      image: images.attraction1,
    },
    {
      title: "Giant Shiva Linga",
      description:
        "A massive monolithic Shiva Linga that stands as the spiritual centerpiece of Bhojpur.",
      image: images.attraction2,
    },
    {
      title: "Ancient Rock Carvings",
      description:
        "Historic carvings and inscriptions showcasing the architectural vision of Raja Bhoj.",
      image: images.attraction3,
    },
    {
      title: "Betwa River Viewpoint",
      description:
        "A scenic spot overlooking the Betwa River and surrounding landscapes.",
      image: images.attraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Temple Darshan",
      description: "Seek blessings at the sacred Bhojeshwar Temple.",
      icon: "🛕",
    },
    {
      title: "Photography",
      description: "Capture the grandeur of ancient architecture and sculptures.",
      icon: "📸",
    },
    {
      title: "Spiritual Experience",
      description: "Immerse yourself in the peaceful temple atmosphere.",
      icon: "🪔",
    },
    {
      title: "Heritage Exploration",
      description: "Discover the fascinating history of Raja Bhoj’s masterpiece.",
      icon: "🏛️",
    },
    {
      title: "Sightseeing",
      description: "Enjoy panoramic views of the surrounding countryside.",
      icon: "🌄",
    },
    {
      title: "Cultural Exploration",
      description: "Learn about medieval architecture and temple engineering.",
      icon: "📚",
    },
  ],

  experiences: [
    {
      title: "Spiritual Journey",
      description:
        "Experience devotion at one of Madhya Pradesh’s most revered Shiva temples.",
    },
    {
      title: "Architectural Wonder",
      description:
        "Witness the grandeur of an unfinished yet magnificent medieval temple.",
    },
    {
      title: "Historical Heritage",
      description:
        "Explore the legacy of Raja Bhoj and his remarkable vision.",
    },
    {
      title: "Peaceful Ambience",
      description:
        "Enjoy a tranquil setting surrounded by history and spirituality.",
    },
  ],

  gallery: [
    images.gallery1,
    images.gallery2,
    images.gallery3,
    images.gallery4,
    images.gallery5,
    images.gallery6,
  ],

  travelInfo: {
    bestTime:
      "October to March — ideal weather for temple visits and sightseeing",
    road:
      "Well-connected by road from Bhopal and nearby cities.",
    rail:
      "The nearest railway station is Bhopal Junction (~32 km).",
    air:
      "The nearest airport is Raja Bhoj Airport, Bhopal.",
  },

  duration: "1 Day",
};

export default bhojpur;