import type { MapCategory } from "@/data/mapDestinations";

export interface ReelItem {
  id: string;
  title: string;
  location: string;
  category: MapCategory;
  videoUrl: string;          // thumbnail removed
}

export const reelsData: ReelItem[] = [
  {
    id: "reel-bhopal",
    title: "City of Lakes",
    location: "Bhopal",
    category: "Heritage",
    videoUrl: "https://res.cloudinary.com/dfyuf0bjl/video/upload/v1781698625/bhopal_s4zrt9.mp4",
  },
  {
    id: "reel-orchha",
    title: "Orchha Palaces",
    location: "Orchha",
    category: "Heritage",
    videoUrl: "https://res.cloudinary.com/dfyuf0bjl/video/upload/v1781698625/orchha_oynxxw.mp4",
  },
  {
    id: "reel-bhedaghat",
    title: "Marble Rocks",
    location: "Bhedaghat",
    category: "Nature",
    videoUrl: "https://res.cloudinary.com/dfyuf0bjl/video/upload/v1781698630/bhedaghat_j2la1h.mp4",
  },
  {
    id: "reel-gwalior",
    title: "Gwalior Fort",
    location: "Gwalior",
    category: "Heritage",
    videoUrl: "https://res.cloudinary.com/dfyuf0bjl/video/upload/v1781698637/gwalior_mo1a7l.mp4",
  },
  {
    id: "reel-khajuraho",
    title: "Khajuraho Temples",
    location: "Khajuraho",
    category: "Heritage",
    videoUrl: "https://res.cloudinary.com/dfyuf0bjl/video/upload/v1781698623/khajuraho_pigsqx.mp4",
  },
  {
    id: "reel-maheshwar",
    title: "Maheshwar Ghats",
    location: "Maheshwar",
    category: "Spiritual",
    videoUrl: "https://res.cloudinary.com/dfyuf0bjl/video/upload/v1781698638/maheshwar_xiq6pd.mp4",
  },
  {
    id: "reel-omkareshwar",
    title: "Omkareshwar Island",
    location: "Omkareshwar",
    category: "Spiritual",
    videoUrl: "https://res.cloudinary.com/dfyuf0bjl/video/upload/v1781698639/omkareshwar_nybtxt.mp4",
  },
  {
    id: "reel-pachmarhi",
    title: "Pachmarhi Hills",
    location: "Pachmarhi",
    category: "Nature",
    videoUrl: "https://res.cloudinary.com/dfyuf0bjl/video/upload/v1781698628/pachmarhi_bwqrbk.mp4",
  },
  {
    id: "reel-panna",
    title: "Panna National Park",
    location: "Panna",
    category: "Wildlife",
    videoUrl: "https://res.cloudinary.com/dfyuf0bjl/video/upload/v1781698630/panna_a47fr8.mp4",
  },
  {
    id: "reel-sanchi",
    title: "Sanchi Stupa",
    location: "Sanchi",
    category: "Heritage",
    videoUrl: "https://res.cloudinary.com/dfyuf0bjl/video/upload/v1781698629/sanchi_pjlcrz.mp4",
  },
];