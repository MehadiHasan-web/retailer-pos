import { useContext } from "react";
import { LoadingContext } from "../Providers/LoadingContext";


const useLoading = () => {
    const {loading, setLoading } = useContext(LoadingContext);
    return {loading, setLoading };
}

export default useLoading;