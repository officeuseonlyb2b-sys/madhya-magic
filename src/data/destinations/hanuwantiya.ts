import type { DestinationContent } from "./types";

// All images served from Cloudinary
const images = {
  // Attraction images – mapped to the exact variable names
  hanuwantiyaattraction1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769966/hanuwantiyaattraction1_p6hdjl.jpg",
  hanuwantiyaattraction2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769966/hanuwantiyaattraction2_obrn0m.jpg",
  hanuwantiyaattraction3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769968/hanuwantiyaattraction3_dc0xis.jpg",
  hanuwantiyaattraction4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769970/hanuwantiyaattraction4_ejnlix.jpg",

  // Gallery images – mapped to hanuwantiyagallary1..5
  hanuwantiyagallary1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769973/hanuwantiyagallary1_x6wnvm.jpg",
  hanuwantiyagallary2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769976/hanuwantiyagallary2_k5dzh2.jpg",
  hanuwantiyagallary3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769979/hanuwantiyagallary3_jtmnbp.jpg",
  hanuwantiyagallary4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769978/hanuwantiyagallary4_exw26n.jpg",
  hanuwantiyagallary5:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781769980/hanuwantiyagallary5_xggjbp.jpg",
};

const hanuwantiya: DestinationContent = {
  overviewParagraphs: [
    "Hanuwantiya is Madhya Pradesh's premier water tourism destination, located on the vast backwaters of the Indira Sagar Dam in Khandwa district.",
    "Often called the 'Maldives of Madhya Pradesh', Hanuwantiya is famous for luxury floating accommodations, water sports and breathtaking lake views.",
    "From adventure activities and cruises to stunning sunsets and island experiences, Hanuwantiya offers a unique blend of relaxation and excitement.",
  ],

  attractions: [
    {
      title: "Hanuwantiya Island",
      description:
        "A picturesque island destination surrounded by the expansive waters of the Indira Sagar Reservoir.",
      image: images.hanuwantiyaattraction1,
    },
    {
      title: "Water Sports Zone",
      description:
        "The hub for adventure activities including jet skiing, speed boating, parasailing and more.",
      image: images.hanuwantiyaattraction2,
    },
    {
      title: "Floating Resort",
      description:
        "Unique floating accommodations offering unforgettable stays amidst the tranquil waters.",
      image: images.hanuwantiyaattraction3,
    },
    {
      title: "Sunset View Point",
      description:
        "One of the best locations to witness spectacular sunsets over the reservoir.",
      image: images.hanuwantiyaattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Jet Skiing",
      description: "Experience high-speed thrills across the reservoir.",
      icon: "🌊",
    },
    {
      title: "Speed Boating",
      description: "Enjoy exciting rides through the scenic backwaters.",
      icon: "🚤",
    },
    {
      title: "Parasailing",
      description: "Get breathtaking aerial views of Hanuwantiya.",
      icon: "🪂",
    },
    {
      title: "Cruise Experience",
      description: "Relax on a scenic cruise across the reservoir.",
      icon: "⛴️",
    },
    {
      title: "Photography",
      description: "Capture stunning water landscapes and sunsets.",
      icon: "📸",
    },
    {
      title: "Island Stay",
      description: "Enjoy a peaceful stay surrounded by water and nature.",
      icon: "🏕️",
    },
  ],

  experiences: [
    {
      title: "Water Adventure",
      description:
        "Experience some of the best water sports and activities in Central India.",
    },
    {
      title: "Island Escape",
      description:
        "Relax amidst scenic waters, islands and peaceful surroundings.",
    },
    {
      title: "Luxury Waterfront Stay",
      description:
        "Enjoy unique accommodation experiences overlooking the reservoir.",
    },
    {
      title: "Sunset Magic",
      description:
        "Witness unforgettable sunsets reflecting across the vast waters.",
    },
  ],

  gallery: [
    images.hanuwantiyagallary1,
    images.hanuwantiyagallary2,
    images.hanuwantiyagallary3,
    images.hanuwantiyagallary4,
    images.hanuwantiyagallary5,
  ],

  travelInfo: {
    bestTime:
      "October to March — ideal for water sports, sightseeing and outdoor activities",
    road:
      "Well-connected by road from Khandwa, Indore and nearby cities.",
    rail:
      "The nearest railway station is Khandwa Junction.",
    air:
      "The nearest airport is Devi Ahilya Bai Holkar Airport, Indore.",
  },

  duration: "2 Days / 1 Night",
};

export default hanuwantiya;