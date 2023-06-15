/* eslint-disable react/prop-types */
import styles from "./Gallery.module.scss";
import Photo from "./Photo";

function Gallery({ data, showPhoto }) {
  return (
    <div className={styles.gallery}>
      {data.map((item) => {
        return <Photo key={item.id} item={item} showPhoto={showPhoto} />;
      })}
    </div>
  );
}

export default Gallery;
