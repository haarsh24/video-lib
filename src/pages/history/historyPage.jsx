import { useState } from "react";
import { WatchLaterVideoCard } from "../../components/watchLaterVideoCard/watchLaterVideoCard"
import { useHistory } from "../../context/historyContext"
import { usePlayList } from "../../context/playlistContext";
import { Explore } from "../../components/explore/explore";

const HistoryPage = () => {
    const { historyState: { historyList } } = useHistory();
    return (
      <>
        {historyList.length == 0 ? <Explore /> :
          <div className="flex videos ">
            {historyList.map((video) => (
              <WatchLaterVideoCard video={video}
                video={video}
              
              />
            ))}
          </div>}
        </>
    )
}

export {HistoryPage}