import { useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import { app } from "../Firebase/firebase.init";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(app); 

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    

    //Create User
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    //Maintaing User
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        });
        return ()=>{
            unSubscribe();

        }
    },[user])

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