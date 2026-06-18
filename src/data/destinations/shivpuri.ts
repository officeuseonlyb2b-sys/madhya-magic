import type { DestinationContent } from "./types";

// All images served from Cloudinary
const images = {
  // Attraction images – mapped to shivpuriattraction1..4
  shivpuriattraction1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780811/shivpuriattraction1_nvdyrp.jpg",
  shivpuriattraction2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780813/shivpuriattraction2_rki1rd.jpg",
  shivpuriattraction3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780818/shivpuriattraction3_lc3ov5.jpg",
  shivpuriattraction4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780821/shivpuriattraction4_udhh5u.jpg",

  // Gallery images – mapped to shivpurigallary1..9, 11, 12
  shivpurigallary1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780825/shivpurigallary1_ntlyok.jpg",
  shivpurigallary2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780829/shivpurigallary2_du6ypt.jpg",
  shivpurigallary3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780832/shivpurigallary3_flxj4y.jpg",
  shivpurigallary4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780838/shivpurigallary4_rxaat1.jpg",
  shivpurigallary5:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780839/shivpurigallary5_gm8op7.jpg",
  shivpurigallary6:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780845/shivpurigallary6_ldqrlp.jpg",
  shivpurigallary7:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780847/shivpurigallary7_uacjrx.jpg",
  shivpurigallary8:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780852/shivpurigallary8_umkwep.jpg",
  shivpurigallary9:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780856/shivpurigallary9_caiqug.jpg",
  shivpurigallary11:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780861/shivpurigallary11_riasvq.jpg",
  shivpurigallary12:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780862/shivpurigallary12_vg6nme.jpg",
};

const shivpuri: DestinationContent = {
  overviewParagraphs: [
    "Shivpuri — a serene heritage and nature destination of Madhya Pradesh — is known for its royal palaces, lush forests and peaceful lakes.",
    "Once the summer capital of the Scindia rulers, Shivpuri beautifully combines history, spirituality and wildlife experiences.",
    "From tranquil boating spots and ancient cenotaphs to thrilling jungle safaris and waterfalls, Shivpuri offers a refreshing escape into nature and heritage.",
  ],

  attractions: [
    {
      title: "Madhav National Park",
      description:
        "A scenic wildlife reserve home to deer, leopards, birds and beautiful forest landscapes.",
      image: images.shivpuriattraction1,
    },
    {
      title: "Scindia Chhatris",
      description:
        "Elegant royal cenotaphs showcasing magnificent Rajput and Mughal architecture.",
      image: images.shivpuriattraction2,
    },
    {
      title: "Bhadaiya Kund",
      description:
        "A crystal-clear natural water reservoir surrounded by greenery and peaceful views.",
      image: images.shivpuriattraction3,
    },
    {
      title: "Sakhya Sagar Lake",
      description:
        "A tranquil lake ideal for boating, birdwatching and sunset photography.",
      image: images.shivpuriattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Wildlife Safari",
      description: "Explore forests and spot wildlife in Madhav National Park.",
      icon: "🦌",
    },
    {
      title: "Boating Experience",
      description: "Enjoy peaceful boating at Sakhya Sagar Lake.",
      icon: "🚣",
    },
    {
      title: "Heritage Exploration",
      description: "Visit royal cenotaphs and historic architectural sites.",
      icon: "🏛️",
    },
    {
      title: "Nature Photography",
      description: "Capture forests, lakes and beautiful sunset landscapes.",
      icon: "📸",
    },
    {
      title: "Picnic by Bhadaiya Kund",
      description: "Relax amidst nature beside crystal-clear water.",
      icon: "🌿",
    },
    {
      title: "Bird Watching",
      description: "Spot migratory and native birds around lakes and forests.",
      icon: "🕊️",
    },
  ],

  experiences: [
    {
      title: "Royal Legacy",
      description:
        "Experience the elegance of Shivpuri's royal Scindia heritage.",
    },
    {
      title: "Peaceful Nature Escapes",
      description:
        "Reconnect with nature through forests, lakes and calm surroundings.",
    },
    {
      title: "Wildlife Adventure",
      description:
        "Enjoy thrilling safaris and encounters with diverse wildlife.",
    },
    {
      title: "Serene Sunsets",
      description:
        "Watch golden sunsets reflecting beautifully across Shivpuri's lakes.",
    },
  ],

  gallery: [
    images.shivpurigallary1,
    images.shivpurigallary2,
    images.shivpurigallary3,
    images.shivpurigallary4,
    images.shivpurigallary5,
    images.shivpurigallary6,
    images.shivpurigallary7,
    images.shivpurigallary8,
    images.shivpurigallary9,
    images.shivpurigallary11,
    images.shivpurigallary12,
  ],

  travelInfo: {
    bestTime: "October to March — ideal weather for safaris and sightseeing",
    road:
      "Well-connected by road from Gwalior, Jhansi and nearby cities.",
    rail:
      "Shivpuri Railway Station provides connectivity to regional rail routes.",
    air:
      "The nearest airport is Gwalior Airport (~115 km) with domestic flights.",
  },

  duration: "2 Days / 1 Night",
};

export default shivpuri;