import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useAuth = () => {
  const { setUser, user, logOut } = useContext(AuthContext);
  return { setUser, user, logOut };
};

export default useAuth;
