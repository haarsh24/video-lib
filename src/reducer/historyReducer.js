const historyReducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        
        case "ADD_HISTORY":
        return {
            ...state,
            historyList: action.payload
        }
        default:
        return state;
    }
}

export {
    historyReducer
};