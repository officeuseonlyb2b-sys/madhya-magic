import type { DestinationContent } from "./types";

// All images served from Cloudinary
const images = {
  // Gallery images (order from the provided list)
  gallery1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781765358/bhedaghatgallary1_qag3uh.jpg",
  gallery2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781765358/bhedaghatgallary2_zqwryf.jpg",
  gallery3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781765359/bhedaghatgallary3_zu8vrb.jpg",
  gallery5:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781765359/bhedaghatgallary5_gmj7xt.jpg",
  gallery4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781765360/bhedaghatgallary4_suyjcz.jpg",
  gallery6:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781765362/bhedaghatgallary6_zerna4.jpg",
  gallery7:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781765363/bhedaghatgallary7_gl4b17.jpg",
  gallery8:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781765364/bhedaghatgallary8_knrkox.jpg",
  gallery9:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781765365/bhedaghatgallary9_bscvnu.jpg",
  gallery10:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781765366/bhedaghatgallary10_joqqdw.jpg",

  // Attraction images (last four URLs)
  bhedaGhat:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781765496/Jabalpur-Bheda-Ghat_zip2p7.webp",
  chausath:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781765497/Jabalpur-Chausath-Yogini_d7ruhq.webp",
  ropeway:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781765498/Jabalpur-Dhuadhar-Ropeway_sr31ft.webp",
  dhuadhar:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781765499/Jabalpur-Dhuadhar-Waterfall_zxbeib.webp",
};

const bhedaghat: DestinationContent = {
  overviewParagraphs: [
    "Bhedaghat is one of Madhya Pradesh's most spectacular natural wonders — a 25-kilometre stretch where the Narmada river carves its way through gleaming white marble cliffs that soar nearly 100 feet above the water.",

    "Famous for the thundering Dhuandhar Falls — literally the 'smoke cascade' — and the surreal marble gorge that glows silver under the moon, Bhedaghat has inspired poets, painters and pilgrims for centuries.",

    "Pair a sunrise boat ride through the marble canyons with the bird's-eye ropeway view of Dhuandhar, and you have one of the most photogenic short escapes in central India.",
  ],

  attractions: [
    {
      title: "Dhuandhar Falls",
      description:
        "The mighty Narmada plunges 30 metres through a narrow chasm, throwing up clouds of mist that give the falls their name.",
      image: images.dhuadhar,
    },
    {
      title: "Marble Rocks",
      description:
        "Glistening white and pale-pink marble cliffs flank both sides of the river — best seen from a slow gondola at sunset or under the full moon.",
      image: images.bhedaGhat,
    },
    {
      title: "Dhuandhar Ropeway",
      description:
        "Glide across the gorge in a cable car for a breathtaking aerial view of the falls and the marble canyon.",
      image: images.ropeway,
    },
    {
      title: "Chausath Yogini Temple",
      description:
        "A 10th-century circular temple of 64 yoginis perched on a hilltop overlooking the Narmada.",
      image: images.chausath,
    },
  ],

  thingsToDo: [
    {
      title: "Marble Gorge Boat Ride",
      description: "Glide between towering marble cliffs on a traditional rowboat.",
      icon: "⛵",
    },
    {
      title: "Dhuandhar Ropeway",
      description: "Aerial cable-car view across the thundering falls.",
      icon: "🚠",
    },
    {
      title: "Sunset at Panchvati Ghat",
      description: "Golden hour over the Narmada — pure magic.",
      icon: "🌅",
    },
    {
      title: "Full-Moon Boating",
      description: "On full-moon nights the marble glows silver.",
      icon: "🌕",
    },
    {
      title: "Chausath Yogini Trek",
      description: "Short climb to the ancient hilltop temple.",
      icon: "🛕",
    },
    {
      title: "Riverside Photography",
      description: "One of India's most photogenic gorges.",
      icon: "📷",
    },
  ],

  experiences: [
    {
      title: "Moonlight on Marble",
      description: "On Sharad Purnima nights, the marble cliffs shimmer under the full moon — an unforgettable boat ride.",
    },
    {
      title: "Smoke of the Narmada",
      description: "Stand on the viewing deck as Dhuandhar Falls roars and mist drifts up to soak you.",
    },
    {
      title: "Stone-Carved Stories",
      description: "Local boatmen narrate legends embedded in every marble formation along the gorge.",
    },
    {
      title: "Sunrise Aarti at the Ghats",
      description: "Watch the river wake up to chants, lamps and birdsong.",
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
    images.gallery9,
    images.gallery10,
  ],

  travelInfo: {
    bestTime: "October to March (full-moon nights are extra special)",
    road: "Just 25 km from Jabalpur on a smooth state highway — taxis and auto-rickshaws run all day.",
    rail: "Jabalpur Junction (25 km) is the nearest major railhead, connected to Delhi, Mumbai, Kolkata and Chennai.",
    air: "Jabalpur Dumna Airport (~30 km) has direct flights from Delhi, Mumbai, Hyderabad and Bengaluru.",
  },

  duration: "1 Day / Half-Day Excursion",
};

export default bhedaghat;