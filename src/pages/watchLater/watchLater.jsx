import { useWatchLater } from "../../context/watchLaterContext";
import { WatchLaterVideoCard } from "../../components/watchLaterVideoCard/watchLaterVideoCard";
import { Explore } from "../../components/explore/explore";
const WatchLater = () => {
  const {
    watchLaterState: { watchLaterList },
  } = useWatchLater();
  console.log(watchLaterList);
  return (
    <>
      {watchLaterList == 0 ? <Explore /> :
        <div className="flex">
        
          <div className="flex videos">
            {watchLaterList.map((video) => (
              <WatchLaterVideoCard video={video} />
            ))}
          </div>
      
      </div>}
    </>
  );
};

export { WatchLater };
