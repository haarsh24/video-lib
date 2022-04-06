import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { VideoProvider } from "./context/videoContext";
import {BrowserRouter} from "react-router-dom"
import { AuthProvider } from "./context/authContext";
import { WatchLaterProvider } from "./context/watchLaterContext";
import { PlayListProvider } from "./context/playlistContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <PlayListProvider>
    <WatchLaterProvider>
   <AuthProvider>
    <BrowserRouter>
     <VideoProvider>
       <App />
      </VideoProvider>
      </BrowserRouter>
    </AuthProvider>
      </WatchLaterProvider>
      </PlayListProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
