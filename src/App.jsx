// import React from "react";
import { useState } from "react";
import Navbar from "./component/Navbar.jsx";
import Gallery from "./component/Gallery.jsx";

const accessKey = "8bCYPWN5Ffah7eDYFk7VclNa1xCGFgX2qzvqqQWpLdI";

function App() {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);

  function handleInputChange(event) {
    setSearchText(event.target.value);
  }

  async function fetchData() {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${searchText}&client_id=${accessKey}`
      );
      const json = await response.json();
      json.results.forEach((item) => {
        setData((prevdata) => {
          return [...prevdata, item];
        });
      });
    } catch (err) {
      console.log(err);
    }
  }

  function handleFormSubmit(event) {
    event.preventDefault();

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
