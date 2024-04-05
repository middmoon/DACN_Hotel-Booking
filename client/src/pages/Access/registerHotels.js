import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./registerHotels.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import {
  apiGetPublicDistrict,
  apiGetPublicProvince,
  apiGetPublicWard,
} from "../redux/apiRequest";
const { useState } = require("react");

const Registerhotels = () => {
  const navigate = useNavigate();

  // href
  const handleLG = () => {
    navigate("/lg");
  };

  // State

  const [stre, setStre] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [province, setProvince] = useState();
  const [district, setDistrict] = useState();
  const [ward, setWard] = useState();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const provinceResponse = await apiGetPublicProvince();
      setStre(provinceResponse.data.metadata.province);

      if (province) {
        const districtResponse = await apiGetPublicDistrict(province);
        setDistricts(districtResponse.data.metadata.district);
      }
    };

    fetchData();
  }, [province]);

  // DistrictAPI
  useEffect(() => {
    const fetchPublicDistrict = async () => {
      try {
        if (province) {
          const response = await apiGetPublicDistrict(province);
          setDistricts(response.data.metadata.district);
        } else {
          setDistricts([]); // Clear districts if province is not selected
        }
      } catch (error) {
        console.error("Error fetching districts:", error);
      }
    };

    fetchPublicDistrict();
  }, [province]);

  // DistrictWardAPI
  useEffect(() => {
    const fetchPublicDistrictWard = async () => {
      const response = await apiGetPublicWard(district);
      setWards(response.data.metadata.ward);
    };
    province && fetchPublicDistrictWard(district);
  }, [district]);

  // testLog
  console.log(province, district, ward);

  // submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3030/v1/api/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Data sent successfully");
        navigate("/lg");
      } else {
        console.error("Failed to send data to the server");
        alert("tài khoản đã tồn tại");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="background2"></div>
      <div className="bg2">
        <div className="content2">
          <h2 className="logo">
            <FontAwesomeIcon icon={faCircleHalfStroke} /> MidMoonBooking
          </h2>
          <div className="text-sci">
            <h2>
              Welcome!! <br />
              <span>To our new Website</span>
            </h2>
            <p>
              For more than 20 years MidMoonBooking.com has been making it
              easier for travellers everywhere to experience the world. We
              provide an unrivalled experience for your customers and a digital
              experience optimised to drive revenue.
            </p>
          </div>
        </div>
        <div className="logreg-box2">
          <div className="form-box login">
            <form onSubmit={handleSubmit}>
              <h2>Register</h2>
              <div className="imput-box">
                <input
                  onChange={handleChange}
                  name="email"
                  type="email"
                  id="form3Example3c"
                  className="form-control"
                  placeholder="Email"
                />

                <input
                  onChange={handleChange}
                  name="password"
                  type="password"
                  id="form3Example4c"
                  className="form-control"
                  placeholder="Mật Khẩu"
                />

                <select
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  className="form-control"
                >
                  <option value="">Chọn Thành Phố / Tỉnh</option>
                  {stre &&
                    stre.map((st) => (
                      <option value={st.code} key={st.code}>
                        {st.full_name}
                      </option>
                    ))}
                </select>

                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="form-control"
                >
                  <option value="">Chọn Thành Quận / Huyện</option>
                  {districts &&
                    districts.map((dst) => (
                      <option value={dst.code} key={dst.code}>
                        {dst.full_name}
                      </option>
                    ))}
                </select>

                <select
                  value={ward}
                  onChange={(e) => setWard(e.target.value)}
                  className="form-control"
                >
                  <option value="">Chọn Xã / Phường</option>
                  {wards &&
                    wards.map((wt) => (
                      <option value={wt.code} key={wt.code}>
                        {wt.full_name}
                      </option>
                    ))}
                </select>

                <input
                  onChange={handleChange}
                  name="password"
                  type="password"
                  id="form3Example4c"
                  className="form-control"
                  placeholder="Số Nhà"
                />

                <button type="submit" className="btn btn-primary btn-lg">
                  Tạo Tài Khoản
                </button>
              </div>
              <div className="login-register">
                <p>
                  Already have an account? <span onClick={handleLG}>Login</span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registerhotels;
