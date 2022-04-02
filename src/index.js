import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { VideoProvider } from "./context/videoContext";
import {BrowserRouter} from "react-router-dom"
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <VideoProvider>
    <App />
      </VideoProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
