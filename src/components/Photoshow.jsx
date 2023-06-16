import { RiHeart3Fill } from "react-icons/ri";
import styles from "./PhotoShow.module.scss";
import { useContext } from "react";
import { GalleryContext } from "../context/GalleryContext";
import { FavoriteContext } from "../context/FavoriteContext";

function Photoshow() {
  const { selectPhoto, hidePhoto } = useContext(GalleryContext);
  const { favorite, handleFavorite } = useContext(FavoriteContext);

  return (
    <div className={styles.photo_show}>
      <div className={styles.photo}>
        {favorite.includes(selectPhoto) && (
          <RiHeart3Fill
            className={styles.lovered}
            onClick={() => handleFavorite(selectPhoto)}
          />
        )}
        <RiHeart3Fill
          className={styles.love}
          onClick={() => handleFavorite(selectPhoto)}
        />
        <img src={selectPhoto.urls.regular} alt={selectPhoto.alt_description} />
      </div>
      <div className={styles.bg} onClick={hidePhoto}></div>
    </div>
  );
}

export default Photoshow;
