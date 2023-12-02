"use client";
import React from "react";
import { useEffect, useState } from "react";
import Style from "./Charactercards.module.css";
import {
  getAllStatus,
  getAllLocation,
  getAllGender,
  getAllSpecies,
  getAllType,
  getAllEpisodeName,
  getAllDataFromApi,
} from "@/Components/demo/page";
import Cards from "../Cards/Cards";
import LoadingPage from "../LoadingPage/LoadingPage";

const Charactercards = () => {
  const [characters, setCharacters] = useState([]);
  const [charactersFiltered, setCharactersFiltered] = useState([]);

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState([]);
  const [location, setLocation] = useState([]);
  const [gender, setGender] = useState([]);
  const [species, setSpecies] = useState([]);
  const [type, setType] = useState([]);

  const [EpisodeNameId, setEpisodeNameId] = useState({
    id: "",
    name: "",
  });
  const [allEpisodeName, setAllEpisodeName] = useState([]);

  // Fetching data from API
  useEffect(() => {
    const getData = async () => {
      try {
        const allfilterchar = await getAllDataFromApi();
        setCharacters(allfilterchar);
        setCharactersFiltered(allfilterchar);
        let st = await getAllStatus();
        setStatus(st);
        st = await getAllLocation();
        setLocation(st);
        st = await getAllGender();
        setGender(st);
        st = await getAllSpecies();
        setSpecies(st);
        st = await getAllType();
        setType(st);
        let ep = await getAllEpisodeName();
        setAllEpisodeName(ep);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of an error
      }
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

  const clearAllFilters = () => {
    setFilters1({
      status: "",
      location: "",
      gender: "",
      species: "",
      type: "",
      episode: "",
    });
    setEpisodeNameId({ id: "", name: "" });
  };
  const clearStFilters = () => {
    setFilters1({
      status: "",
    });
  };
  const clearLoFilters = () => {
    setFilters1({
      location: "",
    });
  };
  const clearGeFilters = () => {
    setFilters1({
      gender: "",
    });
  };
  const clearSpFilters = () => {
    setFilters1({
      species: "",
    });
  };
  const clearTyFilters = () => {
    setFilters1({
      type: "",
    });
  };
  const clearEpFilters = () => {
    setFilters1({
      episode: "",
    });
    setEpisodeNameId({ id: "", name: "" });
  };

  if (loading) {
    return (
      <div className={Style.loadingPage}>
        <LoadingPage />
      </div>
    );
  }

  return (
    <div className={Style.container1}>

      {/* Filter Section */}
      <div className={Style.filters}>
        <div className={Style.filterHeading}>🔦 Filters Character By :</div>
        <div className={Style.filterBtns}>
          <div className={Style.dropdown}>
            <button
              name="Status"
              className={Style.filterbtn}
              // onClick={getStatus}
            >
              Status - {filters1.status}
            </button>
            <div className={Style.dropdowncontent}>
              <div className={Style.categoryArea}>
                <button
                  className={Style.filterbtnToClear}
                  onClick={clearStFilters}
                >
                  Clear Status
                </button>
                {status.map((items) => (
                  <button
                    type="checkbox"
                    value={items}
                    className={Style.category}
                    onClick={() => handleFilterChangedata("status", items)}
                  >
                    {items}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className={Style.dropdown}>
            <button
              name="Location"
              className={Style.filterbtn}
              // onClick={getLocations}
            >
              Location - {filters1.location}
            </button>
            <div className={Style.dropdowncontent}>
              <div className={Style.categoryArea}>
                <button
                  className={Style.filterbtnToClear}
                  onClick={clearLoFilters}
                >
                  Clear Location
                </button>
                {location.map((items) => (
                  <button
                    type="checkbox"
                    value={items}
                    className={Style.category}
                    onClick={() => handleFilterChangedata("location", items)}
                  >
                    {items}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className={Style.dropdown}>
            <button
              name="Gender"
              className={Style.filterbtn}
              // onClick={getGenders}
            >
              Gender - {filters1.gender}
            </button>
            <div className={Style.dropdowncontent}>
              <div className={Style.categoryArea}>
                <button
                  className={Style.filterbtnToClear}
                  onClick={clearGeFilters}
                >
                  Clear Gender
                </button>
                {gender.map((items) => (
                  <button
                    type="checkbox"
                    value={items}
                    className={Style.category}
                    onClick={() => handleFilterChangedata("gender", items)}
                  >
                    {items}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className={Style.dropdown}>
            <button
              name="species"
              className={Style.filterbtn}
              // onClick={getSpecies}
            >
              Species - {filters1.species}
            </button>
            <div className={Style.dropdowncontent}>
              <div className={Style.categoryArea}>
                <button
                  className={Style.filterbtnToClear}
                  onClick={clearSpFilters}
                >
                  Clear Species
                </button>
                {species.map((items) => (
                  <button
                    type="checkbox"
                    value={items}
                    className={Style.category}
                    onClick={() => handleFilterChangedata("species", items)}
                  >
                    {items}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className={Style.dropdown}>
            <button name="Type" className={Style.filterbtn}>
              Type - {filters1.type}
            </button>
            <div className={Style.dropdowncontent}>
              <div className={Style.categoryArea}>
                <button
                  className={Style.filterbtnToClear}
                  onClick={clearTyFilters}
                >
                  Clear Type
                </button>
                {type.map((items) => (
                  <button
                    type="checkbox"
                    value={items}
                    className={Style.category}
                    onClick={() => handleFilterChangedata("type", items)}
                  >
                    {items}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className={Style.dropdown}>
            <button
              name="Episode Name"
              className={Style.filterbtn}
              // onClick={getEpisodeName}
            >
              Episodes - {EpisodeNameId.id}-{EpisodeNameId.name}
            </button>
            <div className={Style.dropdowncontent}>
              <div className={Style.categoryArea}>
                <button
                  className={Style.filterbtnToClear}
                  onClick={clearEpFilters}
                >
                  Clear Episodes
                </button>
                {allEpisodeName.map((i, items) => (
                  <button
                    type="checkbox"
                    value={items}
                    className={Style.category}
                    onClick={() => {
                      setEpisodeNameId({
                        id: items + 1,
                        name: i,
                      });
                      handleFilterChangedata(
                        "episode",
                        `https://rickandmortyapi.com/api/episode/${items + 1}`
                      );
                    }}
                  >
                    {items + 1} - {i}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button
            className={Style.filterbtnToClearAll}
            onClick={clearAllFilters}
          >
            Clear All
          </button>
        </div>
      </div>

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

      <div className={Style.containerForCharacters}>
        {charactersFiltered.length === 0 ? (
          <div className={Style.noCharactersMessage}>
            <Cards />
          </div>
        ) : (
          charactersFiltered
            .filter((items) =>
              search.toLowerCase() === ""
                ? items
                : items.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((items, index) => (
              <div key={index} container>
                <Cards items={items} />
              </div>
            ))
        )}
        {/* Display a message for no characters found based on search */}

        {charactersFiltered.length > 0 && // If there are characters after filters
          search.trim() !== "" && // If search is not empty
          charactersFiltered.every(
            (items) => !items.name.toLowerCase().includes(search.toLowerCase())
          ) && (
            <div className={Style.noCharactersMessage}>
              No characters found with the name "{search}". Please try a
              different name.
            </div>
          )}
      </div>

      
    </div>
  );
};

export default Charactercards;
