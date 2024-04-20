import React from "react";
import "./css/room.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import InputForm from "./CreatePost_Components/InputForm";
const Room = () => {
  // đóng mở component
  const [open, setOpen] = useState(false);
  const handleOpen = (i) => {
    setOpen(true);
  };

  //Lay data
  const [payLoad, SetpayLoad] = useState({
    roomNumber: "",
    roomType: "",
    price: 0,
    start: "",
    end: "",
    status: "",
    image: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3030/v2/api/test/post-method",
        payLoad,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Data sent successfully", payLoad);
      } else {
        console.error("Failed to send data to the server");
        alert("tài khoản đã tồn tại");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    SetpayLoad((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="p-7">
        <h1 className="CreatePost-Header">Quản lý phòng</h1>
      </div>

      <div className="btn-createRoom">
        <button className="btn-createRoom-Content" onClick={() => handleOpen()}>
          Tạo phòng
        </button>
      </div>

      <table className="w-full table-fixed">
        <thead style={{ textAlign: "center" }}>
          <tr className="py-2">
            <th className="border p-2">Số phòng</th>
            <th className="border p-2">Loại phòng</th>
            <th className="border p-2">Giá</th>
            <th className="border p-2">Ngày bắt đầu</th>
            <th className="border p-2">Ngày kết thúc</th>
            <th className="border p-2">Trạng thái</th>
            <th className="border p-2">Tổng tiền</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <th>S</th>
            <th>A</th>
            <th>Y</th>
          </tr> */}
        </tbody>
      </table>

      {open && (
        <div className="CreateRoom" onClick={() => setOpen(false)}>
          <form className="CreateRoom-Content" onSubmit={handleSubmit}>
            <div
              className="CreateRoom-Ct"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <label htmlFor="form3Example3c" style={{ fontWeight: "500" }}>
                Số phòng
              </label>
              <input
                onChange={handleChange}
                name="roomNumber"
                type="Type"
                id="form3Example4c"
                className="form-control"
              />

              <label htmlFor="form3Example3c" style={{ fontWeight: "500" }}>
                {"Loại phòng(STD/VIP)"}
              </label>
              <input
                onChange={handleChange}
                name="roomType"
                type="Type"
                id="form3Example4c"
                className="form-control"
              />

              <label htmlFor="form3Example3c" style={{ fontWeight: "500" }}>
                {"Giá tiền(VND)"}
              </label>
              <input
                onChange={handleChange}
                name="price"
                type="Type"
                id="form3Example4c"
                className="form-control"
              />

              <label htmlFor="form3Example3c" style={{ fontWeight: "500" }}>
                {"Ngày bắt đầu"}
              </label>
              <input
                onChange={handleChange}
                name="start"
                type="Type"
                id="form3Example4c"
                className="form-control"
              />

              <label htmlFor="form3Example3c" style={{ fontWeight: "500" }}>
                {"Ngày kết thúc"}
              </label>
              <input
                onChange={handleChange}
                name="end"
                type="Type"
                id="form3Example4c"
                className="form-control"
              />

              <label htmlFor="form3Example3c" style={{ fontWeight: "500" }}>
                {"Trạng thái"}
              </label>
              <input
                onChange={handleChange}
                name="status"
                type="Type"
                id="form3Example4c"
                className="form-control"
              />
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
                  <input hidden type="file" id="file" />
                </div>
              </div>
              <button type="submit" className="createRoom-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Room;
