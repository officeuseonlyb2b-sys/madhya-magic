// =============================================================
// Experience Reels — Home + Explore (Category) sections
// -------------------------------------------------------------
// HOW TO ADD A NEW EXPERIENCE REEL (3 simple steps):
//   1. Drop your video in: src/assets/reels/experience/your-video.mp4
//   2. (optional) Drop a thumbnail in the same folder
//   3. Import below and append a new object to `experienceReelsData`
//
// TAGS drive category filtering site-wide. Allowed values:
//   "nature" | "heritage" | "wildlife" | "spiritual"
// =============================================================

import lightSoundShow from "@/assets/reels/experience/light-sound-show.mp4";
import bhimbetkaCavePaintings from "@/assets/reels/experience/bhimbetka-cave-paintings.mp4";
import dhuandharFallsRopeway from "@/assets/reels/experience/dhuandhar-falls-ropeway.mp4";
import heritageWalkGwalior from "@/assets/reels/experience/heritage-walk-gwalior.mp4";
import meditationPachmarhi from "@/assets/reels/experience/meditation-pachmarhi.mp4";

import type { ReelItem } from "@/data/reelTypes";

export const experienceReelsData: ReelItem[] = [
  {
    id: "light-sound-show",
    title: "Light & Sound Show",
    location: "Madhya Pradesh",
    video: lightSoundShow,
    tags: ["heritage"],
  },
  {
    id: "bhimbetka-cave-paintings",
    title: "Bhimbetka Cave Paintings",
    location: "Bhimbetka",
    video: bhimbetkaCavePaintings,
    tags: ["heritage"],
  },
  {
    id: "dhuandhar-falls-ropeway",
    title: "Dhuandhar Falls Ropeway",
    location: "Jabalpur",
    video: dhuandharFallsRopeway,
    tags: ["nature"],
  },
  {
    id: "heritage-walk-gwalior",
    title: "Heritage Walk Tour",
    location: "Gwalior",
    video: heritageWalkGwalior,
    tags: ["heritage"],
  },
  {
    id: "meditation-pachmarhi",
    title: "Meditation in Nature",
    location: "Pachmarhi",
    video: meditationPachmarhi,
    tags: ["spiritual", "nature"],
  },

  // ---------- ADD NEW EXPERIENCE REELS BELOW ----------
];
