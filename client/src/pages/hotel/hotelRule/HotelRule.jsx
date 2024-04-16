import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faChild } from "@fortawesome/free-solid-svg-icons";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import "./hotelrule.css";
const HotelRule = () => {
  return (
    <div className="hotel-rule">
      <h1 style={{ fontSize: "25px", paddingTop: "10px" }}>Quy tắc chung</h1>
      <h1 style={{ fontSize: "12px", fontWeight: "400" }}>
        nhận yêu cầu đặc biệt - gửi yêu cầu trong bước kế tiếp!
      </h1>
      <div className="rule-table">
        <div className="rule-content">
          <div className="rule-content-title">
            <FontAwesomeIcon icon={faRightToBracket} />
            <span>Nhận phòng</span>
          </div>
          <div className="rule-content-Content">
            <span>Từ 14:00 - 00:00</span>
          </div>
        </div>

        <div className="rule-content">
          <div className="rule-content-title">
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>Trả phòng</span>
          </div>
          <div className="rule-content-Content">
            <span>Từ 01:00 - 12:00</span>
          </div>
        </div>

        <div className="rule-content">
          <div className="rule-content-title">
            <FontAwesomeIcon icon={faInfo} />
            <span>Hủy đặt phòng/ Trả trước</span>
          </div>
          <div className="rule-content-Content">
            <span>
              Các chính sách hủy và thanh toán trước có khác biệt dựa trên loại
              chỗ nghỉ. Vui lòng nhập ngày tháng lưu trú và kiểm tra các điều
              kiện của phòng bạn chọn.
            </span>
          </div>
        </div>

        <div className="rule-content">
          <div className="rule-content-title">
            <FontAwesomeIcon icon={faChild} />
            <span>Trẻ em và giường</span>
          </div>
          <div className="rule-content-Content">
            <span style={{ fontWeight: "700" }}>Chính sách trẻ em</span>
            <span>
              Phù hợp cho tất cả trẻ em. Để xem thông tin giá và tình trạng
              phòng trống chính xác, vui lòng thêm số lượng và độ tuổi của trẻ
              em trong nhóm của bạn khi tìm kiếm.
            </span>
            <span style={{ fontWeight: "700" }}>
              Chính sách nôi (cũi) và giường phụ
            </span>
            <span>Chỗ nghỉ này không có nôi/cũi và giường phụ.</span>
          </div>
        </div>

        <div className="rule-content">
          <div className="rule-content-title">
            <FontAwesomeIcon icon={faPerson} />
            <span>giới hạn độ tuổi</span>
          </div>
          <div className="rule-content-Content">
            <span>Không có yêu cầu về độ tuổi khi nhận phòng</span>
          </div>
        </div>

        <div
          className="rule-content"
          style={{ borderBottom: "none", paddingBottom: "none" }}
        >
          <div className="rule-content-title">
            <FontAwesomeIcon icon={faPaw} />
            <span>Vật nuôi</span>
          </div>
          <div className="rule-content-Content">
            <span>Vật nuôi không được phép.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelRule;
