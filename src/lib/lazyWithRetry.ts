import { lazy, type ComponentType } from "react";

/**
 * React.lazy wrapper that recovers from stale chunk errors after a redeploy.
 * If a dynamic import fails (old hashed file no longer exists), it forces a
 * one-time hard reload so the user gets the new bundle instead of a blank page.
 */
const RELOAD_KEY = "__lazyWithRetry_reloaded__";

export function lazyWithRetry<T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>
) {
  return lazy(async () => {
    try {
      return await factory();
    } catch (err: any) {
      const message = String(err?.message || err || "");
      const isChunkError =
        message.includes("Failed to fetch dynamically imported module") ||
        message.includes("Importing a module script failed") ||
        message.includes("error loading dynamically imported module");

      if (isChunkError && typeof window !== "undefined") {
        const alreadyReloaded = sessionStorage.getItem(RELOAD_KEY);
        if (!alreadyReloaded) {
          sessionStorage.setItem(RELOAD_KEY, "1");
          window.location.reload();
          // Return a never-resolving promise so Suspense keeps showing the
          // fallback during the reload instead of throwing.
          return new Promise(() => {}) as Promise<{ default: T }>;
        }
      }
      throw err;
    }
  });
}
