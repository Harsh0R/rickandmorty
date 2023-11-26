"use client";
import React from "react";
import { useParams } from "next/navigation";
import Characterdetails from "@/Components/CharacterDetails/Characterdetails";

const page = ({ params }) => {
  const ID = params.characterid;
  return (
    <div>
      {/* page in character = {ID} */}
      <Characterdetails index={ID} />
    </div>
  );
};

export default page;
