import { VideoCard } from "../../components/videoCard/videoCard";
import { useVideo } from "../../context/videoContext"
import { Sidebar } from "../../components/sidebar/sidebar";

const HomePage = () => {
  const { videoList } = useVideo();
  console.log(videoList);
  return (
    <>
      <div className="flex">
        
        <div className="flex videos">
          {videoList.map((video) => (
            <VideoCard video={video} />
          ))}
        </div>
      </div>
    </>
  );
};

export { HomePage };
