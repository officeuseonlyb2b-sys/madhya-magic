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
import snorkelingTrek from "@/assets/reels/experience/Snorkeling-Trek.mp4";
import tribalMuseum from "@/assets/reels/experience/Tribal-Museum.mp4";
import birdsWatching from "@/assets/reels/experience/birds-watching-madhya-pradesh.mp4";
import harsiddhiAarti from "@/assets/reels/experience/harsiddhi-aarti-ujjain.mp4";
import bhasmaAarti from "@/assets/reels/experience/bhasm-aarti-ujjain.mp4";
import chitrakootSpiritualSites from "@/assets/reels/experience/chitrakoot-spiritual-sites.mp4";
import narmadaAarti from "@/assets/reels/experience/narmada-aarti-gwarighat.mp4";
import abhiskhekam from "@/assets/reels/experience/abhiskekam-omkareswar.mp4";
import mahakalCorridor from "@/assets/reels/experience/mahakal-corridor.mp4";
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
    id: "snorkeling-trek",
    title: "snorkeling-Trek",
    location: "Pachmarhi",
    video: snorkelingTrek,
    tags: ["nature"],
  },
  {
    id: "meditation-pachmarhi",
    title: "meditation-pachmarhi",
    location: "Pachmarhi",
    video: meditationPachmarhi,
    tags: ["nature"],
  },
  {
    id: "tribal-museum",
    title: "tribal-museum",
    location: "Bhopal",
    video: tribalMuseum,
    tags: ["heritage"],
  },
  {
    id: "birds-watching",
    title: "birds watching",
    location: "Madhya Pradesh",
    video: birdsWatching,
    tags: ["wildlife"],
  },
  {
    id: "harsiddhi-aarti",
    title: "Harsiddhi Mata Aarti",
    location: "Ujjain",
    video: harsiddhiAarti,
    tags: ["spiritual"],
  },
  {
    id: "bhasma-aarti",
    title: "Bhasma Aarti",
    location: "Ujjain",
    video: bhasmaAarti,
    tags: ["spiritual"],
  },
  {
    id: "chitrakoot-spiritual-sites",
    title: "Chitrakoot Spirituals Sites",
    location: "Chitrakoot",
    video: chitrakootSpiritualSites,
    tags: ["spiritual"],
  },
  {
    id: "narmada-aarti",
    title: "Narmada Aarti",
    location: "Jabalpur",
    video: narmadaAarti,
    tags: ["spiritual"],
  },
  {
    id: "abhiskhekam",
    title: "Abhiskhekam",
    location: "Omkareswar",
    video: abhiskhekam,
    tags: ["spiritual"],
  },
  {
    id: "mahakal-corridor",
    title: "Mahakal Corridor",
    location: "Ujjain",
    video: mahakalCorridor,
    tags: ["spiritual"],
  },
  
  

  // ---------- ADD NEW EXPERIENCE REELS BELOW ----------
];
