import axios from "axios"
import {useAuth} from "../../context/authContext"

const getPlaylistData = async (playListDispatch) => {
    const { authState: { token } } = useAuth();
    try {
        const { data } = await axios.get("/api/user/playlists", {
            headers: { authorization: token },
        })
        playListDispatch({ type: "ADD_PLAYLIST", payload: data.playlists })
    } catch (error) {
        console.log(error);
    }
}

const createPlayList = async (playListTitle, playListDispatch, token) => {
    console.log(token)
    try {
        const { data } = await axios.post("/api/user/playlists",
            { playlist: { title: playListTitle } },
            {
                headers: { authorization: token },
            }
        )
        playListDispatch({ type: "ADD_PLAYLIST", payload: data.playlists })
        
    } catch (error) {
        console.log(error)
    }

}

const deletePlaylist = async (playListDispatch, playlistId,token) => {
    try {
        const { data } = await axios.delete(`/api/user/playlists/${playlistId}`, {
            headers: { authorization: token },
        })
        playListDispatch({ type: "DELETE_PLAYLIST", payload: playlistId })
        
        return data.playlists;
    } catch (error) {
        console.log(error)
    }
}
export { createPlayList, getPlaylistData, deletePlaylist }