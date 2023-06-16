import { createContext, useEffect, useState } from "react";

export const FavouriteContext = createContext(null);

export const FavouriteContextProvider = ({ children }) => {
  const [favourite, setFavourite] = useState(() => {
    const savedFavourite = localStorage.getItem("favourite");
    if (savedFavourite) {
      return JSON.parse(savedFavourite);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("favourite", JSON.stringify(favourite));
  }, [favourite]);

  function handleFavourite(item) {
    if (favourite.includes(item)) {
      const newFavourite = favourite.filter(
        (favouriteItem) => item.id !== favouriteItem.id
      );
      setFavourite(newFavourite);
    } else {
      setFavourite((prevFavourite) => [...prevFavourite, item]);
    }
  }

  const contextValue = { favourite, setFavourite, handleFavourite };
  return (
    <FavouriteContext.Provider value={contextValue}>
      {children}
    </FavouriteContext.Provider>
  );
};
