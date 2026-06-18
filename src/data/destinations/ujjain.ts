import type { DestinationContent } from "./types";

// All images served from Cloudinary
const images = {
  // Attraction images – mapped to ujjainattraction1..4
  ujjainattraction1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781660/ujjainattraction1_nzkboi.jpg",
  ujjainattraction2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781664/ujjainattraction2_qvnbvl.jpg",
  ujjainattraction3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781668/ujjainattraction3_tzefso.jpg",
  ujjainattraction4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781671/ujjainattraction4_sjdowt.jpg",

  // Gallery images – mapped to ujjaingallary1..12
  ujjaingallary1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781675/ujjaingallary1_w39auu.jpg",
  ujjaingallary2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781679/ujjaingallary2_pesjo6.jpg",
  ujjaingallary3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781683/ujjaingallary3_fz3xi3.jpg",
  ujjaingallary4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781687/ujjaingallary4_rbskc6.jpg",
  ujjaingallary5:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781690/ujjaingallary5_uezjqs.jpg",
  ujjaingallary6:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781694/ujjaingallary6_bjrpft.jpg",
  ujjaingallary7:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781698/ujjaingallary7_o2cwjc.jpg",
  ujjaingallary8:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781702/ujjaingallary8_opd8qr.jpg",
  ujjaingallary9:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781705/ujjaingallary9_qrjqrp.jpg",
  ujjaingallary10:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781709/ujjaingallary10_jzkuqm.jpg",
  ujjaingallary11:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781713/ujjaingallary11_mupsdz.jpg",
  ujjaingallary12:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781716/ujjaingallary12_ptiged.jpg",
};

const ujjain: DestinationContent = {
  overviewParagraphs: [
    "Ujjain — one of India's seven sacred cities — rests peacefully on the banks of the holy Shipra River in Madhya Pradesh.",
    "Famous for the revered Mahakaleshwar Jyotirlinga, ancient temples and spiritual energy, Ujjain attracts pilgrims and seekers from across the world.",
    "From the divine Bhasma Aarti at dawn to the vibrant ghats, bustling bazaars and timeless legends, Ujjain offers a deeply spiritual and cultural journey.",
  ],

  attractions: [
    {
      title: "Mahakaleshwar Temple",
      description:
        "One of the 12 Jyotirlingas of Lord Shiva and the spiritual heart of Ujjain.",
      image: images.ujjainattraction1,
    },
    {
      title: "Ram Ghat",
      description:
        "The most famous ghat on the Shipra River, especially vibrant during evening aarti.",
      image: images.ujjainattraction4, // original had ujjainattraction4 for Ram Ghat
    },
    {
      title: "Kal Bhairav Temple",
      description:
        "An ancient and unique temple dedicated to Kal Bhairav, known for its mystical traditions.",
      image: images.ujjainattraction3, // original had ujjainattraction3
    },
    {
      title: "Harsiddhi Temple",
      description:
        "A sacred Shakti Peeth admired for its spiritual aura and towering oil lamps.",
      image: images.ujjainattraction2, // original had ujjainattraction2
    },
  ],

  thingsToDo: [
    {
      title: "Attend Bhasma Aarti",
      description: "Experience the iconic pre-dawn ritual at Mahakaleshwar.",
      icon: "🛕",
    },
    {
      title: "Shipra River Aarti",
      description: "Witness the spiritual evening aarti at Ram Ghat.",
      icon: "🪔",
    },
    {
      title: "Temple Trail",
      description: "Explore ancient temples and sacred spiritual sites.",
      icon: "🚩",
    },
    {
      title: "Local Bazaar Walk",
      description: "Shop for prasad, rudraksha and traditional handicrafts.",
      icon: "🛍️",
    },
    {
      title: "Street Food Experience",
      description: "Taste local kachori, poha and traditional sweets.",
      icon: "🍲",
    },
    {
      title: "Spiritual Photography",
      description: "Capture the divine architecture and riverfront ambience.",
      icon: "📸",
    },
  ],

  experiences: [
    {
      title: "Sacred Morning Rituals",
      description:
        "Feel the spiritual energy of Ujjain during sunrise prayers and temple chants.",
    },
    {
      title: "Kumbh Mela Legacy",
      description:
        "Discover the ancient significance of Simhastha Kumbh held in Ujjain.",
    },
    {
      title: "Evening by the Ghats",
      description:
        "Relax beside the Shipra River surrounded by lamps and devotional music.",
    },
    {
      title: "Mythology & History",
      description:
        "Explore stories of Shiva, ancient astronomy and timeless Hindu traditions.",
    },
  ],

  gallery: [
    images.ujjaingallary1,
    images.ujjaingallary2,
    images.ujjaingallary3,
    images.ujjaingallary4,
    images.ujjaingallary5,
    images.ujjaingallary6,
    images.ujjaingallary7,
    images.ujjaingallary8,
    images.ujjaingallary9,
    images.ujjaingallary10,
    images.ujjaingallary11,
    images.ujjaingallary12,
  ],

  travelInfo: {
    bestTime: "October to March — ideal weather for temple visits and sightseeing",
    road:
      "Well-connected by road from Indore, Bhopal and nearby cities of Madhya Pradesh.",
    rail:
      "Ujjain Junction connects major Indian cities through regular train services.",
    air:
      "The nearest airport is Devi Ahilya Bai Holkar Airport in Indore (~55 km).",
  },

  duration: "2 Days / 1 Night",
};

export default ujjain;