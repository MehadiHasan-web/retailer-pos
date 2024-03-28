
import { Navigate, useLocation } from 'react-router-dom'


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token')
    const location = useLocation()

    if(!token){
        return <Navigate to="/login" state={{form : location}} replace></Navigate>
    }
    
    return children
    
}

export default PrivateRoute;