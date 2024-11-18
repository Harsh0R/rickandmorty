"use client";
import Charactercards from "@/Components/CharacterCards/Charactercards";
import { useEffect } from "react";
import Hammer from "hammerjs";
export default function Home() {
  useEffect(() => {
    const ham = new Hammer(document.body);
    ham.on("pinch", function (e) {
      e.preventDefault();
    });

    // Clean up when the component unmounts
    return () => {
      ham.destroy();
    };
  }, []);

  return (
    <div>
      <Charactercards />
    </div>
  );
}
