import React from "react";
import Style from "./FilterSection.module.css";
import {
    getAllStatus,
    getAllLocation,
    getAllGender,
    getAllSpecies,
    getAllType,
  } from "@/Components/demo/page";
import { useState ,useEffect} from "react";

const FilterSection = () => {


    const [status, setStatus] = useState([]);
    const [location, setLocation] = useState([]);
    const [episode, setEpisode] = useState([]);
    const [gender, setGender] = useState([]);
    const [species, setSpecies] = useState([]);
    const [type, setType] = useState([]);

    const [selectedFilters, setselectedFilters] = useState([]);
    const [activeFilter, setActiveFilter] = useState(false);
    const [charactersFiltered, setCharactersFiltered] = useState([]);

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


  const handleFilterBtnClick = (items) => {
    if (selectedFilters.includes(items)) {
      let filter = selectedFilters.filter((el) => el !== items);
      setselectedFilters(filter);
      console.log("Selected in filter = "+selectedFilters);
    } else {
      setselectedFilters([...selectedFilters, items]);
    }
  };
  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItem = selectedFilters.map((selectedCategory) => {
        console.log("Category = " + selectedCategory);

        let temp = charactersFiltered.filter((item) =>
          item.status.includes(selectedCategory)
        );
        console.log("Category items = " + temp);

        // let temp1 = characters.filter((items) => {
        //   return selectedCategory === ""
        //     ? items
        //     : items.status.includes(selectedCategory);
        // });
        // console.log("Category items 1  = " + temp1);
        return temp;
      });
      setCharactersFiltered(tempItem.flat());
      console.log("Category items charachter = " + charactersFiltered);
    } else {
      setCharactersFiltered([...charactersFiltered]);
    }
  };


  return (
    <div>
      {" "}

    </div>
  );
};

export default FilterSection;
