import { createContext, useState } from "react"


export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [searchData, setSearchData] = useState('');

    const searchFun = (value) => {
        setSearchData(value)
    }


  console.log(user)
    const logOut = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }
    const baseURL = "https://inv.xcode.com.bd/api/v1/inventory"
    const accountURL = "https://inv.xcode.com.bd/api/v1/account"
    const authInfo = {
        user,
        logOut,
        setUser,
        baseURL,
        accountURL,
        searchFun,
        searchData
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}