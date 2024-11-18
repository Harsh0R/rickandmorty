"use client";
import React from "react";
import Style from "./page.module.css";
import { useEffect, useState } from "react";
import { getAllDataFromApi, getAllLocations } from "@/Components/Context/page";
import CardsForLocations from "@/Components/CardsForLocations/CardsForLocations";
import Link from "next/link";
import Image from "next/image";
import LoadingPage from "@/Components/LoadingPage/LoadingPage";
import preventZoom from "../utils/preventZoom";

const Page = () => {




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
        setLoading(false);
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
      <div className={Style.searchbar}>
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
            <div key={items.id} className={Style.container}>
              <CardsForLocations items={items} />
              <button
                className={Style.charBtn}
                onClick={() => openSidebar(items)}
              >
                Show characters related to location
              </button>
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
                <Link href={`/characters/${character.id}`} key={character.id}>
                  <li key={character.id}>
                    <div>
                      <Image
                        className={Style.imgOfChars}
                        src={character.image}
                        alt={character.name}
                        width={50}
                        height={50}
                      />
                    </div>
                    <div>
                      {character.id} - {character.name}
                    </div>
                  </li>
                </Link>
              ))}
          </ul>
          <button className={Style.closeBtn} onClick={closeSidebar}>
            Close Sidebar
          </button>
        </div>
      )}
    </div>
  );
};

export default Page;
