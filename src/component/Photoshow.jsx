import { RiHeart3Fill } from "react-icons/ri";
import styles from "./PhotoShow.module.scss";

function Photoshow({ selectPhoto, hidePhoto }) {
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
