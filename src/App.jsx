/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import { GalleryContext } from "./context/GalleryContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Photoshow from "./components/Photoshow.jsx";
import MainPage from "./pages/MainPage.jsx";
import FavouritePage from "./pages/FavouritePage.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  const { selectPhoto } = useContext(GalleryContext);

  return (
    <>
      {selectPhoto && <Photoshow />}
      <Navbar />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/favourite" element={<FavouritePage />} />
      </Routes>
    </>
  );
}

export default App;
