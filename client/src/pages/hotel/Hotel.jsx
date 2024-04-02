import "./hotel.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/navBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/Mail.List";
import Footerr from "../../components/footer/Footer";

const Hotels = () => {
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/499873746.jpg?k=1371aa53da917d471a0dc30c3a50354afed0d074a8198670a40d0b9d033f9254&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/521259718.jpg?k=02bb7f3f4a9f4a29a20b29aa7cf67d96a1141c25bdbe5f5e0f2cfa77401a9089&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/353019098.jpg?k=3beb07bc739e46674c68f2739c5abe970d07acb06e064a9ca3191fd3b3e0580a&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/357638688.jpg?k=31905867c855f7780710fa4fa1be6d7bbbe422b748180e7baa5356493a093a1a&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/353019105.jpg?k=0fccf1b3fb942f7b35de91745bcff66cebf53eaa623f948752bf9a4582104409&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/357642217.jpg?k=194ad42880d94b85857a2f54a524cc9adde1bb0fca768154d3dead1db83335cf&o=&hp=1",
    },
  ];

  return (
    <div className="a">
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Đặt ngay</button>
          <h1 className="hotelTitle">LENS HOTEL</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>36 To Hien Thanh, DaLat,VietNam</span>
          </div>

          <div className="hotelImages">
            {photos.map((photo) => (
              <div className="hotelImgWrapper">
                <img src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in heart of DaLat</h1>
              <p className="hotelDesc">
                Nằm ở Đà Lạt, cách Công viên Yersin 19 phút đi bộ, RAON Bazan
                Hotel - STAY 24H cung cấp chỗ nghỉ có khu vườn, chỗ đậu xe riêng
                miễn phí và phòng chờ chung. Khách sạn 3 sao này có dịch vụ
                phòng và dịch vụ tiền sảnh. Chỗ nghỉ cung cấp lễ tân 24/24, dịch
                vụ đưa đón sân bay, bếp chung và Wi-Fi miễn phí ở toàn bộ chỗ
                nghỉ.
                <br></br>
                <br></br>
                Tại khách sạn, tất cả các phòng có bàn làm việc, TV màn hình
                phẳng, phòng tắm riêng, ga trải giường và khăn tắm. Các căn đều
                có minibar.
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
        </div>
        <MailList />
        <Footerr />
      </div>
    </div>
  );
};

export default Hotels;
