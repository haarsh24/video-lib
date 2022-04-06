import { VideoCard } from "../../components/videoCard/videoCard";
import { useVideo } from "../../context/videoContext";
import { Sidebar } from "../../components/sidebar/sidebar";
import { PlaylistModal } from "../../components/playlistModal/playlistModal";
import { useState } from "react";
import {usePlayList} from "../../context/playlistContext";

const HomePage = () => {
  const [currentClickedVideo, setCurrentClickedVideo] = useState(null);
  const { videoList } = useVideo();
  const {showModal,setShowModal} = usePlayList();
  console.log(videoList,showModal);
  return (
    <>
      {showModal && <PlaylistModal video={currentClickedVideo} />}
      <div className="flex">
        <div className="flex videos">
          {videoList.map((video) => (
            <VideoCard
              video={video}
              setCurrentClickedVideo={setCurrentClickedVideo}
              key={video._id}
              setShowModal={setShowModal}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export { HomePage };
