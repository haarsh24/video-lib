import "../styles/main.css";
import { useVideo } from "../../context/videoContext";
import { useWatchLater } from "../../context/watchLaterContext";
import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { isVideoInWatchLater } from "../../utilities/helperFunctions/watchLaterFunction";
import {
  removeVideoFromWatchLater,
  addVideoInWatchLater,
} from "../../utilities/apiCalls/watchLaterApiCalls";
import { usePlayList } from "../../context/playlistContext";
import { Link } from "react-router-dom";

const VideoCard = ({video, setCurrentClickedVideo,setShowModal}) => {
  const [watchLaterClicked, setWatchLaterClicked] = useState(false);
  const navigate = useNavigate();
  const videoData =video;
  const { videoList } = useVideo();
  const {
    authState: { isLogin, token },
  } = useAuth();
  const {
    watchLaterState: { watchLaterList },
    watchLaterDispatch,
  } = useWatchLater();
  const { playListDispatch } = usePlayList();

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

  const playlistHandler = () => {
    if (isLogin) {
    setCurrentClickedVideo(videoData);
    setShowModal(pre => !pre);
      console.log(videoData);
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      
      <div className="card basic video-card">
        <div className="img-container">
        <Link to={`/video/${videoData._id}`}>
          <img
            className="image-responsive video-card-image"
            src={`https://i.ytimg.com/vi/${videoData._id}/hq720.jpg`}
            />
            </Link>
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

          <span class="material-icons action-item h3 " onClick={playlistHandler}>
            playlist_add
          </span>
        </div>
        </div>
      
    </>
  );
};

export { VideoCard };
