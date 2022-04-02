import { createContext,useContext,useReducer} from 'react';

const CreateAuth = createContext();

const AuthProvider =({children})=>{
    const [authState,authDispatch] = useReducer(authReducer,{
       
    });
    return(
        < CreateAuth.Provider value = {
            {
                authState,
                authDispatch
            }
        } >
            {children}
        </CreateAuth.Provider>
    )
}
const useAuth = () => useContext(CreateAuth);

export {AuthProvider,useAuth};