import bandhavgarhImg from "@/assets/dest-bandhavgarh.jpg";
import kanhaImg from "@/assets/dest-kanha.jpg";
import penchImg from "@/assets/dest-pench.jpg";
import satpuraImg from "@/assets/dest-satpura.jpg";
import pannaImg from "@/assets/dest-panna.jpg";
import madhavImg from "@/assets/dest-madhav.jpg";
import sanjayDubriImg from "@/assets/dest-sanjay-dubri.jpg";
import orchhaImg from "@/assets/dest-orchha.jpg";
import khajurahoImg from "@/assets/dest-khajuraho.jpg";
import gwaliorImg from "@/assets/dest-gwalior.jpg";
import manduImg from "@/assets/dest-mandu.jpg";
import chanderiImg from "@/assets/dest-chanderi.jpg";
import maheshwarImg from "@/assets/dest-maheshwar.jpg";
import burhanpurImg from "@/assets/dest-burhanpur.jpg";
import ujjainImg from "@/assets/dest-ujjain.jpg";
import omkareshwarImg from "@/assets/dest-omkareshwar.jpg";
import chitrakootImg from "@/assets/dest-chitrakoot.jpg";
import amarKantakImg from "@/assets/dest-amarkantak.jpg";
import maiharImg from "@/assets/dest-maihar.jpg";
import pachmarhiImg from "@/assets/dest-pachmarhi.jpg";
import bhedaghatImg from "@/assets/dest-bhedaghat.jpg";
import tawaImg from "@/assets/dest-tawa.jpg";
import hanuwantiyaImg from "@/assets/dest-hanuwantiya.jpg";
import tamiaImg from "@/assets/dest-tamia.jpg";
import bhopalImg from "@/assets/dest-bhopal.jpg";
import sailaniImg from "@/assets/dest-sailani.jpg";
import udayagiriImg from "@/assets/dest-udayagiri.jpg";
import indoreImg from "@/assets/dest-indore.jpg";
import bhimbetkaImg from "@/assets/dest-bhimbetka.jpg";
// import khandwaImg from "@/assets/dest-khandwa.jpg";
import mandsaurImg from "@/assets/dest-mandsaur.jpg";
import parsiliImg from "@/assets/dest-parsili.jpg";
import mukundpurImg from "@/assets/dest-mukundpur.jpg";
import kunoImg from "@/assets/dest-kuno.jpg";
import bhojpurImg from "@/assets/dest-bhojpur.jpg";
import datiaImg from "@/assets/dest-datia.jpg";
import sonagiriImg from "@/assets/dest-sonagiri.jpg";
import shivpuriImg from "@/assets/dest-shivpuri.jpg";
// Reused images for newly added destinations (no new assets created)
// const shivpuriImg = madhavImg; // Madhav NP is in Shivpuri district
// const vidishaImg = udayagiriImg; // Udayagiri Caves are in Vidisha district

export type MapCategory = "Wildlife" | "Heritage" | "Spiritual" | "Nature";

export interface MapDestination {
  id: string;
  name: string;
  category: MapCategory[];
  image: string;
  description: string;
  x: number;
  y: number;
}

