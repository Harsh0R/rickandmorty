"use client";
import React from "react";
import Style from "./page.module.css";
import { useEffect, useState } from "react";
import { getAllDataFromApi, getAllLocations } from "@/Components/demo/page";
import CardsForLocations from "@/Components/CardsForLocations/CardsForLocations";
import Link from "next/link";
import LoadingPage from "@/Components/LoadingPage/LoadingPage";

const page = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Fetching data from API
  useEffect(() => {
    const getData = async () => {

      try {
        const locs = await getAllLocations();
      setLocation(locs);

      const charData = await getAllDataFromApi();
      setCharacters(charData);
      setLoading(false)
      } catch (error) {
        console.error("Error fetching data in location Page :", error);
        setLoading(false); // Set loading to false in case of an error
      }

      
    };
    getData();
  }, []);

  const openSidebar = (selectedLocation) => {
    setSelectedLocation(selectedLocation);
    setOpen(true);
  };

  const closeSidebar = () => {
    setSelectedLocation(null);
    setOpen(false);
  };

  if (loading) {
    return (
      <div className={Style.loadingPage}>
        <LoadingPage />
      </div>
    );
  }

  return (
    <div>
      <div action="" className={Style.searchbar}>
        <input
          className="sreachInput"
          type="search"
          name="search"
          required=""
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Location By Location Name... 🔎"
        />
      </div>

      <div className={Style.containerForCharacters}>
        {location
          .filter((items) => {
            return search.toLowerCase() === ""
              ? items
              : items.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((items) => (
            <div className={Style.container}>
              <CardsForLocations items={items} />
              <button className={Style.charBtn} onClick={() => openSidebar(items)}>Show characters related to  location</button>
            </div>
          ))}
      </div>

    
      {open && selectedLocation && (
        <div className={Style.sidebar}>
          <h2 className={Style.HeadInSide}>
            Characters in {selectedLocation.name} - {selectedLocation.id}
          </h2>
          <ul className={Style.charList}>
            {characters
              .filter((character) =>
                character.location.name.includes(selectedLocation.name)
              )
              .map((character) => (
                <Link href={`/characters/${character.id}`}>
                  <li key={character.id}>
                    <div>
                      <img
                        className={Style.imgOfChars}
                        src={character.image}
                        alt={character.name}
                      />
                    </div>
                    <div>
                      {character.id} - {character.name}
                    </div>
                  </li>
                </Link>
              ))}
          </ul>
          <button className={Style.closeBtn} onClick={closeSidebar}>Close Sidebar</button>
        </div>
      )}

      
    </div>
  );
};

export default page;