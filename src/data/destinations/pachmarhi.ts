import type { DestinationContent } from "./types";

const beeFalls = "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80";
const dhoopgarh = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80";
const pandavaCaves = "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=1200&q=80";
const jataShankar = "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80";
const satpuraHills = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80";
const handiKhoh = "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80";

const pachmarhi: DestinationContent = {
  overviewParagraphs: [
    "Pachmarhi — fondly called Satpura ki Rani — is Madhya Pradesh's only hill station, tucked into the heart of the Satpura Range at an altitude of 1,100 metres.",
    "Lush sal and teak forests, hidden waterfalls, prehistoric rock-shelter caves and panoramic viewpoints make it a year-round escape for nature lovers and trekkers.",
    "From sunrise at Dhoopgarh — the highest point in MP — to the spray of Bee Falls and the mystery of the Pandava Caves, Pachmarhi delivers a soulful mountain experience just a short drive from Bhopal.",
  ],
  attractions: [
    { title: "Bee Falls", description: "A pristine cascade tumbling through dense forest — the source of Pachmarhi's drinking water and a favourite trekking spot.", image: beeFalls },
    { title: "Dhoopgarh Sunset Point", description: "At 1,350 m, the highest peak in the Satpura range delivers Madhya Pradesh's most dramatic sunsets.", image: dhoopgarh },
    { title: "Pandava Caves", description: "Five ancient rock-cut caves perched on a hillock, said to have sheltered the Pandavas during exile.", image: pandavaCaves },
    { title: "Jata Shankar Cave", description: "A sacred Shiva cave shrine where a natural Shivalinga sits beneath a hanging-rock formation resembling Shiva's locks.", image: jataShankar },
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
  gallery: [dhoopgarh, beeFalls, satpuraHills, pandavaCaves, jataShankar, handiKhoh],
  travelInfo: {
    bestTime: "September to June — monsoon is dramatic, winter is crisp",
    road: "Well-connected by road from Bhopal (210 km, ~5 hrs) and Nagpur (250 km).",
    rail: "Pipariya is the nearest railway station (52 km) on the Mumbai–Howrah line.",
    air: "Bhopal's Raja Bhoj Airport (~200 km) is the closest, with daily flights from major Indian metros.",
  },
  duration: "3 Days / 2 Nights",
};

export default pachmarhi;
