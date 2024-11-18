"use client";
import Charactercards from "@/Components/CharacterCards/Charactercards";
import preventZoom from "./utils/preventZoom";
import { useEffect } from "react";
export default function Home() {
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
