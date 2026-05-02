import { allPackages, type PackageData } from "@/data/packagesData";
import type { ActivityData } from "@/data/activitiesData";
import type { Experience } from "@/data/experiencesData";

/* ──────────────────────────────────────────────
   Smart Related-Packages Engine
   - Scores each package against the source item
   - Returns top N highest-scoring packages
   ────────────────────────────────────────────── */

const norm = (s: string) => s.toLowerCase().trim();

const tokens = (s: string) =>
  norm(s)
    .replace(/[^a-z0-9 +&]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 2);

const overlap = (a: string[], b: string[]) =>
  a.filter((x) => b.includes(x)).length;

/* ─── Activity → Package matching ─── */
export const getRelatedPackagesForActivity = (
  activity: ActivityData,
  limit = 3
): PackageData[] => {
  const actLocations = activity.locations.map(norm);
  const actCategory = norm(activity.category);
  const actHighlightsTokens = activity.highlights.flatMap(tokens);

  const scored = allPackages.map((pkg) => {
    let score = 0;

    // Location match (most important)
    const pkgLoc = norm(pkg.location);
    const locHit = actLocations.some(
      (l) => pkgLoc.includes(l) || l.includes(pkgLoc.split(" + ")[0])
    );
    if (locHit) score += 10;

    // Category match
    if (norm(pkg.category) === actCategory) score += 5;

    // Highlights overlap
    const pkgHighlightsTokens = pkg.highlights.flatMap(tokens);
    score += overlap(actHighlightsTokens, pkgHighlightsTokens) * 2;

    // Description tokens overlap
    const pkgDescTokens = tokens(pkg.description);
    score += overlap(actHighlightsTokens, pkgDescTokens);

    return { pkg, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.pkg);
};

/* ─── Experience → Package matching ─── */
const experienceCategoryMap: Record<string, string[]> = {
  Spiritual: ["Spiritual"],
  Wildlife: ["Wildlife"],
  Wellness: ["Spiritual", "Nature"],
  Heritage: ["Heritage"],
};

export const getRelatedPackagesForExperience = (
  exp: Experience,
  limit = 3
): PackageData[] => {
  const allowedCats = experienceCategoryMap[exp.category] ?? [exp.category];
  const subtitleTokens = tokens(exp.subtitle);
  const titleTokens = tokens(exp.title);

  const scored = allPackages.map((pkg) => {
    let score = 0;

    if (allowedCats.includes(pkg.category)) score += 8;

    // Match locations mentioned in experience subtitle (e.g. "Ujjain")
    const pkgLoc = norm(pkg.location);
    if (subtitleTokens.some((t) => pkgLoc.includes(t))) score += 6;
    if (titleTokens.some((t) => pkgLoc.includes(t))) score += 3;

    // Highlights/description overlap with experience description
    const expDescTokens = tokens(exp.description);
    const pkgHighlightsTokens = pkg.highlights.flatMap(tokens);
    score += overlap(expDescTokens, pkgHighlightsTokens);

    return { pkg, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.pkg);
};
