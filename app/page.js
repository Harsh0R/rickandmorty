"use client";
import Charactercards from "@/Components/CharacterCards/Charactercards";
import Navbar from "@/Components/NavBar/Navbar";
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  return (
    <div>
      <Charactercards />
    </div>
  );
}
