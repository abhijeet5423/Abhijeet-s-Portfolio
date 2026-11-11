import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Only activate on devices with fine pointer (mouse) and hover capability
    const finePointerMedia = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!finePointerMedia.matches) {
      return;
    }

    const reducedMotionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isReducedMotion = reducedMotionMedia.matches;

    const handleMotionChange = (e) => {
      isReducedMotion = e.matches;
    };
    reducedMotionMedia.addEventListener("change", handleMotionChange);

    document.body.classList.add("has-custom-cursor");

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isVisible = false;
    let isHovering = false;
    let isClicking = false;
    let isOverInput = false;
    let rafId = null;

    const interactiveSelector =
      "a, button, [role='button'], .skill-chip, .case-study-card, .footer-icon, .contact-social-link, .school-logo, .footer-nav-button, .tech-strip-badge, input[type='submit']";
    const textInputSelector = "input, textarea, select, [contenteditable='true']";

    const updatePosition = () => {
      if (dotRef.current && ringRef.current) {
        // Direct central dot movement (zero lag)
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

        // Smooth trailing interpolation for outer ring
        if (isReducedMotion) {
          ringX = mouseX;
          ringY = mouseY;
        } else {
          ringX += (mouseX - ringX) * 0.2;
          ringY += (mouseY - ringY) * 0.2;
        }

        const scale = isClicking ? 0.82 : isHovering ? 1.45 : 1;
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${scale})`;
      }

      rafId = requestAnimationFrame(updatePosition);
    };

    rafId = requestAnimationFrame(updatePosition);

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        dotRef.current?.classList.remove("cursor-hidden");
        ringRef.current?.classList.remove("cursor-hidden");
      }

      // Spotlight tracking for designated surface cards
      const spotlightTarget = e.target.closest(".spotlight-surface");
      if (spotlightTarget) {
        const rect = spotlightTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        spotlightTarget.style.setProperty("--spotlight-x", `${x}px`);
        spotlightTarget.style.setProperty("--spotlight-y", `${y}px`);
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;

      // When hovering over text inputs, hide custom cursor so native I-beam cursor is 100% visible
      if (target.closest(textInputSelector)) {
        isOverInput = true;
        dotRef.current?.classList.add("cursor-hidden");
        ringRef.current?.classList.add("cursor-hidden");
        return;
      }

      if (isOverInput) {
        isOverInput = false;
        dotRef.current?.classList.remove("cursor-hidden");
        ringRef.current?.classList.remove("cursor-hidden");
      }

      if (target.closest(interactiveSelector)) {
        isHovering = true;
        ringRef.current?.classList.add("cursor-hover");
      } else {
        isHovering = false;
        ringRef.current?.classList.remove("cursor-hover");
      }
    };

    const handleMouseDown = () => {
      isClicking = true;
      ringRef.current?.classList.add("cursor-clicking");
    };

    const handleMouseUp = () => {
      isClicking = false;
      ringRef.current?.classList.remove("cursor-clicking");
    };

    const handleMouseLeave = () => {
      isVisible = false;
      dotRef.current?.classList.add("cursor-hidden");
      ringRef.current?.classList.add("cursor-hidden");
    };

    const handleMouseEnter = () => {
      if (!isOverInput) {
        isVisible = true;
        dotRef.current?.classList.remove("cursor-hidden");
        ringRef.current?.classList.remove("cursor-hidden");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      document.body.classList.remove("has-custom-cursor");
      reducedMotionMedia.removeEventListener("change", handleMotionChange);

      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div className="custom-cursor-container" aria-hidden="true">
      <div ref={dotRef} className="cursor-dot cursor-hidden" />
      <div ref={ringRef} className="cursor-ring cursor-hidden" />
    </div>
  );
};

export default CustomCursor;
