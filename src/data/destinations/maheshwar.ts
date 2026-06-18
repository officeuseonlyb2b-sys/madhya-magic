import type { DestinationContent } from "./types";

// All images served from Cloudinary
const images = {
  // Attraction images – mapped to the exact variable names used in the code
  maheshwarattraction1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781776215/maheswarattraction1_ff5sdv.jpg",
  maheshwarattraction2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781776236/maheswarattraction2_ri4hjg.jpg",
  maheshwarattraction3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781776238/maheswarattraction3_zplzpi.jpg",
  maheshwarattraction4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781776241/maheswarattraction4_jc9ieu.jpg",

  // Gallery images – mapped to maheshwargallary1..11
  maheshwargallary1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781776246/maheswargallary1_jghwrs.jpg",
  maheshwargallary2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781776247/maheswargallary2_bfiayu.jpg",
  maheshwargallary3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781776248/maheswargallary3_n1ey7u.jpg",
  maheshwargallary4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781776251/maheswargallary4_aoayhy.jpg",
  maheshwargallary5:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781776253/maheswargallary5_agkxxr.jpg",
  maheshwargallary6:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781776256/maheswargallary6_sjwrdu.jpg",
  maheshwargallary7:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781776258/maheswargallary7_fea5h2.jpg",
  maheshwargallary8:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781776261/maheswargallary8_dbmxgv.jpg",
  maheshwargallary9:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781776266/maheswargallary9_xk85q2.jpg",
  maheshwargallary10:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781776266/maheswargallary10_hl0cl1.jpg",
  maheshwargallary11:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781776269/maheswargallary11_px9zve.jpg",
};

const maheshwar: DestinationContent = {
  overviewParagraphs: [
    "Maheshwar — a serene riverside town in Madhya Pradesh — is famous for its majestic ghats, spiritual atmosphere and royal Holkar heritage.",
    "Situated gracefully on the banks of the sacred Narmada River, Maheshwar blends timeless temples, historic forts and peaceful riverfront beauty.",
    "From the grandeur of Ahilya Fort and evening Narmada aarti to the elegance of world-famous Maheshwari sarees, Maheshwar offers a soulful cultural experience.",
  ],

  attractions: [
    {
      title: "Ahilya Fort",
      description:
        "A magnificent riverside fort built by Queen Ahilyabai Holkar overlooking the Narmada River.",
      image: images.maheshwarattraction1,
    },
    {
      title: "Narmada Ghats",
      description:
        "Beautiful stone ghats where visitors enjoy peaceful river views and evening aarti ceremonies.",
      image: images.maheshwarattraction2,
    },
    {
      title: "Ahilyeshwar Temple",
      description:
        "A beautifully carved Shiva temple near Ahilya Fort known for its intricate architecture and spiritual ambience.",
      image: images.maheshwarattraction4,
    },
    {
      title: "Maheshwari Saree Weaving Centers",
      description:
        "Traditional weaving workshops famous for crafting elegant Maheshwari sarees.",
      image: images.maheshwarattraction3,
    },
  ],

  thingsToDo: [
    {
      title: "Narmada Aarti",
      description: "Witness the peaceful evening aarti beside the sacred river.",
      icon: "🪔",
    },
    {
      title: "Fort Exploration",
      description: "Discover royal architecture and historic Holkar heritage.",
      icon: "🏰",
    },
    {
      title: "Boat Ride",
      description: "Enjoy scenic boat rides on the calm waters of the Narmada.",
      icon: "🚤",
    },
    {
      title: "Saree Shopping",
      description: "Shop for authentic handwoven Maheshwari sarees and textiles.",
      icon: "🛍️",
    },
    {
      title: "Temple Visits",
      description: "Explore ancient temples and spiritual landmarks.",
      icon: "🛕",
    },
    {
      title: "Riverside Photography",
      description: "Capture stunning sunrise and sunset views at the ghats.",
      icon: "📸",
    },
  ],

  experiences: [
    {
      title: "Spiritual Serenity",
      description:
        "Experience peace and devotion beside the sacred Narmada River.",
    },
    {
      title: "Royal Holkar Legacy",
      description:
        "Discover the inspiring history of Queen Ahilyabai Holkar and her kingdom.",
    },
    {
      title: "Cultural Craftsmanship",
      description:
        "Witness the timeless artistry behind Maheshwari handloom weaving.",
    },
    {
      title: "Riverside Charm",
      description:
        "Relax amidst calm river views, historic architecture and spiritual ambience.",
    },
  ],

  gallery: [
    images.maheshwargallary1,
    images.maheshwargallary2,
    images.maheshwargallary3,
    images.maheshwargallary4,
    images.maheshwargallary5,
    images.maheshwargallary6,
    images.maheshwargallary7,
    images.maheshwargallary8,
    images.maheshwargallary9,
    images.maheshwargallary10,
    images.maheshwargallary11,
  ],

  travelInfo: {
    bestTime: "October to March — pleasant weather for sightseeing and riverfront experiences",
    road:
      "Well-connected by road from Indore, Omkareshwar and nearby cities.",
    rail:
      "The nearest major railway station is Indore Junction (~95 km).",
    air:
      "The nearest airport is Devi Ahilya Bai Holkar Airport in Indore.",
  },

  duration: "2 Days / 1 Night",
};

export default maheshwar;