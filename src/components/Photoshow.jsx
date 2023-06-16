import { RiHeart3Fill } from "react-icons/ri";
import styles from "./PhotoShow.module.scss";
import { useContext } from "react";
import { GalleryContext } from "../context/GalleryContext";
import { FavouriteContext } from "../context/FavouriteContext";

function Photoshow() {
  const { selectPhoto, hidePhoto } = useContext(GalleryContext);
  const { handleFavourite } = useContext(FavouriteContext);

  return (
    <div className={styles.photo_show}>
      <div className={styles.photo}>
        <RiHeart3Fill
          className={styles.love}
          onClick={() => handleFavourite(selectPhoto)}
        />
        <img src={selectPhoto.urls.regular} alt={selectPhoto.alt_description} />
      </div>
      <div className={styles.bg} onClick={hidePhoto}></div>
    </div>
  );
}

export default Photoshow;
