import {
    createContext,
    useContext,
    useEffect,
    useReducer
} from "react";
import {
    videoReducer
} from "../reducer/videoReducer";

import {getVideosDataFromServer} from "../utilities/apiCalls/apiCalls";

const VideoContext = createContext();

const VideoProvider = ({
    children
}) => {
    const [videoState, videoDispatch] = useReducer(videoReducer, {videoList:[]})

    const {videoList}= videoState;
    console.log(videoState);
    useEffect(() => {
        (async () => {
            const data = await getVideosDataFromServer();
            videoDispatch({type:"ADD_VIDEOS", payload:data})
        })()
    }, [])

    return (
        < VideoContext.Provider value = {
            {
                videoList,
                videoDispatch
            }
        } >
            {
            children
            }
        </VideoContext.Provider>
    )
}

const useVideo = () => useContext(VideoContext);

export {
    VideoProvider,
    useVideo
};