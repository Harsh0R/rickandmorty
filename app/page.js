"use client";
import Charactercards from "@/Components/CharacterCards/Charactercards";
import preventZoom from "./utils/preventZoom";
import { useEffect } from "react";
export default function Home() {

  return (
    <div style={{ touchAction: 'none'}}>
      <Charactercards />
    </div>
  );
}
