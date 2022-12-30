import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom"


import { useSelector, useDispatch } from "react-redux";
import { logout, checkToken } from '../redux/slices/authSlice'
import { toast } from "react-toastify";

const ProtectRoute = ({ children }) => {
    const dispatch = useDispatch()
    const location = useLocation()
    const { user, isTokenValid, isCheckingToken } = useSelector(state => state.auth)
    console.log('protect render')

    useEffect(() => {
        // Nếu không có user được lưu trong store thì không cần check token
        if (!user) return
        dispatch(checkToken())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    if (!user) {
        let url = `/login?redirectUrl=${location.pathname}`
        toast.info("You need login to use this feature")
        return <Navigate to={url} />
    }

    if (isCheckingToken) {
        if (isTokenValid) {
            return children
        }
        else {
            toast.info("Your athenticate is expired or not invalid, please try again!")
            dispatch(logout())
            return null
        }
    }



    return null
}


export default ProtectRoute