import React from "react";
import "./css/odered.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Ordered = () => {
  const state = useSelector((useState) => useState.auth.login.currentUser);
  const accessToken = state?.metadata.accessToken;
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState();
  const [selectedRooms, setSelectedRooms] = useState([]);
  const handleRoomSelection = (room) => {
    setSelectedRoom(room);
    setOpen(true);
    setOpen2(false);
    const isSelected = selectedRooms.some(
      (selectedRoom) => selectedRoom._id === room._id
    );

    if (isSelected) {
      // Nếu đã được chọn, loại bỏ khỏi danh sách
      const updatedRooms = selectedRooms.filter(
        (selectedRoom) => selectedRoom._id !== room._id
      );
      setSelectedRooms(updatedRooms);
    } else {
      // Nếu chưa được chọn, thêm vào danh sách
      setSelectedRooms([...selectedRooms, room]);
    }
  };

  const handleOpen = (i) => {
    setOpen(true);
  };
  const handleOpen2 = (i) => {
    setOpen2(true);
  };

  //Lay data phòng

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `${accessToken}`,
        };
        const response = await axios.get(
          "http://localhost:3030/v2/api/hotel-manage/room/available",
          { headers }
        );

        setRooms(response.data.metadata.foundRooms);
        console.log(setRooms);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu phòng:", error);
      }
    };

    fetchRooms();
  }, []);

  //lưu lại thông tin khi reload page
  const handleConfirmation = () => {
    localStorage.setItem("selectedRooms", JSON.stringify(selectedRooms));
  };

  // Tải thông tin từ Local Storage khi tải lại trang
  useEffect(() => {
    const storedSelectedRooms = localStorage.getItem("selectedRooms");
    if (storedSelectedRooms) {
      setSelectedRooms(JSON.parse(storedSelectedRooms));
    }
  }, []);

  // useEffect(() => {
  //   const fetchRooms = async () => {
  //     try {
  //       const headers = {
  //         "Content-Type": "application/json",
  //         Authorization: `${accessToken}`,
  //       };
  //       const response = await axios.get(
  //         "http://localhost:3030/v2/api/hotel-manage/room/",
  //         { headers }
  //       );

  //       setRooms(response.data.metadata);
  //       console.log(setRooms);
  //     } catch (error) {
  //       console.error("Lỗi khi lấy dữ liệu phòng:", error);
  //     }
  //   };

  //   fetchRooms();
  // }, []);

  return (
    <div>
      <div className="p-7">
        <h1 className="CreatePost-Header">Quản lí đơn</h1>
      </div>

      <table className="w-full table-fixed">
        <thead style={{ textAlign: "center" }}>
          <tr className="py-2">
            <th className="border p-2">ID</th>
            <th className="border p-2">Trạng thái</th>
            <th className="border p-2">Ngày bắt đầu</th>
            <th className="border p-2">Ngày kết thúc</th>
            <th className="border p-2">Tổng tiền</th>
            <th className="border p-2"></th>
          </tr>
        </thead>
        <tbody>
          {/* đoạn này sẽ lấy thông tin từ API */}
          <tr style={{ textAlign: "center", fontSize: "13px" }}>
            <th className="border p-2 font-normal">123</th>
            <th className="border p-2 font-normal">ordered</th>
            <th className="border p-2 font-normal">12/5/2024</th>
            <th className="border p-2 font-normal">16/5/2024</th>
            <th className="border p-2 font-normal">5000</th>
            <th className="border flex justify-center items-center gap-2 p-2 font-normal text-blue-700">
              <button
                className="border-b-2 border-blue-700"
                onClick={() => handleOpen()}
              >
                Chỉnh sửa
              </button>
            </th>
          </tr>
        </tbody>
      </table>

      {/* hiển thị khi nhấn chỉnh sửa  */}
      {open && (
        <div className="ordered_opt" onClick={() => setOpen(false)}>
          <div
            className="Create-Ord"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="ordered-detail">
              <h1 style={{ fontSize: "20px", paddingBottom: "10px" }}>
                Chi tiết đơn đặt
                <span style={{ fontSize: "12px", fontWeight: "400" }}>
                  {" "}
                  {"("}Chỉ xem{")"}
                </span>
                :
              </h1>
              <div style={{ display: "flex" }}>
                <div className="ordered-detail-L">
                  <p>ID:</p>
                  <p>Trạng thái:</p>
                  <p>Ngày bắt đầu:</p>
                  <p>Ngày kết thúc:</p>
                  <p>Tổng tiền:</p>
                </div>
                <div className="ordered-detail-R">
                  <p>123</p>
                  <p>Available</p>
                  <p>null</p>
                  <p>null</p>
                  <p>null</p>
                </div>
              </div>
            </div>
            <div className="addRoom-ord">
              <div className="addRoom-ord-content">
                <h1 style={{ fontSize: "20px", marginBottom: "0" }}>
                  Thêm phòng cho đơn đặt
                </h1>
                <FontAwesomeIcon
                  style={{ color: "green", cursor: "pointer" }}
                  icon={faPlus}
                  onClick={() => handleOpen2()}
                />
              </div>
              <div style={{ height: "400px" }}>
                {/* Hiển thị danh sách các phòng đã chọn */}
                <div style={{ paddingTop: "30px" }}>
                  {selectedRooms.map((selectedRoom) => (
                    <div>
                      <div
                        style={{ display: "flex", gap: "100px" }}
                        key={selectedRoom._id}
                      >
                        <p style={{ width: "200px" }}>
                          Số phòng: {selectedRoom.room_number}
                        </p>
                        <p style={{ width: "200px" }}>
                          Giá: {selectedRoom.price}
                        </p>
                        <p style={{ width: "200px" }}>
                          Loại phòng: {selectedRoom.type_name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <button
                style={{
                  padding: "10px",
                  backgroundColor: "green",
                  borderRadius: "5px",
                  color: "white",
                }}
                onClick={handleConfirmation()}
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}

      {/* hiển thị khi nhấn thêm phòng */}
      {open2 && (
        <div className="ordered_opt" onClick={() => setOpen2(false)}>
          <div
            className="Create-Ord2"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h1 style={{ fontSize: "20px", paddingBottom: "10px" }}>
              Chi tiết các phòng:{" "}
            </h1>
            <div className="room-box">
              <table className="w-full table-fixed">
                <thead style={{ textAlign: "center" }}>
                  <tr className="py-2">
                    <th className="border p-2">Số phòng</th>
                    <th className="border p-2">Giá</th>
                    <th className="border p-2">Loại phòng</th>
                    <th className="border p-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {/* api lấy tất cả các phòng */}
                  {Object.values(rooms).map((room) => (
                    <tr
                      key={room._id}
                      style={{ textAlign: "center", fontSize: "13px" }}
                    >
                      <th className="border p-2 font-normal">
                        {room.room_number}
                      </th>
                      <th className="border p-2 font-normal">{room.price}</th>
                      <th className="border p-2 font-normal">
                        {room.type_name}
                      </th>

                      <th className="flex justify-center items-center gap-2 p-2 font-normal text-blue-700">
                        <button
                          className="border-b-2 border-blue-700"
                          onClick={() => handleRoomSelection(room)}
                        >
                          chọn
                        </button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ordered;
