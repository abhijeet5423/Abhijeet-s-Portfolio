import { useEffect } from "react";

export const useParallax = () => {
  useEffect(() => {
    // Only execute on desktop devices supporting fine pointer with no reduced motion requested
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isFinePointer || isReducedMotion) return;

    let rafId = null;

    const parallaxElements = document.querySelectorAll("[data-parallax-speed]");
    if (parallaxElements.length === 0) return;

    const updateParallax = () => {
      const vh = window.innerHeight;
      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.getAttribute("data-parallax-speed") || "0.04");
        const rect = el.getBoundingClientRect();

        // Calculate only when element is in or near viewport
        if (rect.bottom >= -80 && rect.top <= vh + 80) {
          const centerY = rect.top + rect.height / 2;
          const offset = (vh / 2 - centerY) * speed;
          // Clamp offset strictly to -12px to 12px for subtle, stable motion
          const clamped = Math.max(-12, Math.min(12, offset));
          el.style.transform = `translate3d(0, ${clamped.toFixed(2)}px, 0)`;
        }
      });
      rafId = null;
    };

    const handleScroll = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(updateParallax);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateParallax();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};
