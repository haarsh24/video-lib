import {
    createContext,
    useContext,
    useReducer
} from 'react';
import {
    authReducer
} from "../reducer/authReducer";

const CreateAuth = createContext();

const AuthProvider = ({
    children
}) => {
    const [authState, authDispatch] = useReducer(authReducer, {
        isLogin: false,
        token: "",
        userData: ""

    });
    return (
        <CreateAuth.Provider value = {
            {
                authState,
                authDispatch
            }
        } > {
            children
            }
            </CreateAuth.Provider>
    )
}
const useAuth = () => useContext(CreateAuth);

export {
    AuthProvider,
    useAuth
};