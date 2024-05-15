import About from "../../components/about/About";
import Header from "../../components/header/Header";
import Navbars from "../../components/navbar/navBar";
import "./user.css";
import React from "react";

const User = () => {
  return (
    <div>
      <Navbars />

      <div className="OrderContainer">
        <h1 className="OrdTitle">Order</h1>
      </div>
    </div>
  );
};

export default User;
