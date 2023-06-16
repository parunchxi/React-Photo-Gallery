/* eslint-disable react-hooks/exhaustive-deps */
// import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Gallery from "./components/Gallery.jsx";
import Photoshow from "./components/Photoshow.jsx";

const accessKey = "MGQOHGxnQC2LET-46Jl4QxbBLRfqY2fDIkGkEj6qSFk";
let prevSearch = "";

function App() {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);
  const [selectPhoto, setSelectPhoto] = useState("");

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
          `https://api.unsplash.com/photos/random?count=30&client_id=${accessKey}`
        );
        const json = await response.json();
        json.forEach((item) => {
          setData((prevdata) => {
            return [...prevdata, item];
          });
        });
      } else {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?page=1&per_page=30&query=${searchText}&client_id=${accessKey}`
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

  function showPhoto(item) {
    setSelectPhoto(item);
  }

  function hidePhoto() {
    setSelectPhoto("");
  }

  function onHomeClick() {
    window.location.reload(false);
  }

  return (
    <>
      {selectPhoto && (
        <Photoshow selectPhoto={selectPhoto} hidePhoto={hidePhoto} />
      )}
      <Navbar
        onHomeClick={onHomeClick}
        searchText={searchText}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
      <Gallery data={data} showPhoto={showPhoto} />
    </>
  );
}

export default App;
