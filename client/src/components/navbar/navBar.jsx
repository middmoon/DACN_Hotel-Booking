import { useState } from "react";
import "./navBar.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../pages/redux/apiRequest";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Navbars = () => {
  const state = useSelector((useState) => useState.auth.login.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = state?.metadata.accessToken;

  const handleRegister = () => {
    navigate("/register");
  };

  const handleRegisterHT = () => {
    navigate("/registerHotels");
  };

  const handleLogin = () => {
    navigate("/lg");
  };

  const handleLogout = () => {
    const user = {
      _id: state?.metadata.user._id,
      role: state?.metadata.user.role,
    };
    logOut(dispatch, accessToken, navigate);
  };

  function getDisplayName(state) {
    if (!state?.metadata.userInfo.user_name) {
      return state?.metadata.userInfo.email.split("@")[0];
    }
    return state?.metadata.userInfo.user_name;
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">MidmoonBooking</span>
        {state ? (
          <>
            <div className="navItems">
              {/* <button className="navButton">hi, {getDisplayName(state)}</button>
              <button onClick={handleLogout} className="navButton">
                log out
              </button> */}
              <NavDropdown className="navButton" title={`Hi, ${getDisplayName(state)}`} id="basic-nav-dropdown">
              <div className="navbtItems">
              <NavDropdown.Item >Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleLogout} >
              log out
              </NavDropdown.Item>
              </div>
            </NavDropdown>
            </div>

            
          </>
        ) : (
          <>
            <div className="navItems">
            <button onClick={handleRegisterHT} className="navButton1">
            List your property
              </button>
              <button onClick={handleRegister} className="navButton2">
                Register
              </button>
              <button onClick={handleLogin} className="navButton2">
                login
              </button>
              
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbars;


