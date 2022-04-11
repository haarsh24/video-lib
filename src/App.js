import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Error } from "./components/error/error";
import { Footer } from "./components/footer/footer";
import { Navbar } from "./components/navbar/navbar";
import { ResponsiveSidebar } from "./components/ResponsiveSidebar/responsiveSidebar";
import { Sidebar } from "./components/sidebar/sidebar";
import { VideoCard } from "./components/videoCard/videoCard";
import { Category } from "./pages/category/category";
import { HistoryPage } from "./pages/history/historyPage";
import { HomePage } from "./pages/homePage/homePage";
import { LikedVideos } from "./pages/likedVideos/likedVideos";
import { Login } from "./pages/login/login";
import { Playlist } from "./pages/playlist/playlist";
import { PlaylistDetails } from "./pages/playlistDetails/playlistDetails";
import { Signup } from "./pages/signup/signup";
import { SingleVideoPage } from "./pages/singleVideoPage/singleVideoPage";
import { WatchLater } from "./pages/watchLater/watchLater";

function App() {
  return (
    <div className="App">
      < Navbar />
      <div className="flex-column">
        <div className="flex">
         
         
          <Sidebar />
          <div className="main-container">
      <Routes>  
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/likedvideos" element={<LikedVideos />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/playlist/:playlistId" element={<PlaylistDetails  />}/>
          <Route path="/category" element={<Category />} />
          <Route path="/video/:videoId" element={<SingleVideoPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="*" element={<Error/>}/>
          </Routes>
          </div>
          </div>
        <Footer />
        <ResponsiveSidebar/>
      </div>
    </div>
  );
}

export default App;
