import type { DestinationContent } from "./types";

import penchattraction1 from "@/assets/destimages/penchattraction1.jpeg";
import penchattraction2 from "@/assets/destimages/penchattraction2.jpeg";
import penchattraction3 from "@/assets/destimages/penchattraction3.jpeg";
import penchattraction4 from "@/assets/destimages/penchattraction4.jpeg";

// gallery

import penchgallary1 from "@/assets/destimages/penchgallary1.jpeg";
import penchgallary2 from "@/assets/destimages/penchgallary2.jpeg";
import penchgallary3 from "@/assets/destimages/penchgallary3.jpeg";
import penchgallary4 from "@/assets/destimages/penchgallary4.jpeg";
import penchgallary5 from "@/assets/destimages/penchgallary5.jpeg";
import penchgallary6 from "@/assets/destimages/penchgallary6.jpeg";
import penchgallary7 from "@/assets/destimages/penchgallary7.jpeg";
import penchgallary8 from "@/assets/destimages/penchgallary8.jpeg";
import penchgallary9 from "@/assets/destimages/penchgallary9.jpeg";
import penchgallary10 from "@/assets/destimages/penchgallary10.jpeg";


const pench: DestinationContent = {
    overviewParagraphs: [
        "Pench National Park — one of India’s most famous wildlife destinations — is renowned for its rich biodiversity, dense teak forests and thrilling tiger safaris.",
        "Spread across Madhya Pradesh and Maharashtra, Pench inspired Rudyard Kipling’s legendary Jungle Book with its scenic forests and wildlife.",
        "From exciting jeep safaris and tiger sightings to birdwatching and river landscapes, Pench offers an unforgettable jungle adventure.",
    ],

    attractions: [
        {
            title: "Pench National Park",
            description:
                "A renowned tiger reserve known for its dense forests, rich biodiversity and wildlife safaris.",
            image: penchattraction1,
        },
        {
            title: "Jeep Safari",
            description:
                "Experience thrilling jungle safaris through Pench’s wildlife-rich forest routes.",
            image: penchattraction2,
        },
        {
            title: "Black Panther Spotting",
            description:
                "Experience the rare thrill of spotting the elusive Black Panther in the dense forests and wilderness.",
            image: penchattraction3,
        },

        {
            title: "Runi Jhuni Trail",
            description:
                "A scenic forest trail known for its peaceful jungle atmosphere, wildlife sightings and natural beauty.",
            image: penchattraction4,
        },
    ],

    thingsToDo: [
        {
            title: "Jungle Safari",
            description: "Explore dense forests and wildlife-rich safari zones.",
            icon: "🛻",
        },
        {
            title: "Tiger Spotting",
            description: "Witness Royal Bengal Tigers and diverse wildlife species.",
            icon: "🐅",
        },
        {
            title: "Bird Watching",
            description: "Observe colorful birds and exotic forest species.",
            icon: "🦜",
        },
        {
            title: "Nature Photography",
            description: "Capture breathtaking wildlife and forest landscapes.",
            icon: "📸",
        },
        {
            title: "Forest Exploration",
            description: "Enjoy peaceful nature trails and scenic greenery.",
            icon: "🌿",
        },
        {
            title: "River Views",
            description: "Relax beside the scenic Pench River surrounded by forests.",
            icon: "🌊",
        },
    ],

    experiences: [
        {
            title: "Wildlife Adventure",
            description:
                "Feel the excitement of exploring one of India’s famous tiger reserves.",
        },
        {
            title: "Jungle Book Experience",
            description:
                "Discover the forests that inspired Rudyard Kipling’s Jungle Book.",
        },
        {
            title: "Natural Beauty",
            description:
                "Enjoy lush forests, rivers and peaceful wilderness landscapes.",
        },
        {
            title: "Photography Paradise",
            description:
                "Capture unforgettable wildlife and scenic jungle moments.",
        },
    ],

    gallery: [
        penchgallary1,
        penchgallary2,
        penchgallary3,
        penchgallary4,
        penchgallary5,
        penchgallary6,
        penchgallary7,
        penchgallary8,
        penchgallary9,
        penchgallary10,
    ],

    travelInfo: {
        bestTime:
            "October to June — ideal season for wildlife safaris and tiger sightings",
        road:
            "Well-connected by road from Nagpur, Seoni and nearby cities.",
        rail:
            "The nearest railway station is Seoni Railway Station (~30 km).",
        air:
            "The nearest airport is Dr. Babasaheb Ambedkar International Airport in Nagpur.",
    },

    duration: "2 Days / 1 Night",
};

export default pench;