import "./searchItem.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const SearchItem = () => {
  const navigate = useNavigate();
  const handleSearch = (hotelId) => {
    navigate(`/hotels/${hotelId}`, {
      state: { destination, date, options, code_destination },
    });
  };
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [code_destination, setCodeDestination] = useState(
    location.state.code_destination
  );
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [room, setRoom] = useState(location.state.options.room);

  const [openDate, setOpenDate] = useState(false);
  const [hotel, setHotel] = useState([]);

  //laydata
  useEffect(() => {
    const fetchSearch = async (code_destination, room) => {
      try {
        const response = await axios.get(
          `http://localhost:3030/v2/api/hotel?code=${code_destination}&num_of_room=${room}`
        );

        setHotel(response.data.metadata.hotel);
        console.log(hotel);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu phòng:", error);
      }
    };

    fetchSearch(code_destination, room);
  }, [code_destination, room]);

  return (
    <div>
      {Array.isArray(hotel) &&
        hotel.map((item) => (
          <div className="searchItem" key={item._id}>
            <img
              src={item.HotelImages[0]?.image_url}
              alt=""
              className="siImg"
            />
            <div className="siDesc">
              <h1 className="siTitle" onClick={() => handleSearch(item._id)}>
                {item.hotel_name}
              </h1>
              <span className="siDistrict">
                {item.Ward.District.Province.full_name}
              </span>
              <span className="siDistance">0,6km from center</span>
              <span className="siSubtitle">
                Tìm kiếm khách sạn ở Hà Nội? Hãy xem Oriental Central Hotel,
                khách sạn dành cho gia đình, lưu trú tại đây sẽ giúp bạn khám
                phá Hà Nội một cách dễ dàng. Bạn sẽ tận hưởng căn phòng với tv
                màn hình phẳng, điều hòa nhiệt độ và tủ lạnh, và bạn chắc chắn
                sẽ được kết nối internet trong thời gian này bởi Oriental
                Central Hotel cung cấp cho du khách wifi miễn phí. Khách sạn còn
                cung cấp bàn lễ tân 24 giờ, dịch vụ phòng và nhân viên hỗ trợ
                khách. Hơn nữa, Oriental Central Hotel với bữa sáng, mang lại
                những giây phút thư giãn trốn khỏi một ngày bận rộn. Với khách
                có xe cộ bãi đỗ xe công cộng có trả phí gần đó có sẵn.
              </span>
            </div>
            <div className="siDetails">
              <div className="siRating">
                <span>Excellent</span>
                <button>9.0</button>
              </div>
              <div className="siDetailTexts">
                <button
                  className="siCheckButton"
                  onClick={() => handleSearch(item._id)}
                >
                  See availabitity
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SearchItem;
