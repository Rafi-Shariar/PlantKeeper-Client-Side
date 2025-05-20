import { useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import { app } from "../Firebase/firebase.init";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const auth = getAuth(app); 

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    

    //Create User
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    //Maintaing User
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unSubscribe();

        }
    },[user])

    //Logout
    const logOutUser =()=>{
        return signOut(auth);
    }


    //Provider
    const authData = {
        user,
        setUser,
        createUser,
        logOutUser,
        loading
    }

    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    )

}

export default AuthProvider;