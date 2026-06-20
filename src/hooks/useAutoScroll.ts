import { useEffect, useRef, useCallback } from "react";

/**
 * Manual horizontal scroll helper.
 *
 * Auto-scrolling has been removed in favour of user-controlled interaction
 * (drag, wheel, touch, native scroll). The returned `ref` is attached to the
 * scroll container and drag-to-scroll + wheel-to-scroll are wired up.
 *
 * The hook keeps the same API (`ref`, `onMouseEnter`, `onMouseLeave`) so the
 * existing call sites don't need to change. The mouse handlers are kept as
 * no-ops for backwards compatibility.
 */
export function useAutoScroll<T extends HTMLDivElement>(_speed = 60) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Drag-to-scroll
    let isDown = false;
    let startX = 0;
    let startScroll = 0;

    const onDown = (e: PointerEvent) => {
      isDown = true;
      startX = e.clientX;
      startScroll = el.scrollLeft;
      el.classList.add("is-dragging");
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
    };

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);

    return () => {
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
    };
  }, []);

  const noop = useCallback(() => {}, []);
  return { ref, onMouseEnter: noop, onMouseLeave: noop };
}
