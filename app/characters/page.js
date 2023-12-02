"use client";
import Characterdetails from "@/Components/CharacterDetails/Characterdetails";
import { useRouter } from "next/router";
import React from "react";
import { getAllDataFromApi } from "@/Components/demo/page";
import { useState,useEffect } from "react";

const page = ({ items }) => {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // Call getAllDataFromApi and pass a callback to set the characters state
    getAllDataFromApi(setCharacters);
  }, []);

  return (
    <div>
      {/* <GridComponent characters={characters} /> */}
      All Characters
    </div>
  );
};

export default page;
