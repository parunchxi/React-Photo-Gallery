/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import styles from "./FavouritePage.module.scss";
import { GalleryContext } from "../context/GalleryContext";
import Gallery from "../components/Gallery";
import { FavouriteContext } from "../context/FavouriteContext";

const FavouritePage = () => {
  const { setSearchText, setData } = useContext(GalleryContext);
  const { favourite } = useContext(FavouriteContext);

  useEffect(() => {
    setSearchText("");
    setData([]);
  }, []);

  return (
    <>
      <h1 className={styles.header}>
        {favourite.length === 0 && "No Favourite Photo"}
        {favourite.length === 1 && "Your Favourite Photo"}
        {favourite.length > 1 && "Your Favourite Photos"}
      </h1>
      <Gallery data={favourite} />;
    </>
  );
};

export default FavouritePage;
