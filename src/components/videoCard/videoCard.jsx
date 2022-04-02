import "../styles/main.css";
import { useVideo } from "../../context/videoContext";
import { useWatchLater } from "../../context/watchLaterContext";
import { useState } from "react";

const VideoCard = (props) => {
  const [watchLaterClicked, setWatchLaterClicked] = useState(false);
  const videoData = props.video;
  const { videoList } = useVideo();
  const { watchLaterDispatch } = useWatchLater();
  
  const watchLaterHandler = () => {
    watchLaterClicked ? setWatchLaterClicked(false) : setWatchLaterClicked(true);
    watchLaterDispatch({
                 type: "ADD_VIDEO_TO_WATCH_LATER",
                 payload: videoData,
               })
             
  };
  
   return (
     <>
       <div className="card basic video-card">
         <div className="img-container">
           <img
             className="image-responsive video-card-image"
             src={`https://i.ytimg.com/vi/${videoData._id}/hq720.jpg`}
           />

           <span
             onClick={watchLaterHandler}
               
             className={(watchLaterClicked ? "material-icons watch-later watch-later-selected" : "material-icons watch-later")}
           >
             watch_later
           </span>
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
       </div>
     </>
   );
};

export { VideoCard };
