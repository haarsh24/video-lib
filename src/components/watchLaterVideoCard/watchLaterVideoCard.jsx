import {useWatchLater} from "../../context/watchLaterContext"
import { useNavigate } from "react-router-dom";
import { isVideoInWatchLater } from "../../utilities/helperFunctions/watchLaterFunction";
import {
  removeVideoFromWatchLater,
  addVideoInWatchLater,
} from "../../utilities/apiCalls/watchLaterApiCalls";
const WatchLaterVideoCard = (props) => {
    const navigate = useNavigate();
    console.log(props)
    const videoData = props.video;
    const { watchLaterDispatch } = useWatchLater();
      const watchLaterHandler = () => {
        if (isLogin) {
          if (isVideoInWatchLater(videoData._id, watchLaterList)) {
            removeVideoFromWatchLater(videoData._id, watchLaterDispatch, token);
          } else {
            addVideoInWatchLater(videoData, watchLaterDispatch, token);
          }
        } else {
          navigate("/login");
        }
      };
  
    return (
      <>
        <div className="card basic video-card">
          <div className="img-container">
            <img
              className="image-responsive video-card-image"
              src={`https://i.ytimg.com/vi/${videoData._id}/hq720.jpg`}
            />

          
            <span className="timer">{videoData.views}</span>
          </div>
          <div className="video-card-info flex ">
            <figure className="m1">
              <img
                className="avatar avatar-round avatar-xs  avatar-image"
                src={videoData.creatorImage}
              />
            </figure>
            <div className="video-details flex-column">
              <span className="description h4">{videoData.title}</span>
              <span className="author h6">{videoData.creator}</span>
              <div className="flex space-between h6 video-extra-detail">
                <span>{videoData.duration}</span>
                <span>{videoData.uploaded} months ago</span>
              </div>
            </div>
          </div>
          <div className="flex space-around">
            <button
              className="btn flex action-item h5"
              onClick={watchLaterHandler}
            >
              <span className="material-icons ">watch_later</span>
              <span>Watch Later</span>
            </button>
            <button className="btn flex action-item h5">
              <span class="material-icons">playlist_add</span>
              <span>Add to Playlist</span>
            </button>
          </div>
        </div>
      </>
    );
}

export {WatchLaterVideoCard}