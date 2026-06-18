import type { DestinationContent } from "./types";

// All images served from Cloudinary
const images = {
  // Attraction images – mapped to tamiaattraction1..4
  tamiaattraction1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781546/tamiaattraction1_vlqqsi.jpg",
  tamiaattraction2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781550/tamiaattraction2_pzbxzx.jpg",
  tamiaattraction3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781554/tamiaattraction3_r19eqv.jpg",
  tamiaattraction4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781557/tamiaattraction4_qdniqq.jpg",

  // Gallery images – mapped to tamiagallary1..5
  tamiagallary1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781561/tamiagallary1_gsr0rj.jpg",
  tamiagallary2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781565/tamiagallary2_e7vfe8.jpg",
  tamiagallary3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781569/tamiagallary3_shdvnq.jpg",
  tamiagallary4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781573/tamiagallary4_as20lv.jpg",
  tamiagallary5:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781577/tamiagallary5_zrcyj1.jpg",
};

const tamia: DestinationContent = {
  overviewParagraphs: [
    "Tamia is one of Madhya Pradesh's most scenic hill destinations, nestled in the Satpura ranges of Chhindwara district.",
    "Known for its breathtaking valleys, dense forests, tribal culture and panoramic viewpoints, Tamia is often called the hidden gem of Satpura.",
    "From spectacular sunrise views and deep gorges to eco-tourism experiences and peaceful landscapes, Tamia is a paradise for nature lovers.",
  ],

  attractions: [
    {
      title: "Patalkot Valley",
      description:
        "A spectacular horseshoe-shaped valley known for its unique geography, tribal heritage and breathtaking views.",
      image: images.tamiaattraction1,
    },
    {
      title: "Patalkot View Point",
      description:
        "The most famous viewpoint in Tamia offering panoramic vistas of the magnificent Patalkot Valley.",
      image: images.tamiaattraction2,
    },
    {
      title: "Sunset Point",
      description:
        "A stunning location to witness mesmerizing sunsets over the Satpura hills.",
      image: images.tamiaattraction3,
    },
    {
      title: "Ghatlinga Tribal Village",
      description:
        "A traditional tribal village near Tamia offering insights into local culture, indigenous lifestyles and the rich heritage of the Satpura region.",
      image: images.tamiaattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Valley Viewing",
      description: "Enjoy breathtaking views of the famous Patalkot Valley.",
      icon: "🏞️",
    },
    {
      title: "Nature Photography",
      description: "Capture spectacular landscapes and scenic viewpoints.",
      icon: "📸",
    },
    {
      title: "Sunrise & Sunset Watching",
      description: "Experience unforgettable views across the Satpura ranges.",
      icon: "🌅",
    },
    {
      title: "Nature Walks",
      description: "Explore forests, trails and peaceful surroundings.",
      icon: "🥾",
    },
    {
      title: "Tribal Culture Exploration",
      description: "Learn about the traditions and lifestyle of local tribal communities.",
      icon: "🎭",
    },
    {
      title: "Eco Tourism",
      description: "Experience sustainable tourism amidst pristine nature.",
      icon: "🌿",
    },
  ],

  experiences: [
    {
      title: "Hidden Hill Retreat",
      description:
        "Discover one of Madhya Pradesh's most peaceful and unexplored hill destinations.",
    },
    {
      title: "Patalkot Adventure",
      description:
        "Experience the beauty and mystery of the legendary Patalkot Valley.",
    },
    {
      title: "Scenic Landscapes",
      description:
        "Enjoy endless views of forests, valleys and Satpura hills.",
    },
    {
      title: "Nature Escape",
      description:
        "Reconnect with nature in a tranquil and refreshing environment.",
    },
  ],

  gallery: [
    images.tamiagallary1,
    images.tamiagallary2,
    images.tamiagallary3,
    images.tamiagallary4,
    images.tamiagallary5,
  ],

  travelInfo: {
    bestTime:
      "October to March — ideal weather for sightseeing, trekking and nature exploration",
    road:
      "Well-connected by road from Chhindwara, Nagpur and nearby cities.",
    rail:
      "The nearest railway station is Chhindwara Junction.",
    air:
      "The nearest airport is Dr. Babasaheb Ambedkar International Airport, Nagpur.",
  },

  duration: "2 Days / 1 Night",
};

export default tamia;