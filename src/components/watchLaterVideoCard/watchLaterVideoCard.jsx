import {useWatchLater} from "../../context/watchLaterContext"
import { useNavigate } from "react-router-dom";
import { isVideoInWatchLater } from "../../utilities/helperFunctions/watchLaterFunction";
import {
  removeVideoFromWatchLater,
  addVideoInWatchLater,
} from "../../utilities/apiCalls/watchLaterApiCalls";
import { useAuth } from "../../context/authContext";
import { Explore } from "../../components/explore/explore";


const WatchLaterVideoCard = (props) => {
    
    console.log(props)
  const videoData = props.video;
    const {
      authState: { token },
    } = useAuth();
    const {
      watchLaterState: { watchLaterList },
      watchLaterDispatch,
    } = useWatchLater();
      const watchLaterHandler = () => {
      
          if (isVideoInWatchLater(videoData._id, watchLaterList)) {
            removeVideoFromWatchLater(videoData._id, watchLaterDispatch, token);
          } else {
            addVideoInWatchLater(videoData, watchLaterDispatch, token);
          }
        
      };
  
    return (
      <>
        
          :<div className="card basic video-card">
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
          <div className="flex space-between">
            <span
              className="material-icons action-item watch-later-icon h3"
              onClick={watchLaterHandler}
            >
              watch_later
            </span>

            <span class="material-icons action-item h3">playlist_add</span>
          </div>
        </div>
      </>
    );
}

export {WatchLaterVideoCard}