// =============================================================
// Top Activities — Reels Data
// -------------------------------------------------------------
// To add a NEW reel card, simply append a new object to the
// `activityReelsData` array below. No other code changes needed.
//
// Required fields:
//   id         — unique string
//   title      — card heading
//   location   — small text under title
//   category   — used for filtering ("Wildlife" | "Heritage" |
//                "Nature" | "Adventure" | "Spiritual")
//   thumbnail  — image shown before hover (jpg/png URL or path)
//   video      — mp4 path inside /public/videos/activities/
//   link       — optional route opened on click
// =============================================================

import type { ActivityCategory } from "@/data/activitiesData";

// Reuse existing activity images for original reels
import actSafari from "@/assets/act-safari.jpg";
import actBalloon from "@/assets/act-balloon.jpg";
import actBoat from "@/assets/act-boat.jpg";
import actCamping from "@/assets/act-camping.jpg";
import actHeritageWalk from "@/assets/act-heritage-walk.jpg";
import actJungleWalk from "@/assets/act-jungle-walk.jpg";
import actRafting from "@/assets/act-rafting.jpg";
import actTrekking from "@/assets/act-trekking.jpg";

export type ActivityReelCategory = ActivityCategory | "Spiritual";

export interface ActivityReel {
  id: string;
  title: string;
  location: string;
  category: ActivityReelCategory;
  thumbnail: string;
  video: string;
  link?: string;
}

export const activityReelsData: ActivityReel[] = [
  // ---------- Existing reels ----------
  {
    id: "jungle-jeep-safari",
    title: "Jungle Jeep Safari",
    location: "Kanha National Park",
    category: "Wildlife",
    thumbnail: actSafari,
    video: "/videos/activities/jungle-jeep-safari.mp4",
    link: "/activities/jungle-jeep-safari",
  },
  {
    id: "walking-tour",
    title: "Heritage Walking Tour",
    location: "Orchha",
    category: "Heritage",
    thumbnail: actHeritageWalk,
    video: "/videos/activities/walking-tour.mp4",
    link: "/activities/walking-tour",
  },
  {
    id: "boat-safari",
    title: "Boat Safari",
    location: "Satpura",
    category: "Nature",
    thumbnail: actBoat,
    video: "/videos/activities/boat-safari.mp4",
    link: "/activities/boat-safari",
  },
  {
    id: "camping",
    title: "Forest Camping",
    location: "Pachmarhi",
    category: "Adventure",
    thumbnail: actCamping,
    video: "/videos/activities/camping.mp4",
    link: "/activities/camping",
  },
  {
    id: "hot-air-balloon",
    title: "Hot Air Balloon",
    location: "Bandhavgarh",
    category: "Adventure",
    thumbnail: actBalloon,
    video: "/videos/activities/hot-air-balloon.mp4",
    link: "/activities/hot-air-balloon",
  },
  {
    id: "jungle-walk",
    title: "Jungle Walk",
    location: "Satpura",
    category: "Wildlife",
    thumbnail: actJungleWalk,
    video: "/videos/activities/jungle-walk.mp4",
    link: "/activities/jungle-walk",
  },

  // ---------- New reels (added from uploaded videos) ----------
  {
    id: "boat-ride-bhedaghat",
    title: "Marble Rocks Boat Ride",
    location: "Bhedaghat",
    category: "Nature",
    thumbnail: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=900&fit=crop",
    video: "/videos/activities/boat-ride-bhedaghat.mp4",
  },
  {
    id: "canoeing",
    title: "Canoeing Adventure",
    location: "Tawa Reservoir",
    category: "Adventure",
    thumbnail: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=600&h=900&fit=crop",
    video: "/videos/activities/canoeing-extra.mp4",
  },
  {
    id: "cycle-tour",
    title: "Cycle Tour",
    location: "Khajuraho",
    category: "Adventure",
    thumbnail: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&h=900&fit=crop",
    video: "/videos/activities/cycle-tour.mp4",
  },
  {
    id: "heritage-walk-tour",
    title: "Heritage Walk Tour",
    location: "Mandu",
    category: "Heritage",
    thumbnail: actHeritageWalk,
    video: "/videos/activities/heritage-walk-tour.mp4",
  },
  {
    id: "jungle-night-safari",
    title: "Jungle Night Safari",
    location: "Pench National Park",
    category: "Wildlife",
    thumbnail: "https://images.unsplash.com/photo-1561731216-c3a4d514d450?w=600&h=900&fit=crop",
    video: "/videos/activities/jungle-night-safari.mp4",
  },
  {
    id: "jungle-safari",
    title: "Jungle Safari",
    location: "Bandhavgarh",
    category: "Wildlife",
    thumbnail: actSafari,
    video: "/videos/activities/jungle-safari.mp4",
  },
  {
    id: "light-sound-show",
    title: "Light & Sound Show",
    location: "Gwalior Fort",
    category: "Heritage",
    thumbnail: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=900&fit=crop",
    video: "/videos/activities/light-sound-show.mp4",
  },
  {
    id: "motor-boat-safari",
    title: "Motor Boat Safari",
    location: "Hanuwantiya",
    category: "Adventure",
    thumbnail: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&h=900&fit=crop",
    video: "/videos/activities/motor-boat-safari.mp4",
  },
  {
    id: "rafting",
    title: "River Rafting",
    location: "Bhedaghat",
    category: "Adventure",
    thumbnail: actRafting,
    video: "/videos/activities/rafting.mp4",
  },
  {
    id: "sky-diving",
    title: "Sky Diving",
    location: "Madhya Pradesh",
    category: "Adventure",
    thumbnail: actTrekking,
    video: "/videos/activities/sky-diving.mp4",
  },

  // ---------- ADD NEW REELS BELOW THIS LINE ----------
  // {
  //   id: "your-new-reel",
  //   title: "Your Reel Title",
  //   location: "Your Location",
  //   category: "Adventure",
  //   thumbnail: "/path/to/thumb.jpg",
  //   video: "/videos/activities/your-video.mp4",
  // },
];
