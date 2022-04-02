import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { Sidebar } from "./components/sidebar/sidebar";
import { VideoCard } from "./components/videoCard/videoCard";
import { HomePage } from "./pages/homePage/homePage";
import { LikedVideos } from "./pages/likedVideos/likedVideos";
import { Login } from "./pages/login/login";
import { Playlist } from "./pages/playlist/playlist";
import { Signup } from "./pages/signup/signup";
import { WatchLater } from "./pages/watchLater/watchLater";

function App() {
  return (
    <div className="App">
     
      
      < Navbar />
          <Sidebar />
          
      <Routes>  
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/likedvideos" element={<LikedVideos />} />
        <Route path="playlist" element={<Playlist/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
