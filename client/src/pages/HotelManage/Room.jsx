import React from "react";
import "./css/room.css";
const Room = () => {
  return (
    <div>
      <div className="p-7">
        <h1 className="CreatePost-Header">Quản lý phòng</h1>
      </div>

      <table className="w-full table-fixed">
        <thead style={{ textAlign: "center" }}>
          <tr className="py-2">
            <th className="border p-2">Mã phòng</th>
            <th className="border p-2">Tiêu đề</th>
            <th className="border p-2">Loại phòng</th>
            <th className="border p-2">Giá</th>
            <th className="border p-2">Ngày bắt đầu</th>
            <th className="border p-2">Ngày hết hạn</th>
            <th className="border p-2">Trạng thái</th>
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
    </div>
  );
};

export default Room;
