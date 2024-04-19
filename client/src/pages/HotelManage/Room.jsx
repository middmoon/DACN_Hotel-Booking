import React from "react";
import "./css/room.css";
import { useState } from "react";

import InputForm from "./CreatePost_Components/InputForm";
const Room = () => {
  // đóng mở component
  const [open, setOpen] = useState(false);
  const handleOpen = (i) => {
    setOpen(true);
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
            <th className="border p-2">Mã phòng</th>
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
          <div
            className="CreateRoom-Content"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <InputForm label="Số phòng" />
            <InputForm label="Loại phòng(VIP/STD)" />
            <InputForm label="Giá tiền" />
            <InputForm label="Ngày bắt đầu" />
            <InputForm label="Ngày kết thúc" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Room;
