"use client";
import Charactercards from "@/Components/CharacterCards/Charactercards";
export default function Home() {

  return (
    <div style={{ touchAction: 'manipulation' }} >
      <Charactercards />
    </div>
  );
}
