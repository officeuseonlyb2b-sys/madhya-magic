import type { DestinationContent } from "./types";

// All images served from Cloudinary
const images = {
  // Attraction images – mapped to sanjaydubriattraction1..4
  sanjaydubriattraction1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780294/sanjaydubriattraction1_e2ifrx.jpg",
  sanjaydubriattraction2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780297/sanjaydubriattraction2_dx0ikn.jpg",
  sanjaydubriattraction3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780300/sanjaydubriattraction3_j9avzm.jpg",
  sanjaydubriattraction4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780304/sanjaydubriattraction4_or8n9a.jpg",

  // Gallery images – mapped to sanjaydubrigallary1..9
  sanjaydubrigallary1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780308/sanjaydubrigallary1_yqszh7.jpg",
  sanjaydubrigallary2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780311/sanjaydubrigallary2_ysaycp.jpg",
  sanjaydubrigallary3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780314/sanjaydubrigallary3_s829xb.jpg",
  sanjaydubrigallary4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780316/sanjaydubrigallary4_bizjcz.jpg",
  sanjaydubrigallary5:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780320/sanjaydubrigallary5_nprwo3.jpg",
  sanjaydubrigallary6:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780323/sanjaydubrigallary6_p6tidp.jpg",
  sanjaydubrigallary7:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780325/sanjaydubrigallary7_rzc8jl.jpg",
  sanjaydubrigallary8:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780333/sanjaydubrigallary8_x8qvn7.jpg",
  sanjaydubrigallary9:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781780336/sanjaydubrigallary9_o7vnue.jpg",
};

const sanjaydubri: DestinationContent = {
  overviewParagraphs: [
    "Sanjay Dubri National Park — a hidden wildlife gem of Madhya Pradesh — is known for its dense forests, rich biodiversity and peaceful jungle landscapes.",
    "Located in the Sidhi district, this tiger reserve offers thrilling wildlife safaris, scenic forest routes and untouched natural beauty.",
    "From tiger sightings and birdwatching to serene jungle experiences, Sanjay Dubri provides an offbeat wildlife adventure for nature lovers.",
  ],

  attractions: [
    {
      title: "Sanjay Dubri National Park",
      description:
        "A beautiful tiger reserve known for dense forests, wildlife and untouched natural beauty.",
      image: images.sanjaydubriattraction1,
    },
    {
      title: "Jeep Safari",
      description:
        "Experience thrilling jungle safaris through wildlife-rich forest zones.",
      image: images.sanjaydubriattraction2,
    },
    {
      title: "Tiger Spotting",
      description:
        "Witness majestic Royal Bengal Tigers and diverse wildlife species in their natural habitat.",
      image: images.sanjaydubriattraction3,
    },
    {
      title: "Bird Watching",
      description:
        "Explore rich birdlife and spot colorful migratory and native bird species.",
      image: images.sanjaydubriattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Jungle Safari",
      description: "Explore scenic forest routes and wildlife habitats.",
      icon: "🛻",
    },
    {
      title: "Tiger Spotting",
      description: "Witness Royal Bengal Tigers in the wild.",
      icon: "🐅",
    },
    {
      title: "Bird Watching",
      description: "Observe exotic birds and forest wildlife.",
      icon: "🦜",
    },
    {
      title: "Nature Photography",
      description: "Capture breathtaking wildlife and jungle landscapes.",
      icon: "📸",
    },
    {
      title: "Forest Exploration",
      description: "Enjoy peaceful natural surroundings and greenery.",
      icon: "🌿",
    },
    {
      title: "Wildlife Observation",
      description: "Spot deer, leopards and various jungle species.",
      icon: "🦌",
    },
  ],

  experiences: [
    {
      title: "Wildlife Adventure",
      description:
        "Experience thrilling safaris in one of Madhya Pradesh’s hidden tiger reserves.",
    },
    {
      title: "Untouched Nature",
      description:
        "Enjoy peaceful forests, scenic landscapes and raw wilderness.",
    },
    {
      title: "Rare Wildlife",
      description:
        "Spot tigers, leopards, deer species and exotic birds.",
    },
    {
      title: "Photography Paradise",
      description:
        "Capture unforgettable wildlife and jungle scenery.",
    },
  ],

  gallery: [
    images.sanjaydubrigallary1,
    images.sanjaydubrigallary2,
    images.sanjaydubrigallary3,
    images.sanjaydubrigallary4,
    images.sanjaydubrigallary5,
    images.sanjaydubrigallary6,
    images.sanjaydubrigallary7,
    images.sanjaydubrigallary8,
    images.sanjaydubrigallary9,
  ],

  travelInfo: {
    bestTime:
      "October to June — ideal season for wildlife safaris and tiger sightings",
    road:
      "Well-connected by road from Sidhi, Rewa and nearby cities.",
    rail:
      "The nearest railway station is Sidhi Railway Station.",
    air:
      "The nearest airport is Prayagraj Airport.",
  },

  duration: "2 Days / 1 Night",
};

export default sanjaydubri;