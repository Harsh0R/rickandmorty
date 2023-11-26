"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";


export async function getAllDataFromApi() {
  try {
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
    // console.log(`All Data = ${allCharacters}`);
    return allCharacters;
  } catch (error) {
    console.error("Error fetching data:", error);
    // Rethrow the error or return a default value depending on your needs
    throw error;
  }
}

export async function getAllStatus() {
  try {
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
    // const data = await response.data;
    // Extract unique locations
    const status = Array.from(
      new Set(allCharacters.map((item) => item.status))
    );
    console.log("Staus = " + status);
    return status;
  } catch (error) {
    console.log("Error while fetching all status = " + error);
  }
}

export async function getAllLocation() {
  try {
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
    // const data = await response.data;
    // Extract unique locations
    const loc = Array.from(
      new Set(allCharacters.map((item) => item.location.name))
    );
    console.log("Staus = " + loc);
    return loc;
  } catch (error) {
    console.log("Error while fetching all location = " + error);
  }
}

export async function getAllGender() {
  try {
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
    // const data = await response.data;
    // Extract unique locations
    const loc = Array.from(new Set(allCharacters.map((item) => item.gender)));
    console.log("gen = " + loc);
    return loc;
  } catch (error) {
    console.log("Error while fetching all gender = " + error);
  }
}

export async function getAllSpecies() {
  try {
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
    // const data = await response.data;
    // Extract unique locations
    const loc = Array.from(new Set(allCharacters.map((item) => item.species)));
    console.log("gen = " + loc);
    return loc;
  } catch (error) {
    console.log("Error while fetching all species = " + error);
  }
}

export async function getAllType() {
  try {
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
    // const data = await response.data;
    // Extract unique locations
    const loc = Array.from(new Set(allCharacters.map((item) => item.type)));
    console.log("gen = " + loc);
    return loc;
  } catch (error) {
    console.log("Error while fetching all type = " + error);
  }
}

// const page = () => {
//   const [search, setSearch] = useState("");
//   const [characters, setCharacters] = useState([]);
//   const [uniqueLocations, setUniqueLocations] = useState([]);
//   const [uniqueStatus, setUniqueStatus] = useState([]);
//   const [uniqueGender, setUniqueGender] = useState([]);
//   const [uniqueSpecies, setUniqueSpecies] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://rickandmortyapi.com/api/character/"
//         );
//         const data = response.data;
//         setCharacters(data.results);

//         // Extract unique locations
//         const status = Array.from(
//           new Set(data.results.map((item) => item.status))
//         );
//         setUniqueStatus(status);

//         const loction = Array.from(
//           new Set(data.results.map((item) => item.location.name))
//         );
//         setUniqueLocations(loction);
//         const gender = Array.from(
//           new Set(data.results.map((item) => item.gender))
//         );
//         setUniqueGender(gender);
//         const species = Array.from(
//           new Set(data.results.map((item) => item.species))
//         );
//         setUniqueSpecies(species);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <div>
//         <strong>Status</strong>
//         <ul>
//           {uniqueStatus.map((status, index) => (
//             <li key={index}>{index} ---{status}</li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <strong>location</strong>
//         <ul>
//           {uniqueLocations.map((location, index) => (
//             <li key={index}> {index} --- {location}</li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <strong>gender</strong>
//         <ul>
//           {uniqueGender.map((gender, index) => (
//             <li key={index}>{index} ---{gender}</li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <strong>species</strong>
//         <ul>
//           {uniqueSpecies.map((species, index) => (
//             <li key={index}>{index} ---{species}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default page;
