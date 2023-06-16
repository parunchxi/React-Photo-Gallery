/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import { GalleryContext } from "./context/GalleryContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Photoshow from "./components/Photoshow.jsx";
import MainPage from "./pages/MainPage.jsx";
import FavoritePage from "./pages/FavoritePage.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  const { selectPhoto } = useContext(GalleryContext);

  return (
    <>
      {selectPhoto && <Photoshow />}
      <Navbar />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/favorite" element={<FavoritePage />} />
      </Routes>
    </>
  );
}

export default App;
