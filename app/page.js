"use client";
import Charactercards from "@/Components/CharacterCards/Charactercards";
import preventZoom from "./utils/preventZoom";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    // Prevent pinch-to-zoom
    const preventPinch = (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };
    // Prevent double-tap zoom
    let lastTouchEnd = 0;
    const preventDoubleTapZoom = (e) => {
      const now = Date.now();
      if (now - lastTouchEnd <= 300) {
        e.preventDefault();
      }
      lastTouchEnd = now;
    };
    document.addEventListener("touchmove", preventPinch, { passive: false });
    document.addEventListener("touchend", preventDoubleTapZoom);
    return () => {
      document.removeEventListener("touchmove", preventPinch);
      document.removeEventListener("touchend", preventDoubleTapZoom);
    };
  }, []);
  return (
    <div>
      <Charactercards />
    </div>
  );
}
