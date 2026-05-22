// =============================================================
// Activity Reels — Home + Explore (Category) sections
// -------------------------------------------------------------
// HOW TO ADD A NEW ACTIVITY REEL (3 simple steps):
//   1. Drop your video in: src/assets/reels/activity/your-video.mp4
//   2. (optional) Drop a thumbnail in the same folder
//   3. Import below and append a new object to `activityReelsData`
//
// TAGS drive category filtering site-wide. Allowed values:
//   "nature" | "heritage" | "wildlife" | "spiritual"
// Multiple tags allowed, e.g. tags: ["wildlife", "nature"]
// =============================================================

import boatRideBhedaghat from "@/assets/reels/activity/boat-ride-bhedaghat.mp4";
import boatingUpperLakeBhopal from "@/assets/reels/activity/boating-upper-lake-bhopal.mp4";
import skyDiving from "@/assets/reels/activity/sky-diving.mp4";
import raftingOrchha from "@/assets/reels/activity/rafting-orchha.mp4";
import waterActivitiesHanuwantiya from "@/assets/reels/activity/water-activities-hanuwantiya.mp4";
import jungleWalkSafari from "@/assets/reels/activity/jungle-walk-safari-madhya-pradesh.mp4";
import jeepSafariTigerReserve from "@/assets/reels/activity/jeep-safari-tiger-reserves.mp4";
import wildlifePhotography from "@/assets/reels/activity/wildlife-photography-bandhavghar.mp4"
import motorBoatSafari from "@/assets/reels/activity/motor-boat-safari-satpura.mp4";
import canoeingSatpura from "@/assets/reels/activity/canoeing-satpura.mp4";

import type { ReelItem, ReelTag } from "@/data/reelTypes";
export type { ReelItem, ReelTag };

/** Legacy alias — kept so existing imports keep working. */
export type ActivityReel = ReelItem;
export type ActivityReelCategory = ReelTag;

export const activityReelsData: ReelItem[] = [
  {
    id: "boat-ride-bhedaghat",
    title: "Boat Ride",
    location: "Bhedaghat",
    video: boatRideBhedaghat,
    tags: ["nature"],
  },
  {
    id: "boating-upper-lake-bhopal",
    title: "Boating at Upper Lake",
    location: "Bhopal",
    video: boatingUpperLakeBhopal,
    tags: ["nature"],
  },
  {
    id: "sky-diving",
    title: "Sky Diving",
    location: "Madhya Pradesh",
    video: skyDiving,
    tags: ["nature"],
  },
  {
    id: "rafting-orchha",
    title: "River Rafting",
    location: "Orchha",
    video: raftingOrchha,
    tags: ["heritage", "nature"],
  },
  {
    id: "water-activities-hanuwantiya",
    title: "Water Activities",
    location: "Hanuwantiya",
    video: waterActivitiesHanuwantiya,
    tags: ["nature"],
  },
  {
    id: "jungle-walk-safari-madhya-pradesh",
    title: "Jungle Walk Safari",
    location: "Kanha",
    video: jungleWalkSafari,
    tags: ["wildlife"],
  },
  {
    id: "jeep-safari-tiger-reserve",
    title: "Jeep Safari Tiger Reserve",
    location: "Madhya Pradesh",
    video: jeepSafariTigerReserve,
    tags: ["wildlife"],
  },
  {
    id: "wildlife-photography",
    title: "Wildlife Photography",
    location: "Bandhavghar",
    video: wildlifePhotography,
    tags: ["wildlife"],
  },
  {
    id: "motor-boat-safari-satpura",
    title: "Motor Boat Safari",
    location: "Satpura",
    video: motorBoatSafari,
    tags: ["wildlife"],
  },
  {
    id: "canoeing-satpura",
    title: "Canoeing Safari",
    location: "Satpura",
    video: canoeingSatpura,
    tags: ["wildlife"],
  },



  // ---------- ADD NEW ACTIVITY REELS BELOW ----------
  // {
  //   id: "your-id",
  //   title: "Your Title",
  //   location: "Place",
  //   video: yourImportedVideo,
  //   tags: ["wildlife"],
  // },
];
