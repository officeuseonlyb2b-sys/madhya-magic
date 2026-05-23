// Shared TypeScript types for the per-destination package files.
// Re-exports the canonical PackageData interface so individual destination
// files (ujjain.ts, pachmarhi.ts, …) can be added without circular imports.
export type { PackageData } from "../packagesData";
