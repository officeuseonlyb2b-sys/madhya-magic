import type { DestinationContent } from "./types";

import sanchiattraction1 from "@/assets/destimages/sanchiattraction1.jpeg";
import sanchiattraction2 from "@/assets/destimages/sanchiattraction2.jpeg";
import sanchiattraction3 from "@/assets/destimages/sanchiattraction3.jpeg";
import sanchiattraction4 from "@/assets/destimages/sanchiattraction4.jpeg";

// gallery

import sanchigallary1 from "@/assets/destimages/sanchigallary1.jpeg";
import sanchigallary2 from "@/assets/destimages/sanchigallary2.jpeg";
import sanchigallary3 from "@/assets/destimages/sanchigallary3.jpeg";
import sanchigallary4 from "@/assets/destimages/sanchigallary4.jpeg";
import sanchigallary5 from "@/assets/destimages/sanchigallary5.jpeg";
import sanchigallary6 from "@/assets/destimages/sanchigallary6.jpeg";
import sanchigallary7 from "@/assets/destimages/sanchigallary7.jpeg";

const sanchi: DestinationContent = {
    overviewParagraphs: [
        "Sanchi is one of India's most important Buddhist heritage destinations and a UNESCO World Heritage Site located in Madhya Pradesh.",
        "Famous for its ancient stupas, monasteries and stone carvings, Sanchi preserves the rich legacy of Emperor Ashoka and Buddhist architecture.",
        "The hilltop complex offers a fascinating journey through history, spirituality and art, attracting visitors from around the world.",
    ],

    attractions: [
        {
            title: "Great Stupa of Sanchi",
            description:
                "The iconic UNESCO World Heritage monument built by Emperor Ashoka and the most famous attraction in Sanchi.",
            image: sanchiattraction1,
        },
        {
            title: "Ashoka Pillar",
            description:
                "A historic sandstone pillar erected by Emperor Ashoka, symbolizing the spread of Buddhism.",
            image: sanchiattraction2,
        },
        {
            title: "Sanchi Archaeological Museum",
            description:
                "A museum showcasing sculptures, relics and artifacts discovered from the Sanchi complex.",
            image: sanchiattraction3,
        },
        {
            title: "Gupta Temple",
            description:
                "One of the earliest surviving temple structures in India, showcasing remarkable Gupta-era architecture and craftsmanship.",
            image: sanchiattraction4,
        },
    ],

    thingsToDo: [
        {
            title: "Heritage Exploration",
            description: "Discover ancient Buddhist monuments and architecture.",
            icon: "🏛️",
        },
        {
            title: "Museum Visit",
            description: "Explore historical artifacts and archaeological treasures.",
            icon: "📚",
        },
        {
            title: "Photography",
            description: "Capture stunning carvings, stupas and panoramic views.",
            icon: "📸",
        },
        {
            title: "Spiritual Reflection",
            description: "Experience the peaceful atmosphere of the Buddhist complex.",
            icon: "☸️",
        },
        {
            title: "Guided Tours",
            description: "Learn about Sanchi's rich history and significance.",
            icon: "🎧",
        },
        {
            title: "Sunrise Sightseeing",
            description: "Enjoy beautiful views from the hilltop heritage site.",
            icon: "🌅",
        },
    ],

    experiences: [
        {
            title: "UNESCO Heritage",
            description:
                "Explore one of India's most celebrated World Heritage Sites.",
        },
        {
            title: "Buddhist Legacy",
            description:
                "Discover the spiritual and cultural history of Buddhism.",
        },
        {
            title: "Ancient Architecture",
            description:
                "Admire intricate carvings, gateways and historic monuments.",
        },
        {
            title: "Peaceful Atmosphere",
            description:
                "Experience serenity amidst centuries-old heritage structures.",
        },
    ],

    gallery: [
        sanchigallary1,
        sanchigallary2,
        sanchigallary3,
        sanchigallary4,
        sanchigallary5,
        sanchigallary6,
        sanchigallary7,
    ],

    travelInfo: {
        bestTime:
            "October to March — ideal for heritage exploration and sightseeing",
        road:
            "Well-connected by road from Bhopal, Vidisha and nearby cities.",
        rail:
            "The nearest railway station is Sanchi Railway Station.",
        air:
            "The nearest airport is Raja Bhoj Airport, Bhopal.",
    },

    duration: "1 Day",
};

export default sanchi;