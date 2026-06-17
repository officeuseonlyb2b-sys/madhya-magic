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
    video: "https://res.cloudinary.com/dfyuf0bjl/video/upload/v1781694437/boat-ride-bhedaghat_nkc3yr.mp4",
    tags: ["nature"],
  },
  {
    id: "boating-upper-lake-bhopal",
    title: "Boating at Upper Lake",
    location: "Bhopal",
    video: "https://res.cloudinary.com/dfyuf0bjl/video/upload/v1781694428/boating-upper-lake-bhopal_qorbcn.mp4",
    tags: ["nature"],
  },
  {
    id: "sky-diving",
    title: "Sky Diving",
    location: "Madhya Pradesh",
    video: "https://res.cloudinary.com/dfyuf0bjl/video/upload/v1781694459/sky-diving_v2zdyi.mp4",
    tags: ["nature"],
  },
  {
    id: "rafting-orchha",
    title: "River Rafting",
    location: "Orchha",
    video: "https://res.cloudinary.com/dfyuf0bjl/video/upload/v1781694428/rafting-orchha_ph1nzi.mp4",
    tags: ["heritage", "nature"],
  },
  {
    id: "water-activities-hanuwantiya",
    title: "Water Activities",
    location: "Hanuwantiya",
    video: "https://res.cloudinary.com/dfyuf0bjl/video/upload/v1781694433/water-activities-hanuwantiya_gcfgjd.mp4",
    tags: ["nature"],
  },
  {
    id: "jungle-walk-safari-madhya-pradesh",
    title: "Jungle Walk Safari",
    location: "Kanha",
    video: "https://res.cloudinary.com/dfyuf0bjl/video/upload/v1781694432/jungle-walk-safari-madhya-pradesh_gh69rc.mp4",
    tags: ["wildlife"],
  },
  {
    id: "jeep-safari-tiger-reserve",
    title: "Jeep Safari Tiger Reserve",
    location: "Madhya Pradesh",
    video: "https://res.cloudinary.com/dfyuf0bjl/video/upload/v1781694423/jeep-safari-tiger-reserves_sw9r6m.mp4",
    tags: ["wildlife"],
  },
  {
    id: "wildlife-photography",
    title: "Wildlife Photography",
    location: "Bandhavghar",
    video: "https://res.cloudinary.com/dfyuf0bjl/video/upload/v1781694448/wildlife-photography-bandhavghar_upakja.mp4",
    tags: ["wildlife"],
  },
  {
    id: "motor-boat-safari-satpura",
    title: "Motor Boat Safari",
    location: "Satpura",
    video: "https://res.cloudinary.com/dfyuf0bjl/video/upload/v1781694435/motor-boat-safari-satpura_hsoctl.mp4",
    tags: ["wildlife"],
  },
  {
    id: "canoeing-satpura",
    title: "Canoeing Safari",
    location: "Satpura",
    video: "https://res.cloudinary.com/dfyuf0bjl/video/upload/v1781694434/canoeing-satpura_w4eegh.mp4",
    tags: ["wildlife"],
  },
];

