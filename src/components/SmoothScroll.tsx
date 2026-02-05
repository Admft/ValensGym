"use client";
import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // --- SNAP LOGIC ---
    let snapTimeout: NodeJS.Timeout;

    const snapToSection = () => {
      const viewportHeight = window.innerHeight;
      const currentScroll = window.scrollY;
      
      const closestIndex = Math.round(currentScroll / viewportHeight);
      const closestSectionScroll = closestIndex * viewportHeight;
      const direction = lenis.direction; 
      
      let targetScroll = closestSectionScroll;

      // 1. INTENT CHECK: Go to Next/Prev if threshold passed
      if (direction === 1 && currentScroll > closestSectionScroll + 30) {
        targetScroll = (closestIndex + 1) * viewportHeight;
      }
      else if (direction === -1 && currentScroll < closestSectionScroll - 30) {
        targetScroll = (closestIndex - 1) * viewportHeight;
      }
      else {
        targetScroll = closestSectionScroll;
      }

      // 2. DEADZONE CHECK (The Fix)
      // If the determined target is basically where we already are (or close enough),
      // DO NOT fire the snap animation. This prevents the annoying "pull back".
      // We only snap if the distance to travel is significant (> 30px).
      if (Math.abs(currentScroll - targetScroll) < 30) {
        return; 
      }

      lenis.scrollTo(targetScroll, {
        duration: 1.2,
        easing: (t) => 1 - Math.pow(1 - t, 4), 
        lock: false, 
      });
    };

    const handleInput = () => {
      clearTimeout(snapTimeout);
      snapTimeout = setTimeout(snapToSection, 50); 
    };

    window.addEventListener("wheel", handleInput, { passive: true });
    window.addEventListener("touchstart", handleInput, { passive: true });
    window.addEventListener("touchmove", handleInput, { passive: true });
    window.addEventListener("touchend", handleInput, { passive: true });

    return () => {
      lenis.destroy();
      clearTimeout(snapTimeout);
      window.removeEventListener("wheel", handleInput);
      window.removeEventListener("touchstart", handleInput);
      window.removeEventListener("touchmove", handleInput);
      window.removeEventListener("touchend", handleInput);
    };
  }, []);

  return <>{children}</>;
}