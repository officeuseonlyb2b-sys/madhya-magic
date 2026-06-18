import type { DestinationContent } from "./types";

// All images served from Cloudinary
const images = {
  // Attraction images – mapped to omkareshwarattraction1..4
  omkareshwarattraction1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777951/omkareshwarattraction1_y6henm.jpg",
  omkareshwarattraction2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777955/omkareshwarattraction2_prqe8z.jpg",
  omkareshwarattraction3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777959/omkareshwarattraction3_dnowv3.jpg",
  omkareshwarattraction4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777960/omkareshwarattraction4_nccw4u.jpg",

  // Gallery images – mapped to omkareshwargallary1..12
  omkareshwargallary1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777964/omkareshwargallary1_l1ymkg.jpg",
  omkareshwargallary2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777968/omkareshwargallary2_qhslds.jpg",
  omkareshwargallary3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777969/omkareshwargallary3_yadas4.jpg",
  omkareshwargallary4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777973/omkareshwargallary4_kg9jmr.jpg",
  omkareshwargallary5:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777975/omkareshwargallary5_tvjcrz.jpg",
  omkareshwargallary6:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777980/omkareshwargallary6_vezqax.jpg",
  omkareshwargallary7:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777982/omkareshwargallary7_kfpnzg.jpg",
  omkareshwargallary8:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777983/omkareshwargallary8_awdhcv.jpg",
  omkareshwargallary9:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777988/omkareshwargallary9_p4jso7.jpg",
  omkareshwargallary10:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777990/omkareshwargallary10_rs30z0.jpg",
  omkareshwargallary11:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777993/omkareshwargallary11_qlpsxe.jpg",
  omkareshwargallary12:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781777995/omkareshwargallary12_nxoty4.jpg",
};

const omkareshwar: DestinationContent = {
  overviewParagraphs: [
    "Omkareshwar — one of the twelve sacred Jyotirlingas of Lord Shiva — is among the most important pilgrimage destinations in India.",
    "Located on the serene Narmada River, the island of Omkareshwar is shaped like the sacred 'Om' symbol and attracts devotees from across the world.",
    "With ancient temples, spiritual rituals, riverfront ghats and breathtaking Narmada views, Omkareshwar offers a deeply spiritual experience.",
  ],

  attractions: [
    {
      title: "Omkareshwar Jyotirlinga Temple",
      description:
        "One of the twelve revered Jyotirlingas dedicated to Lord Shiva and the spiritual heart of Omkareshwar.",
      image: images.omkareshwarattraction1,
    },
    {
      title: "Mamleshwar Temple",
      description:
        "An ancient Shiva temple known for its intricate carvings and religious significance.",
      image: images.omkareshwarattraction2,
    },
    {
      title: "Narmada Ghat",
      description:
        "A peaceful riverside ghat where devotees perform rituals and enjoy scenic views of the Narmada.",
      image: images.omkareshwarattraction3,
    },
    {
      title: "Omkareshwar Parikrama Path",
      description:
        "A sacred pilgrimage route around the island offering spiritual and scenic experiences.",
      image: images.omkareshwarattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Temple Darshan",
      description: "Seek blessings at the sacred Omkareshwar Jyotirlinga.",
      icon: "🛕",
    },
    {
      title: "Narmada Aarti",
      description: "Witness the divine evening aarti on the banks of the Narmada.",
      icon: "🪔",
    },
    {
      title: "Parikrama",
      description: "Walk the sacred Omkareshwar Parikrama route around the island.",
      icon: "🚶",
    },
    {
      title: "Boat Ride",
      description: "Enjoy beautiful views of temples and ghats from the Narmada River.",
      icon: "🚤",
    },
    {
      title: "Spiritual Photography",
      description: "Capture stunning temple architecture and riverside scenes.",
      icon: "📸",
    },
    {
      title: "Meditation",
      description: "Experience peace and spirituality in the sacred surroundings.",
      icon: "🧘",
    },
  ],

  experiences: [
    {
      title: "Jyotirlinga Darshan",
      description:
        "Visit one of the holiest Shiva shrines in India.",
    },
    {
      title: "Spiritual Serenity",
      description:
        "Experience devotion, rituals and sacred riverfront ambience.",
    },
    {
      title: "Narmada River Beauty",
      description:
        "Enjoy breathtaking views of the holy Narmada River.",
    },
    {
      title: "Sacred Heritage",
      description:
        "Discover centuries of faith, culture and temple traditions.",
    },
  ],

  gallery: [
    images.omkareshwargallary1,
    images.omkareshwargallary2,
    images.omkareshwargallary3,
    images.omkareshwargallary4,
    images.omkareshwargallary5,
    images.omkareshwargallary6,
    images.omkareshwargallary7,
    images.omkareshwargallary8,
    images.omkareshwargallary9,
    images.omkareshwargallary10,
    images.omkareshwargallary11,
    images.omkareshwargallary12,
  ],

  travelInfo: {
    bestTime:
      "October to March — pleasant weather for pilgrimage and sightseeing",
    road:
      "Well-connected by road from Indore, Khandwa and nearby cities.",
    rail:
      "The nearest railway station is Omkareshwar Road Railway Station (~12 km).",
    air:
      "The nearest airport is Devi Ahilya Bai Holkar Airport, Indore.",
  },

  duration: "1 Day / 1 Night",
};

export default omkareshwar;