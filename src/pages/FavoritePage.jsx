/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import styles from "./FavouritePage.module.scss";
import { GalleryContext } from "../context/GalleryContext";
import Gallery from "../components/Gallery";
import { FavoriteContext } from "../context/FavoriteContext";

const FavouritePage = () => {
  const { setSearchText, setData } = useContext(GalleryContext);
  const { favorite } = useContext(FavoriteContext);

  useEffect(() => {
    setSearchText("");
    setData([]);
  }, []);

  return (
    <>
      <h1 className={styles.header}>
        {favorite.length === 0 && "No Favorite Photo"}
        {favorite.length === 1 && "Your Favorite Photo"}
        {favorite.length > 1 && "Your Favorite Photos"}
      </h1>
      <Gallery data={favorite} />;
    </>
  );
};

export default FavouritePage;
