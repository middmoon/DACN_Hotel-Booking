import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import "./user.css";
import React from "react";
import axios from "axios";
import Navbars from "../../components/navbar/navBar";
const User = () => {
  const state = useSelector((useState) => useState.auth.login.currentUser);
  const accessToken = state?.metadata.accessToken;
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [selectedRoom] = useState(null);
  const [orders, SetOrders] = useState([]);
  const [orderIds, setOrderIds] = useState([]);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [orderDetails, setOrderDetails] = useState(null);
  const [selectedOrderId2, setSelectedOrderId2] = useState(null);
  //lay du lieu order

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `${accessToken}`,
        };
        const response = await axios.get(
          "http://localhost:3030/v2/api/user/order",
          { headers }
        );

        SetOrders(response.data.metadata.foundListOrder);
        console.log(orders);
        const ids = response.data.metadata.foundListOrder.map(
          (order) => order._id
        );
        setOrderIds(ids);
        console.log(orderIds);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu phòng:", error);
      }
    };

    fetchOrders();
  }, []);

  // lay order details
  useEffect(() => {
    if (selectedOrderId !== null) {
      const fetchOrderDetails = async () => {
        try {
          const headers = {
            "Content-Type": "application/json",
            Authorization: `${accessToken}`,
          };
          const response = await axios.get(
            `http://localhost:3030/v2/api/user/order/detail/${selectedOrderId}`,
            { headers }
          );

          setOrderDetails(response.data.metadata.foundOrder);
          console.log(orderDetails);
        } catch (error) {
          console.error("Lỗi khi lấy chi tiết đơn hàng:", error);
        }
      };

      fetchOrderDetails();
    }
  }, [selectedOrderId]);

  const handleOrderClick = (orderId) => {
    setSelectedOrderId(orderId);
    setOpen(true);
  };

  //màu chữ
  const getStatusColor = (status) => {
    switch (status) {
      case "ON_ORDER":
        return "text-blue-500"; // blue text color
      case "PRE_ORDER":
        return "text-green-500"; // green text color
      case "CANCEL":
        return "text-red-500"; // red text color
      default:
        return ""; // default text color
    }
  };

  return (
    <div>
      <Navbars />
      <div className="OrderContainer">
        <div className="homeDecrip">
          <div className="p-7 ">
            <h1 className="OrdTitle">Quản lí đơn</h1>
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
              {orders.length > 0 &&
                orders.map((order) => {
                  //CHuyen ngay
                  const startDate = new Date(order.start_day);
                  const endDate = new Date(order.end_day);
                  const formatDate = (date) => {
                    const day = date.getDate();
                    const month = date.getMonth() + 1;
                    const year = date.getFullYear();
                    return `${day}/${month}/${year}`;
                  };
                  //tinh so ngay thue và tính tiền

                  return (
                    <tr
                      style={{ textAlign: "center", fontSize: "13px" }}
                      key={order._id}
                    >
                      <th className="border p-2 font-normal">{order._id}</th>
                      <th
                        className={`border p-2 font-normal font-semibold ${getStatusColor(
                          order.status
                        )}`}
                      >
                        {order.status}
                      </th>

                      <th className="border p-2 font-normal">
                        {formatDate(startDate)}
                      </th>
                      <th className="border p-2 font-normal">
                        {formatDate(endDate)}
                      </th>
                      <th className="border p-2 font-normal">
                        {order.total_price} VNĐ
                      </th>
                      <th className="border p-2 font-normal text-blue-700">
                        <div className="flex justify-center items-center gap-2">
                          <button
                            className="border-b-2 border-blue-700"
                            onClick={() => handleOrderClick(order._id)}
                          >
                            Chỉnh sửa
                          </button>
                        </div>
                      </th>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        {/* hiển thị khi nhấn chỉnh sửa  */}
        {open && orderDetails && (
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
                    <p>{orderDetails._id}</p>
                    <p
                      className={`font-semibold ${getStatusColor(
                        orderDetails.status
                      )}`}
                    >
                      {orderDetails.status}
                    </p>
                    <p>
                      {new Date(orderDetails.start_day).toLocaleDateString()}
                    </p>
                    <p>{new Date(orderDetails.end_day).toLocaleDateString()}</p>
                    <p>{orderDetails.total_price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        s
      </div>
    </div>
  );
};

export default User;
