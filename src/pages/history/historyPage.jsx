import { useState } from "react";
import { WatchLaterVideoCard } from "../../components/watchLaterVideoCard/watchLaterVideoCard"
import { useHistory } from "../../context/historyContext"
import { usePlayList } from "../../context/playlistContext";
import { Explore } from "../../components/explore/explore";

const HistoryPage = () => {
  const { historyState: { historyList } , historyDispatch} = useHistory();
  const clearHistoryHandler = () => {
    historyDispatch({type:"CLEAR_HISTORY"})
  }
    return (
      <>
        {historyList.length == 0 ? <Explore /> :
          <div>
              <button onClick={clearHistoryHandler} className="btn m2">Clear history </button>
          <div className="flex videos ">
          
            {historyList.map((video) => (
              <WatchLaterVideoCard video={video}
                video={video}
              
              />
            ))}
            </div>
          </div>}
        </>
    )
}

export {HistoryPage}