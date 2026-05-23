/**
 * Per-destination packages registry.
 *
 * Each destination has its own file under `src/data/packages/`, exporting a
 * `PackageData[]` array. They are aggregated here and prepended to
 * `allPackages` in `src/data/packagesData.ts`, so they appear FIRST in the
 * listings for that destination.
 *
 * To add a new destination file:
 *   1. Create `src/data/packages/<destination>.ts` exporting an array.
 *   2. Import it below and add it to `manualPackages`.
 */
import type { PackageData } from "./types";
import { ujjainPackages } from "./ujjain";

/** All manually-curated packages, in display order. */
export const manualPackages: PackageData[] = [
  ...ujjainPackages,
  // ...pachmarhiPackages,
  // ...bhopalPackages,
];

export type { PackageData };
export { ujjainPackages };
