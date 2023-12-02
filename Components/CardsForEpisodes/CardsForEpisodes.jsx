import React from "react";
import Style from "./CardsForEpisodes.module.css"
import Link from "next/link";

const CardsForEpisodes = ({ items }) => {

  return (
    <div>
    <div className={Style.container}>
      <div className={Style.detail}>
        <div className={Style.section}>
          <div className={Style.nameSec}>
            Name : {items.name}-({items.id}){" "}
          </div>
          <span>
            {" "}
            air_date = {items.air_date}
            {/* {items.status} - {items.species}{" "} */}
          </span>
        </div>
        <div className={Style.section}>
          <div className={Style.loca}>episode:</div>
          <div> {items.episode} </div>
        </div>
        <div className={Style.section}>
          <div className={Style.loca}>created:</div>
          <div> {items.created} </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default CardsForEpisodes;
