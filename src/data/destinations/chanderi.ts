import type { DestinationContent } from "./types";

// All images served from Cloudinary
const images = {
  // Attraction images – mapped by filename (attraction1,2,3,4)
  attraction1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769170/chanderiattraction1_oftzxw.jpg",
  attraction2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769170/chanderiattraction2_frgip4.jpg",
  attraction3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769172/chanderiattraction3_yzx3xy.jpg",
  attraction4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769171/chanderiattraction4_rylvcl.jpg",

  // Gallery images – each mapped by its variable name (gallary, gallary1…8)
  gallary: // this matches the import named "chanderigallary" (without number)
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769174/chanderigallary_mzm9gu.jpg",
  gallary1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769175/chanderigallary1_rbskna.jpg",
  gallary2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769180/chanderigallary2_jlrxzt.jpg",
  gallary3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769179/chanderigallary3_ers4hq.jpg",
  gallary4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769180/chanderigallary4_qslkm5.jpg",
  gallary5:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769182/chanderigallary5_tvxxxf.jpg",
  gallary6:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769184/chanderigallary6_ez7y2l.jpg",
  gallary7:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769185/chanderigallary7_vds41n.jpg",
  gallary8:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769186/chanderigallary8_yrfc0g.jpg",
};

const chanderi: DestinationContent = {
  overviewParagraphs: [
    "Chanderi — a timeless heritage town of Madhya Pradesh — is famous for its majestic forts, ancient architecture and world-renowned handwoven sarees.",
    "Nestled between hills and lakes, Chanderi beautifully blends Rajput, Sultanate and Mughal influences into a charming historical landscape.",
    "From grand gateways and peaceful temples to vibrant weaving traditions and scenic viewpoints, Chanderi offers a unique cultural and heritage experience.",
  ],

  attractions: [
    {
      title: "Chanderi Fort",
      description:
        "A historic hilltop fort offering panoramic views of the town and surrounding landscape.",
      image: images.attraction1,
    },
    {
      title: "Koshak Mahal",
      description:
        "An unfinished yet magnificent palace showcasing Afghan-style architecture.",
      image: images.attraction2,
    },
    {
      title: "Badal Mahal Gate",
      description:
        "An iconic ornamental gateway admired for its elegant Indo-Islamic design.",
      image: images.attraction3,
    },
    {
      title: "Jama Masjid",
      description:
        "A grand mosque reflecting the rich architectural heritage of medieval Chanderi.",
      image: images.attraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Fort Exploration",
      description: "Discover ancient fort walls, gateways and scenic viewpoints.",
      icon: "🏰",
    },
    {
      title: "Saree Weaving Tour",
      description: "Experience the craftsmanship behind famous Chanderi sarees.",
      icon: "🧵",
    },
    {
      title: "Heritage Photography",
      description: "Capture timeless architecture and cultural beauty.",
      icon: "📸",
    },
    {
      title: "Temple & Mosque Visits",
      description: "Explore spiritual and historic landmarks across the town.",
      icon: "🛕",
    },
    {
      title: "Local Market Walk",
      description: "Shop for authentic Chanderi textiles and handicrafts.",
      icon: "🛍️",
    },
    {
      title: "Sunset Views",
      description: "Enjoy peaceful sunset panoramas from the fort area.",
      icon: "🌅",
    },
  ],

  experiences: [
    {
      title: "Heritage Charm",
      description:
        "Walk through centuries-old streets filled with history and culture.",
    },
    {
      title: "Artisan Traditions",
      description:
        "Witness the delicate artistry of Chanderi's master weavers.",
    },
    {
      title: "Architectural Grandeur",
      description:
        "Admire the blend of Rajput, Mughal and Sultanate styles.",
    },
    {
      title: "Peaceful Exploration",
      description:
        "Experience a slower, quieter side of Madhya Pradesh tourism.",
    },
  ],

  gallery: [
    images.gallary,
    images.gallary1,
    images.gallary2,
    images.gallary3,
    images.gallary4,
    images.gallary5,
    images.gallary6,
    images.gallary7,
    images.gallary8,
  ],

  travelInfo: {
    bestTime: "October to March — ideal weather for sightseeing and heritage walks",
    road:
      "Well-connected by road from Gwalior, Jhansi, Bhopal and nearby cities.",
    rail:
      "The nearest major railway station is Lalitpur, connected to key rail routes.",
    air:
      "The nearest airport is Gwalior Airport with domestic connectivity.",
  },

  duration: "1 Day / 1 Night",
};

export default chanderi;