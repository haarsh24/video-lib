const isVideoInWatchLater = (videoId, watchLater) => {
    return watchLater.find(({
        _id
    }) => _id === videoId)
}
export {
    isVideoInWatchLater
}