import { lazy, type ComponentType, type LazyExoticComponent } from "react";

/**
 * React.lazy wrapper that:
 *  1. Recovers from stale chunk errors after a redeploy (one-time hard reload).
 *  2. Exposes `.preload()` so chunks can be warmed during idle time, avoiding
 *     blank screens when the user switches tabs/routes.
 */
const RELOAD_KEY = "__lazyWithRetry_reloaded__";

type PreloadableLazy<T extends ComponentType<any>> = LazyExoticComponent<T> & {
  preload: () => Promise<unknown>;
};

const wrapFactory = <T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>
) => async () => {
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
        return new Promise(() => {}) as Promise<{ default: T }>;
      }
    }
    throw err;
  }
};

const pendingPrefetches: Array<() => Promise<unknown>> = [];
let prefetchScheduled = false;

const runIdle = (cb: () => void) => {
  if (typeof window === "undefined") return;
  const ric = (window as any).requestIdleCallback as
    | ((cb: () => void, opts?: { timeout: number }) => number)
    | undefined;
  if (ric) ric(cb, { timeout: 4000 });
  else window.setTimeout(cb, 1500);
};

const drainPrefetchQueue = () => {
  // Run sequentially so we don't saturate the network during idle time.
  const next = pendingPrefetches.shift();
  if (!next) {
    prefetchScheduled = false;
    return;
  }
  next()
    .catch(() => {
      /* swallow — preloads are best-effort */
    })
    .finally(() => runIdle(drainPrefetchQueue));
};

const schedulePrefetch = (loader: () => Promise<unknown>) => {
  if (typeof window === "undefined") return;
  // Skip prefetch on save-data / very slow connections.
  const conn = (navigator as any).connection;
  if (conn?.saveData) return;
  if (conn?.effectiveType && /(^|-)2g$/.test(conn.effectiveType)) return;

  pendingPrefetches.push(loader);
  if (prefetchScheduled) return;
  prefetchScheduled = true;
  runIdle(drainPrefetchQueue);
};

export function lazyWithRetry<T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>
): PreloadableLazy<T> {
  const wrapped = wrapFactory(factory);
  let cached: Promise<{ default: T }> | null = null;
  const load = () => (cached ??= wrapped());

  const Component = lazy(load) as PreloadableLazy<T>;
  Component.preload = () => load();

  // Warm this chunk during browser idle time so tab switches / route
  // changes don't hit a "Failed to fetch dynamically imported module".
  schedulePrefetch(load);

  return Component;
}
