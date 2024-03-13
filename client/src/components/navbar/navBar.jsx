import { useState } from "react";
import "./navBar.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../pages/redux/apiRequest"


const Navbar = () => {
    
    const state = useSelector((useState) => useState.auth.login.currentUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const accessToken = state?.metadata.accessToken;
   
    
    const handleRegister = () => {
        navigate("/register")
    }

    const handleLogin = () => {
        navigate("/lg")
    }

    const handleLogout = () => {
        const user = {
            _id: state?.metadata.user._id,
            role: state?.metadata.user.role,
          };
        logOut(dispatch,accessToken,navigate);
    }

    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">MidmoonBooking</span>
               {state? (
                <>
                 <div className="navItems">
                    <button className="navButton">hi, {state.metadata.user.role}</button>
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