"use client";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Style from "./Charactercards.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Characterdetails from "../CharacterDetails/Characterdetails";
import {
  getAllStatus,
  getAllLocation,
  getAllGender,
  getAllSpecies,
  getAllType,
  getAllEpisodeName,
  getAllDataFromApi,
} from "@/Components/demo/page";
import FilterSection from "../FilterSection/FilterSection";

const Charactercards = () => {
  const [characters, setCharacters] = useState([]);
  const [charactersFiltered, setCharactersFiltered] = useState([]);

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState([]);
  const [location, setLocation] = useState([]);
  const [episode, setEpisode] = useState([]);
  const [gender, setGender] = useState([]);
  const [species, setSpecies] = useState([]);
  const [type, setType] = useState([]);

  const [EpisodeNameId, setEpisodeNameId] = useState({
    id: "",
    name: "",
  });
  const [allEpisodeName, setAllEpisodeName] = useState([]);

  const [activeFilter, setActiveFilter] = useState(false);

  async function getStatus() {
    const st = await getAllStatus();
    setStatus(st);
    console.log("ST = " + status);
  }
  async function getLocations() {
    const st = await getAllLocation();
    setLocation(st);
    console.log("Locations = " + location);
  }
  async function getGenders() {
    const st = await getAllGender();
    setGender(st);
    console.log("Gender = " + gender);
  }
  async function getSpecies() {
    const st = await getAllSpecies();
    setSpecies(st);
    console.log("species = " + species);
  }
  async function getType() {
    const st = await getAllType();
    setType(st);
    console.log("type = " + type);
  }
  async function getEpisodeName() {
    const ep = await getAllEpisodeName();
    setAllEpisodeName(ep);
  }

  // Fetching data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the first page
        // const response = await axios.get(
        //   "https://rickandmortyapi.com/api/character?page=2"
        // );
        let currentPage = 1;
        let allCharacters = [];
        while (currentPage < 43) {
          const response = await axios.get(
            `https://rickandmortyapi.com/api/character/?page=${currentPage}`
          );
          const data = response.data;
          // If there are no more pages, break out of the loop
          // if (data.info.next === null) {
          //   break;
          // }
          // Concatenate characters from the current page to the existing array
          allCharacters = allCharacters.concat(data.results);
          // Move to the next page
          currentPage++;
        }

        // const data = response.data;
        // const data1 = data.results;
        // setCharacters(data1);

        setCharacters(allCharacters);
        // setCharactersFiltered(allCharacters);
        console.log("Char =" + characters + "typr = " + typeof characters);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // Call the async function
  }, []); // Empty dependency array to run the effect only once

  useEffect(() => {
    const getData = async () => {
      const allfilterchar = await getAllDataFromApi();
      setCharactersFiltered(allfilterchar);
    };
    getData();
  }, []);

  const [filters1, setFilters1] = useState({
    status: "",
    location: "",
    gender: "",
    species: "",
    type: "",
    episode: "",
  });

  const handleFilterChangedata = (field, value) => {
    setFilters1({
      ...filters1,
      [field]: value,
    });
  };

  useEffect(() => {
    const filteredItems = characters.filter((item) => {
      return (
        (!filters1.status || item.status === filters1.status) &&
        (!filters1.location || item.location.name === filters1.location) &&
        (!filters1.gender || item.gender === filters1.gender) &&
        (!filters1.species || item.species === filters1.species) &&
        (!filters1.type || item.type === filters1.type) &&
        (!filters1.episode || item.episode.includes(filters1.episode))
      );
    });

    setCharactersFiltered(filteredItems);
  }, [filters1, characters]); // Add dependencies to avoid infinite re-renders

  return (
    <div className={Style.container1}>
      {/* heading */}
      <header>
        <div className={Style.heading}>The Rick and Morty</div>
      </header>

      {/* Search section */}
      <div action="" className={Style.searchbar}>
        <input
          className="sreachInput"
          type="search"
          name="search"
          required=""
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Character By Name... 🔎"
        />
      </div>

      {/* Filter Section */}
      <div className={Style.filters}>
        <div className={Style.filterHeading}>Filters :🔦</div>
        <div className={Style.filterBtns}>
          <div className={Style.dropdown}>
            <button
              name="Status"
              className={Style.filterbtn}
              onClick={getStatus}
            >
              Status - {filters1.status}
            </button>
            <div className={Style.dropdowncontent}>
              <div className={Style.categoryArea}>
                {status.map((items) => (
                  <div
                    type="checkbox"
                    value={items}
                    className={Style.category}
                    onClick={() => handleFilterChangedata("status", items)}
                  >
                    {items}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={Style.dropdown}>
            <button
              name="Location"
              className={Style.filterbtn}
              onClick={getLocations}
            >
              Location - {filters1.location}
            </button>
            <div className={Style.dropdowncontent}>
              <div className={Style.categoryArea}>
                {location.map((items) => (
                  <div
                    type="checkbox"
                    value={items}
                    className={Style.category}
                    onClick={() => handleFilterChangedata("location", items)}
                  >
                    {items}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={Style.dropdown}>
            <button
              name="Gender"
              className={Style.filterbtn}
              onClick={getGenders}
            >
              Gender - {filters1.gender}
            </button>
            <div className={Style.dropdowncontent}>
              <div className={Style.categoryArea}>
                {gender.map((items) => (
                  <div
                    type="checkbox"
                    value={items}
                    className={Style.category}
                    onClick={() => handleFilterChangedata("gender", items)}
                  >
                    {items}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={Style.dropdown}>
            <button
              name="species"
              className={Style.filterbtn}
              onClick={getSpecies}
            >
              species - {filters1.species}
            </button>
            <div className={Style.dropdowncontent}>
              <div className={Style.categoryArea}>
                {species.map((items) => (
                  <div
                    type="checkbox"
                    value={items}
                    className={Style.category}
                    onClick={() => handleFilterChangedata("species", items)}
                  >
                    {items}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={Style.dropdown}>
            <button name="Type" className={Style.filterbtn} onClick={getType}>
              Type - {filters1.type}
            </button>
            <div className={Style.dropdowncontent}>
              <div className={Style.categoryArea}>
                {type.map((items) => (
                  <div
                    type="checkbox"
                    value={items}
                    className={Style.category}
                    onClick={() => handleFilterChangedata("type", items)}
                  >
                    {items}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={Style.dropdown}>
            <button
              name="Episode Name"
              className={Style.filterbtn}
              onClick={getEpisodeName}
            >
              Episodes - {EpisodeNameId.id}-{EpisodeNameId.name}
            </button>
            <div className={Style.dropdowncontent}>
              <div className={Style.categoryArea}>
                {allEpisodeName.map((i, items) => (
                  <div
                    type="checkbox"
                    value={items}
                    className={Style.category}
                    onClick={() => {
                      setEpisodeNameId({
                        id: items+1,
                        name: i,
                      });
                      handleFilterChangedata(
                        "episode",
                        `https://rickandmortyapi.com/api/episode/${items + 1}`
                      );
                    }}
                  >
                    {/* {
                    setEpisodeNameId({
                      ["id"]:items,
                      ["name"]:i
                    })
                    } */}
                    {items + 1} - {i}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button className={Style.filterbtn} onClick={getGenders}>
            episode
          </button>
        </div>
      </div>

      {/* All Character's Card component */}
      {activeFilter && (
        <div className={Style.containerForCharacters}>
          {characters
            .filter((items) => {
              return search.toLowerCase() === ""
                ? items
                : items.name.toLowerCase().includes(search.toLowerCase());
            })
            .map((items) => (
              <div className={Style.container}>
                <img src={items.image} />
                <div className={Style.detail}>
                  <div className={Style.section}>
                    <div className={Style.nameSec}>Name : {items.name} </div>
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
            ))}
        </div>
      )}

      {!activeFilter && (
        <div className={Style.containerForCharacters}>
          {charactersFiltered.map((items) => (
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
          ))}
        </div>
      )}
    </div>
  );
};

export default Charactercards;
