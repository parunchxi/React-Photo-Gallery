import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/style/_reset.scss";
import "./assets/style/index.scss";
import { GalleryContextProvider } from "./context/GalleryContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { FavoriteContextProvider } from "./context/FavoriteContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GalleryContextProvider>
        <FavoriteContextProvider>
          <App />
        </FavoriteContextProvider>
      </GalleryContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
