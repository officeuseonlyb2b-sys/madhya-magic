import type { DestinationContent } from "./types";

// All images served from Cloudinary
const images = {
  // Attraction images – mapped by filename (attraction1, attraction2, attraction3, attraction4)
  attraction1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781767266/burhanpurattraction1_cgj2zb.jpg",
  attraction2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781767266/burhanpurattraction2_gkgozf.jpg",
  attraction3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781767266/burhanpurattraction3_df4o3t.jpg",
  attraction4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781767267/burhanpurattraction4_gp1m4f.jpg",

  // Gallery images – each mapped by its file name (gallary1 … gallary11)
  gallery1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781767269/burhanpurgallary1_txzc2x.jpg",
  gallery2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781767270/burhanpurgallary2_jdjyhk.jpg",
  gallery3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781767272/burhanpurgallary3_gfc42w.jpg",
  gallery4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781767273/burhanpurgallary4_v3tguh.jpg",
  gallery5:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781767274/burhanpurgallary5_rhkguq.jpg",
  gallery6:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781767276/burhanpurgallary6_skynwa.jpg",
  gallery7:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781767279/burhanpurgallary7_nelu8v.jpg",
  gallery8:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781767280/burhanpurgallary8_sjqbsb.jpg",
  gallery9:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781767280/burhanpurgallary9_lwrexc.jpg",
  gallery10:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781767282/burhanpurgallary10_dz68i3.jpg",
  gallery11:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781767283/burhanpurgallary11_ga1wks.jpg",
};

const burhanpur: DestinationContent = {
  overviewParagraphs: [
    "Burhanpur — a historic gem of Madhya Pradesh — is renowned for its Mughal heritage, majestic architecture and rich cultural legacy.",
    "Located on the banks of the Tapti River, Burhanpur once served as an important Mughal military and trading center.",
    "From grand forts and royal hammams to ancient mosques and historical monuments, Burhanpur offers a fascinating journey into India’s royal past.",
  ],

  attractions: [
    {
      title: "Black Taj",
      description:
        "A historic monument associated with Mumtaz Mahal, often referred to as the ‘Black Taj’ of Burhanpur.",
      image: images.attraction1,
    },
    {
      title: "Jama Masjid",
      description:
        "A historic mosque admired for its impressive Mughal-style design and spiritual atmosphere.",
      image: images.attraction2,
    },
    {
      title: "Ahukhana",
      description:
        "A beautiful Mughal-era garden and royal retreat known for its historical significance and peaceful surroundings.",
      image: images.attraction3,
    },
    {
      title: "Dargah-e-Hakimi",
      description:
        "A sacred pilgrimage site visited for its spiritual significance and peaceful ambience.",
      image: images.attraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Fort Exploration",
      description: "Explore ancient Mughal forts, palaces and hidden tunnels.",
      icon: "🏰",
    },
    {
      title: "Heritage Walks",
      description: "Walk through historic streets and royal monuments.",
      icon: "🚶",
    },
    {
      title: "Photography",
      description: "Capture the beauty of Mughal architecture and landscapes.",
      icon: "📸",
    },
    {
      title: "Spiritual Visits",
      description: "Visit sacred mosques, dargahs and heritage sites.",
      icon: "🕌",
    },
    {
      title: "Local Food Experience",
      description: "Enjoy authentic local flavors and traditional cuisine.",
      icon: "🍴",
    },
    {
      title: "Riverside Relaxation",
      description: "Spend peaceful moments near the Tapti River.",
      icon: "🌊",
    },
  ],

  experiences: [
    {
      title: "Mughal Heritage",
      description:
        "Discover the grandeur and legacy of Burhanpur’s royal past.",
    },
    {
      title: "Architectural Wonders",
      description:
        "Admire stunning Mughal-era forts, mosques and palaces.",
    },
    {
      title: "Spiritual Ambience",
      description:
        "Experience peace and devotion at historic religious sites.",
    },
    {
      title: "Historic Charm",
      description:
        "Feel the timeless atmosphere of one of Central India’s oldest cities.",
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
  ],

  travelInfo: {
    bestTime:
      "October to March — ideal weather for sightseeing and heritage exploration",
    road:
      "Well-connected by road from Indore, Khandwa and nearby cities.",
    rail:
      "Burhanpur Railway Station connects the city with major Indian destinations.",
    air:
      "The nearest airport is Devi Ahilya Bai Holkar Airport in Indore.",
  },

  duration: "2 Days / 1 Night",
};

export default burhanpur;