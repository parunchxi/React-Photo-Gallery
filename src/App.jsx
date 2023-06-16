/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
// import React from "react";
import { useContext } from "react";
import Navbar from "./components/Navbar.jsx";
import Gallery from "./components/Gallery.jsx";
import Photoshow from "./components/Photoshow.jsx";
import { GalleryContext } from "./context/GalleryContext.jsx";

function App() {
  const { selectPhoto } = useContext(GalleryContext);

  return (
    <>
      {selectPhoto && <Photoshow />}
      <Navbar />
      <Gallery />
    </>
  );
}

export default App;
