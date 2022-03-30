import "../styles/main.css";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div class="sidebar-items">
          <div class="sidebar-item">
            <span class="material-icons">thumb_up</span>
            <label for="Inbox" class="sidebar-item-text">
              Liked Videos
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
              Watch Later
            </label>
          </div>
          <div class="sidebar-item">
            <span class="material-icons">playlist_add</span>
            <label for="draft" class="sidebar-item-text">
              Playlist
            </label>
          </div>
          <div class="sidebar-item">
            <span class="material-icons md-48">face</span>
            <label for="bookmark" class="sidebar-item-text">
              Profile
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export { Sidebar };
