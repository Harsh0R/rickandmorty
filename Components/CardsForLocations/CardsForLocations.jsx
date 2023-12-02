"use client";
import React, { useState } from "react";
import Style from "./CardsForLocations.module.css";
import Link from "next/link";

const cardsForLocations = ({ items }) => {
  return (
    <div className={Style.container}>
      <div className={Style.section}>
        <div className={Style.nameSec}>
          Name : {items.name}-({items.id}){" "}
        </div>
        <span>
          {" "}
          Type = {items.type}
          {/* {items.status} - {items.species}{" "} */}
        </span>
      </div>
      <div className={Style.section}>
        <div className={Style.loca}>dimension:</div>
        <div> {items.dimension} </div>
      </div>
      <div className={Style.section}>
        <div className={Style.loca}>created:</div>
        <div> {items.created} </div>
      </div>
    </div>
  );
};

export default cardsForLocations;
