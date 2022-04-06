const playListReducer = (state, { type, payload }) => {
    switch (type) {
        case "ADD_PLAYLIST":
            return { ...state, playlists: payload }
        case "ADD_VIDEO_TO_PLAYLIST":
            return {
                ...state, playlists: state.playlists.map((playlist) =>
                    playlist._id === payload.playlistId
                        ? { ...playlist, videos: [...playlist.videos, payload.video] } : playlist)
            }
        case "REMOVE_VIDEO_FROM_PLAYLIST":
            return {
                ...state, playlists: state.playlists.map((playlist) =>
                    playlist._id === payload.playlistId ? { ...playlist, videos: playlist.videos.filter((video) => video._id !== payload.videoId), } : playlist)
            }
        case "DELETE_PLAYLIST":
            return {
                ...state, playlists: state.playlists.filter(({ _id }) => _id !== payload)
            }
        default:
            return state;
    }
}

const playListTitleReducer = (state, { type, payload }) => {
    switch (type) {
        case "ADD_PLAYLIST_TITLE":
            return { ...state, allPlayListTitle: payload }
        case "NEW_PLAYLIST_TITLE":
            return { ...state, playListTitle: payload }
        default:
            return state;
    }
}
export { playListReducer, playListTitleReducer }