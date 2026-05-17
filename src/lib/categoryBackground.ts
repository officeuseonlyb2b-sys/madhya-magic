import natureBg from "@/assets/backgroundimage/backgroundnature.jpeg";
import heritageBg from "@/assets/backgroundimage/backgroundheritage.jpeg";
import wildlifeBg from "@/assets/backgroundimage/backgroundwildlife.jpeg";
import spiritualBg from "@/assets/backgroundimage/backgroundspiritual.jpeg";

export type CategoryKey = "nature" | "heritage" | "wildlife" | "spiritual";

const MAP: Record<CategoryKey, string> = {
  nature: natureBg,
  heritage: heritageBg,
  wildlife: wildlifeBg,
  spiritual: spiritualBg,
};

const PRIORITY: CategoryKey[] = ["wildlife", "spiritual", "heritage", "nature"];

export const getCategoryBackground = (category?: string | null): string | null => {
  if (!category) return null;
  const key = category.toLowerCase() as CategoryKey;
  return MAP[key] ?? null;
};

/** Pick a single background for a destination that may have multiple categories. */
export const getBackgroundForCategories = (categories?: string[] | null): string | null => {
  if (!categories?.length) return null;
  const lower = categories.map((c) => c.toLowerCase());
  for (const key of PRIORITY) {
    if (lower.includes(key)) return MAP[key];
  }
  return null;
};
