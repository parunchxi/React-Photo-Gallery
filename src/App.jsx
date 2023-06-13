// import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./component/Navbar.jsx";
import Gallery from "./component/Gallery.jsx";

const accessKey = "8bCYPWN5Ffah7eDYFk7VclNa1xCGFgX2qzvqqQWpLdI";
let prevSearch;

function App() {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function handleInputChange(event) {
    setSearchText(event.target.value);
  }

  function checkSearch() {
    if (prevSearch !== searchText) {
      prevSearch = searchText;
      setData([]);
    }
  }

  async function fetchData() {
    try {
      if (searchText === "") {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?count=10&client_id=${accessKey}`
        );
        const json = await response.json();
        json.forEach((item) => {
          setData((prevdata) => {
            return [...prevdata, item];
          });
        });
      } else {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?page=1&query=${searchText}&client_id=${accessKey}`
        );
        const json = await response.json();
        json.results.forEach((item) => {
          setData((prevdata) => {
            return [...prevdata, item];
          });
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    checkSearch();
    fetchData();
  }

  return (
    <>
      <Navbar
        searchText={searchText}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
      <Gallery data={data} />
    </>
  );
}

export default App;
