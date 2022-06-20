import { Link } from "react-router-dom"

const ResponsiveSidebar = () => {
    return (
        <>
              <div class="flex responsive-sidebar">
          <Link to="/likedvideos">
            <div class="small-sidebar-item small">
              <span class="material-icons">thumb_up</span>
              
            </div>
          </Link>
          <Link to="/history">
            <div class="small-sidebar-item small">
              <span class="material-icons">history</span>
              
            </div>
            </Link>
          <Link to="/watchlater">
            <div class="small-sidebar-item small">
              <span class="material-icons">watch_later</span>
              
            </div>
          </Link>
          <Link to="/playlist">
            <div class="small-sidebar-item small">
              <span class="material-icons">playlist_add</span>
             
            </div>
          </Link>
          <Link to="/">
            <div class="small-sidebar-item small">
              <span class="material-icons md-48">explore</span>
              
            </div>
          </Link>
        </div>
        </>
    )
}

export {ResponsiveSidebar}