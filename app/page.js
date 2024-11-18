"use client";
import Charactercards from "@/Components/CharacterCards/Charactercards";
import preventZoom from "./utils/preventZoom";
import { useEffect } from "react";
import Hammer from "hammerjs";
export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const ham = new Hammer(window.document.body);
      ham.on("pinch", function (e) {
        e.preventDefault();
      });
      // Clean up when the component unmounts
      return () => {
        ham.destroy();
      };
    }
  }, []);

  useEffect(() => {
    const preventDoubleTapZoom = (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

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
