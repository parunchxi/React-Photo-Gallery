import { createContext, useEffect, useState } from "react";

export const FavoriteContext = createContext(null);

export const FavoriteContextProvider = ({ children }) => {
  const [favorite, setFavorite] = useState(() => {
    const savedFavorite = localStorage.getItem("favorite");
    if (savedFavorite) {
      return JSON.parse(savedFavorite);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);

  function handleFavorite(item) {
    if (favorite.includes(item)) {
      const newFavorite = favorite.filter(
        (favoriteItem) => item.id !== favoriteItem.id
      );
      setFavorite(newFavorite);
    } else {
      setFavorite((prevFavorite) => [...prevFavorite, item]);
    }
  }

  const contextValue = { favorite, setFavorite, handleFavorite };
  return (
    <FavoriteContext.Provider value={contextValue}>
      {children}
    </FavoriteContext.Provider>
  );
};
