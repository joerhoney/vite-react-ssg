import React from "react";
import { ViteSSG } from "vite-ssg";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import routes from "~react-pages";
import "./index.css";

export const createApp = () => {
  return (
    <BrowserRouter>
      <App routes={routes} />
    </BrowserRouter>
  );
};

ViteSSG(createApp, { routes });
