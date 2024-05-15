import "./hotel.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/navBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/Mail.List";
import Footerr from "../../components/footer/Footer";
import React, { useState, useEffect } from "react";
import { faSquareParking } from "@fortawesome/free-solid-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import HotelRule from "./hotelRule/HotelRule";
import { useParams } from "react-router-dom";
import axios from "axios";
import { format, differenceInDays } from "date-fns";
import { useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
const Hotels = () => {
  const location = useLocation();
  const state = useSelector((useState) => useState.auth.login.currentUser);
  const accessToken = state?.metadata.accessToken;

  const [date, setDate] = useState(location.state.date);
  const [destination, setDestination] = useState(location.state.destination);
  const [options, setOptions] = useState(location.state.options);
  const { id } = useParams();
  const [hotel, setHotel] = useState([]);
  const [price, setPrice] = useState([]);
  const [selectedRoomPrice, setSelectedRoomPrice] = useState(0);
  //lay gia tien cua phong cap nhat len form data
  const handleRoomSelection = (selectedPrice) => {
    setSelectedRoomPrice(selectedPrice);
  };

  //lay du lieu order
  const sendFormDataToAPI = async () => {
    const startDate = date[0].startDate;
    const endDate = date[0].endDate;
    try {
      const numberOfDays = differenceInDays(endDate, startDate);
      const totalPrice = numberOfDays * selectedRoomPrice;

      const searchData = {
        id_hotel: hotel._id,
        start_day: format(startDate, "yyyy-MM-dd"),
        end_day: format(endDate, "yyyy-MM-dd"),
        total_price: totalPrice,
        total_room: options.room,
        total_person: options.quantity,
      };

      const headers = {
        "Content-Type": "application/json",
        Authorization: `${accessToken}`,
      };

      const response = await axios.post(
        "http://localhost:3030/v2/api/user/order/make-order",
        searchData,
        { headers }
      );

      console.log("Gui du lieu thanh cong:", response.data);
      alert("Đặt phòng thành công");
    } catch (error) {
      alert("Đăng nhập hoặc đăng ký trước khi đặt phòng");
      console.error("Error sending form data to API:", error);
    }
  };

  useEffect(() => {
    // Check if selectedRoomPrice is valid (not 0) before sending form data
    if (selectedRoomPrice !== 0) {
      sendFormDataToAPI();
    }
  }, [selectedRoomPrice]);

  //Lấy dữ liệu ks
  useEffect(() => {
    const fetchHotelDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3030/v2/api/hotel/detail/${id}`
        );
        setHotel(response.data.metadata.hotel);
        setPrice(response.data.metadata.avgPrice);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu khách sạn:", error);
      }
    };

    fetchHotelDetail(id);
  }, [id]);

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const hotelImages = hotel.HotelImages
    ? hotel.HotelImages.slice(0, 6).map((image) => ({
        src: image.image_url,
        _id: image._id,
      }))
    : [];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
  //js chuyen hinh qua lai
  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div className="a">
      <Navbar />
      <Header type="list" />
      {Object.keys(hotel).length > 0 && (
        <div className="hotelContainer" key={hotel._id}>
          {open && (
            <div className="slider" onClick={() => setOpen(false)}>
              <FontAwesomeIcon
                icon={faXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faLeftLong}
                className="arrow"
                onClick={(e) => {
                  e.stopPropagation();
                  handleMove("l");
                }}
              />
              <div className="sliderWrapper">
                <img
                  src={hotelImages[slideNumber].src}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faRightLong}
                className="arrow"
                onClick={(e) => {
                  e.stopPropagation();
                  handleMove("r");
                }}
              />
            </div>
          )}
          <div className="hotelWrapper">
            <button className="bookNow">Đặt ngay</button>
            <h1 className="hotelTitle">{hotel.hotel_name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{hotel.full_address}</span>
            </div>

            <div className="hotelImages">
              {hotelImages.map((photo, i) => (
                <div className="hotelImgWrapper" key={photo._id}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo.src}
                    alt=""
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">Stay in heart</h1>
                <p className="hotelDesc">
                  Lavender Central Hotel chào đón du khách với nước ép cam tươi
                  mát và nằm cách Cầu Thê Húc cũng như Hồ Hoàn Kiếm đẹp như
                  tranh vẽ chỉ 3 phút đi bộ. Khách sạn trang nhã này cung cấp
                  dịch vụ lễ tân 24 giờ và WiFi miễn phí ở tất cả các khu vực.
                  Tọa lạc ở trung tâm Khu Phố Cổ Hà Nội, chỗ nghỉ nằm trong bán
                  kính chỉ 5 phút lái xe từ các điểm tham quan đậm nét lịch sử
                  như Quảng trường Ba Đình và Lăng Chủ tịch Hồ Chí Minh. Sân bay
                  quốc tế Nội Bài cách đó 45 phút lái xe.
                  <br></br>
                  <br></br>
                  Pha trộn giữa lối trang trí truyền thống với tiện nghi hiện
                  đại, phòng nghỉ gắn máy điều hòa tại đây có TV truyền hình cáp
                  màn hình phẳng, khu vực ghế ngồi và ấm đun nước điện. Phòng
                  tắm riêng đi kèm đồ vệ sinh cá nhân miễn phí và máy sấy tóc.
                  Du khách có thể tham quan quanh khu vực một cách dễ dàng với
                  dịch vụ cho thuê xe đạp và xe hơi. Dịch vụ văn phòng và bàn
                  đặt tour nằm trong số các tiện nghi của chỗ nghỉ. Dịch vụ đưa
                  đón sân bay cũng được cung cấp với một khoản phụ phí để tạo
                  thuận tiện cho khách.
                </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Điểm nổi bật của chỗ nghỉ</h1>
                <span>
                  Địa điểm hàng đầu: Được khách gần đây đánh giá cao (8,9 điểm)
                </span>
                <span>Có bãi đậu xe riêng miễn phí ở khách sạn này</span>
                <button>Đặt ngay!</button>
              </div>
            </div>
            <div className="hotelUbility">
              <h1 style={{ fontSize: "15px" }}>
                Các tiện nghi được ưa chuộng nhất
              </h1>
              <div className="Ubility-content">
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faSquareParking}
                    style={{ color: "green" }}
                  />
                  <span style={{ fontWeight: "500", fontSize: "12px" }}>
                    Chỗ đỗ xe miễn phí
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FontAwesomeIcon icon={faWifi} style={{ color: "green" }} />
                  <span style={{ fontWeight: "500", fontSize: "12px" }}>
                    Wifi miễn phí
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="hotel-Available">
            <h1 style={{ fontSize: "25px", paddingTop: "10px" }}>Đặt phòng</h1>
            <div className="ht-table">
              <div className="table-Content-title">
                <span style={{ flex: "2" }}>Chi tiết phòng</span>
                <span style={{ flex: "2", textAlign: "center" }}>
                  Loại phòng
                </span>
                <span style={{ flex: "2", textAlign: "center" }}>Giá tiền</span>
                <span style={{ flex: "1" }}></span>
              </div>

              {price.map((price) => (
                <div key={price.type_name} className="table-Content">
                  <span style={{ flex: "2" }}>
                    {price.type_name === "VIP" && (
                      <>
                        <p style={{ color: "#0071c2", fontWeight: "500" }}>
                          Phòng Deluxe giường đôi có ban công
                        </p>
                        <p>một giường đôi cực lớn</p>
                      </>
                    )}
                    {price.type_name === "STD" && (
                      <>
                        <p style={{ color: "#0071c2", fontWeight: "500" }}>
                          Phòng Standard giường đôi
                        </p>
                        <p>một giường đôi</p>
                      </>
                    )}
                  </span>
                  {/* Room type */}
                  <span
                    style={{
                      flex: "2",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {price.type_name}
                  </span>
                  {/* Room price */}
                  <span
                    style={{
                      flex: "2",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {price.avg_price} VNĐ
                  </span>
                  {/* Button to select room */}
                  <span
                    style={{
                      flex: "1",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p
                      style={{
                        padding: "10px",
                        backgroundColor: "#0071c2",
                        color: "white",
                        borderRadius: "10px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleRoomSelection(price.avg_price)}
                    >
                      Đặt ngay
                    </p>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <HotelRule />

          <MailList />
          <Footerr />
        </div>
      )}
    </div>
  );
};

export default Hotels;
