import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/style/_reset.scss";
import "./assets/style/index.scss";
import { GalleryContextProvider } from "./context/GalleryContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GalleryContextProvider>
        <App />
      </GalleryContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
