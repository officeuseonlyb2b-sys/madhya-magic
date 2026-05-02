import { useEffect, useRef, useState, useCallback } from "react";

/**
 * Premium auto-scrolling marquee hook.
 * - Auto-scrolls horizontally at constant speed (px/sec).
 * - Pauses on hover/drag/wheel/touch.
 * - Resumes from current scroll position (no jumps/resets).
 * - Supports infinite loop when content is duplicated (track contains 2x items).
 * - Supports manual wheel + drag scroll.
 */
export function useAutoScroll<T extends HTMLDivElement>(speed = 60) {
  const ref = useRef<T | null>(null);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      if (!pausedRef.current && el.scrollWidth > el.clientWidth) {
        const half = el.scrollWidth / 2;
        let next = el.scrollLeft + speed * dt;
        if (next >= half) next -= half;
        el.scrollLeft = next;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Drag-to-scroll
    let isDown = false;
    let startX = 0;
    let startScroll = 0;

    const onDown = (e: PointerEvent) => {
      isDown = true;
      startX = e.clientX;
      startScroll = el.scrollLeft;
      el.classList.add("is-dragging");
      pausedRef.current = true;
      el.setPointerCapture?.(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!isDown) return;
      el.scrollLeft = startScroll - (e.clientX - startX);
    };
    const onUp = (e: PointerEvent) => {
      if (!isDown) return;
      isDown = false;
      el.classList.remove("is-dragging");
      el.releasePointerCapture?.(e.pointerId);
      // Resume after short delay if not hovering
      setTimeout(() => {
        if (!el.matches(":hover")) pausedRef.current = false;
      }, 600);
    };

    let wheelTimer: number | undefined;
    const onWheel = () => {
      pausedRef.current = true;
      if (wheelTimer) window.clearTimeout(wheelTimer);
      wheelTimer = window.setTimeout(() => {
        if (!el.matches(":hover")) pausedRef.current = false;
      }, 1200);
    };

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
    el.addEventListener("wheel", onWheel, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
      el.removeEventListener("wheel", onWheel);
      if (wheelTimer) window.clearTimeout(wheelTimer);
    };
  }, [speed]);

  const onMouseEnter = useCallback(() => setPaused(true), []);
  const onMouseLeave = useCallback(() => setPaused(false), []);

  return { ref, onMouseEnter, onMouseLeave };
}
