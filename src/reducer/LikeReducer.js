const likeReducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        
        case "ADD_LIKE":
        return {
            ...state,
            likeList: action.payload
        }
        default:
        return state;
    }
}

export {
    likeReducer
};