import axios from "axios";
import { loginFailed, loginStart, loginSuccess } from "./authSlice";

const url = 'http://localhost:3030/v1/api/user/login';
const headers = {
    'Content-Type': 'application/json'
};

export const loginUser = async(user, dispatch, navigate) => {
    dispatch(loginStart())
    try {
        const r = await axios.post(url,user, headers)
        dispatch(loginSuccess(r.data))
        navigate("/")
    } catch (error) {
        dispatch(loginFailed())
    }
}