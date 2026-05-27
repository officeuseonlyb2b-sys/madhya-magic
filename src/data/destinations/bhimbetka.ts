import type { DestinationContent } from "./types";

import bhimbetkaattraction1 from "@/assets/destimages/bhimbetkaattraction1.jpeg";
import bhimbetkaattraction2 from "@/assets/destimages/bhimbetkaattraction2.jpeg";
import bhimbetkaattraction3 from "@/assets/destimages/bhimbetkaattraction3.jpeg";
import bhimbetkaattraction4 from "@/assets/destimages/bhimbetkaattraction4.jpeg";

// gallery

import bhimbetkagallary1 from "@/assets/destimages/bhimbetkagallary1.jpeg";
import bhimbetkagallary2 from "@/assets/destimages/bhimbetkagallary2.jpeg";
import bhimbetkagallary3 from "@/assets/destimages/bhimbetkagallary3.jpeg";
import bhimbetkagallary4 from "@/assets/destimages/bhimbetkagallary4.jpeg";
import bhimbetkagallary5 from "@/assets/destimages/bhimbetkagallary5.jpeg";
import bhimbetkagallary6 from "@/assets/destimages/bhimbetkagallary6.jpeg";
import bhimbetkagallary7 from "@/assets/destimages/bhimbetkagallary7.jpeg";
import bhimbetkagallary8 from "@/assets/destimages/bhimbetkagallary8.jpeg";

const bhimbetka: DestinationContent = {
    overviewParagraphs: [
        "Bhimbetka — a UNESCO World Heritage Site in Madhya Pradesh — is one of the oldest known human settlements in the Indian subcontinent.",
        "Famous for its prehistoric rock shelters and ancient cave paintings, Bhimbetka offers a fascinating journey into early human civilization.",
        "Surrounded by forests and sandstone hills, the site beautifully combines archaeology, nature and timeless history.",
    ],

    attractions: [
        {
            title: "Rock Shelters",
            description:
                "Explore ancient natural caves believed to have been inhabited by early humans thousands of years ago.",
            image: bhimbetkaattraction1,
        },
        {
            title: "Prehistoric Cave Paintings",
            description:
                "Admire fascinating paintings depicting hunting scenes, animals and daily life from prehistoric times.",
            image: bhimbetkaattraction2,
        },
        {
            title: "Turtle Rock",
            description:
                "A naturally shaped rock formation resembling a giant turtle, surrounded by scenic forest landscapes and ancient cave shelters.",
            image: bhimbetkaattraction3,
        },
        {
            title: "Zoo Rock Shelter",
            description:
                "A fascinating prehistoric rock shelter featuring ancient paintings of animals and hunting scenes from early human civilization.",
            image: bhimbetkaattraction4,
        },


    ],

    thingsToDo: [
        {
            title: "Cave Exploration",
            description: "Walk through ancient rock shelters and archaeological sites.",
            icon: "🪨",
        },
        {
            title: "History Discovery",
            description: "Learn about prehistoric human life and ancient art.",
            icon: "📜",
        },
        {
            title: "Nature Walks",
            description: "Enjoy scenic trails through forests and rocky terrain.",
            icon: "🌿",
        },
        {
            title: "Photography Tour",
            description: "Capture unique cave paintings and natural formations.",
            icon: "📸",
        },
        {
            title: "Heritage Learning",
            description: "Explore one of India's most important archaeological treasures.",
            icon: "🏺",
        },
        {
            title: "Peaceful Exploration",
            description: "Experience calm surroundings away from crowded tourist spots.",
            icon: "🌄",
        },
    ],

    experiences: [
        {
            title: "Journey into Prehistory",
            description:
                "Step back thousands of years into the lives of early human civilizations.",
        },
        {
            title: "Ancient Art Appreciation",
            description:
                "Witness some of the oldest surviving cave paintings in the world.",
        },
        {
            title: "Nature & Heritage Blend",
            description:
                "Experience a perfect combination of history, forests and natural beauty.",
        },
        {
            title: "UNESCO Heritage Experience",
            description:
                "Explore one of India's most significant cultural heritage sites.",
        },
    ],

    gallery: [
        bhimbetkagallary1,
        bhimbetkagallary2,
        bhimbetkagallary3,
        bhimbetkagallary4,
        bhimbetkagallary5,
        bhimbetkagallary6,
        bhimbetkagallary7,
        bhimbetkagallary8,
    ],

    travelInfo: {
        bestTime: "October to March — pleasant weather for outdoor exploration",
        road:
            "Well-connected by road from Bhopal (~45 km) and nearby towns.",
        rail:
            "Bhopal Junction is the nearest major railway station with nationwide connectivity.",
        air:
            "Raja Bhoj Airport in Bhopal is the nearest airport with regular domestic flights.",
    },

    duration: "1 Day Trip",
};

export default bhimbetka;

