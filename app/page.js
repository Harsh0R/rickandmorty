"use client";

import Charactercards from "@/Components/CharacterCards/Charactercards";
import { useEffect } from "react";
import preventZoom from "./utils/preventZoom";

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const ham = new Hammer(window.document.body);
      ham.on("pinch", function (e) {
        e.preventDefault();
      });
      
      preventZoom();
      // Clean up when the component unmounts
      return () => {
        ham.destroy();
      };
    }
  }, []);

  return (
    <div>
      <Charactercards />
    </div>
  );
}
