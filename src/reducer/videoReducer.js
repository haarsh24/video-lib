const videoReducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case "ADD_VIDEOS":
            return {   ...state, videoList: action.payload}
        default:
            state;
    }
    
    
}

export {videoReducer}