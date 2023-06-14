/* eslint-disable react/prop-types */
import { RiHeart3Fill } from "react-icons/ri";
import styles from "./Photo.module.scss";

function Photo({ item }) {
  return (
    <div className={styles.photo}>
      <div className={styles.filter}>
        <RiHeart3Fill className={styles.love} />
      </div>
      <img src={item.urls.regular} />
    </div>
  );
}

export default Photo;
