"use client";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Characterdetails = ({ index }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let charNo = index % 20;
        let pageNo = parseInt(index / 20) + 1;

        console.log("page no = " + pageNo);
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character?page=${pageNo}`
        );

        const data = response.data;
        const data1 = data.results[charNo - 1];
        console.log("data1 = " + data1.id);
        setCharacters(data1);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // Call the async function
    // console.log("Char = " + characters.id + "typr = " + typeof(characters));
  }, [index]); // Empty dependency array to run the effect only once

  useEffect(() => {
    // Log characters.id after the state has been updated
    console.log("Char = " + characters.id + "type = " + typeof characters);
  }, [characters]); // Include characters in the dependency array to re-run the effect when characters changes

  return (
    <div>
      <div>
        {characters.id}
        <img src={characters.image} width={500} />
      </div>
      <div>
        {characters.name}
        <br />
        {characters.species}
        <br />
        {characters.gender}
        <br />
      </div>
      <div></div>
    </div>
  );
};

export default Characterdetails;
