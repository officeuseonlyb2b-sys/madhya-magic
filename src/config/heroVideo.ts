// =============================================================
// HERO VIDEO CONFIG
// -------------------------------------------------------------
// To replace the home hero video later:
//   1. Re-upload via lovable-assets to:
//      src/assets/hero/hero-video.mp4.asset.json
//   2. Or change `src` below to any public URL.
//   No other code changes required.
// =============================================================

import heroVideoAsset from "@/assets/hero/hero-video.mp4.asset.json";

export const HERO_VIDEO = {
  /** Primary video URL (CDN-served via lovable-assets) */
  src: heroVideoAsset.url,
  /** Optional poster fallback */
  poster: "/videos/posters/hero_jabalpur.jpg",
  /** Alt / aria description */
  alt: "Discover the magic of Madhya Pradesh — nature, heritage, wildlife & spirituality",
};
