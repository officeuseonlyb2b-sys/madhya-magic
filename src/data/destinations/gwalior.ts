import type { DestinationContent } from "./types";

// All images served from Cloudinary
const images = {
  // Attraction images – mapped to the exact variable names (gwaliorattraction1..4)
  gwaliorattraction1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769675/gwalliorattraction1_aysdpo.jpg",
  gwaliorattraction2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769677/gwalliorattraction2_pimilo.jpg",
  gwaliorattraction3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769681/gwalliorattraction3_yz7xvw.jpg",
  gwaliorattraction4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769682/gwalliorattraction4_txigtp.jpg",

  // Gallery images – mapped to gwaliorgallary1..11
  gwaliorgallary1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769684/gwalliorgallary1_ifjrkr.jpg",
  gwaliorgallary2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769686/gwalliorgallary2_o81hfa.jpg",
  gwaliorgallary3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769690/gwalliorgallary3_qnqdei.jpg",
  gwaliorgallary4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769689/gwalliorgallary4_qkwpag.jpg",
  gwaliorgallary5:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769691/gwalliorgallary5_svy5tg.jpg",
  gwaliorgallary6:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769693/gwalliorgallary6_cc7hyt.jpg",
  gwaliorgallary7:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769734/gwalliorgallary7_l1vgfd.jpg",
  gwaliorgallary8:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769736/gwalliorgallary8_ubn4wd.jpg",
  gwaliorgallary9:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769738/gwalliorgallary9_vordpy.jpg",
  gwaliorgallary10:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769740/gwalliorgallary10_eivgyx.jpg",
  gwaliorgallary11:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769742/gwalliorgallary11_uh37tn.jpg",
};

const gwalior: DestinationContent = {
  overviewParagraphs: [
    "Gwalior — the majestic fortress city of Madhya Pradesh — is known for its royal history, grand architecture and rich musical heritage.",
    "Dominated by the iconic Gwalior Fort, the city blends Rajput glory, Mughal influence and timeless cultural traditions.",
    "From ancient palaces and intricately carved temples to bustling bazaars and classical music roots, Gwalior offers a regal travel experience.",
  ],

  attractions: [
    {
      title: "Gwalior Fort",
      description:
        "A massive hilltop fortress admired for its stunning architecture and panoramic city views.",
      image: images.gwaliorattraction1,
    },
    {
      title: "Jai Vilas Palace",
      description:
        "A luxurious royal palace showcasing European-inspired interiors and a grand museum.",
      image: images.gwaliorattraction2,
    },
    {
      title: "Sas Bahu Temples",
      description:
        "Beautiful 11th-century temples famous for intricate carvings and ancient craftsmanship.",
      image: images.gwaliorattraction3,
    },
    {
      title: "Tansen Tomb",
      description:
        "The memorial of legendary musician Tansen, surrounded by peaceful Mughal gardens.",
      image: images.gwaliorattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Fort Exploration",
      description: "Walk through ancient gates, palaces and hidden passages.",
      icon: "🏰",
    },
    {
      title: "Museum Visit",
      description: "Explore royal artifacts and historical collections.",
      icon: "🖼️",
    },
    {
      title: "Light & Sound Show",
      description: "Experience Gwalior Fort's history through evening storytelling.",
      icon: "🎆",
    },
    {
      title: "Heritage Photography",
      description: "Capture majestic architecture and city views.",
      icon: "📸",
    },
    {
      title: "Street Food Trail",
      description: "Enjoy local kachoris, bedai and traditional sweets.",
      icon: "🍴",
    },
    {
      title: "Music Heritage Tour",
      description: "Discover the roots of Hindustani classical music.",
      icon: "🎶",
    },
  ],

  experiences: [
    {
      title: "Royal Grandeur",
      description:
        "Feel the regal atmosphere while exploring palaces and fort walls.",
    },
    {
      title: "Sunset from the Fort",
      description:
        "Watch the city glow golden beneath the ancient sandstone fort.",
    },
    {
      title: "Cultural Legacy",
      description:
        "Experience Gwalior's timeless contribution to Indian art and music.",
    },
    {
      title: "Historic Old City",
      description:
        "Stroll through colorful markets and centuries-old streets.",
    },
  ],

  gallery: [
    images.gwaliorgallary1,
    images.gwaliorgallary2,
    images.gwaliorgallary3,
    images.gwaliorgallary4,
    images.gwaliorgallary5,
    images.gwaliorgallary6,
    images.gwaliorgallary7,
    images.gwaliorgallary8,
    images.gwaliorgallary9,
    images.gwaliorgallary10,
    images.gwaliorgallary11,
  ],

  travelInfo: {
    bestTime: "October to March — pleasant weather for sightseeing and fort exploration",
    road:
      "Well-connected by highways from Agra, Jhansi, Bhopal and nearby cities.",
    rail:
      "Gwalior Junction is a major railway station with connections across India.",
    air:
      "Rajmata Vijaya Raje Scindia Airport offers regular domestic flights.",
  },

  duration: "2 Days / 1 Night",
};

export default gwalior;