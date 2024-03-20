import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../redux/apiRequest";
import { useDispatch } from "react-redux";
import "./login.css";
const Login = () => {
  const [option, setOpTion] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      option: option,
      password: password,
    };
    await loginUser(user, dispatch, navigate);
  };

  const handleRG = () => {
    navigate("/register")
}

  return (
     // <div className="vh-100" style={{ backgroundColor: "#eee" }}>
    //   <div className="container h-100">
    //     <div className="row d-flex justify-content-center align-items-center h-100">
    //       <div className="col-lg-12 col-xl-11">
    //         <div className="card text-black" style={{ borderRadius: "25px" }}>
    //           <div className="card-body p-md-5">
    //             <div className="row justify-content-center">
    //               <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
    //                 <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
    //                   Đăng Nhập
    //                 </p>

    //                 <form onSubmit={handleSubmit} className="mx-1 mx-md-4">
    //                   {/* Ten Dang Nhap */}
    //                   <div className="d-flex flex-row align-items-center mb-4">
    //                     <i className="fas fa-id-badge fa-lg me-3 fa-fw"></i>
    //                     <div className="form-outline flex-fill mb-0">
    //                       <input
    //                         name="option"
    //                         type="text"
    //                         id="form3Example3c"
    //                         className="form-control"
    //                         placeholder="Tên Đăng Nhập Hoac Email"
    //                         onChange={(e) => setOpTion(e.target.value)}
    //                       />
    //                     </div>
    //                   </div>

    //                   {/* Mat Khau */}
    //                   <div className="d-flex flex-row align-items-center mb-4">
    //                     <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
    //                     <div className="form-outline flex-fill mb-0">
    //                       <input
    //                         name="password"
    //                         type="password"
    //                         id="form3Example4c"
    //                         className="form-control"
    //                         placeholder="Mật Khẩu"
    //                         onChange={(e) => setPassword(e.target.value)}
    //                       />
    //                     </div>
    //                   </div>

    //                   <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
    //                     <button
    //                       type="submit"
    //                       className="btn btn-primary btn-lg"
    //                     >
    //                       Đăng Nhập
    //                     </button>
    //                   </div>
    //                 </form>
    //               </div>

    //               <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
    //                 <img
    //                   src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
    //                   className="img-fluid"
    //                   alt="login"
    //                 />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div>
    <div className="background"></div>
    <div className="bg">
        <div className="content">
          <h2 className="logo"><FontAwesomeIcon icon={faCircleHalfStroke} /> MidMoonBooking</h2>
          <div className="text-sci">
            <h2>Welcome!! <br/><span>To our new Website</span></h2>
            <p>For more than 20 years MidMoonBooking.com has been making it easier for travellers everywhere to experience the world. We provide an unrivalled experience for your customers and a digital experience optimised to drive revenue.</p>
          </div>
        </div>
        <div className="logreg-box">
          <div className="form-box login">
          <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="imput-box">
           
            <input
                            name="option"
                            type="text"
                            id="form3Example3c"
                            className="form-control"
                            placeholder="Tên Đăng Nhập Hoac Email"
                            onChange={(e) => setOpTion(e.target.value)}
                          />


            <input
                            name="password"
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            placeholder="Mật Khẩu"
                            onChange={(e) => setPassword(e.target.value)}
                          />
            <button
                          type="submit"
                          className="buton"
                        >
                          Đăng Nhập
                        </button>
          </div>

          <div className="login-register">
            <p>Don't have an account? <span onClick={handleRG} >Sign up</span></p>
          </div>
          </form>
          </div>
        </div>
    </div>
    </div>
  );
};

export default Login;


