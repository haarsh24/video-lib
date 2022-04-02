import "../styles/main.css";
import { useVideo } from "../../context/videoContext";

const VideoCard = (props) => {
  const videoData = props.video;
  console.log(videoData);
  const { videoList } = useVideo();
  console.log(videoList);
   return (
     <>
       <div className="card basic video-card">
         <div className="img-container">
           <img
             className="image-responsive video-card-image"
             src={`https://i.ytimg.com/vi/${videoData._id}/hq720.jpg`}
           />

           <span className="material-icons watch-later ">watch_later</span>
           <span className="timer">{videoData.views}</span>
         </div>
         <div className="video-card-info flex ">
           <figure className="m1">
             <img
               className="avatar avatar-round avatar-xs  avatar-image"
               src="https://picsum.photos/100"
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
