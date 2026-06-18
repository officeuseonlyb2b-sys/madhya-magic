import type { DestinationContent } from "./types";

// All images served from Cloudinary
const images = {
  // Attraction images – mapped to mukundpurattraction1..4
  mukundpurattraction1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777767/mukundpurattraction1_ctjzlj.jpg",
  mukundpurattraction2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777771/mukundpurattraction2_uxhcuc.jpg",
  mukundpurattraction3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777778/mukundpurattraction3_be5krd.jpg",
  mukundpurattraction4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777788/mukundpurattraction4_z2yt5s.jpg",

  // Gallery images – mapped to mukundpurgallary1..6
  mukundpurgallary1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777789/mukundpurgallary1_jhtlnz.jpg",
  mukundpurgallary2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777793/mukundpurgallary2_kqdc62.jpg",
  mukundpurgallary3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777796/mukundpurgallary3_tyxyd1.jpg",
  mukundpurgallary4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777801/mukundpurgallary4_vwygd2.jpg",
  mukundpurgallary5:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777802/mukundpurgallary5_d9kqfo.jpg",
  mukundpurgallary6:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777808/mukundpurgallary6_rqhtmn.jpg",
};

const mukundpur: DestinationContent = {
  overviewParagraphs: [
    "Mukundpur White Tiger Safari — a unique wildlife destination in Madhya Pradesh — is famous for its rare white tigers and scenic forest surroundings.",
    "Located near Satna, Mukundpur offers an exciting safari experience where visitors can witness majestic white tigers in a natural environment.",
    "From wildlife safaris and tiger sightings to peaceful nature views, Mukundpur provides a memorable adventure for wildlife enthusiasts.",
  ],

  attractions: [
    {
      title: "White Tiger Safari",
      description:
        "A famous safari park known for its rare and majestic white tigers.",
      image: images.mukundpurattraction1,
    },
    {
      title: "White Tiger Spotting",
      description:
        "Witness rare white tigers roaming in large natural safari enclosures.",
      image: images.mukundpurattraction2,
    },
    {
      title: "Safari Ride",
      description:
        "Enjoy guided safari rides through the wildlife park surrounded by greenery.",
      image: images.mukundpurattraction3,
    },
    {
      title: "Wildlife Enclosures",
      description:
        "Explore enclosures housing various wildlife species in a natural setting.",
      image: images.mukundpurattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Safari Ride",
      description: "Explore wildlife enclosures and scenic forest landscapes.",
      icon: "🛻",
    },
    {
      title: "White Tiger Spotting",
      description: "Witness the rare beauty of white tigers up close.",
      icon: "🐅",
    },
    {
      title: "Wildlife Photography",
      description: "Capture stunning moments of wildlife and natural beauty.",
      icon: "📸",
    },
    {
      title: "Nature Walks",
      description: "Enjoy peaceful surroundings and fresh forest air.",
      icon: "🌿",
    },
    {
      title: "Family Outing",
      description: "Experience a fun wildlife adventure suitable for all ages.",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      title: "Bird Watching",
      description: "Observe colorful birds and local wildlife species.",
      icon: "🦜",
    },
  ],

  experiences: [
    {
      title: "Rare Wildlife Experience",
      description:
        "Witness one of India’s most unique white tiger safari experiences.",
    },
    {
      title: "Nature Escape",
      description:
        "Enjoy peaceful greenery and scenic forest surroundings.",
    },
    {
      title: "Wildlife Adventure",
      description:
        "Experience thrilling safaris and close wildlife encounters.",
    },
    {
      title: "Photography Paradise",
      description:
        "Capture unforgettable moments of white tigers and nature.",
    },
  ],

  gallery: [
    images.mukundpurgallary1,
    images.mukundpurgallary2,
    images.mukundpurgallary3,
    images.mukundpurgallary4,
    images.mukundpurgallary5,
    images.mukundpurgallary6,
  ],

  travelInfo: {
    bestTime:
      "October to March — ideal season for safari visits and sightseeing",
    road:
      "Well-connected by road from Satna, Rewa and nearby cities.",
    rail:
      "The nearest railway station is Satna Junction (~20 km).",
    air:
      "The nearest airport is Khajuraho Airport.",
  },

  duration: "1 Day",
};

export default mukundpur;