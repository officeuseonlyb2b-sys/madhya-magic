import type { DestinationContent } from "./types";

import udayagiriattraction1 from "@/assets/destimages/udayagiriattraction1.jpeg";
import udayagiriattraction2 from "@/assets/destimages/udayagiriattraction2.jpeg";
import udayagiriattraction3 from "@/assets/destimages/udayagiriattraction3.jpeg";
import udayagiriattraction4 from "@/assets/destimages/udayagiriattraction4.jpeg";

// gallery

import udayagirigallary1 from "@/assets/destimages/udayagirigallary1.jpeg";
import udayagirigallary2 from "@/assets/destimages/udayagirigallary2.jpeg";
import udayagirigallary3 from "@/assets/destimages/udayagirigallary3.jpeg";
import udayagirigallary4 from "@/assets/destimages/udayagirigallary4.jpeg";
import udayagirigallary5 from "@/assets/destimages/udayagirigallary5.jpeg";
import udayagirigallary6 from "@/assets/destimages/udayagirigallary6.jpeg";
import udayagirigallary7 from "@/assets/destimages/udayagirigallary7.jpeg";

const udayagiri: DestinationContent = {
    overviewParagraphs: [
        "Udayagiri — one of Madhya Pradesh’s most significant archaeological sites — is famous for its ancient rock-cut caves, Gupta-era sculptures and historic heritage.",
        "Located near Vidisha, Udayagiri showcases remarkable Hindu and Jain cave temples carved into sandstone hills.",
        "Known for the iconic Varaha sculpture and centuries-old inscriptions, Udayagiri offers a fascinating glimpse into India’s ancient art, religion and architecture.",
    ],

    attractions: [
        {
            title: "Varaha Cave",
            description:
                "Home to the magnificent Varaha avatar sculpture of Lord Vishnu carved during the Gupta period.",
            image: udayagiriattraction1,
        },
        {
            title: "Rock-Cut Caves",
            description:
                "Ancient caves featuring beautifully carved Hindu and Jain sculptures and inscriptions.",
            image: udayagiriattraction2,
        },
        {
            title: "Ancient Inscriptions",
            description:
                "Historic Gupta-era inscriptions carved into the caves showcasing ancient Indian history and culture.",
            image: udayagiriattraction3,
        },
        {
            title: "Hilltop Viewpoint",
            description:
                "A scenic viewpoint offering panoramic views of the surrounding landscapes and countryside.",
            image: udayagiriattraction4,
        },
    ],

    thingsToDo: [
        {
            title: "Cave Exploration",
            description: "Explore ancient rock-cut caves and historic carvings.",
            icon: "🪨",
        },
        {
            title: "Photography",
            description: "Capture stunning sculptures and archaeological beauty.",
            icon: "📸",
        },
        {
            title: "Heritage Walks",
            description: "Walk through centuries-old monuments and pathways.",
            icon: "🚶",
        },
        {
            title: "Spiritual Visits",
            description: "Experience peace at ancient Hindu and Jain temples.",
            icon: "🛕",
        },
        {
            title: "History Discovery",
            description: "Learn about Gupta-era architecture and ancient Indian history.",
            icon: "📜",
        },
        {
            title: "Nature Views",
            description: "Enjoy calm hilltop landscapes and scenic surroundings.",
            icon: "🌿",
        },
    ],

    experiences: [
        {
            title: "Ancient Heritage",
            description:
                "Discover one of India’s oldest rock-cut archaeological treasures.",
        },
        {
            title: "Gupta Era Art",
            description:
                "Admire detailed carvings and sculptures from the Gupta dynasty.",
        },
        {
            title: "Spiritual Atmosphere",
            description:
                "Experience devotion and serenity within sacred cave temples.",
        },
        {
            title: "Historic Exploration",
            description:
                "Walk through centuries of Indian history and architecture.",
        },
    ],

    gallery: [
        udayagirigallary1,
        udayagirigallary2,
        udayagirigallary3,
        udayagirigallary4,
        udayagirigallary5,
        udayagirigallary6,
        udayagirigallary7,
    ],

    travelInfo: {
        bestTime:
            "October to March — pleasant weather for sightseeing and cave exploration",
        road:
            "Well-connected by road from Vidisha, Sanchi and Bhopal.",
        rail:
            "The nearest railway station is Vidisha Railway Station (~6 km).",
        air:
            "The nearest airport is Raja Bhoj Airport in Bhopal.",
    },

    duration: "1 Day",
};

export default udayagiri;