import { allPackages, type PackageData } from "@/data/packagesData";

const norm = (s: string) => s.toLowerCase().trim();

/**
 * Returns packages related to a destination by matching the destination
 * id / name against the package `location` route string
 * (e.g. "Indore - Ujjain - Omkareshwar - ...").
 *
 * No package schema changes required — fully derived at runtime.
 */
export const getRelatedPackagesForDestination = (
  destinationId: string,
  destinationName: string,
  limit = 12
): PackageData[] => {
  const needles = [norm(destinationId), norm(destinationName)].filter(Boolean);

  const matches = allPackages.filter((pkg) => {
    const loc = norm(pkg.location);
    const name = norm(pkg.name);
    const desc = norm(pkg.description ?? "");
    return needles.some(
      (n) => loc.includes(n) || name.includes(n) || desc.includes(n)
    );
  });

  return matches.slice(0, limit);
};
