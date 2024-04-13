import React from "react";
import "./css/createpost.css";
import CrPost_Address from "./CreatePost_Components/CrPost_Address";
import CrPost_OverView from "./CreatePost_Components/CrPost_OverView";

const Createpost = () => {
  return (
    <div className="CreatePost-Container">
      <h1 className="CreatePost-Header">Đăng tin mới</h1>
      <div className="CreatePost-Content">
        <CrPost_Address />
        <CrPost_OverView />
      </div>
    </div>
  );
};

export default Createpost;
