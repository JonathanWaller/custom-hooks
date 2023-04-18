import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

// import { setPrevLocation, setViewLocation } from "../ducks/viewLocation";

const useCustomNavigation = () => {
    // let dispatch = useDispatch();
    let navigate = useNavigate();
    let location = useLocation();

    useEffect(() => {
        // dispatch(setViewLocation(location.pathname))
    }, [location.pathname, 
        // dispatch
    ])

    return (path: string) => {
        // dispatch(setPrevLocation(location.pathname))
        navigate(path)
    }
}

export default useCustomNavigation;