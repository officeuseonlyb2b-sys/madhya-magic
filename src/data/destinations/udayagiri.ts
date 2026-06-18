import type { DestinationContent } from "./types";

// All images served from Cloudinary
const images = {
  // Attraction images – mapped by filename (attraction1, attraction2, attraction4, attraction3)
  udayagiriattraction1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781618/udayagiriattraction1_ycixsf.jpg",
  udayagiriattraction2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781622/udayagiriattraction2_djzczp.jpg",
  udayagiriattraction3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781643/udayagiriattraction3_ey5rdz.jpg",
  udayagiriattraction4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781630/udayagiriattraction4_suezmw.jpg",

  // Gallery images – mapped to udayagirigallary1..7
  udayagirigallary1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781634/udayagirigallary1_kypn22.jpg",
  udayagirigallary2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781637/udayagirigallary2_jdol96.jpg",
  udayagirigallary3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781641/udayagirigallary3_lsjt1u.jpg",
  udayagirigallary4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781645/udayagirigallary4_ahaqey.jpg",
  udayagirigallary5:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781649/udayagirigallary5_lhpsvk.jpg",
  udayagirigallary6:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781653/udayagirigallary6_pvd72d.jpg",
  udayagirigallary7:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781657/udayagirigallary7_gidmcr.jpg",
};

const udayagiri: DestinationContent = {
  overviewParagraphs: [
    "Udayagiri — one of Madhya Pradesh’s most significant archaeological sites — is famous for its ancient rock-cut caves, Gupta-era sculptures and historic heritage.",
    "Located near Vidisha, Udayagiri showcases remarkable Hindu and Jain cave temples carved into sandstone hills.",
    "Known for the iconic Varaha sculpture and centuries-old inscriptions, Udayagiri offers a fascinating glimpse into India’s ancient art, religion and architecture.",
  ],

  attractions: [
    {
      title: "Varaha Cave",
      description:
        "Home to the magnificent Varaha avatar sculpture of Lord Vishnu carved during the Gupta period.",
      image: images.udayagiriattraction1,
    },
    {
      title: "Rock-Cut Caves",
      description:
        "Ancient caves featuring beautifully carved Hindu and Jain sculptures and inscriptions.",
      image: images.udayagiriattraction2,
    },
    {
      title: "Ancient Inscriptions",
      description:
        "Historic Gupta-era inscriptions carved into the caves showcasing ancient Indian history and culture.",
      image: images.udayagiriattraction3,
    },
    {
      title: "Hilltop Viewpoint",
      description:
        "A scenic viewpoint offering panoramic views of the surrounding landscapes and countryside.",
      image: images.udayagiriattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Cave Exploration",
      description: "Explore ancient rock-cut caves and historic carvings.",
      icon: "🪨",
    },
    {
      title: "Photography",
      description: "Capture stunning sculptures and archaeological beauty.",
      icon: "📸",
    },
    {
      title: "Heritage Walks",
      description: "Walk through centuries-old monuments and pathways.",
      icon: "🚶",
    },
    {
      title: "Spiritual Visits",
      description: "Experience peace at ancient Hindu and Jain temples.",
      icon: "🛕",
    },
    {
      title: "History Discovery",
      description: "Learn about Gupta-era architecture and ancient Indian history.",
      icon: "📜",
    },
    {
      title: "Nature Views",
      description: "Enjoy calm hilltop landscapes and scenic surroundings.",
      icon: "🌿",
    },
  ],

  experiences: [
    {
      title: "Ancient Heritage",
      description:
        "Discover one of India’s oldest rock-cut archaeological treasures.",
    },
    {
      title: "Gupta Era Art",
      description:
        "Admire detailed carvings and sculptures from the Gupta dynasty.",
    },
    {
      title: "Spiritual Atmosphere",
      description:
        "Experience devotion and serenity within sacred cave temples.",
    },
    {
      title: "Historic Exploration",
      description:
        "Walk through centuries of Indian history and architecture.",
    },
  ],

  gallery: [
    images.udayagirigallary1,
    images.udayagirigallary2,
    images.udayagirigallary3,
    images.udayagirigallary4,
    images.udayagirigallary5,
    images.udayagirigallary6,
    images.udayagirigallary7,
  ],

  travelInfo: {
    bestTime:
      "October to March — pleasant weather for sightseeing and cave exploration",
    road:
      "Well-connected by road from Vidisha, Sanchi and Bhopal.",
    rail:
      "The nearest railway station is Vidisha Railway Station (~6 km).",
    air:
      "The nearest airport is Raja Bhoj Airport in Bhopal.",
  },

  duration: "1 Day",
};

export default udayagiri;