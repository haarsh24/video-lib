import axios from 'axios';

const addVideoInPlaylist = async (video, playlistId, playListDispatch,token) => {
    try {
        const data = await axios.post(`/api/user/playlists/${playlistId}`, {
            video
        }, {
            headers: { authorization: token }
        })
        playListDispatch({ type: "ADD_VIDEO_TO_PLAYLIST", payload: { video, playlistId } })
       
    } catch (error) {
      console.log(error);
    }
}

const removeVideoFromPlaylist = async (videoId, playListDispatch, playlistId,token) => {
    try {
        const data = await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {
            headers: { authorization: token }
        })
        playListDispatch({ type: "REMOVE_VIDEO_FROM_PLAYLIST", payload: { videoId, playlistId } })
        
    } catch (error) {
        console.log(error)
    }
}

export { addVideoInPlaylist, removeVideoFromPlaylist }