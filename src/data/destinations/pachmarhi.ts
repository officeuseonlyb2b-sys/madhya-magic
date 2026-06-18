import type { DestinationContent } from "./types";

// All images served from Cloudinary
const images = {
  // Attraction images – mapped to pachmarhiattraction1..4
  pachmarhiattraction1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778508/pachmarhiattraction1_zotud2.jpg",
  pachmarhiattraction2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778511/pachmarhiattraction2_y3vhg8.jpg",
  pachmarhiattraction3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778514/pachmarhiattraction3_rv9rmc.jpg",
  pachmarhiattraction4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778517/pachmarhiattraction4_xq4sd9.jpg",

  // Gallery images – mapped to pachmarhigallary1..11
  pachmarhigallary1:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778520/pachmarhigallary1_wxcy5z.jpg",
  pachmarhigallary2:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778523/pachmarhigallary2_dajjqp.jpg",
  pachmarhigallary3:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778526/pachmarhigallary3_ifl6n7.jpg",
  pachmarhigallary4:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778529/pachmarhigallary4_cezx4p.jpg",
  pachmarhigallary5:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778532/pachmarhigallary5_ekakd9.jpg",
  pachmarhigallary6:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778535/pachmarhigallary6_wesliq.jpg",
  pachmarhigallary7:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778537/pachmarhigallary7_hsfx9u.jpg",
  pachmarhigallary8:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778543/pachmarhigallary8_krm6mp.jpg",
  pachmarhigallary9:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778545/pachmarhigallary9_bpjpqu.jpg",
  pachmarhigallary10:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778548/pachmarhigallary10_jooulv.jpg",
  pachmarhigallary11:
    "https://res.cloudinary.com/dfyuf0bjl/image/upload/v1781778549/pachmarhigallary11_zpwklc.jpg",
};

const pachmarhi: DestinationContent = {
  overviewParagraphs: [
    "Pachmarhi — fondly called Satpura ki Rani — is Madhya Pradesh's only hill station, tucked into the heart of the Satpura Range at an altitude of 1,100 metres.",
    "Lush sal and teak forests, hidden waterfalls, prehistoric rock-shelter caves and panoramic viewpoints make it a year-round escape for nature lovers and trekkers.",
    "From sunrise at Dhoopgarh — the highest point in MP — to the spray of Bee Falls and the mystery of the Pandava Caves, Pachmarhi delivers a soulful mountain experience just a short drive from Bhopal.",
  ],
  attractions: [
    {
      title: "Bee Falls",
      description:
        "A pristine cascade tumbling through dense forest — the source of Pachmarhi's drinking water and a favourite trekking spot.",
      image: images.pachmarhiattraction1,
    },
    {
      title: "Dhoopgarh Sunset Point",
      description:
        "At 1,350 m, the highest peak in the Satpura range delivers Madhya Pradesh's most dramatic sunsets.",
      image: images.pachmarhiattraction2,
    },
    {
      title: "Pandava Caves",
      description:
        "Five ancient rock-cut caves perched on a hillock, said to have sheltered the Pandavas during exile.",
      image: images.pachmarhiattraction3,
    },
    {
      title: "Jata Shankar Cave",
      description:
        "A sacred Shiva cave shrine where a natural Shivalinga sits beneath a hanging-rock formation resembling Shiva's locks.",
      image: images.pachmarhiattraction4,
    },
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
    {
      title: "Sunrise Over the Satpuras",
      description: "Wrap up warm and watch the first light flood the valley from Priyadarshini Point.",
    },
    {
      title: "Monsoon Magic",
      description: "After the rains every cliff turns into a waterfall — Pachmarhi is unreal in the monsoon.",
    },
    {
      title: "Cantonment Charm",
      description: "Stroll through colonial-era cottages, churches and quiet pine-lined avenues.",
    },
    {
      title: "Tribal Encounters",
      description: "Meet the Gond and Korku communities and learn their forest wisdom.",
    },
  ],
  gallery: [
    images.pachmarhigallary1,
    images.pachmarhigallary2,
    images.pachmarhigallary3,
    images.pachmarhigallary4,
    images.pachmarhigallary5,
    images.pachmarhigallary6,
    images.pachmarhigallary7,
    images.pachmarhigallary8,
    images.pachmarhigallary9,
    images.pachmarhigallary10,
    images.pachmarhigallary11,
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