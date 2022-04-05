import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { VideoProvider } from "./context/videoContext";
import {BrowserRouter} from "react-router-dom"
import { AuthProvider } from "./context/authContext";
import { WatchLaterProvider } from "./context/watchLaterContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <WatchLaterProvider>
   <AuthProvider>
    <BrowserRouter>
     <VideoProvider>
       <App />
      </VideoProvider>
      </BrowserRouter>
    </AuthProvider>
    </WatchLaterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
