import Navbar from "../../components/navbar/navBar";
import Header from "../../components/header/Header";
import "./home.css";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/propertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/Mail.List";
import Footer from "../../components/footer/Footer";
import Slogan from "../../components/slogan/slogan";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../redux/authSlice";
const Home = () => {
  const user = useSelector((useState) => useState.auth.login.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let axiosJWT = axios.create();

  const refreshToken = async () => {
    try {
      const res = await axios.post("http://localhost:3030/v1/api/user/refesh", {
        withCredentials: true,
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  axiosJWT.interceptors.request.use(
    async (config) => {
      let date = new Date();
      const decodedToken = jwtDecode(user?.metadata.accessToken);
      if (decodedToken.exp < date.getTime() / 1000) {
        const data = await refreshToken();
        const refreshUser = {
          ...user,
          accessToken: data.accessToken,
        };
        dispatch(loginSuccess(refreshUser));
        config.headers["Authorization"] = data.accessToken;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <div>
          <h1 className="homeTitle">Trending destinations</h1>
          <p className="homeDecrip">
            Most popular choices for travellers from Vietnam
          </p>
        </div>
        <Featured />
        <div>
          <h1 className="homeTitle"> Booking made easy</h1>
        </div>
        <Slogan />
        <div>
          <h1 className="homeTitle">Explore Vietnam</h1>
          <p className="homeDecrip">
            These popular destinations have a lot to offer
          </p>
        </div>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
