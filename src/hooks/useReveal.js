import { useEffect, useRef } from "react";

/**
 * Attaches IntersectionObserver to the returned ref.
 * Adds "visible" class to element (and optional staggered children)
 * when it enters the viewport.
 */
export default function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      },
      { threshold: options.threshold ?? 0.12, ...options }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return ref;
}
