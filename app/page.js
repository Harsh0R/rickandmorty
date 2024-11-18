"use client";

import Charactercards from "@/Components/CharacterCards/Charactercards";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.Hammer) {
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

  return (
    <div>
      <Charactercards />
    </div>
  );
}
