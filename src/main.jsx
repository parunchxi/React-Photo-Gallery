import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/style/_reset.scss";
import "./assets/style/index.scss";
import { GalleryContextProvider } from "./context/GalleryContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { FavouriteContextProvider } from "./context/FavouriteContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GalleryContextProvider>
        <FavouriteContextProvider>
          <App />
        </FavouriteContextProvider>
      </GalleryContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
