/* eslint-disable react/prop-types */
import { RiHeart3Fill } from "react-icons/ri";
import styles from "./Photo.module.scss";
import { useContext } from "react";
import { GalleryContext } from "../context/GalleryContext";
import { FavouriteContext } from "../context/FavouriteContext";

function Photo({ item }) {
  const { showPhoto } = useContext(GalleryContext);
  const { handleFavourite } = useContext(FavouriteContext);

  return (
    <div className={styles.photo}>
      <div className={styles.overlay}>
        <RiHeart3Fill
          className={styles.love}
          onClick={() => handleFavourite(item)}
        />
        <div
          className={styles.filter}
          onClick={() => {
            showPhoto(item);
          }}
        ></div>
      </div>
      <img src={item.urls.regular} alt={item.alt_description} />
    </div>
  );
}

export default Photo;
