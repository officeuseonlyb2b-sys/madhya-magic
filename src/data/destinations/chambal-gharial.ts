import type { DestinationContent } from "./types";

// All images served from Cloudinary
const images = {
  // Attraction images (from the provided list in order)
  attraction1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781767485/chambalgharialattraction1_j9b84w.jpg",
  attraction2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781767487/chambalgharialattraction2_uo7pyf.jpg",
  attraction3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781767488/chambalgharialattraction3_opibgt.jpg",
  attraction4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781767490/chambalgharialattraction4_kmdqhn.jpg",

  // Gallery images (from the provided list in order)
  gallery1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781767492/chambalgharialgallary1_cmfmr1.jpg",
  gallery2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781767493/chambalgharialgallary2_p14qlg.jpg",
  gallery3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781767495/chambalgharialgallary3_qff2zd.jpg",
  gallery4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781767496/chambalgharialgallary4_cdjsqb.jpg",
  gallery5:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781767499/chambalgharialgallary5_qhmkne.jpg",
  gallery6:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781767500/chambalgharialgallary6_zka1ox.jpg",
};

const chambalgharial: DestinationContent = {
  overviewParagraphs: [
    "National Chambal Gharial Sanctuary — one of India’s most important wildlife sanctuaries — is famous for its endangered gharials, river dolphins and rich birdlife.",
    "Spread across Madhya Pradesh, Rajasthan and Uttar Pradesh, the sanctuary protects the pristine Chambal River ecosystem and its rare aquatic wildlife.",
    "From boat safaris and gharial spotting to birdwatching and scenic river landscapes, Chambal offers a unique wildlife experience.",
  ],

  attractions: [
    {
      title: "Chambal River Safari",
      description:
        "Enjoy thrilling boat safaris through the pristine waters of the Chambal River.",
      image: images.attraction1,
    },
    {
      title: "Gharial Spotting",
      description:
        "Witness the rare and endangered gharials basking along the riverbanks.",
      image: images.attraction2,
    },
    {
      title: "Gangetic Dolphin Spotting",
      description:
        "Experience the excitement of spotting rare freshwater dolphins in the Chambal River.",
      image: images.attraction3,
    },
    {
      title: "Bird Watching",
      description:
        "Observe migratory and native bird species across the river ecosystem.",
      image: images.attraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Boat Safari",
      description: "Explore the Chambal River and its rich aquatic wildlife.",
      icon: "🚤",
    },
    {
      title: "Gharial Spotting",
      description: "Witness endangered gharials in their natural habitat.",
      icon: "🐊",
    },
    {
      title: "Bird Watching",
      description: "Observe colorful migratory and native bird species.",
      icon: "🦜",
    },
    {
      title: "Wildlife Photography",
      description: "Capture stunning river landscapes and wildlife moments.",
      icon: "📸",
    },
    {
      title: "Dolphin Watching",
      description: "Spot rare Gangetic dolphins in the Chambal waters.",
      icon: "🐬",
    },
    {
      title: "Nature Exploration",
      description: "Enjoy peaceful riverside scenery and untouched nature.",
      icon: "🌿",
    },
  ],

  experiences: [
    {
      title: "River Wildlife Adventure",
      description:
        "Experience one of India’s most unique aquatic wildlife sanctuaries.",
    },
    {
      title: "Rare Species Encounter",
      description:
        "Witness endangered gharials, dolphins and rare birds.",
    },
    {
      title: "Scenic River Beauty",
      description:
        "Enjoy peaceful river landscapes and untouched surroundings.",
    },
    {
      title: "Photography Paradise",
      description:
        "Capture unforgettable wildlife and river safari moments.",
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
      "October to March — ideal season for boat safaris and wildlife sightings",
    road:
      "Well-connected by road from Morena, Gwalior and nearby cities.",
    rail:
      "The nearest railway station is Morena Railway Station.",
    air:
      "The nearest airport is Gwalior Airport.",
  },

  duration: "1 Day",
};

export default chambalgharial;