import { createContext, useState } from "react"


export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [searchData, setSearchData] = useState('');
    const [loading, setLoading] = useState(true)
    const [lang, setLang] = useState(true);


    const changeLanguage = () => {
        if (lang) {
            setLang(false)
        } else (
            setLang(true)
        )
    }

    const searchFun = (value) => {
        setSearchData(value)
    }

    const logOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('is_admin')
        localStorage.removeItem('is_approver')
        localStorage.removeItem('is_manager')
        localStorage.removeItem('user_id')
        localStorage.removeItem('designation')
        // eslint-disable-next-line no-undef
        navigate('/login');
        setLoading(false)
    }
    const baseURL = "https://rpos.pythonanywhere.com/api/v1"
    // const baseURL = "https://demo-rpos.xcode.com.bd/api/v1"
    const accountURL = "https://inv.xcode.com.bd/api/v1/account"
    const authInfo = {
        user,
        logOut,
        setUser,
        baseURL,
        accountURL,
        searchFun,
        searchData,
        changeLanguage,
        lang,
        loading,
        setLoading

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}