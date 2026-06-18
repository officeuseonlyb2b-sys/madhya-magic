import type { DestinationContent } from "./types";

// All images served from Cloudinary
const images = {
  // Attraction images – mapped to manduattraction1..4
  manduattraction1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777321/manduattraction1_kz787p.jpg",
  manduattraction2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777340/manduattraction2_fnwj2e.jpg",
  manduattraction3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777343/manduattraction3_svxda1.jpg",
  manduattraction4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777346/manduattraction4_advpxk.jpg",

  // Gallery images – mapped to mandugallary1..11
  mandugallary1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777349/mandugallary1_en6mh9.jpg",
  mandugallary2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777352/mandugallary2_qrat4i.jpg",
  mandugallary3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777355/mandugallary3_e6nerj.jpg",
  mandugallary4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777358/mandugallary4_phpto4.jpg",
  mandugallary5:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777361/mandugallary5_grb38u.jpg",
  mandugallary6:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777363/mandugallary6_dg64an.jpg",
  mandugallary7:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777366/mandugallary7_offkak.jpg",
  mandugallary8:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777370/mandugallary8_uotxpb.jpg",
  mandugallary9:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777373/mandugallary9_yu0voj.jpg",
  mandugallary10:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777382/mandugallary10_noc5e7.jpg",
  mandugallary11:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777377/mandugallary11_mqlazt.jpg",
};

const mandu: DestinationContent = {
  overviewParagraphs: [
    "Mandu — the city of joy and romance — is a historic hilltop destination in Madhya Pradesh known for its Afghan architecture, ancient forts and scenic beauty.",
    "Surrounded by lush greenery and dramatic valleys, Mandu offers a perfect blend of history, architecture and peaceful landscapes.",
    "From the legendary love story of Baz Bahadur and Rani Roopmati to magnificent palaces and monsoon charm, Mandu creates an unforgettable travel experience.",
  ],

  attractions: [
    {
      title: "Jahaz Mahal",
      description:
        "An iconic ship-shaped palace surrounded by water, famous for its unique architecture.",
      image: images.manduattraction1,
    },
    {
      title: "Rani Roopmati Pavilion",
      description:
        "A scenic hilltop pavilion offering breathtaking valley and Narmada River views.",
      image: images.manduattraction2,
    },
    {
      title: "Baz Bahadur Palace",
      description:
        "A beautiful palace known for its Mughal-style courtyards and romantic history.",
      image: images.manduattraction3,
    },
    {
      title: "Hoshang Shah Tomb",
      description:
        "India’s first marble mausoleum admired for its elegant Afghan architecture.",
      image: images.manduattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Fort Exploration",
      description: "Discover ancient palaces, gateways and historic ruins.",
      icon: "🏰",
    },
    {
      title: "Sunset Views",
      description: "Enjoy mesmerizing sunsets from Roopmati Pavilion.",
      icon: "🌅",
    },
    {
      title: "Photography",
      description: "Capture stunning architecture and monsoon landscapes.",
      icon: "📸",
    },
    {
      title: "Heritage Walks",
      description: "Walk through centuries-old monuments and royal pathways.",
      icon: "🚶",
    },
    {
      title: "Monsoon Getaway",
      description: "Experience Mandu’s magical greenery during the rainy season.",
      icon: "🌧️",
    },
    {
      title: "Local Food Tasting",
      description: "Try delicious local Malwa cuisine and street food.",
      icon: "🍴",
    },
  ],

  experiences: [
    {
      title: "Romantic Heritage",
      description:
        "Relive the legendary love story of Baz Bahadur and Rani Roopmati.",
    },
    {
      title: "Architectural Grandeur",
      description:
        "Witness stunning Afghan and Mughal-inspired structures.",
    },
    {
      title: "Scenic Beauty",
      description:
        "Enjoy panoramic valley views, greenery and peaceful surroundings.",
    },
    {
      title: "Historic Atmosphere",
      description:
        "Experience the timeless charm of Mandu’s royal past.",
    },
  ],

  gallery: [
    images.mandugallary1,
    images.mandugallary2,
    images.mandugallary3,
    images.mandugallary4,
    images.mandugallary5,
    images.mandugallary6,
    images.mandugallary7,
    images.mandugallary8,
    images.mandugallary9,
    images.mandugallary10,
    images.mandugallary11,
  ],

  travelInfo: {
    bestTime:
      "July to March — monsoon and winter are the best seasons to explore Mandu",
    road:
      "Well-connected by road from Indore, Dhar and nearby cities.",
    rail:
      "The nearest major railway station is Indore Junction (~100 km).",
    air:
      "The nearest airport is Devi Ahilya Bai Holkar Airport in Indore.",
  },

  duration: "2 Days / 1 Night",
};

export default mandu;