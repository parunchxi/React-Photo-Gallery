/* eslint-disable react/prop-types */
import styles from "./Gallery.module.scss";
import Photo from "./Photo";

function Gallery({ data }) {
  return (
    <div className={styles.gallery}>
      {data.map((item) => {
        return <Photo key={item.id} item={item} />;
      })}
    </div>
  );
}

export default Gallery;
