import type { DestinationContent } from "./types";

// All images served from Cloudinary
const images = {
  // Attraction images (from the provided list in order: attraction1, attraction2, attraction3, attraction4)
  attraction1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781766623/bhopalattraction1_dmq9mr.jpg",
  attraction2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781766624/bhopalattraction2_dgjet7.jpg",
  attraction3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781766626/bhopalattraction3_vzvbxp.jpg",
  attraction4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781766627/bhopalattraction4_emkcjy.jpg",

  // Gallery images (each mapped by the filename, e.g., gallary1 → gallery1)
  gallery1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781766629/bhopalgallary1_utlzaz.jpg",
  gallery2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781766630/bhopalgallary2_mdd8bv.jpg",
  gallery3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781766632/bhopalgallary3_kdnrfp.jpg",
  gallery4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781766635/bhopalgallary4_j8ed5v.jpg",
  gallery5:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781766634/bhopalgallary5_pmq7bb.jpg",
  gallery6:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781766637/bhopalgallary6_zrb7jw.jpg",
  gallery7:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781766641/bhopalgallary7_sess5m.jpg",
  gallery8:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781766638/bhopalgallary8_vam31o.jpg",
  gallery9:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781766640/bhopalgallary9_ixyqrs.jpg",
  gallery10:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781766641/bhopalgallary10_alnupq.jpg",
  gallery11:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781766642/bhopalgallary11_oehgqk.jpg",
  gallery12:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781766645/bhopalgallary12_anszwt.jpg",
};

const bhopal: DestinationContent = {
  overviewParagraphs: [
    "Bhopal — the City of Lakes — blends royal heritage, spiritual calm and modern culture in the heart of Madhya Pradesh.",
    "Known for its beautiful Upper Lake, Mughal-era architecture and vibrant street food, Bhopal offers a perfect balance of history and urban charm.",
    "From sunrise views at Van Vihar to the grandeur of Taj-ul-Masajid and the tribal art of Bharat Bhavan, Bhopal delivers a soulful cultural experience.",
  ],

  attractions: [
    {
      title: "Upper Lake",
      description:
        "The iconic Bhojtal lake offers boating, sunset views and a peaceful escape in the center of the city.",
      image: images.attraction2, // This matches the original: bhopalattraction2 was used for Upper Lake
    },
    {
      title: "Taj-ul-Masajid",
      description:
        "One of the largest mosques in India, admired for its pink facade, domes and stunning Mughal architecture.",
      image: images.attraction1, // Original: bhopalattraction1
    },
    {
      title: "Van Vihar National Park",
      description:
        "A unique urban national park where wildlife and nature thrive beside the Upper Lake.",
      image: images.attraction3, // Original: bhopalattraction3
    },
    {
      title: "Bharat Bhavan",
      description:
        "A renowned multi-arts complex showcasing tribal art, theatre, poetry and cultural performances.",
      image: images.attraction4, // Original: bhopalattraction4
    },
  ],

  thingsToDo: [
    {
      title: "Lakefront Boating",
      description: "Enjoy boating and sunset views at Upper Lake.",
      icon: "🚤",
    },
    {
      title: "Street Food Trail",
      description: "Taste Bhopal's famous poha, jalebi and kebabs.",
      icon: "🍴",
    },
    {
      title: "Wildlife Safari",
      description: "Spot tigers, deer and birds at Van Vihar.",
      icon: "🦌",
    },
    {
      title: "Heritage Walk",
      description: "Explore old city lanes and Mughal architecture.",
      icon: "🏛️",
    },
    {
      title: "Museum Exploration",
      description: "Discover tribal culture and art galleries.",
      icon: "🎭",
    },
    {
      title: "Sunset Photography",
      description: "Capture golden-hour reflections across the lakes.",
      icon: "📸",
    },
  ],

  experiences: [
    {
      title: "Sunrise at Upper Lake",
      description:
        "Watch the calm waters glow with the first rays of sunlight.",
    },
    {
      title: "Old Bhopal Evenings",
      description:
        "Experience bustling bazaars, chai stalls and authentic local culture.",
    },
    {
      title: "Art & Culture",
      description:
        "Attend live performances and exhibitions at Bharat Bhavan.",
    },
    {
      title: "Nature Escapes",
      description:
        "Reconnect with nature through lakeside walks and green parks.",
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
    images.gallery11,
    images.gallery12,
  ],

  travelInfo: {
    bestTime: "October to March — pleasant weather and ideal sightseeing",
    road:
      "Well-connected by highways from Indore, Jabalpur and nearby cities.",
    rail:
      "Bhopal Junction and Habibganj Railway Station connect major Indian routes.",
    air:
      "Raja Bhoj Airport offers direct flights from Delhi, Mumbai, Bengaluru and more.",
  },

  duration: "2 Days / 1 Night",
};

export default bhopal;