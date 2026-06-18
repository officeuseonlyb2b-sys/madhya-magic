import type { DestinationContent } from "./types";

// All images served from Cloudinary
const images = {
  // Attraction images – mapped to sanchiattraction1..4
  sanchiattraction1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780135/sanchiattraction1_lmxmx5.jpg",
  sanchiattraction2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780155/sanchiattraction2_ukf4ys.jpg",
  sanchiattraction3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780158/sanchiattraction3_qmz8lx.jpg",
  sanchiattraction4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780162/sanchiattraction4_phfwuj.jpg",

  // Gallery images – mapped to sanchigallary1..6
  sanchigallary1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780165/sanchigallary1_tfrwp8.jpg",
  sanchigallary2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780168/sanchigallary2_h3yftr.jpg",
  sanchigallary3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780172/sanchigallary3_lkwr0z.jpg",
  sanchigallary4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780175/sanchigallary4_hkee4i.jpg",
  sanchigallary5:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780178/sanchigallary5_icqvns.jpg",
  sanchigallary6:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780181/sanchigallary6_szrhg0.jpg",
};

const sanchi: DestinationContent = {
  overviewParagraphs: [
    "Sanchi is one of India's most important Buddhist heritage destinations and a UNESCO World Heritage Site located in Madhya Pradesh.",
    "Famous for its ancient stupas, monasteries and stone carvings, Sanchi preserves the rich legacy of Emperor Ashoka and Buddhist architecture.",
    "The hilltop complex offers a fascinating journey through history, spirituality and art, attracting visitors from around the world.",
  ],

  attractions: [
    {
      title: "Great Stupa of Sanchi",
      description:
        "The iconic UNESCO World Heritage monument built by Emperor Ashoka and the most famous attraction in Sanchi.",
      image: images.sanchiattraction1,
    },
    {
      title: "Ashoka Pillar",
      description:
        "A historic sandstone pillar erected by Emperor Ashoka, symbolizing the spread of Buddhism.",
      image: images.sanchiattraction2,
    },
    {
      title: "Sanchi Archaeological Museum",
      description:
        "A museum showcasing sculptures, relics and artifacts discovered from the Sanchi complex.",
      image: images.sanchiattraction3,
    },
    {
      title: "Gupta Temple",
      description:
        "One of the earliest surviving temple structures in India, showcasing remarkable Gupta-era architecture and craftsmanship.",
      image: images.sanchiattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Heritage Exploration",
      description: "Discover ancient Buddhist monuments and architecture.",
      icon: "🏛️",
    },
    {
      title: "Museum Visit",
      description: "Explore historical artifacts and archaeological treasures.",
      icon: "📚",
    },
    {
      title: "Photography",
      description: "Capture stunning carvings, stupas and panoramic views.",
      icon: "📸",
    },
    {
      title: "Spiritual Reflection",
      description: "Experience the peaceful atmosphere of the Buddhist complex.",
      icon: "☸️",
    },
    {
      title: "Guided Tours",
      description: "Learn about Sanchi's rich history and significance.",
      icon: "🎧",
    },
    {
      title: "Sunrise Sightseeing",
      description: "Enjoy beautiful views from the hilltop heritage site.",
      icon: "🌅",
    },
  ],

  experiences: [
    {
      title: "UNESCO Heritage",
      description:
        "Explore one of India's most celebrated World Heritage Sites.",
    },
    {
      title: "Buddhist Legacy",
      description:
        "Discover the spiritual and cultural history of Buddhism.",
    },
    {
      title: "Ancient Architecture",
      description:
        "Admire intricate carvings, gateways and historic monuments.",
    },
    {
      title: "Peaceful Atmosphere",
      description:
        "Experience serenity amidst centuries-old heritage structures.",
    },
  ],

  gallery: [
    images.sanchigallary1,
    images.sanchigallary2,
    images.sanchigallary3,
    images.sanchigallary4,
    images.sanchigallary5,
    images.sanchigallary6,
  ],

  travelInfo: {
    bestTime:
      "October to March — ideal for heritage exploration and sightseeing",
    road:
      "Well-connected by road from Bhopal, Vidisha and nearby cities.",
    rail:
      "The nearest railway station is Sanchi Railway Station.",
    air:
      "The nearest airport is Raja Bhoj Airport, Bhopal.",
  },

  duration: "1 Day",
};

export default sanchi;