import axios from "axios";

const addVideoInHistory = async (video, playListDispatch, token) => {
    try {
        const { data } = await axios.post("/api/user/history", { video }, {
            headers: { authorization: token }
        })
        playListDispatch({ type: "ADD_HISTORY", payload: data.history })
    } catch (error) {
        console.log(error);
    }
}

export { addVideoInHistory };
