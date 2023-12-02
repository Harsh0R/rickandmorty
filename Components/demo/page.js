import axios from "axios";

export async function getAllEpisodeName() {
  try {
    let currentPage = 1;
    let allCharacters = [];
    while (currentPage < 4) {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/episode?page=${currentPage}`
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
    // console.log(`All Data = ${allCharacters}`);
    // return allCharacters;

    const status = Array.from(new Set(allCharacters.map((item) => item.name)));
    // console.log("Staus = " + status);
    return status;
  } catch (error) {
    console.error("Error fetching data:", error);
    // Rethrow the error or return a default value depending on your needs
    throw error;
  }
}
export async function getAllEpisode() {
  try {
    let currentPage = 1;
    let allCharacters = [];
    while (currentPage < 4) {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/episode?page=${currentPage}`
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
    // console.log(`All Data = ${allCharacters}`);
    return allCharacters;
  } catch (error) {
    console.error("Error fetching data:", error);
    // Rethrow the error or return a default value depending on your needs
    throw error;
  }
}
export async function getAllLocations() {
  try {
    let currentPage = 1;
    let allCharacters = [];
    while (currentPage < 8) {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/location?page=${currentPage}`
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
    // console.log(`All Data = ${allCharacters}`);
    return allCharacters;
  } catch (error) {
    console.error("Error fetching data:", error);
    // Rethrow the error or return a default value depending on your needs
    throw error;
  }
}

export async function getAllDataFromApi() {
  try {
    let currentPage = 1;
    let allCharacters = [];
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${currentPage}`
    );
    const data = response.data;
    allCharacters = allCharacters.concat(data.results);
    currentPage++;

    while (currentPage < 43) {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${currentPage}`
      );
      const data = response.data;
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
    let allCharacters = [];
    allCharacters = await getAllDataFromApi();
    const status = Array.from(
      new Set(allCharacters.map((item) => item.status))
    );
    // console.log("Staus = " + status);
    return status;
  } catch (error) {
    console.log("Error while fetching all status = " + error);
  }
}

export async function getAllLocation() {
  try {
    let allCharacters = [];
    allCharacters = await getAllDataFromApi();
    const loc = Array.from(
      new Set(allCharacters.map((item) => item.location.name))
    );
    // console.log("Staus = " + loc);
    return loc;
  } catch (error) {
    console.log("Error while fetching all location = " + error);
  }
}

export async function getAllGender() {
  try {
    let allCharacters = [];
    allCharacters = await getAllDataFromApi();
    const loc = Array.from(new Set(allCharacters.map((item) => item.gender)));
    // console.log("gen = " + loc);
    return loc;
  } catch (error) {
    console.log("Error while fetching all gender = " + error);
  }
}

export async function getAllSpecies() {
  try {
    let allCharacters = [];
    allCharacters = await getAllDataFromApi();
    const loc = Array.from(new Set(allCharacters.map((item) => item.species)));
    // console.log("gen = " + loc);
    return loc;
  } catch (error) {
    console.log("Error while fetching all species = " + error);
  }
}

export async function getAllType() {
  try {
    let allCharacters = [];
    allCharacters = await getAllDataFromApi();
    const loc = Array.from(new Set(allCharacters.map((item) => item.type)));
    // console.log("gen = " + loc);
    return loc;
  } catch (error) {
    console.log("Error while fetching all type = " + error);
  }
}
