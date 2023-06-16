import { useContext } from "react";
import { GalleryContext } from "../context/GalleryContext";
import Gallery from "../components/Gallery";

const MainPage = () => {
  const { data } = useContext(GalleryContext);

  return <Gallery data={data} />;
};

export default MainPage;
