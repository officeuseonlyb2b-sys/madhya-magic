import { allPackages, type PackageData } from "@/data/packagesData";

const norm = (s: string) => s.toLowerCase().trim();

/**
 * Returns packages related to a destination by matching the destination
 * id / name (plus any extra `tags` from the destination's data file)
 * against each package's `location`, `name` and `description` fields.
 *
 * No package schema changes required — fully derived at runtime.
 */
export const getRelatedPackagesForDestination = (
  destinationId: string,
  destinationName: string,
  tags: string[] = [],
  limit = 12
): PackageData[] => {
  const needles = [destinationId, destinationName, ...tags]
    .map(norm)
    .filter(Boolean);

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
