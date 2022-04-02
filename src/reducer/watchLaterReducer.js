const watchLaterReducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case "ADD_VIDEO_TO_WATCH_LATER":
        return {
            ...state,
            watchLaterList: [...state.watchLaterList, action.payload]
        }
        case "REMOVE_VIDEO_FROM_WATCH_LATER":
        return {
            ...state,
            watchLaterList: state.watchLaterList.filter((video) => video.id !== action.payload.id)
        }
        default:
        return state;
    }
}

export {
    watchLaterReducer
};