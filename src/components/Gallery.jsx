/* eslint-disable react/prop-types */
import { useContext } from "react";
import styles from "./Gallery.module.scss";
import Photo from "./Photo";
import { GalleryContext } from "../context/GalleryContext";

function Gallery({ showPhoto }) {
  const { data } = useContext(GalleryContext);
  return (
    <div className={styles.gallery}>
      {data.map((item) => {
        return <Photo key={item.id} item={item} showPhoto={showPhoto} />;
      })}
    </div>
  );
}

export default Gallery;
