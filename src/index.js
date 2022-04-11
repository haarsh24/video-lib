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
import { likeReducer } from "./reducer/LikeReducer";
import { LikeProvider } from "./context/likeContext";
import { HistoryProvider } from "./context/historyContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <PlayListProvider>
      <HistoryProvider>
    <WatchLaterProvider>
        <AuthProvider>
          <LikeProvider>
    <BrowserRouter>
     <VideoProvider>
       <App />
      </VideoProvider>
            </BrowserRouter>
            </LikeProvider>
    </AuthProvider>
        </WatchLaterProvider>
        </HistoryProvider>
      </PlayListProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
