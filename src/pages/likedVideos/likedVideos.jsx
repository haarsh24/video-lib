import { useLike } from "../../context/likeContext";
import { LikedVideoCard } from "../../components/likedVideoCard/likedVideoCard";

const LikedVideos = () => {
  const {likeState:{likeList} } = useLike();
  return (
    <div>
     <div className="flex videos">
            {likeList.map((video) => (
              <LikedVideoCard video={video} />
            ))}
          </div>
    </div>
  );
}

export {LikedVideos}