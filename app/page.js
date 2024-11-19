"use client";
import Charactercards from "@/Components/CharacterCards/Charactercards";
import preventZoom from "./utils/preventZoom";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    const preventPinch = (e) => {
      if (e.scale !== 1) {
        e.preventDefault();
      }
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    preventZoom();
    document.addEventListener("gesturestart", preventPinch);
    document.addEventListener("gesturechange", preventPinch);
    document.addEventListener("touchmove", preventPinch, { passive: false });

    const intervalId = setInterval(() => {
      preventZoom();
    }, 1000);
    return () => {
      document.removeEventListener("gesturestart", preventPinch);
      document.removeEventListener("gesturechange", preventPinch);
      document.removeEventListener("touchmove", preventPinch);
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div style={{ touchAction: "manipilation" }}>
      <Charactercards />
    </div>
  );
}
