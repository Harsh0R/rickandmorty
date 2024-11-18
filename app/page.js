"use client";
import Charactercards from "@/Components/CharacterCards/Charactercards";
import preventZoom from "./utils/preventZoom";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    const preventPinchZoom = (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    document.addEventListener("touchstart", preventPinchZoom, {
      passive: false,
    });

    return () => {
      document.removeEventListener("touchstart", preventPinchZoom);
    };
  }, []);

  return (
    <div style={{ touchAction: "manipulation" }}>
      <Charactercards />
    </div>
  );
}
