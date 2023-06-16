import { RiHeart3Fill } from "react-icons/ri";
import styles from "./PhotoShow.module.scss";
import { useContext } from "react";
import { GalleryContext } from "../context/GalleryContext";

function Photoshow() {
  const { selectPhoto, hidePhoto } = useContext(GalleryContext);
  return (
    <div className={styles.photo_show}>
      <div className={styles.photo}>
        <RiHeart3Fill className={styles.love} />
        <img src={selectPhoto.urls.regular} alt={selectPhoto.alt_description} />
      </div>
      <div className={styles.bg} onClick={hidePhoto}></div>
    </div>
  );
}

export default Photoshow;
