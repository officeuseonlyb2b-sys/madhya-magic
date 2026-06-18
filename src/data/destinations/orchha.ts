import type { DestinationContent } from "./types";

// All images served from Cloudinary
const images = {
  // Attraction images – mapped to orchhaattraction1..4
  orchhaattraction1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778166/orchhaattraction1_x3z81g.jpg",
  orchhaattraction2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778168/orchhaattraction2_rusemq.jpg",
  orchhaattraction3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778172/orchhaattraction3_t1gx8t.jpg",
  orchhaattraction4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778185/orchhaattraction4_ik8wwu.jpg",

  // Gallery images – mapped to orchhagallary1..11
  orchhagallary1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778188/orchhagallary1_rmlfyr.jpg",
  orchhagallary2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778191/orchhagallary2_zbmkzm.jpg",
  orchhagallary3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778194/orchhagallary3_zrdkkt.jpg",
  orchhagallary4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778197/orchhagallary4_qqs4p0.jpg",
  orchhagallary5:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778200/orchhagallary5_lhpcoe.jpg",
  orchhagallary6:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778203/orchhagallary6_pwcmym.jpg",
  orchhagallary7:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778206/orchhagallary7_rixrof.jpg",
  orchhagallary8:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778209/orchhagallary8_rnwbpx.jpg",
  orchhagallary9:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778211/orchhagallary9_yxwokk.jpg",
  orchhagallary10:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778215/orchhagallary10_qv731e.jpg",
  orchhagallary11:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778218/orchhagallary11_djtdzo.jpg",
};

const orchha: DestinationContent = {
  overviewParagraphs: [
    "Orchha — a hidden heritage gem of Madhya Pradesh — is known for its majestic palaces, riverside cenotaphs and timeless Bundela architecture.",
    "Nestled on the banks of the Betwa River, Orchha feels like a living medieval town where history, spirituality and tranquility blend beautifully.",
    "From grand forts and royal temples to peaceful ghats and sunset views, Orchha offers a regal yet soulful travel experience.",
  ],

  attractions: [
    {
      title: "Orchha Fort Complex",
      description:
        "A magnificent collection of palaces and courtyards showcasing Bundela-era architecture.",
      image: images.orchhaattraction1,
    },
    {
      title: "Jahangir Mahal",
      description:
        "A stunning royal palace built to honor Emperor Jahangir's visit to Orchha.",
      image: images.orchhaattraction2,
    },
    {
      title: "Chaturbhuj Temple",
      description:
        "A towering temple admired for its grand structure and panoramic town views.",
      image: images.orchhaattraction3,
    },
    {
      title: "Betwa River Cenotaphs",
      description:
        "Iconic royal chhatris lining the Betwa River, especially magical at sunset.",
      image: images.orchhaattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Fort Exploration",
      description: "Walk through ancient palaces, halls and royal courtyards.",
      icon: "🏰",
    },
    {
      title: "Sunset by Betwa River",
      description: "Enjoy peaceful golden-hour views near the cenotaphs.",
      icon: "🌅",
    },
    {
      title: "Temple Visits",
      description: "Explore sacred temples and spiritual landmarks.",
      icon: "🛕",
    },
    {
      title: "River Rafting",
      description: "Experience adventure activities on the Betwa River.",
      icon: "🚣",
    },
    {
      title: "Heritage Photography",
      description: "Capture timeless architecture and scenic landscapes.",
      icon: "📸",
    },
    {
      title: "Light & Sound Show",
      description: "Discover Orchha's royal history through evening storytelling.",
      icon: "🎇",
    },
  ],

  experiences: [
    {
      title: "Royal Heritage",
      description:
        "Feel the grandeur of Bundela kings while exploring ancient palaces.",
    },
    {
      title: "Peaceful Riverside Evenings",
      description:
        "Relax beside the Betwa River surrounded by historic cenotaphs.",
    },
    {
      title: "Architectural Beauty",
      description:
        "Admire intricate murals, domes and medieval craftsmanship.",
    },
    {
      title: "Spiritual Atmosphere",
      description:
        "Experience the calm and devotion of Orchha's temples and ghats.",
    },
  ],

  gallery: [
    images.orchhagallary1,
    images.orchhagallary2,
    images.orchhagallary3,
    images.orchhagallary4,
    images.orchhagallary5,
    images.orchhagallary6,
    images.orchhagallary7,
    images.orchhagallary8,
    images.orchhagallary9,
    images.orchhagallary10,
    images.orchhagallary11,
  ],

  travelInfo: {
    bestTime: "October to March — pleasant weather for heritage walks and sightseeing",
    road:
      "Well-connected by road from Jhansi, Gwalior and nearby cities.",
    rail:
      "Jhansi Railway Station (~18 km) is the nearest major railhead.",
    air:
      "The nearest airport is Gwalior Airport, with connectivity to major Indian cities.",
  },

  duration: "2 Days / 1 Night",
};

export default orchha;