export const mapDestinations: MapDestination[] = [
  // ─── Wildlife ───
  {
    id: "pench",
    name: "Pench National Park",
    category: ["Wildlife"],
    image: penchImg,
    description: "Straddling MP and Maharashtra, Pench is famous for its tiger sightings and teak forests.",
    x: 59.995,
    y: 85.8873,
  },

  {
    id: "panna",
    name: "Panna National Park",
    category: ["Wildlife"],
    image: pannaImg,
    description: "A success story of tiger reintroduction with stunning Ken river gorge and diamond mines.",
    x: 70.1739,
    y: 38.1872,
  },

  {
    id: "kanha",
    name: "Kanha National Park",
    category: ["Wildlife"],
    image: kanhaImg,
    description: "India's finest tiger reserve and the inspiration behind Rudyard Kipling's Jungle Book.",
    x: 65.9023,
    y: 63.9536,
  },

  {
    id: "satpura",
    name: "Satpura National Park",
    category: ["Wildlife"],
    image: satpuraImg,
    description: "Offbeat wildlife destination offering walking safaris, boat safaris and rugged terrain.",
    x: 50.7536,
    y: 75.5089,
  },

  {
    id: "bandhavgarh",
    name: "Bandhavgarh National Park",
    category: ["Wildlife"],
    image: bandhavgarhImg,
    description: "Highest density of Royal Bengal Tigers in India, set amid ancient fort ruins and dense sal forests.",
    x: 80.2666,
    y: 41.8638,
  },

  {
    id: "kuno",
    name: "Kuno National Park",
    category: ["Wildlife"],
    image: kunoImg,
    description: "India's cheetah reintroduction site with savanna grasslands and rich biodiversity.",
    x: 39.8804,
    y: 25.5814,
  },

  {
    id: "mukundpur",
    name: "Mukundpur White Tiger Safari & Zoo",
    category: ["Wildlife"],
    image: mukundpurImg,
    description: "India's first white tiger safari and zoo, home to rare white tigers and diverse fauna.",
    x: 80.7883,
    y: 39.6807,
  },

  {
    id: "madhav",
    name: "Madhav National Park",
    category: ["Wildlife"],
    image: madhavImg,
    description: "Historic royal hunting ground near Shivpuri with a scenic lake and George Castle.",
    x: 42.6025,
    y: 26.0759,
  },


  {
    id: "sanjay-dubri",
    name: "Sanjay Dubri National Park",
    category: ["Wildlife"],
    image: sanjayDubriImg,
    description: "Remote wilderness on the MP-Chhattisgarh border, home to tigers, leopards, and wild dogs.",
    x: 89.5826,
    y: 51.0164,
  },



  // ─── Heritage ───

  {
    id: "bhopal",
    name: "Bhopal",
    category: ["Heritage"],
    image: bhopalImg,
    description: "City of lakes with Taj-ul-Masajid, tribal museum, and rich Nawabi heritage.",
    x: 41.4376,
    y: 59.095,
  },
  {
    id: "gwalior",
    name: "Gwalior",
    category: ["Heritage"],
    image: gwaliorImg,
    description: "One of India's most impregnable forts, with stunning Tomar-era palaces and Jain sculptures.",
    x: 48.09,
    y: 12.7131,
  },
  {
    id: "khajuraho",
    name: "Khajuraho",
    category: ["Heritage"],
    image: khajurahoImg,
    description: "UNESCO World Heritage temples with exquisite medieval sculptures from the Chandela dynasty.",
    x: 66.3299,
    y: 34.4156,
  },
  {
    id: "maheshwar",
    name: "Maheshwar",
    category: ["Heritage"],
    image: maheshwarImg,
    description: "Queen Ahilya Bai's capital on the Narmada, famous for Maheshwari sarees.",
    x: 25.0414,
    y: 78.1356,
  },
  {
    id: "orchha",
    name: "Orchha",
    category: ["Heritage"],
    image: orchhaImg,
    description: "Medieval Bundela kingdom with grand palaces, temples, and cenotaphs along the Betwa river.",
    x: 53.206,
    y: 26.2657,
  },
  {
    id: "datia",
    name: "Datia",
    category: ["Heritage", "Spiritual"],
    image: datiaImg,
    description: "Bundela royal town famous for the seven-storey palace and the revered Pitambara Peeth.",
    x: 50.53,
    y: 20.8502,
  },
  {
    id: "shivpuri",
    name: "Shivpuri",
    category: ["Heritage"],
    image: shivpuriImg,
    description: "Former Scindia summer capital with marble cenotaphs, lakes, and Madhav National Park nearby.",
    x: 46.8781,
    y: 19.8695,
  },
  {
    id: "chanderi",
    name: "Chanderi",
    category: ["Heritage"],
    image: chanderiImg,
    description: "Ancient silk-weaving town with Jain rock-cut temples and medieval fort gates.",
    x: 42.3319,
    y: 54.4836,
  },
  {
    id: "bhimbetka",
    name: "Bhimbetka Rock Shelters",
    category: ["Heritage"],
    image: bhimbetkaImg,
    description: "UNESCO site with prehistoric cave paintings dating back 30,000 years.",
    x: 40.6923,
    y: 63.9281,
  },
  {
    id: "indore",
    name: "Indore",
    category: ["Heritage"],
    image: indoreImg,
    description: "MP's commercial capital with Rajwada Palace, Lal Bagh, and vibrant street food culture.",
    x: 21.6131,
    y: 71.493,
  },
  {
    id: "mandu",
    name: "Mandu",
    category: ["Heritage"],
    image: manduImg,
    description: "Romantic ruins of the Afghan-inspired Jahaz Mahal and Rani Roopmati's Pavilion.",
    x: 18.1848,
    y: 80.0969,
  },

  {
    id: "burhanpur",
    name: "Burhanpur",
    category: ["Heritage"],
    image: burhanpurImg,
    description: "Mughal-era city where Shah Jahan conceived the idea of the Taj Mahal.",
    x: 25.7867,
    y: 95.11,
  },
  {
    id: "udayagiri",
    name: "Udayagiri Caves",
    category: ["Heritage"],
    image: udayagiriImg,
    description: "Gupta-era rock-cut caves near Vidisha with stunning Hindu and Jain carvings.",
    x: 46.5055,
    y: 38.4899,
  },



  // ─── Spiritual ───

  {
    id: "ujjain",
    name: "Ujjain",
    category: ["Spiritual"],
    image: ujjainImg,
    description: "Ancient city of temples, the sacred Kumbh Mela destination, and Mahakaleshwar Jyotirlinga.",
    x: 19.9735,
    y: 63.2743,
  },

  {
    id: "omkareshwar",
    name: "Omkareshwar",
    category: ["Spiritual"],
    image: omkareshwarImg,
    description: "Sacred Om-shaped island on the Narmada housing one of India's 12 Jyotirlingas.",
    x: 19.9735,
    y: 63.2743,
  },
  {
    id: "bhojpur",
    name: "Bhojpur",
    category: ["Spiritual"],
    image: bhojpurImg,
    description: "Home to an unfinished Shiva temple with one of the largest Shivalingas in the world.",
    x: 42.3319,
    y: 54.4836,
  },
  {
    id: "chitrakoot",
    name: "Chitrakoot",
    category: ["Spiritual"],
    image: chitrakootImg,
    description: "Where Lord Ram spent 11 years of exile — a deeply spiritual riverside pilgrimage town.",
    x: 85.8562,
    y: 45.6462,
  },
  {
    id: "amarkantak",
    name: "Amarkantak",
    category: ["Spiritual"],
    image: amarKantakImg,
    description: "Origin of the holy Narmada river, surrounded by lush forests and ancient temples.",
    x: 85.26,
    y: 71.1194,
  },
  {
    id: "maihar",
    name: "Maihar",
    category: ["Spiritual"],
    image: maiharImg,
    description: "Home to the hilltop Sharda Devi temple, one of the 51 Shakti Peethas.",
    x: 74.3044,
    y: 43.7667,
  },

  {
    id: "mandsaur",
    name: "Mandsaur",
    category: ["Spiritual"],
    image: mandsaurImg,
    description: "Ancient Dashpur with the revered Pashupatinath temple on the banks of the Shivna river.",
    x: 13.1169,
    y: 48.5531,
  },
  {
    id: "sonagiri",
    name: "Sonagiri",
    category: ["Spiritual"],
    image: sonagiriImg,
    description: "Sacred Jain pilgrimage site with 77 hilltop Digambar Jain temples.",
    x: 48.2606,
    y: 8.2515,
  },

  // ─── Nature ───

  {
    id: "pachmarhi",
    name: "Pachmarhi",
    category: ["Nature"],
    image: pachmarhiImg,
    description: "Queen of Satpura — MP's only hill station with waterfalls, caves, and panoramic viewpoints.",
    x: 51.346,
    y: 51.8657,
  },

  {
    id: "bhedaghat",
    name: "Bhedaghat",
    category: ["Nature"],
    image: bhedaghatImg,
    description: "Towering marble cliffs along the Narmada river with the thundering Dhuandhar Falls.",
    x: 67.3602,
    y: 64.1171,
  },

  {
    id: "sailani",
    name: "Sailani Island",
    category: ["Nature"],
    image: sailaniImg,
    description: "Scenic island on Indira Sagar reservoir offering serene backwaters and untouched nature.",
    x: 27.7989,
    y: 78.8478,
  },
  {
    id: "tawa",
    name: "Tawa",
    category: ["Nature"],
    image: tawaImg,
    description: "Vast scenic reservoir perfect for boating, fishing, and sunset views.",
    x: 43.8267,
    y: 74.1184,
  },

  {
    id: "tamia",
    name: "Tamia",
    category: ["Nature"],
    image: tamiaImg,
    description: "Hidden hill station with misty valleys, tribal culture, and the famous Patalkot viewpoint.",
    x: 53.4618,
    y: 77.5257,
  },
  {
    id: "hanuwantiya",
    name: "Hanuwantiya",
    category: ["Nature"],
    image: hanuwantiyaImg,
    description: "MP's premier water sports and adventure island resort on Indira Sagar Dam.",
    x: 26.6201,
    y: 86.1617,
  },

  {
    id: "parsili",
    name: "Parsili",
    category: ["Nature"],
    image: parsiliImg,
    description: "Pristine forest retreat near Sanjay Dubri with lush greenery, rivers and serene nature trails.",
    x: 77.6582,
    y: 55.8262,
  },



];
// Dropdown navigation structure
export const exploreCategories: Record<MapCategory, { label: string; icon: string; destinations: { id: string; name: string }[] }> = {
  Nature: {
    label: "🌄 Nature",
    icon: "🌄",
    destinations: [
      { id: "pachmarhi", name: "Pachmarhi" },
      { id: "bhedaghat", name: "Bhedaghat" },
      { id: "sailani", name: "Sailani Island" },
      { id: "tawa", name: "Tawa" },
      { id: "tamia", name: "Tamia" },
      { id: "hanuwantiya", name: "Hanuwantiya" },
      { id: "parsili", name: "Parsili" },



    ],
  },
  Heritage: {
    label: "🏛️ Heritage",
    icon: "🏛️",
    destinations: [
      { id: "bhopal", name: "Bhopal" },
      { id: "gwalior", name: "Gwalior" },
      { id: "khajuraho", name: "Khajuraho" },
      { id: "maheshwar", name: "Maheshwar" },
      { id: "orchha", name: "Orchha" },
      { id: "datia", name: "Datia" },
      { id: "shivpuri", name: "Shivpuri" },
      { id: "chanderi", name: "Chanderi" },
      { id: "bhimbetka", name: "Bhimbetka Rock Shelters" },
      { id: "indore", name: "Indore" },
      { id: "mandu", name: "Mandu" },
      { id: "burhanpur", name: "Burhanpur" },
      { id: "udayagiri", name: "Udayagiri Caves" },
      // { id: "khandwa", name: "Khandwa" },    
      // { id: "vidisha", name: "Vidisha" },
    ],
  },
  Wildlife: {
    label: "🐅 Wildlife",
    icon: "🐅",
    destinations: [
      { id: "pench", name: "Pench National Park" },
      { id: "panna", name: "Panna National Park" },
      { id: "kanha", name: "Kanha National Park" },
      { id: "satpura", name: "Satpura National Park" },
      { id: "bandhavgarh", name: "Bandhavgarh National Park" },
      { id: "kuno", name: "Kuno National Park" },
      { id: "mukundpur", name: "Mukundpur White Tiger Safari & Zoo" },
      { id: "madhav", name: "Madhav National Park" },
      { id: "sanjay-dubri", name: "Sanjay Dubri National Park" },
    ],
  },
  Spiritual: {
    label: "🛕 Spiritual",
    icon: "🛕",
    destinations: [
      { id: "ujjain", name: "Ujjain" },
      { id: "omkareshwar", name: "Omkareshwar" },
      { id: "bhojpur", name: "Bhojpur" },
      { id: "chitrakoot", name: "Chitrakoot" },
      { id: "amarkantak", name: "Amarkantak" },
      { id: "maihar", name: "Maihar" },
      { id: "mandsaur", name: "Mandsaur" },
      { id: "datia", name: "Datia" },
      { id: "sonagiri", name: "Sonagiri" },
    ],
  },
};

export const mapCategoryColors: Record<MapCategory, { dot: string; glow: string; label: string }> = {
  Wildlife: { dot: "bg-green-500", glow: "shadow-green-500/50", label: "text-green-600" },
  Heritage: { dot: "bg-amber-500", glow: "shadow-amber-500/50", label: "text-amber-600" },
  Spiritual: { dot: "bg-orange-500", glow: "shadow-orange-500/50", label: "text-orange-600" },
  Nature: { dot: "bg-blue-500", glow: "shadow-blue-500/50", label: "text-blue-600" },
};
