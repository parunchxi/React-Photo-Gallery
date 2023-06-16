/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { createContext, useState } from "react";

export const GalleryContext = createContext(null);

const accessKey = "MGQOHGxnQC2LET-46Jl4QxbBLRfqY2fDIkGkEj6qSFk";
let prevSearch = "";

export const GalleryContextProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);
  const [selectPhoto, setSelectPhoto] = useState("");

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

  const contextValue = {
    searchText,
    data,
    handleInputChange,
    handleFormSubmit,
    fetchData,
    selectPhoto,
    showPhoto,
    hidePhoto,
  };

  return (
    <GalleryContext.Provider value={contextValue}>
      {children}
    </GalleryContext.Provider>
  );
};
