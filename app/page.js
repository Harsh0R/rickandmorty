"use client";
import Charactercards from "@/Components/CharacterCards/Charactercards";
import preventZoom from "./utils/preventZoom";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    const preventDoubleTapZoom = (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    document.addEventListener(
      "touchmove",
      function (event) {
        if (event.scale !== 1) {
          event.preventDefault();
        }
      },
      false
    );
    var lastTouchEnd = 0;
    document.addEventListener(
      "touchend",
      function (event) {
        var now = new Date().getTime();
        if (now - lastTouchEnd <= 300) {
          event.preventDefault();
        }
        lastTouchEnd = now;
      },
      false
    );

    document.addEventListener("touchstart", preventDoubleTapZoom, {
      passive: false,
    });

    return () => {
      document.removeEventListener("touchstart", preventDoubleTapZoom);
    };
  }, []);

  useEffect(() => {
    // Prevent zooming on iOS
    preventZoom();

    // Clean up when the component unmounts
    return () => {
      // No cleanup needed for this approach
    };
  }, []);
  return (
    <div>
      <Charactercards />
    </div>
  );
}
