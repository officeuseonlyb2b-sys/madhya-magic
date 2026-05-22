import type { DestinationContent } from "./types";
import pachmarhiattraction1 from "@/assets/destimages/pachmarhiattraction1.jpeg";
import pachmarhiattraction2 from "@/assets/destimages/pachmarhiattraction2.jpeg";
import pachmarhiattraction3 from "@/assets/destimages/pachmarhiattraction3.jpeg";
import pachmarhiattraction4 from "@/assets/destimages/pachmarhiattraction4.jpeg";

// gallary

import pachmarhigallary1 from "@/assets/destimages/pachmarhigallary1.jpeg";
import pachmarhigallary2 from "@/assets/destimages/pachmarhigallary2.jpeg";
import pachmarhigallary3 from "@/assets/destimages/pachmarhigallary3.jpeg";
import pachmarhigallary4 from "@/assets/destimages/pachmarhigallary4.jpeg";
import pachmarhigallary5 from "@/assets/destimages/pachmarhigallary5.jpeg";
import pachmarhigallary6 from "@/assets/destimages/pachmarhigallary6.jpeg";


const pachmarhi: DestinationContent = {
  overviewParagraphs: [
    "Pachmarhi — fondly called Satpura ki Rani — is Madhya Pradesh's only hill station, tucked into the heart of the Satpura Range at an altitude of 1,100 metres.",
    "Lush sal and teak forests, hidden waterfalls, prehistoric rock-shelter caves and panoramic viewpoints make it a year-round escape for nature lovers and trekkers.",
    "From sunrise at Dhoopgarh — the highest point in MP — to the spray of Bee Falls and the mystery of the Pandava Caves, Pachmarhi delivers a soulful mountain experience just a short drive from Bhopal.",
  ],
  attractions: [
    { title: "Bee Falls", description: "A pristine cascade tumbling through dense forest — the source of Pachmarhi's drinking water and a favourite trekking spot.", image: pachmarhiattraction1 },
    { title: "Dhoopgarh Sunset Point", description: "At 1,350 m, the highest peak in the Satpura range delivers Madhya Pradesh's most dramatic sunsets.", image: pachmarhiattraction2 },
    { title: "Pandava Caves", description: "Five ancient rock-cut caves perched on a hillock, said to have sheltered the Pandavas during exile.", image: pachmarhiattraction3 },
    { title: "Jata Shankar Cave", description: "A sacred Shiva cave shrine where a natural Shivalinga sits beneath a hanging-rock formation resembling Shiva's locks.", image: pachmarhiattraction4 },
  ],
  thingsToDo: [
    { title: "Dhoopgarh Sunset", description: "Watch the Satpuras glow gold and purple.", icon: "🌄" },
    { title: "Bee Falls Trek", description: "Easy forest trek to a cool plunge pool.", icon: "💦" },
    { title: "Cave Exploration", description: "Pandava, Jata Shankar & Mahadeo caves.", icon: "🕳️" },
    { title: "Handi Khoh Viewpoint", description: "Deepest ravine in Pachmarhi — vertigo guaranteed.", icon: "🏔️" },
    { title: "Forest Nature Walk", description: "Trails through sal, teak and bamboo forest.", icon: "🌿" },
    { title: "Rock-Art Tour", description: "Ancient cave paintings, some 10,000 years old.", icon: "🎨" },
  ],
  experiences: [
    { title: "Sunrise Over the Satpuras", description: "Wrap up warm and watch the first light flood the valley from Priyadarshini Point." },
    { title: "Monsoon Magic", description: "After the rains every cliff turns into a waterfall — Pachmarhi is unreal in the monsoon." },
    { title: "Cantonment Charm", description: "Stroll through colonial-era cottages, churches and quiet pine-lined avenues." },
    { title: "Tribal Encounters", description: "Meet the Gond and Korku communities and learn their forest wisdom." },
  ],
  gallery: [
    pachmarhigallary1,
    pachmarhigallary2,
    pachmarhigallary3,
    pachmarhigallary4,
    pachmarhigallary5,
    pachmarhigallary6
  ],
  travelInfo: {
    bestTime: "September to June — monsoon is dramatic, winter is crisp",
    road: "Well-connected by road from Bhopal (210 km, ~5 hrs) and Nagpur (250 km).",
    rail: "Pipariya is the nearest railway station (52 km) on the Mumbai–Howrah line.",
    air: "Bhopal's Raja Bhoj Airport (~200 km) is the closest, with daily flights from major Indian metros.",
  },
  duration: "3 Days / 2 Nights",
};

export default pachmarhi;
