import { useLike } from "../../context/likeContext";
import { LikedVideoCard } from "../../components/likedVideoCard/likedVideoCard";
import { Explore } from "../../components/explore/explore";

const LikedVideos = () => {
  const {likeState:{likeList} } = useLike();
  return (
  <>
      {likeList.length == 0 ? <Explore /> :
        <div>
     <div className="flex videos">
            {likeList.map((video) => (
              <LikedVideoCard video={video} />
            ))}
          </div>
      </div>}
      </>
  );
}

export {LikedVideos}