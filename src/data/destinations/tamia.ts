import type { DestinationContent } from "./types";

import tamiaattraction1 from "@/assets/destimages/tamiaattraction1.jpeg";
import tamiaattraction2 from "@/assets/destimages/tamiaattraction2.jpeg";
import tamiaattraction3 from "@/assets/destimages/tamiaattraction3.jpeg";
import tamiaattraction4 from "@/assets/destimages/tamiaattraction4.jpeg";

// gallery

import tamiagallary1 from "@/assets/destimages/tamiagallary1.jpeg";
import tamiagallary2 from "@/assets/destimages/tamiagallary2.jpeg";
import tamiagallary3 from "@/assets/destimages/tamiagallary3.jpeg";
import tamiagallary4 from "@/assets/destimages/tamiagallary4.jpeg";
import tamiagallary5 from "@/assets/destimages/tamiagallary5.jpeg";

const tamia: DestinationContent = {
    overviewParagraphs: [
        "Tamia is one of Madhya Pradesh's most scenic hill destinations, nestled in the Satpura ranges of Chhindwara district.",
        "Known for its breathtaking valleys, dense forests, tribal culture and panoramic viewpoints, Tamia is often called the hidden gem of Satpura.",
        "From spectacular sunrise views and deep gorges to eco-tourism experiences and peaceful landscapes, Tamia is a paradise for nature lovers.",
    ],

    attractions: [
        {
            title: "Patalkot Valley",
            description:
                "A spectacular horseshoe-shaped valley known for its unique geography, tribal heritage and breathtaking views.",
            image: tamiaattraction1,
        },
        {
            title: "Patalkot View Point",
            description:
                "The most famous viewpoint in Tamia offering panoramic vistas of the magnificent Patalkot Valley.",
            image: tamiaattraction2,
        },
        {
            title: "Sunset Point",
            description:
                "A stunning location to witness mesmerizing sunsets over the Satpura hills.",
            image: tamiaattraction3,
        },
        {
            title: "Ghatlinga Tribal Village",
            description:
                "A traditional tribal village near Tamia offering insights into local culture, indigenous lifestyles and the rich heritage of the Satpura region.",
            image: tamiaattraction4,
        },
    ],

    thingsToDo: [
        {
            title: "Valley Viewing",
            description: "Enjoy breathtaking views of the famous Patalkot Valley.",
            icon: "🏞️",
        },
        {
            title: "Nature Photography",
            description: "Capture spectacular landscapes and scenic viewpoints.",
            icon: "📸",
        },
        {
            title: "Sunrise & Sunset Watching",
            description: "Experience unforgettable views across the Satpura ranges.",
            icon: "🌅",
        },
        {
            title: "Nature Walks",
            description: "Explore forests, trails and peaceful surroundings.",
            icon: "🥾",
        },
        {
            title: "Tribal Culture Exploration",
            description: "Learn about the traditions and lifestyle of local tribal communities.",
            icon: "🎭",
        },
        {
            title: "Eco Tourism",
            description: "Experience sustainable tourism amidst pristine nature.",
            icon: "🌿",
        },
    ],

    experiences: [
        {
            title: "Hidden Hill Retreat",
            description:
                "Discover one of Madhya Pradesh's most peaceful and unexplored hill destinations.",
        },
        {
            title: "Patalkot Adventure",
            description:
                "Experience the beauty and mystery of the legendary Patalkot Valley.",
        },
        {
            title: "Scenic Landscapes",
            description:
                "Enjoy endless views of forests, valleys and Satpura hills.",
        },
        {
            title: "Nature Escape",
            description:
                "Reconnect with nature in a tranquil and refreshing environment.",
        },
    ],

    gallery: [
        tamiagallary1,
        tamiagallary2,
        tamiagallary3,
        tamiagallary4,
        tamiagallary5,
    ],

    travelInfo: {
        bestTime:
            "October to March — ideal weather for sightseeing, trekking and nature exploration",
        road:
            "Well-connected by road from Chhindwara, Nagpur and nearby cities.",
        rail:
            "The nearest railway station is Chhindwara Junction.",
        air:
            "The nearest airport is Dr. Babasaheb Ambedkar International Airport, Nagpur.",
    },

    duration: "2 Days / 1 Night",
};

export default tamia;