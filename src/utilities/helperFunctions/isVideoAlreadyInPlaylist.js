const isVideoAlreadyInPlaylist = (playlist, playlistTitleId, videoId) => {
    return playlist.find(({ _id }) => _id === playlistTitleId)?.videos.some(({ _id }) => _id === videoId)
}
export { isVideoAlreadyInPlaylist }