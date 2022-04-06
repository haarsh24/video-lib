import { Link } from "react-router-dom"

const ResponsiveSidebar = () => {
    return (
        <>
              <div class="sidebar-items footer responsive-sidebar">
          <Link to="/likedvideos">
            <div class="sidebar-item">
              <span class="material-icons">thumb_up</span>
              
            </div>
          </Link>
          <Link to="/category">
            <div class="sidebar-item">
              <span class="material-icons">category</span>
              
            </div>
            </Link>
          <Link to="/watchlater">
            <div class="sidebar-item">
              <span class="material-icons">watch_later</span>
              
            </div>
          </Link>
          <Link to="/playlist">
            <div class="sidebar-item">
              <span class="material-icons">playlist_add</span>
             
            </div>
          </Link>
          <Link to="/signup">
            <div class="sidebar-item">
              <span class="material-icons md-48">face</span>
              
            </div>
          </Link>
        </div>
        </>
    )
}

export {ResponsiveSidebar}