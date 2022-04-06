import { SingleVideoPlayer } from "../../components/singleVideoPlayer/singleVideoPlayer";

import { useVideo } from "../../context/videoContext";
import { useWatchLater } from "../../context/watchLaterContext";
import { useState, useEffect } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { isVideoInWatchLater } from "../../utilities/helperFunctions/watchLaterFunction";
import {
  removeVideoFromWatchLater,
  addVideoInWatchLater,
} from "../../utilities/apiCalls/watchLaterApiCalls";
import { usePlayList } from "../../context/playlistContext";
import { Link, useParams } from "react-router-dom";
import {addVideoInLike, removeVideoFromLike} from "../../utilities/apiCalls/likeApiCalls"
import { isVideoInArray } from "../../utilities/helperFunctions/isVideoInArray";
import { useLike } from "../../context/likeContext";
import { useHistory } from "../../context/historyContext";
import { addVideoInHistory } from "../../utilities/apiCalls/historyApiCall";
import { PlaylistModal } from "../../components/playlistModal/playlistModal";

const SingleVideoPage = () => {
    const navigate = useNavigate();
    const { videoId } = useParams();
    const { videoList } = useVideo();
    const videoData = videoList?.find(({ _id }) => _id === videoId)
    const { authState: { isLogin, token },  } = useAuth();
    const {   watchLaterState: { watchLaterList }, watchLaterDispatch  } = useWatchLater();
    const { playListDispatch,setShowModal, showModal } = usePlayList();
    const { likeState: { likeList }, likeDispatch } = useLike();
    const { historyDispatch} = useHistory();

    useEffect(() => {
        (async () => {
            addVideoInHistory(videoData, historyDispatch,token)
        })();
    }, [videoData, playListDispatch])
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

    const likeHandler = () => {
        if (isLogin) {
            if (isVideoInArray(videoData._id, likeList)) {
                removeVideoFromLike(videoData._id, likeDispatch, token);
            } else {
                addVideoInLike(videoData, likeDispatch, token);
            }
          } else {
            navigate("/login");
          }
    }

    const playlistHandler = () => {
      if (isLogin) {
      
      setShowModal(true);
        console.log(videoData);
      } else {
        navigate("/login");
      }
    };
  
    
    return (
        <div>
            {showModal && <PlaylistModal video={videoData} />}
            <SingleVideoPlayer />
            <div className="flex">
                <span className='material-icons'
                 onClick={likeHandler}
                >thumb_up_off_alt</span>
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
    );
}
    
export  {SingleVideoPage}