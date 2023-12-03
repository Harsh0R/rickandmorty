"use client";
import React from "react";
import { useEffect, useState } from "react";
import Style from "./CharacterDetails.module.css";
import axios from "axios";
import Image from "next/image";
import LoadingPage from "../LoadingPage/LoadingPage";
const characterdetails = ({ index }) => {
  const [characters, setCharacters] = useState();
  const [location, setLocation] = useState({});
  const [loading, setLoading] = useState(true);
  const [origin, setOrigin] = useState({});
  const [episode, setEpisode] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let charNo = index % 20;
        let pageNo = parseInt(index / 20) + 1;
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character?page=${pageNo}`
        );
        const data = response.data;
        const data1 = data.results[charNo - 1];
        const urlForCurrLoca = data1.location.url;
        const urlForOriginLoca = data1.origin.url;
        const CurrlocationData = await axios.get(urlForCurrLoca);
        const CurrdataLoca = CurrlocationData.data;
        const OriginlocationData = await axios.get(urlForOriginLoca);
        const OrigindataLoca = OriginlocationData.data;

        setLocation(CurrdataLoca);
        setOrigin(OrigindataLoca);

        setCharacters(data1);
        console.log("Episodes = " + data1);

        const episodeData = data1.episode.map((url) => axios.get(url));
        const epData = await Promise.all(episodeData);
        const episodeDetails = epData.map((response) => response.data);
        console.log("Episode Data:", episodeDetails);
        setEpisode(episodeDetails);
        setLoading(false);
      } catch (error) {
        console.log("error in charDetail Page = " + error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className={Style.loadingPage}>
        <LoadingPage />
      </div>
    );
  }

  return (
    <div className={Style.container}>
      {/* character info */}
      <div className={Style.characterinfo}>
        <div className={Style.heading}>
          <div className={Style.heading}>Character's Information</div>
        </div>
        <Image
          src={characters.image}
          alt={characters.name}
          width={265}
          height={265}
        />
        <div>
          <label className={Style.label}>
            <br />
            characters Name : {characters.name}
            <br />
            characters status : {characters.status}
            <br />
            characters species : {characters.species}
            <br />
            characters gender : {characters.gender}
            <br />
          </label>
        </div>
      </div>

      {/* Origin and current location details */}
      <div className={Style.characterLocainfo}>
        <label>
          <div className={Style.heading}>
            Origin and Current location details :
          </div>
          <br />
          {characters.origin.url !== "" ? (
            <label>
              Origin Location : {characters.origin.name}
              <br />
              dimension : {origin.dimension}
              <br />
              amount of residents : {origin.residents.length}
            </label>
          ) : (
            <label>
              Origin Location : --
              <br />
              dimension : --
              <br />
              amount of residents : --
            </label>
          )}
          <div className={Style.line}></div>
          <label>
            <br />
            Current location Name : {location.name}
            <br />
            dimension : {location.dimension}
            <br />
            amount of residents : {location.residents.length}
          </label>
          <br />
        </label>
      </div>

      {/* Name of the Episodes the character is featured in */}
      <div className={Style.characterEpinfo}>
        <label className={Style.label}>
          <div className={Style.heading}>
            Episodes the character is featured : ({episode.length})
          </div>
          <div className={Style.scrollbarstyling}>
            <div className={Style.episodes}>
              {episode.map((i) => (
                <div className={Style.episodeitem} key={i.id}>
                  {i.id} - {i.name}
                </div>
              ))}
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default characterdetails;
