"use client";
import React from "react";
import Style from "./page.module.css";
import { getAllDataFromApi, getAllEpisode } from "@/Components/demo/page";
import { useEffect, useState } from "react";
import CardsForEpisodes from "@/Components/CardsForEpisodes/CardsForEpisodes";
import Link from "next/link";
import LoadingPage from "@/Components/LoadingPage/LoadingPage";

const page = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [episodes, setEpisodes] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedEpisodes, setSelectedEpisodes] = useState(null);

  // Fetching data from API
  useEffect(() => {
    const getData = async () => {
      try {
        const ep = await getAllEpisode();
        setEpisodes(ep);

        const charData = await getAllDataFromApi();
        setCharacters(charData);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching data in episode Page :", error);
        setLoading(false); // Set loading to false in case of an error
      }
    };
    getData();
  }, []);

  const openSidebar = (selectedEpisodes) => {
    setSelectedEpisodes(selectedEpisodes);
    setOpen(true);
  };

  const closeSidebar = () => {
    setSelectedEpisodes(null);
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
          placeholder="Search Episode By Episode Name... 🔎"
        />
      </div>

      <div className={Style.containerForCharacters}>
        {episodes
          .filter((items) => {
            return search.toLowerCase() === ""
              ? items
              : items.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((items) => (
            <div className={Style.container}>
              <CardsForEpisodes items={items} />
              <button
                className={Style.charBtn}
                onClick={() => openSidebar(items)}
              >
                Show characters related to episode
              </button>
            </div>
          ))}
      </div>

      {open && selectedEpisodes && (
        <div className={Style.sidebar}>
          <h2>
            Characters in Episode {selectedEpisodes.name} -{" "}
            {selectedEpisodes.id}
          </h2>
          <ul>
            {characters
              .filter((character) =>
                character.episode.includes(selectedEpisodes.url)
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
          <button className={Style.closeBtn} onClick={closeSidebar}>
            Close Sidebar
          </button>
        </div>
      )}
    </div>
  );
};

export default page;
