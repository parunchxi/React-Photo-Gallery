/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
// import React from "react";
import { useContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Gallery from "./components/Gallery.jsx";
import Photoshow from "./components/Photoshow.jsx";
import { GalleryContext } from "./context/GalleryContext.jsx";

function App() {
  const { fetchData } = useContext(GalleryContext);
  const [selectPhoto, setSelectPhoto] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  function showPhoto(item) {
    setSelectPhoto(item);
  }

  function hidePhoto() {
    setSelectPhoto("");
  }

  return (
    <>
      {selectPhoto && (
        <Photoshow selectPhoto={selectPhoto} hidePhoto={hidePhoto} />
      )}
      <Navbar />
      <Gallery showPhoto={showPhoto} />
    </>
  );
}

export default App;
