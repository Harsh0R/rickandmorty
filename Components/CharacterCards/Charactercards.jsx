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

  const [selectedFilters, setselectedFilters] = useState(null);
  const [selectedLocation, setselectedLocation] = useState(null);
  const [selectedGender, setselectedGender] = useState(null);

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
        while (true) {
          const response = await axios.get(
            `https://rickandmortyapi.com/api/character/?page=${currentPage}`
          );
          const data = response.data;
          // If there are no more pages, break out of the loop
          if (data.info.next === null) {
            break;
          }
          // Concatenate characters from the current page to the existing array
          allCharacters = allCharacters.concat(data.results);
          // Move to the next page
          currentPage++;
        }

        // const data = response.data;
        // const data1 = data.results;
        // setCharacters(data1);

        setCharacters(allCharacters);
        setCharactersFiltered(allCharacters);
        console.log("Char =" + characters + "typr = " + typeof characters);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // Call the async function
  }, []); // Empty dependency array to run the effect only once



  // const handleFilterBtnClick = (items) => {
  //   if (selectedFilters === null) {
  //     setselectedFilters(items);
  //   } else if (selectedFilters !== items) {
  //     setselectedFilters(items);
  //   } else {
  //     setselectedFilters(null);
  //   }
  //   console.log("Selected in filter = " + selectedFilters);
  // };
  // // const handleFilterBtnClick = (items) => {
  // //   if (selectedFilters.includes(items)) {
  // //     let filter = selectedFilters.filter((el) => el !== items);
  // //     setselectedFilters(filter);
  // //     console.log("Selected in filter = "+selectedFilters);
  // //   } else {
  // //     setselectedFilters([...selectedFilters, items]);
  // //   }
  // // };
  // useEffect(() => {
  //   filterItems();
  // }, [selectedFilters]);
  // const filterItems = () => {
  //   if (selectedFilters !== null) {
  //     console.log("Called" + selectedFilters);
  //     if (selectedLocation === null) {
  //       let temp = characters.filter((item) =>
  //         item.status.includes(selectedFilters)
  //       );
  //       setCharactersFiltered(temp);
  //     } else {
  //       let temp = characters.filter(
  //         (item) =>
  //           item.status.includes(selectedFilters) &&
  //           item.location.name.includes(selectedLocation)
  //       );
  //       setCharactersFiltered(temp);
  //     }
  //     // console.log("Category items = " + temp);

  //     // let temp1 = characters.filter((items) => {
  //     //   return selectedCategory === ""
  //     //     ? items
  //     //     : items.status.includes(selectedCategory);
  //     // });
  //     // console.log("Category items 1  = " + temp1);
  //     // return temp;
  //     // console.log("Category items charachter = " + charactersFiltered);
  //   } else {
  //     setCharactersFiltered(characters);
  //   }
  // };


  // const handleFilterBtnClickLoc = (items) => {
  //   if (selectedLocation === null) {
  //     setselectedLocation(items);
  //   } else if (selectedLocation !== items) {
  //     setselectedLocation(items);
  //   } else {
  //     setselectedLocation(null);
  //   }
  //   console.log("Selected in filter = " + selectedLocation);
  // };
  // useEffect(() => {
  //   filterItemsLoc();
  // }, [selectedLocation]);
  // const filterItemsLoc = () => {
  //   if (selectedLocation !== null) {
  //     if (selectedFilters === null) {
  //       let temp = characters.filter((item) =>
  //         item.location.name.includes(selectedLocation)
  //       );
  //       setCharactersFiltered(temp);
  //     } else {
  //       let temp = characters.filter( 
  //         (item) =>
  //           item.location.name.includes(selectedLocation) &&
  //           item.status.includes(selectedFilters)
  //       );
  //       setCharactersFiltered(temp);
  //     }
  //     console.log("Called" + selectedLocation);
  //     // console.log("Category items = " + temp);

  //     // let temp1 = characters.filter((items) => {
  //     //   return selectedCategory === ""
  //     //     ? items
  //     //     : items.status.includes(selectedCategory);
  //     // });
  //     // console.log("Category items 1  = " + temp1);
  //     // return temp;
  //     // console.log("Category items charachter = " + charactersFiltered);
  //   } else {
  //     setCharactersFiltered(characters);
  //   }
  // };


  // const handleFilterBtnClickGender = (items) => {
  //   if (selectedGender === null) {
  //     setselectedGender(items);
  //   } else if (selectedGender !== items) {
  //     setselectedGender(items);
  //   } else {
  //     setselectedGender(null);
  //   }
  // };
  // useEffect(() => {
  //   filterItemsGen();
  // }, [selectedGender]);
  // const filterItemsGen = () => {
  //   if (selectedGender !== null) {
  //     if (selectedFilters === null && selectedLocation===null) {
  //       let temp = characters.filter((item) =>
  //         item.gender.includes(selectedGender)
  //       );
  //       setCharactersFiltered(temp);
  //     } else if (selectedFilters !== null && selectedLocation!==null){
  //       let temp = characters.filter( 
  //         (item) =>
  //           item.location.name.includes(selectedLocation) &&
  //           item.status.includes(selectedFilters) && item.gender.includes(selectedGender)
  //       );
  //       setCharactersFiltered(temp);
  //     }
  //     console.log("Called" + selectedLocation);
  //   } else {
  //     setCharactersFiltered(characters);
  //   }
  // };





  const [filters1, setFilters1] = useState({
    status: "",
    location: "",
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
        (!filters1.location || item.location.name  === filters1.location)
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
              Status - {selectedFilters}
            </button>
            <div className={Style.dropdowncontent}>
              <div className={Style.categoryArea}>
                {status.map((items) => (
                  <div
                    type="checkbox"
                    value={items}
                    className={Style.category}
                    onClick={() => handleFilterChangedata("status",items)}
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
              Location - {selectedLocation}
            </button>
            <div className={Style.dropdowncontent}>
              <div className={Style.categoryArea}>
                {location.map((items) => (
                  <div
                    type="checkbox"
                    value={items}
                    className={Style.category}
                    onClick={() => handleFilterChangedata("location",items)}
                  >
                    {items}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* <div className={Style.dropdown}>
            <button
              name="Gender"
              className={Style.filterbtn}
              onClick={getGenders}
            >
              Gender - {selectedGender}
            </button>
            <div className={Style.dropdowncontent}>
              <div className={Style.categoryArea}>
                {gender.map((items) => (
                  <div
                    type="checkbox"
                    value={items}
                    className={Style.category}
                    onClick={() => handleFilterBtnClickGender(items)}
                  >
                    {items}
                  </div>
                ))}
              </div>
            </div>
          </div> */}

          {/* <button className={Style.filterbtn} onClick={getLocations}>
            location
          </button> */}
          
          
          {/* <button className={Style.filterbtn}>episode</button> */}
          
          <button className={Style.filterbtn} onClick={getGenders}>
            episode
          </button>
          <button className={Style.filterbtn} onClick={getSpecies}>
            species
          </button>
          <button className={Style.filterbtn} onClick={getType}>
            type
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
    </div>
  );
};

export default Charactercards;
