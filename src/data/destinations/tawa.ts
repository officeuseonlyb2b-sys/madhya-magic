import type { DestinationContent } from "./types";

// All images served from Cloudinary
const images = {
  // Attraction images – mapped to tawaattraction1..4
  tawaattraction1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781580/tawaattraction1_k7s239.jpg",
  tawaattraction2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781583/tawaattraction2_vu2gue.jpg",
  tawaattraction3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781588/tawaattraction3_avrcu4.jpg",
  tawaattraction4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781591/tawaattraction4_gotist.jpg",

  // Gallery images – mapped by filename (tawagallary1..6)
  tawagallary1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781598/tawagallary1_lngia3.jpg",
  tawagallary2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781607/tawagallary2_a6aiki.jpg",
  tawagallary3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781606/tawagallary3_k8pzh9.jpg",
  tawagallary4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781617/tawagallary4_hfylrp.jpg",
  tawagallary5:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781616/tawagallary5_szd5nh.jpg",
  tawagallary6:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781781624/tawagallary6_dstjmz.jpg",
};

const tawa: DestinationContent = {
  overviewParagraphs: [
    "Tawa Reservoir is one of Madhya Pradesh’s most scenic eco-tourism destinations, known for its vast backwaters, islands and stunning natural beauty.",
    "Located near Satpura National Park, Tawa offers a unique combination of water-based adventure, wildlife experiences and peaceful landscapes.",
    "From boat safaris and birdwatching to breathtaking sunsets over the reservoir, Tawa is a perfect getaway for nature lovers and adventure seekers.",
  ],

  attractions: [
    {
      title: "Tawa Reservoir",
      description:
        "A massive reservoir surrounded by hills and forests, famous for its scenic beauty and boating experiences.",
      image: images.tawaattraction1,
    },
    {
      title: "Boat Safari",
      description:
        "Enjoy thrilling boat safaris across the vast waters while exploring islands and wildlife-rich surroundings.",
      image: images.tawaattraction2,
    },
    {
      title: "Bird Watching",
      description:
        "Spot migratory and resident bird species along the reservoir and nearby wetlands.",
      image: images.tawaattraction3,
    },
    {
      title: "Sunset Point",
      description:
        "Witness spectacular sunset views over the calm waters of the Tawa Reservoir.",
      image: images.tawaattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Boat Safari",
      description: "Explore the reservoir and enjoy scenic water adventures.",
      icon: "🚤",
    },
    {
      title: "Bird Watching",
      description: "Observe a variety of migratory and native birds.",
      icon: "🦜",
    },
    {
      title: "Nature Photography",
      description: "Capture stunning landscapes, wildlife and sunsets.",
      icon: "📸",
    },
    {
      title: "Sunset Viewing",
      description: "Enjoy breathtaking sunset views across the reservoir.",
      icon: "🌅",
    },
    {
      title: "Eco Tourism",
      description: "Experience the natural beauty of the Satpura region.",
      icon: "🌿",
    },
    {
      title: "Relaxation",
      description: "Spend peaceful time amidst water, forests and hills.",
      icon: "🏞️",
    },
  ],

  experiences: [
    {
      title: "Water Adventure",
      description:
        "Enjoy unique boat safaris through one of Madhya Pradesh's largest reservoirs.",
    },
    {
      title: "Natural Beauty",
      description:
        "Experience stunning landscapes of water, forests and hills.",
    },
    {
      title: "Birding Paradise",
      description:
        "Discover diverse birdlife in a peaceful natural setting.",
    },
    {
      title: "Scenic Escape",
      description:
        "Relax amidst serene surroundings away from city life.",
    },
  ],

  gallery: [
    images.tawagallary1,
    images.tawagallary2,
    images.tawagallary3,
    images.tawagallary4,
    images.tawagallary5,
    images.tawagallary6,
  ],

  travelInfo: {
    bestTime:
      "October to March — ideal weather for boating, birdwatching and sightseeing",
    road:
      "Well-connected by road from Hoshangabad (Narmadapuram), Itarsi and Bhopal.",
    rail:
      "The nearest railway station is Itarsi Junction.",
    air:
      "The nearest airport is Raja Bhoj Airport, Bhopal.",
  },

  duration: "1 Day / 1 Night",
};

export default tawa;