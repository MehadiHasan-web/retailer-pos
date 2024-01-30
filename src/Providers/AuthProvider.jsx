import { createContext, useState } from "react"


export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
  console.log(user)
    const logOut = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

    const authInfo = {
        user,
        logOut,
        setUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}