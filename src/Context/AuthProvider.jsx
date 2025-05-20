import { useState } from "react"
import { AuthContext } from "./AuthContext"
import { app } from "../Firebase/firebase.init";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(app); 

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)

    //Create User
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const authData = {
        user,
        setUser,
        createUser
    }

    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    )

}

export default AuthProvider;