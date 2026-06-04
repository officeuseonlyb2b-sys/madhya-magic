import type { DestinationContent } from "./types";

import hanuwantiyaattraction1 from "@/assets/destimages/hanuwantiyaattraction1.jpeg";
import hanuwantiyaattraction2 from "@/assets/destimages/hanuwantiyaattraction2.jpeg";
import hanuwantiyaattraction3 from "@/assets/destimages/hanuwantiyaattraction3.jpeg";
import hanuwantiyaattraction4 from "@/assets/destimages/hanuwantiyaattraction4.jpeg";

// gallery

import hanuwantiyagallary1 from "@/assets/destimages/hanuwantiyagallary1.jpeg";
import hanuwantiyagallary2 from "@/assets/destimages/hanuwantiyagallary2.jpeg";
import hanuwantiyagallary3 from "@/assets/destimages/hanuwantiyagallary3.jpeg";
import hanuwantiyagallary4 from "@/assets/destimages/hanuwantiyagallary4.jpeg";
import hanuwantiyagallary5 from "@/assets/destimages/hanuwantiyagallary5.jpeg";

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
      image: hanuwantiyaattraction1,
    },
    {
      title: "Water Sports Zone",
      description:
        "The hub for adventure activities including jet skiing, speed boating, parasailing and more.",
      image: hanuwantiyaattraction2,
    },
    {
      title: "Floating Resort",
      description:
        "Unique floating accommodations offering unforgettable stays amidst the tranquil waters.",
      image: hanuwantiyaattraction3,
    },
    {
      title: "Sunset View Point",
      description:
        "One of the best locations to witness spectacular sunsets over the reservoir.",
      image: hanuwantiyaattraction4,
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
    hanuwantiyagallary1,
    hanuwantiyagallary2,
    hanuwantiyagallary3,
    hanuwantiyagallary4,
    hanuwantiyagallary5,
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