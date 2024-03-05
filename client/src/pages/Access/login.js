import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../redux/apiRequest";
import { useDispatch } from "react-redux";
const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      username: username,
      password: password,
    };
    loginUser(newUser,dispatch,navigate);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Đăng Nhập</p>

                    <form onSubmit={handleSubmit} className="mx-1 mx-md-4">
                      {/* Ten Dang Nhap */}
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-id-badge fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input 
                          name="tendangnhap" 
                          type="text" 
                          id="form3Example3c" 
                          className="form-control" 
                          placeholder="Tên Đăng Nhập" 
                          onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                      </div>

                      {/* Mat Khau */}
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input 
                          name="matkhau" 
                          type="password" 
                          id="form3Example4c" 
                          className="form-control" 
                          placeholder="Mật Khẩu" 
                          onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className="btn btn-primary btn-lg">
                          Đăng Nhập
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="login"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
