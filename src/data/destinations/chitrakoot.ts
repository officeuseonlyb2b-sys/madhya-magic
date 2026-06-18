import type { DestinationContent } from "./types";

// All images served from Cloudinary
const images = {
  // Attraction images – mapped by filename
  attraction1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769505/chitrakootattraction1_sbujfh.jpg",
  attraction2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769505/chitrakootattraction2_xmeycj.jpg",
  attraction3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769507/chitrakootattraction3_f2ifcw.jpg",
  attraction4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769506/chitrakootattraction4_bnlujp.jpg",

  // Gallery images – each mapped by its variable name (gallary1 … gallary9)
  gallary1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769508/chitrakootgallary1_ef3ib9.jpg",
  gallary2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769511/chitrakootgallary2_lzzrkx.jpg",
  gallary3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769512/chitrakootgallary3_ig50un.jpg",
  gallary4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769516/chitrakootgallary4_blgsuo.jpg",
  gallary5:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769518/chitrakootgallary5_lumzah.jpg",
  gallary6:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769518/chitrakootgallary6_ilb6ku.jpg",
  gallary7:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769519/chitrakootgallary7_yicyo7.jpg",
  gallary8:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769520/chitrakootgallary8_uuodfj.jpg",
  gallary9:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769523/chitrakootgallary9_fupcfj.jpg",
};

const chitrakoot: DestinationContent = {
  overviewParagraphs: [
    "Chitrakoot — one of India’s most sacred pilgrimage destinations — is deeply associated with the life of Lord Rama and the Ramayana.",
    "Nestled amidst hills, forests and the Mandakini River, Chitrakoot offers a unique blend of spirituality, mythology and natural beauty.",
    "From ancient temples and sacred ghats to caves and waterfalls, Chitrakoot provides a profound spiritual and cultural experience.",
  ],

  attractions: [
    {
      title: "Ram Ghat",
      description:
        "A sacred riverside ghat on the Mandakini River known for spiritual rituals and evening aarti.",
      image: images.attraction1,
    },
    {
      title: "Kamadgiri",
      description:
        "A holy hill believed to be the heart of Chitrakoot and an important pilgrimage site.",
      image: images.attraction2,
    },
    {
      title: "Gupt Godavari",
      description:
        "Ancient caves with sacred water streams associated with Lord Rama and Lakshmana.",
      image: images.attraction3,
    },
    {
      title: "Janaki Kund",
      description:
        "A sacred spot on the Mandakini River believed to be the place where Goddess Sita used to bathe during her stay in Chitrakoot.",
      image: images.attraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Temple Darshan",
      description: "Visit sacred temples and seek blessings.",
      icon: "🛕",
    },
    {
      title: "Kamadgiri Parikrama",
      description: "Walk the sacred pilgrimage route around Kamadgiri Hill.",
      icon: "🚶",
    },
    {
      title: "Ram Ghat Aarti",
      description: "Witness the spiritual evening aarti on the Mandakini River.",
      icon: "🪔",
    },
    {
      title: "Boat Ride",
      description: "Enjoy a peaceful boat ride on the Mandakini River.",
      icon: "🚤",
    },
    {
      title: "Spiritual Photography",
      description: "Capture temples, ghats and scenic landscapes.",
      icon: "📸",
    },
    {
      title: "Meditation",
      description: "Experience peace and spirituality in sacred surroundings.",
      icon: "🧘",
    },
  ],

  experiences: [
    {
      title: "Ramayana Heritage",
      description:
        "Explore places associated with Lord Rama’s exile period.",
    },
    {
      title: "Spiritual Journey",
      description:
        "Experience devotion, rituals and sacred traditions.",
    },
    {
      title: "Natural Serenity",
      description:
        "Enjoy forests, rivers and peaceful landscapes.",
    },
    {
      title: "Sacred Exploration",
      description:
        "Discover ancient temples, caves and pilgrimage routes.",
    },
  ],

  gallery: [
    images.gallary1,
    images.gallary2,
    images.gallary3,
    images.gallary4,
    images.gallary5,
    images.gallary6,
    images.gallary7,
    images.gallary8,
    images.gallary9,
  ],

  travelInfo: {
    bestTime:
      "October to March — pleasant weather for pilgrimage and sightseeing",
    road:
      "Well-connected by road from Satna, Prayagraj and nearby cities.",
    rail:
      "The nearest railway station is Chitrakoot Dham Karwi Railway Station.",
    air:
      "The nearest airport is Prayagraj Airport.",
  },

  duration: "2 Days / 1 Night",
};

export default chitrakoot;