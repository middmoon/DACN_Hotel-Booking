import axios from "axios";
import { loginFailed, loginStart, loginSuccess } from "./authSlice";

const url = 'http://localhost:3030/v1/api/user/login';
const headers = {
    'Content-Type': 'application/json'
};

 function AuthRoute(role, navigate) {
    switch (role) {
        case "USER":
            navigate("/")        
            break;
        case "HOTEL_MANAGER":
            navigate("/hotel-manage")
            break;
        case "ADMIN":
            navigate("/admin")
            break;
        default:
            break;
    }
 }

export const loginUser = async(user, dispatch, navigate) => {
    dispatch(loginStart())
    try {
        const r = await axios.post(url,user, headers)
        dispatch(loginSuccess(r.data))
        AuthRoute(r.data.metadata.user.role, navigate);
    } catch (error) {
        dispatch(loginFailed())
    }
}