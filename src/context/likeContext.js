import { createContext, useContext, useReducer } from 'react';
import { likeReducer } from '../reducer/LikeReducer';

const LikeContext = createContext();

const LikeProvider = ({ children }) => {
    const [likeState, likeDispatch] = useReducer(likeReducer, {
        likeList: []
    })
    return (
        < LikeContext.Provider value = {
            {
                likeState,
                likeDispatch
            }
        } >
            {children}
        </LikeContext.Provider>
    )
}

const useLike = () => useContext(LikeContext);
export { LikeProvider, useLike };
