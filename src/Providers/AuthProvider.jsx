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
    const baseURL = "http://inv.xcode.com.bd/api/v1/inventory"
    const accountURL = "http://inv.xcode.com.bd/api/v1/account"
    const authInfo = {
        user,
        logOut,
        setUser,
        baseURL,
        accountURL
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}