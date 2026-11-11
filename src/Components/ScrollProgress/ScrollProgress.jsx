import { useEffect, useRef } from "react";

const ScrollProgress = () => {
  const barRef = useRef(null);

  useEffect(() => {
    let rafId = null;

    const handleScroll = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          if (barRef.current) {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollHeight =
              document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = scrollHeight > 0 ? Math.min(1, Math.max(0, scrollTop / scrollHeight)) : 0;
            barRef.current.style.transform = `scaleX(${progress})`;
          }
          rafId = null;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-progress-container" aria-hidden="true">
      <div ref={barRef} className="scroll-progress-bar" />
    </div>
  );
};

export default ScrollProgress;
