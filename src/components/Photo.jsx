/* eslint-disable react/prop-types */
import { RiHeart3Fill } from "react-icons/ri";
import styles from "./Photo.module.scss";
import { useContext } from "react";
import { GalleryContext } from "../context/GalleryContext";
import { FavoriteContext } from "../context/FavoriteContext";

function Photo({ item }) {
  const { showPhoto } = useContext(GalleryContext);
  const { favorite, handleFavorite } = useContext(FavoriteContext);

  return (
    <div className={styles.photo}>
      <div className={styles.overlay}>
        <RiHeart3Fill
          className={`${styles.love} ${
            favorite.includes(item) ? `${styles.red}` : ""
          }`}
          onClick={() => handleFavorite(item)}
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
