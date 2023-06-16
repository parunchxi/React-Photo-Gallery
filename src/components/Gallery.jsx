/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import styles from "./Gallery.module.scss";
import Photo from "./Photo";
import { GalleryContext } from "../context/GalleryContext";

function Gallery({ data }) {
  const { fetchData, showPhoto } = useContext(GalleryContext);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.gallery}>
      {data.map((item) => {
        return <Photo key={item.id} item={item} showPhoto={showPhoto} />;
      })}
    </div>
  );
}

export default Gallery;
