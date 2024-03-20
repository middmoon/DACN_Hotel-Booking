import React from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'
const { useState } = require("react");

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleLG = () => {
    navigate("/lg")
}
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3030/v1/api/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Data sent successfully");
        navigate("/lg");
      } else {
        console.error("Failed to send data to the server");
        alert("tài khoản đã tồn tại")
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
    //                   Đăng Ký
    //                 </p>

    //                 <form
    //                   method="POST"
    //                   onSubmit={handleSubmit}
    //                   className="mx-1 mx-md-4"
    //                 >
              
    //                   {/* Email */}
    //                   <div className="d-flex flex-row align-items-center mb-4">
    //                     <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
    //                     <div className="form-outline flex-fill mb-0">
    //                       <input
    //                         onChange={handleChange}
    //                         name="email"
    //                         type="email"
    //                         id="form3Example3c"
    //                         className="form-control"
    //                         placeholder="Email"
    //                       />
    //                     </div>
    //                   </div>

    //                   {/* Mat Khau */}
    //                   <div className="d-flex flex-row align-items-center mb-4">
    //                     <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
    //                     <div className="form-outline flex-fill mb-0">
    //                       <input
    //                         onChange={handleChange}
    //                         name="password"
    //                         type="password"
    //                         id="form3Example4c"
    //                         className="form-control"
    //                         placeholder="Mật Khẩu"
    //                       />
    //                     </div>
    //                   </div>

    //                   <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
    //                     <button
    //                       type="submit"
    //                       className="btn btn-primary btn-lg"
    //                     >
    //                       Tạo Tài Khoản
    //                     </button>
    //                   </div>
    //                 </form>
    //               </div>

    //               <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
    //                 <img
    //                   src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
    //                   className="img-fluid"
    //                   alt="register"
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
    <div className="background2"></div>
    <div className="bg2">
        <div className="content2">
          <h2 className="logo"><FontAwesomeIcon icon={faCircleHalfStroke} /> MidMoonBooking</h2>
          <div className="text-sci">
            <h2>Welcome!! <br/><span>To our new Website</span></h2>
            <p>For more than 20 years MidMoonBooking.com has been making it easier for travellers everywhere to experience the world. We provide an unrivalled experience for your customers and a digital experience optimised to drive revenue.</p>
          </div>
        </div>
        <div className="logreg-box2">
          <div className="form-box login">
          <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          <div className="imput-box">
           
          <input
                            onChange={handleChange}
                            name="email"
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            placeholder="Email"
                          />


          <input
                            onChange={handleChange}
                            name="password"
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            placeholder="Mật Khẩu"
                          />
            <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                        >
                          Tạo Tài Khoản
                        </button>
                </div>        
          <div className="login-register">
            <p>Already have an account? <span onClick={handleLG} >Login</span></p>
          </div>
          </form>
          </div>
        </div>
    </div>
    </div>

  );
};

export default Register;
