import {useWatchLater} from "../../context/watchLaterContext"

const WatchLaterVideoCard = (props) => {
    
    console.log(props)
    const videoData = props.video;
    const { watchLaterDispatch } = useWatchLater();
    
  
    return (
      <>
        <div className="card basic video-card">
          <div className="img-container">
            <img
              className="image-responsive video-card-image"
              src={`https://i.ytimg.com/vi/${videoData._id}/hq720.jpg`}
            />

            <span
              onClick={() =>
                watchLaterDispatch({
                  type: "REMOVE_VIDEO_FROM_WATCH_LATER",
                  payload: videoData,
                })
              }
              className="material-icons watch-later watch-later-selected"
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
}

export {WatchLaterVideoCard}