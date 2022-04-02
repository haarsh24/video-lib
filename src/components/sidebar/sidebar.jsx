import "../styles/main.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div class="sidebar-items">
          <div class="sidebar-item">
            <span class="material-icons">thumb_up</span>
            <label for="Inbox" class="sidebar-item-text">
              <Link to="/likedvideos"> Liked Videos</Link>
            </label>
          </div>
          <div class="sidebar-item">
            <span class="material-icons">category</span>
            <label for="start" class="sidebar-item-text">
              Categories
            </label>
          </div>
          <div class="sidebar-item">
            <span class="material-icons">watch_later</span>
            <label for="mail" class="sidebar-item-text">
              <Link to="/watchlater"> Watch Later</Link>
            </label>
          </div>
          <div class="sidebar-item">
            <span class="material-icons">playlist_add</span>
            <label for="draft" class="sidebar-item-text">
              <Link to="/playlist"> Playlist</Link>
            </label>
          </div>
          <div class="sidebar-item">
            <span class="material-icons md-48">face</span>
            <label for="bookmark" class="sidebar-item-text">
              <Link to="/signup"> Profile</Link>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export { Sidebar };
