/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import styles from "./Gallery.module.scss";
import Photo from "./Photo";
import { GalleryContext } from "../context/GalleryContext";

function Gallery({ data }) {
  const { showPhoto } = useContext(GalleryContext);

  return (
    <div className={styles.gallery}>
      {data.map((item, index) => {
        return <Photo key={index} item={item} showPhoto={showPhoto} />;
      })}
    </div>
  );
}

export default Gallery;
