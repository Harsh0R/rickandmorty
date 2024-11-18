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
    };

    document.addEventListener("gesturestart", preventPinch);
    document.addEventListener("gesturechange", preventPinch);

    return () => {
      document.removeEventListener("gesturestart", preventPinch);
      document.removeEventListener("gesturechange", preventPinch);
    };
  }, []);
  return (
    <div style={{ touchAction: 'none'}}>
      <Charactercards />
    </div>
  );
}
