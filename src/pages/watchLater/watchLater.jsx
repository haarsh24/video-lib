import { useWatchLater } from "../../context/watchLaterContext";
import { WatchLaterVideoCard } from "../../components/watchLaterVideoCard/watchLaterVideoCard";
const WatchLater = () => {
  const {
    watchLaterState: { watchLaterList },
  } = useWatchLater();
  console.log(watchLaterList);
  return (
    <>
      <div className="flex">
        {watchLaterList.length === 0 ? (
          <h1 className="heading "> </h1>
        ) : (
          <div className="flex videos">
            {watchLaterList.map((video) => (
              <WatchLaterVideoCard video={video} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export { WatchLater };
