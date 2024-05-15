import React, { useState, useEffect } from "react";

function App() {
  const [rooms, setRooms] = useState([]); // Danh sách phòng từ API
  const [selectedRooms, setSelectedRooms] = useState([]); // Danh sách phòng đã chọn
  const [showRooms, setShowRooms] = useState(false); // State để hiển thị danh sách phòng

  // Gọi API lấy phòng
  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const response = await fetch("API_LAY_PHONG_URL");
      const data = await response.json();
      setRooms(data);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  // Xử lý khi chọn phòng
  const handleRoomSelect = async (room) => {
    try {
      const response = await fetch("API_GUI_THONG_TIN_PHONG_URL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ room }),
      });
      const data = await response.json();

      // Cập nhật danh sách phòng đã chọn
      setSelectedRooms((prevSelectedRooms) => [...prevSelectedRooms, data]);

      // Ẩn danh sách phòng sau khi chọn
      setShowRooms(false);
    } catch (error) {
      console.error("Error selecting room:", error);
    }
  };

  return (
    <div>
      <button onClick={() => setShowRooms(true)}>
        Hiển thị danh sách phòng
      </button>
      {showRooms && (
        <div>
          <h2>Danh sách phòng</h2>
          <ul>
            {rooms.map((room) => (
              <li key={room.id}>
                {room.name}{" "}
                <button onClick={() => handleRoomSelect(room)}>Chọn</button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <h2>Danh sách phòng đã chọn</h2>
        <ul>
          {selectedRooms.map((room, index) => (
            <li key={index}>{room.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
