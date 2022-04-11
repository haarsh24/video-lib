const watchLaterReducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        
        case "ADD_WATCH_LATER":
        return {
            ...state,
            watchLaterList: action.payload
        }
        default:
        return state;
    }
}

export {
    watchLaterReducer
};