/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { GalleryContext } from "../context/GalleryContext";
import Gallery from "../components/Gallery";

const MainPage = () => {
  const { data, setData, fetchData } = useContext(GalleryContext);

  useEffect(() => {
    setData([]);
    fetchData();
  }, []);

  return (
    <div className="content">
      <Gallery data={data} />
    </div>
  );
};

export default MainPage;
