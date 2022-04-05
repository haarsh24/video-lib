import axios from "axios";


const getWatchLaterData = async (watchLaterDispatch) => {
    try {
        const {
            data
        } = await axios.get("/api/user/watchlater", {
            headers: {
                authorization: token
            }
        })
        watchLaterDispatch({
            type: "ADD_WATCHLATER",
            payload: data.watchlater
        })
    } catch (error) {
        console.log(error);
    }
}


const addVideoInWatchLater = async (video, watchLaterDispatch, token) => {
    try {
        const {
            data
        } = await axios.post("/api/user/watchlater", {
            video
        }, {
            headers: {
                authorization:  token
            }
        })
        watchLaterDispatch({
            type: "ADD_WATCH_LATER",
            payload: data.watchlater
        })
    } catch (error) {
        console.log(error);
    }
}


 
const removeVideoFromWatchLater = async (videoId, watchLaterDispatch, token) => {
    try {
        const {
            data
        } = await axios.delete(`/api/user/watchlater/${videoId}`, {
            headers: {
                authorization:  token
            }
        })
        watchLaterDispatch({
            type: "ADD_WATCH_LATER",
            payload: data.watchlater
        })
    } catch (error) {
        console.log(error);
    }
}
export {
    getWatchLaterData,
    addVideoInWatchLater,
    removeVideoFromWatchLater
}