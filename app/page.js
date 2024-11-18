"use client";
import Charactercards from "@/Components/CharacterCards/Charactercards";
import preventZoom from "./utils/preventZoom";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Prevent default gestures
    document.addEventListener("touchstart", function(e) {
      e.preventDefault();
    }, { passive: false });

    document.addEventListener("touchmove", function(e) {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    }, { passive: false });

    // Prevent zooming through double-tap
    document.addEventListener("dblclick", function(e) {
      e.preventDefault();
    }, { passive: false });

    // Prevent scrolling on touch events
    document.addEventListener("touchstart", function(e) {
      if (e.target.tagName === "SELECT") {
        e.preventDefault();
      }
    }, { passive: false });

    // Apply CSS to prevent zooming
    document.documentElement.style.touchAction = "none";
    document.documentElement.style.webkitUserSelect = "none";
    document.documentElement.style.mozUserSelect = "none";
    document.documentElement.style.msUserSelect = "none";
    document.documentElement.style.userSelect = "none";

    // Initialize the preventZoom function
    preventZoom();

    // Clean up when the component unmounts
    return () => {
      // Remove all event listeners
      document.removeEventListener("touchstart", null, { capture: true, passive: false });
      document.removeEventListener("touchmove", null, { capture: true, passive: false });
      document.removeEventListener("dblclick", null, { capture: true, passive: false });
      document.documentElement.style.removeProperty("touch-action");
      document.documentElement.style.removeProperty("webkit-user-select");
      document.documentElement.style.removeProperty("moz-user-select");
      document.documentElement.style.removeProperty("ms-user-select");
      document.documentElement.style.removeProperty("user-select");
    };
  }, []);

  return (
    <div>
      <Charactercards />
    </div>
  );
}
