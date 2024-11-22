"use client";
import React from "react";
import Style from "./Cards.module.css";
import Link from "next/link";
import Image from "next/image";
import images from "../../img/index"
import { useState, useEffect } from "react";

const Cards = ({ items }) => {
  if (!items) {
    return (
      <div className={Style.container}>
        <Image src={images.logo} width={100} height={100}/>
        <div className={Style.detail}>
          <div className={Style.section}>
            <div className={Style.nameSec}>
              No characters found. Try adjusting your filters.
            </div>
          </div>
        </div>
      </div>
    );
  }
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    setToggle(items.id);
  }, []);

  return (
    <div>
      <button className={Style.container}>
        <Image src={items.image} width={300} height={300} alt="char img.."/>
        <div className={Style.detail}>
          <div className={Style.section}>
            <div className={Style.nameSec}>
              Name : {items.name}-({items.id}){" "}
            </div>
            <span>
              {" "}
              {items.status} - {items.species}{" "}
            </span>
          </div>
          <div className={Style.section}>
            <div className={Style.loca}>Last known location:</div>
            <div> {items.location.name} </div>
          </div>
          <div className={Style.section}>
            <div className={Style.loca}>First seen in:</div>
            <div> {items.origin.name} </div>
          </div>
          <Link href={`/characters/${items.id}`}>
            <div className={Style.detailBtn}>
              <button>View Profile</button>
            </div>
          </Link>
        </div>
      </button>
    </div>
  );
};

export default Cards;
