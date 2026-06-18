import type { DestinationContent } from "./types";

// All images served from Cloudinary
const images = {
  // Attraction images (ordered by the provided list)
  attraction3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781765856/bhimbetkaattraction3_snphk2.jpg",
  attraction4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781765855/bhimbetkaattraction4_mgb2mp.jpg",
  attraction2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781765855/bhimbetkaattraction2_rxvu1m.jpg",
  attraction1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781765854/bhimbetkaattraction1_uuzjfv.jpg",

  // Gallery images (ordered from the provided list, note gallery4 duplicate is ignored)
  gallery8:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781765867/bhimbetkagallary8_abuh7l.jpg",
  gallery7:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781765865/bhimbetkagallary7_vdv7kq.jpg",
  gallery6:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781765864/bhimbetkagallary6_iqhd1x.jpg",
  gallery5:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781765862/bhimbetkagallary5_tjaojc.jpg",
  gallery4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781765861/bhimbetkagallary4_j9pcum.jpg",
  gallery3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781765860/bhimbetkagallary3_rkhxbu.jpg",
  gallery2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781765859/bhimbetkagallary2_flionj.jpg",
  gallery1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781765857/bhimbetkagallary1_kabhvb.jpg",
};

const bhimbetka: DestinationContent = {
  overviewParagraphs: [
    "Bhimbetka — a UNESCO World Heritage Site in Madhya Pradesh — is one of the oldest known human settlements in the Indian subcontinent.",
    "Famous for its prehistoric rock shelters and ancient cave paintings, Bhimbetka offers a fascinating journey into early human civilization.",
    "Surrounded by forests and sandstone hills, the site beautifully combines archaeology, nature and timeless history.",
  ],

  attractions: [
    {
      title: "Rock Shelters",
      description:
        "Explore ancient natural caves believed to have been inhabited by early humans thousands of years ago.",
      image: images.attraction1,
    },
    {
      title: "Prehistoric Cave Paintings",
      description:
        "Admire fascinating paintings depicting hunting scenes, animals and daily life from prehistoric times.",
      image: images.attraction2,
    },
    {
      title: "Turtle Rock",
      description:
        "A naturally shaped rock formation resembling a giant turtle, surrounded by scenic forest landscapes and ancient cave shelters.",
      image: images.attraction3,
    },
    {
      title: "Zoo Rock Shelter",
      description:
        "A fascinating prehistoric rock shelter featuring ancient paintings of animals and hunting scenes from early human civilization.",
      image: images.attraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Cave Exploration",
      description: "Walk through ancient rock shelters and archaeological sites.",
      icon: "🪨",
    },
    {
      title: "History Discovery",
      description: "Learn about prehistoric human life and ancient art.",
      icon: "📜",
    },
    {
      title: "Nature Walks",
      description: "Enjoy scenic trails through forests and rocky terrain.",
      icon: "🌿",
    },
    {
      title: "Photography Tour",
      description: "Capture unique cave paintings and natural formations.",
      icon: "📸",
    },
    {
      title: "Heritage Learning",
      description: "Explore one of India's most important archaeological treasures.",
      icon: "🏺",
    },
    {
      title: "Peaceful Exploration",
      description: "Experience calm surroundings away from crowded tourist spots.",
      icon: "🌄",
    },
  ],

  experiences: [
    {
      title: "Journey into Prehistory",
      description:
        "Step back thousands of years into the lives of early human civilizations.",
    },
    {
      title: "Ancient Art Appreciation",
      description:
        "Witness some of the oldest surviving cave paintings in the world.",
    },
    {
      title: "Nature & Heritage Blend",
      description:
        "Experience a perfect combination of history, forests and natural beauty.",
    },
    {
      title: "UNESCO Heritage Experience",
      description:
        "Explore one of India's most significant cultural heritage sites.",
    },
  ],

  gallery: [
    images.gallery1,
    images.gallery2,
    images.gallery3,
    images.gallery4,
    images.gallery5,
    images.gallery6,
    images.gallery7,
    images.gallery8,
  ],

  travelInfo: {
    bestTime: "October to March — pleasant weather for outdoor exploration",
    road:
      "Well-connected by road from Bhopal (~45 km) and nearby towns.",
    rail:
      "Bhopal Junction is the nearest major railway station with nationwide connectivity.",
    air:
      "Raja Bhoj Airport in Bhopal is the nearest airport with regular domestic flights.",
  },

  duration: "1 Day Trip",
};

export default bhimbetka;