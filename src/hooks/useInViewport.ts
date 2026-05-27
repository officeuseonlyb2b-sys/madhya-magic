import { useEffect, useRef, useState } from "react";

/**
 * Returns a ref + boolean that flips true once the element enters the
 * viewport (with optional rootMargin). Once visible, it stays visible
 * (sticky) — perfect for lazy-mounting heavy media like <video> without
 * tearing it down on scroll.
 */
export function useInViewport<T extends Element = HTMLElement>(
  rootMargin = "300px",
): { ref: React.MutableRefObject<T | null>; inView: boolean } {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || inView) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [inView, rootMargin]);

  return { ref, inView };
}
