/* eslint-disable react/prop-types */
import { RiHeart3Fill } from "react-icons/ri";
import styles from "./Photo.module.scss";

function Photo({ item, showPhoto }) {
  return (
    <div
      className={styles.photo}
      onClick={() => {
        showPhoto(item);
      }}
    >
      <div className={styles.filter}>
        <RiHeart3Fill className={styles.love} />
      </div>
      <img src={item.urls.regular} alt={item.alt_description} />
    </div>
  );
}

export default Photo;
