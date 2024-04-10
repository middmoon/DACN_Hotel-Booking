import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import List from "./pages/list/List";
import Login from "./pages/Access/login";
import Register from "./pages/Access/register";
import Admin from "./pages/Admin/admin";
import Hotels from "./pages/hotel/Hotel";
import HotelManage from "./pages/HotelManage/hotelManage";
import Registerhotels from "./pages/Access/registerHotels";
import AboutUs from "./components/aboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About-us" element={<AboutUs />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotels/:id" element={<Hotels />} />
          <Route path="/lg" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registerHotels" element={<Registerhotels />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/hotel-manage/*" element={<HotelManage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
