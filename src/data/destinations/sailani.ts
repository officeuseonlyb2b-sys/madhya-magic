import type { DestinationContent } from "./types";

// All images served from Cloudinary
const images = {
  // Attraction images – mapped by filename to the variable names
  sailaniattraction1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781779978/sailaniattraction1_m0ocus.jpg",
  sailaniattraction2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781779967/sailaniattraction2_kug1ly.jpg",
  sailaniattraction3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781779969/sailaniattraction3_j0kblb.jpg",
  sailaniattraction4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781779973/sailaniattraction4_bl2oqh.jpg",

  // Gallery images – mapped by filename (gallary1 … gallary7)
  sailanigallary1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781779975/sailanigallary1_cpy7q8.jpg",
  sailanigallary2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781779979/sailanigallary2_pfqfkj.jpg",
  sailanigallary3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781779983/sailanigallary3_iskbdm.jpg",
  sailanigallary4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781779987/sailanigallary4_na4wj3.jpg",
  sailanigallary5:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781779990/sailanigallary5_xhn8ih.jpg",
  sailanigallary6:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781779993/sailanigallary6_mhngyf.jpg",
  sailanigallary7:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781779997/sailanigallary7_akqfoh.jpg",
};

const sailani: DestinationContent = {
  overviewParagraphs: [
    "Sailani Island is one of Madhya Pradesh's most scenic island tourism destinations, located amidst the vast backwaters of the Indira Sagar Reservoir in Khandwa district.",
    "Surrounded by crystal-clear waters, lush landscapes and breathtaking sunsets, Sailani Island offers a perfect escape for nature lovers and adventure enthusiasts.",
    "From boating and water sports to luxury stays and island experiences, Sailani Island delivers a unique blend of relaxation, adventure and eco-tourism.",
  ],

  attractions: [
    {
      title: "Sailani Island",
      description:
        "A picturesque island destination surrounded by the expansive waters of the Indira Sagar Reservoir.",
      image: images.sailaniattraction1,
    },
    {
      title: "Indira Sagar Backwaters",
      description:
        "Vast stretches of blue water creating stunning landscapes and unforgettable views.",
      image: images.sailaniattraction2,
    },
    {
      title: "Water Sports Zone",
      description:
        "A popular adventure area offering jet skiing, speed boating and other exciting activities.",
      image: images.sailaniattraction3,
    },
    {
      title: "Sunset Point",
      description:
        "A scenic location known for spectacular sunset views over the reservoir.",
      image: images.sailaniattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Speed Boating",
      description: "Experience thrilling rides across the reservoir waters.",
      icon: "🚤",
    },
    {
      title: "Water Sports",
      description: "Enjoy exciting adventure activities on the lake.",
      icon: "🌊",
    },
    {
      title: "Photography",
      description: "Capture stunning island landscapes and sunsets.",
      icon: "📸",
    },
    {
      title: "Nature Walks",
      description: "Explore the peaceful surroundings of the island.",
      icon: "🌿",
    },
    {
      title: "Island Stay",
      description: "Relax amidst scenic waterfront accommodations.",
      icon: "🏨",
    },
    {
      title: "Sunset Viewing",
      description: "Witness mesmerizing sunsets across the backwaters.",
      icon: "🌅",
    },
  ],

  experiences: [
    {
      title: "Island Getaway",
      description:
        "Escape into a peaceful environment surrounded by water and nature.",
    },
    {
      title: "Adventure Tourism",
      description:
        "Enjoy water sports, boating and exciting outdoor experiences.",
    },
    {
      title: "Scenic Beauty",
      description:
        "Witness breathtaking reservoir views and stunning sunsets.",
    },
    {
      title: "Eco Tourism",
      description:
        "Experience sustainable tourism in a pristine natural setting.",
    },
  ],

  gallery: [
    images.sailanigallary1,
    images.sailanigallary2,
    images.sailanigallary3,
    images.sailanigallary4,
    images.sailanigallary5,
    images.sailanigallary6,
    images.sailanigallary7,
  ],

  travelInfo: {
    bestTime:
      "October to March — ideal for water sports, boating and sightseeing",
    road:
      "Well-connected by road from Khandwa, Indore and nearby cities.",
    rail:
      "The nearest railway station is Khandwa Junction.",
    air:
      "The nearest airport is Devi Ahilya Bai Holkar Airport, Indore.",
  },

  duration: "2 Days / 1 Night",
};

export default sailani;