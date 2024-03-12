import { useState } from "react";
import "./navBar.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../pages/redux/apiRequest"
import { logOutSuccess } from "../../pages/redux/authSlice";
import { createAxios } from "../../pages/redux/createInstance";
const Navbar = () => {
    
    const user = useSelector((useState) => useState.auth.login.currentUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const accessToken = user?.accessToken;
    const id = user?._id;
    let axiosJWT = createAxios(user,dispatch,logOutSuccess);
    
    const handleRegister = () => {
        navigate("/register")
    }

    const handleLogin = () => {
        navigate("/lg")
    }

    const handleLogout = () => {
        logOut( dispatch,id,navigate,accessToken,axiosJWT);
    }

    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">MidmoonBooking</span>
               {user? (
                <>
                 <div className="navItems">
                    <button className="navButton">hi, {user.user_name}</button>
                    <button onClick={handleLogout} className="navButton">log out</button>
                </div>
                </>
               ) : (
               <>
                <div className="navItems">
                    <button onClick={handleRegister} className="navButton">Register</button>
                    <button onClick={handleLogin} className="navButton">login</button>
                </div>
               </>
               )}
            </div>
        </div>
    )
};

export default Navbar


// import { useState } from "react";
// import "./navBar.css";
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from "react-redux";
// import Cookies from 'universal-cookie';
// import jwt from 'jwt-decode';

// const Navbar = () => {
//     const cookies = new Cookies();
//     const navigate = useNavigate();
//     const userToken = useSelector((state) => state.auth.login.token);

//     // Decode the token if it exists
//     let decodedToken = null;
//     if (userToken) {
//         decodedToken = jwt(userToken);
//     }

//     const handleRegister = () => {
//         navigate("/register");
//     };

//     const handleLogin = () => {
//         navigate("/lg");
//     };

//     const handleLogout = () => {
//         // Clear the token from cookie
//         cookies.remove('token');
//         navigate("/");
//     };

//     return (
//         <div className="navbar">
//             <div className="navContainer">
//                 <span className="logo">MidmoonBooking</span>
//                 {userToken ? (
//                     <>
//                         <div className="navItems">
//                             <button className="navButton">hi, {decodedToken.user_name}</button>
//                             <button onClick={handleLogout} className="navButton">log out</button>
//                         </div>
//                     </>
//                 ) : (
//                         <>
//                             <div className="navItems">
//                                 <button onClick={handleRegister} className="navButton">Register</button>
//                                 <button onClick={handleLogin} className="navButton">login</button>
//                             </div>
//                         </>
//                     )}
//             </div>
//         </div>
//     )
// };

// export default Navbar;