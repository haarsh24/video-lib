import axios from "axios";

const addVideoInLike = async (video, likeDispatch,token) => {
    try {
        const { data } = await axios.post("/api/user/likes", { video }, {
            headers: { authorization: token }
        })
        likeDispatch({ type: "ADD_LIKE", payload: data.likes })
        
    } catch (error) {
        console.log(error);
    }
}


const removeVideoFromLike = async (videoId, likeDispatch,token) => {
    try {
        const { data } = await axios.delete(`/api/user/likes/${videoId}`, {
            headers: { authorization: token }
        })
        likeDispatch({ type: "ADD_LIKE", payload: data.likes })
        
    } catch (error) {
        console.log(error);
    }
}
export { addVideoInLike, removeVideoFromLike }