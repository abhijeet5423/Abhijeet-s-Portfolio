import { useEffect } from "react";

export const useScrollReveal = (selector = ".reveal-on-scroll", options = {}) => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = document.querySelectorAll(selector);

    if (elements.length === 0) return;

    // Graceful fallback for reduced motion or browsers without IntersectionObserver
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            obs.unobserve(entry.target); // Animate once by default
          }
        });
      },
      {
        threshold: options.threshold ?? 0.12,
        rootMargin: options.rootMargin ?? "0px 0px -40px 0px",
      }
    );

    elements.forEach((el) => {
      if (!el.classList.contains("is-revealed")) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  });
};
