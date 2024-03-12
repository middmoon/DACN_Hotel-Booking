import axios from "axios";
import { logOutFailed, logOutStart, logOutSuccess, loginFailed, loginStart, loginSuccess } from "./authSlice";

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



export const logOut = async(dispatch,id, navigate,accessToken,axiosJWT) => {
    dispatch(logOutStart())
    try{
        await axiosJWT.delete("http://localhost:3030/v1/api/user/logout",id,{
            headers:{token: `${accessToken}`}
        });
        dispatch(logOutSuccess());
        navigate("/");
    }catch(error){
        dispatch(logOutFailed());
    }
}


// export const logOut = async (accessToken, dispatch, navigate) => {
//     const logoutUrl = 'http://localhost:3030/v1/api/user/logout';
//     try {
//       await axios.post(logoutUrl, null, {
//         headers: {
//           token: `${accessToken}`
//         }
//       });
//       dispatch(logOutSuccess());
//     } catch (error) {
//      dispatch(logOutFailed());
//     }
//   };
  