import React from "react";
import "./css/profile.css";
import InputReadOnly from "./CreatePost_Components/InputReadOnly";
import InputForm from "./CreatePost_Components/InputForm";
import Button from "react-bootstrap/esm/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { apiUploadImages } from "../redux/apiRequest";

const Profile_ht = () => {
  const handleFiles = async (e) => {
    e.stopPropagation();
    const files = e.target.files;
    const images = new FormData();
    for (let i in files) {
      images.append("file", i);
      images.append("upload_preset", process.env.REACT_APP_UPLOAD_ASSETS_NAME);
      const response = await apiUploadImages(images);
      console.log(response);
    }
  };
  return (
    <div className="p-7 flex flex-col items-center">
      <h1 className="w-full text-start CreatePost-Header">
        Chỉnh sửa thông tin khách sạn
      </h1>
      <div className="w-3/5 flex  flex-col gap-3">
        <InputReadOnly label="Mã khách sạn" />
        <InputReadOnly label="Email" />
        <InputForm label="Tên hiển thị" />
        <InputForm label="Họ" />
        <InputForm label="Tên" />
        <InputForm label="Mật khẩu" />
        {/* Hinh anh */}
        <div style={{ paddingTop: "30px" }}>
          <h2 className="Address_title">Hình ảnh</h2>
          <small>Cập nhật hình ảnh</small>
          <div>
            <label
              style={{
                borderRadius: "5px",
                width: "100%",
                border: "dashed 2px",
                height: "300px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
              }}
              htmlFor="file"
            >
              <FontAwesomeIcon
                style={{ fontSize: "100px", color: "#003580" }}
                icon={faCamera}
              />
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#003580",
                }}
              >
                Thêm ảnh
              </span>
            </label>
            <input
              onChange={handleFiles}
              hidden
              type="file"
              id="file"
              multiple
            />
          </div>
        </div>
      </div>
      <button
        style={{
          backgroundColor: "#003580",
          color: "white",
          marginTop: "20px",
          padding: "10px 25px 10px 25px",
          borderRadius: "5px",
        }}
      >
        Cập nhật
      </button>
    </div>
  );
};

export default Profile_ht;
