import { AuthContext } from "./AuthContext"

const AuthProvider = ({children}) => {

    const user = {
        name : "testing context"
    }

    return (
        <AuthContext value={user}>
            {children}
        </AuthContext>
    )

}

export default AuthProvider;