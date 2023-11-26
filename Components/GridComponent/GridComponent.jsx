"use client";
import React, { useState } from "react";
import { getAllDataFromApi } from "../demo/page";

const GridComponent = ({ characters }) => {
//   let charactersdata = getAllDataFromApi();
//   console.log("All Charaters Data = " + charactersdata);

// const [items, setItems] = useState([]);
// setItems(getAllDataFromApi());
//   console.log("All Charaters Data = " + items);

  const [filters, setFilters] = useState({
    status: "",
    // location: "",
    // episode: "",
    // gender: "",
    // species: "",
    // type: "",
  });

  const handleFilterChange = (field, value) => {
    setFilters({
      ...filters,
      [field]: value,
    });
  };
console.log("Flter = " + filters.status);
  const filteredItems = characters.filter((item) => {
    return (
      (!filters.status || item.status === filters.status) 
    //   &&
    //   (!filters.location || item.location === filters.location) &&
    //   (!filters.episode || item.episode === filters.episode) &&
    //   (!filters.gender || item.gender === filters.gender) &&
    //   (!filters.species || item.species === filters.species) &&
    //   (!filters.type || item.type === filters.type)
    );
  });

  console.log("Filtered Item = " + filteredItems);

  return (
    <div>
      <div>
        <label>Status:</label>
        <input
          type="text"
          value={filters.status}
          onChange={(e) => handleFilterChange("status", e.target.value)}
        />
      </div>
      {/* <div>
        <label>Location:</label>
        <input
          type="text"
          value={filters.location}
          onChange={(e) => handleFilterChange("location", e.target.value)}
        />
      </div> */}
      {/* Repeat similar inputs for other fields */}
      {/* ... */}
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>Name = {item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GridComponent;
