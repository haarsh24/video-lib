const isVideoInArray = (videoId, arr) => {
    return arr.find(({
        _id
    }) => _id === videoId)
}
export {
    isVideoInArray
}