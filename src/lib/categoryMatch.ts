// ============================================================
// Centralized Category Tagging + Filter Matcher
// ------------------------------------------------------------
// Single source of truth for mapping any content item
// (reel, activity reel, experience, package) to one or more
// MapCategory values ("Nature" | "Heritage" | "Wildlife" |
// "Spiritual"). Keeps filtering consistent across the site.
// ============================================================

import type { MapCategory } from "@/data/mapDestinations";
import type { ReelItem as DestReelItem } from "@/data/reelsData";
import type { ReelItem, ReelTag } from "@/data/reelTypes";
import type { Experience } from "@/data/experiencesData";
import type { PackageData } from "@/data/packagesData";

const TAG_TO_CAT: Record<ReelTag, MapCategory> = {
  nature: "Nature",
  heritage: "Heritage",
  wildlife: "Wildlife",
  spiritual: "Spiritual",
};


const ALL_CATS: MapCategory[] = ["Nature", "Heritage", "Wildlife", "Spiritual"];

/* ---------- Keyword inference (fallback for free-text data) ---------- */
const KEYWORDS: Record<MapCategory, string[]> = {
  Nature: [
    "waterfall", "falls", "river", "marble", "pachmarhi", "bhedaghat", "tawa",
    "hill", "forest", "nature", "sailani", "tamia", "hanuwantiya", "reservoir",
    "boating", "trek", "trekking", "camping", "canoe", "rafting", "balloon",
    "sky", "scenic", "lake", "amarkantak",
  ],
  Wildlife: [
    "safari", "tiger", "jungle", "wildlife", "national park", "kanha",
    "bandhavgarh", "pench", "satpura", "kuno", "panna", "leopard", "cheetah",
    "barasingha", "sanjay", "mukundpur", "madhav", "gharial",
  ],
  Heritage: [
    "fort", "palace", "heritage", "khajuraho", "orchha", "gwalior", "sanchi",
    "mandu", "bhopal", "udayagiri", "bhimbetka", "chanderi", "monument",
    "architecture", "stupa", "burhanpur", "shivpuri", "datia", "indore",
    "rock shelter", "cenotaph", "light & sound", "light and sound",
  ],
  Spiritual: [
    "temple", "jyotirlinga", "ujjain", "omkareshwar", "mahakal", "maheshwar",
    "aarti", "spiritual", "chitrakoot", "pilgrimage", "bhojpur", "ghat",
    "sonagiri", "maihar", "mandsaur", "abhishek", "puja", "ritual", "darshan",
    "bhasm", "harsiddhi", "shakti",
  ],
};

const inferFromText = (...parts: (string | undefined | null)[]): MapCategory[] => {
  const text = parts.filter(Boolean).join(" ").toLowerCase();
  const hits = new Set<MapCategory>();
  (Object.keys(KEYWORDS) as MapCategory[]).forEach((cat) => {
    if (KEYWORDS[cat].some((k) => text.includes(k))) hits.add(cat);
  });
  return Array.from(hits);
};

/* ---------- Map item.category strings to MapCategory ---------- */
const normalizeCat = (raw?: string): MapCategory[] => {
  if (!raw) return [];
  const out: MapCategory[] = [];
  const r = raw.toLowerCase();
  if (r.includes("nature")) out.push("Nature");
  if (r.includes("heritage")) out.push("Heritage");
  if (r.includes("wildlife")) out.push("Wildlife");
  if (r.includes("spirit")) out.push("Spiritual");
  if (r.includes("wellness")) out.push("Spiritual"); // wellness ≈ spiritual
  return out;
};

/* ---------- Manual overrides for ACTIVITY REELS ---------- */
const ACTIVITY_REEL_TAGS: Record<string, MapCategory[]> = {
  "jungle-jeep-safari": ["Wildlife"],
  "walking-tour": ["Heritage"],
  "boat-safari": ["Nature", "Wildlife"],
  "camping": ["Nature"],
  "hot-air-balloon": ["Nature", "Wildlife"],
  "jungle-walk": ["Wildlife", "Nature"],
  "boat-ride-bhedaghat": ["Nature"],
  "canoeing": ["Nature"],
  "cycle-tour": ["Heritage"],
  "heritage-walk-tour": ["Heritage"],
  "jungle-night-safari": ["Wildlife"],
  "jungle-safari": ["Wildlife"],
  "light-sound-show": ["Heritage"],
  "motor-boat-safari": ["Nature"],
  "rafting": ["Nature"],
  "sky-diving": ["Nature"],
};

/* ---------- Manual overrides for EXPERIENCES ---------- */
const EXPERIENCE_TAGS: Record<string, MapCategory[]> = {
  "bhasm-aarti": ["Spiritual"],
  "abhishekam": ["Spiritual"],
  "harsiddhi-aarti": ["Spiritual"],
  "meditation-retreat": ["Spiritual", "Nature", "Heritage"],
  "jungle-safari": ["Wildlife"],
  "wildlife-photography": ["Wildlife"],
  "yoga-heritage": ["Heritage", "Spiritual"],
  "temple-ritual": ["Spiritual", "Heritage"],
  "bhasm-aarti-2": ["Spiritual"],
  "abhishekam-2": ["Spiritual"],
  "harsiddhi-aarti-2": ["Spiritual"],
  "meditation-retreat-2": ["Spiritual", "Nature"],
  "jungle-safari-2": ["Wildlife"],
  "wildlife-photography-2": ["Wildlife"],
  "yoga-heritage-2": ["Heritage", "Spiritual"],
  "temple-ritual-2": ["Spiritual", "Heritage"],
};

/* ---------- Public getters ---------- */
export const getReelCategories = (r: DestReelItem): MapCategory[] => {
  const base = normalizeCat(r.category as string);
  const inferred = inferFromText(r.title, r.location);
  return Array.from(new Set([...base, ...inferred]));
};

/** Tag-driven categories for activity + experience reels. */
export const getReelItemCategories = (r: ReelItem): MapCategory[] => {
  const fromTags = (r.tags ?? []).map((t) => TAG_TO_CAT[t]).filter(Boolean);
  if (fromTags.length) return Array.from(new Set(fromTags));
  return inferFromText(r.title, r.location);
};

export const getActivityReelCategories = (r: ReelItem): MapCategory[] =>
  getReelItemCategories(r);


export const getExperienceCategories = (e: Experience): MapCategory[] => {
  const override = EXPERIENCE_TAGS[e.id];
  if (override) return override;
  const base = normalizeCat(e.category);
  const inferred = inferFromText(e.title, e.subtitle, e.description);
  return Array.from(new Set([...base, ...inferred]));
};

export const getPackageCategories = (p: PackageData): MapCategory[] => {
  const base = normalizeCat(p.category);
  const inferred = inferFromText(
    p.name,
    p.location,
    p.description,
    p.highlights?.join(" "),
  );
  return Array.from(new Set([...base, ...inferred]));
};

/* ---------- Matcher ---------- */
export const matchesFilters = (
  itemCats: MapCategory[],
  selected: MapCategory[],
  isAll: boolean,
): boolean => {
  if (isAll || selected.length === 0) return true;
  if (itemCats.length === 0) return false;
  return selected.some((s) => itemCats.includes(s));
};
