import styles from "./Gallery.module.scss";

function Gallery({ data }) {
  return (
    <div className={styles.gallery}>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.urls.regular} />
          </div>
        );
      })}
    </div>
  );
}

export default Gallery;
