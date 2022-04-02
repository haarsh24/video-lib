import "../styles/main.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div class="sidebar-items">
          <Link to="/likedvideos">
            <div class="sidebar-item">
              <span class="material-icons">thumb_up</span>
              <label for="Inbox" class="sidebar-item-text h4">
                Liked Videos
              </label>
            </div>
          </Link>
          <Link to="/category">
            <div class="sidebar-item">
              <span class="material-icons">category</span>
              <label for="start" class="sidebar-item-text h4">
                Categories
              </label>
            </div>
            </Link>
          <Link to="/watchlater">
            <div class="sidebar-item">
              <span class="material-icons">watch_later</span>
              <label for="mail" class="sidebar-item-text h4">
                Watch Later
              </label>
            </div>
          </Link>
          <Link to="/playlist">
            <div class="sidebar-item">
              <span class="material-icons">playlist_add</span>
              <label for="draft" class="sidebar-item-text h4">
                Playlist
              </label>
            </div>
          </Link>
          <Link to="/signup">
            <div class="sidebar-item">
              <span class="material-icons md-48">face</span>
              <label for="bookmark" class="sidebar-item-text h4">
                Profile
              </label>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export { Sidebar };
