import React from "react";
import Style from "./Cards.module.css";
import Link from "next/link";

const Cards = ({ items }) => {
  return (
    <div>
      <div className={Style.container}>
        <img src={items.image} />
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
      </div>
    </div>
  );
};

export default Cards;
