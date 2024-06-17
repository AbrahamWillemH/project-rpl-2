import { AuthContext } from "../context/AuthContext";
import { useContext } from 'react'

export const useAuthContext = () =>{
    const auth_context = useContext(AuthContext)
    if(!auth_context) {
        throw Error('useAuthContext must be used inside a AuthContextProvider')
    }

    return auth_context
}