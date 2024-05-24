import "./featured.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faLightbulb,
  faCamera,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
const Featured = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleOpen1 = () => {
    setOpen1(true);
  };
  return (
    <div>
      {open && (
        <div className="Featured-popUp" onClick={() => setOpen(false)}>
          <div
            className="FeaturedWrapper"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="FeaturedWrapper-L">
              <img
                className="FeaturedWrapper-L-img"
                src="/IMG/Home/DalatMt.jpg"
                alt=""
              />
            </div>
            <div className="FeaturedWrapper-R">
              <div className="FeaturedWrapper-R-content">
                <h1>DaLat - VietNam</h1>
                <p>
                  Highlights in Dalat <FontAwesomeIcon icon={faLightbulb} />
                </p>
                <div className="FeaturedWrapper-R-highlight">
                  <span>
                    Dalat, also known as Da Lat, is a beautiful city located in
                    the Central Highlands of Vietnam. Known for its cool
                    climate, stunning landscapes, and colonial architecture,
                    Dalat offers a variety of attractions and activities for
                    visitors. Here are some highlights you should not miss when
                    visiting Dalat: <br></br>
                    <span style={{ fontWeight: "600" }}>
                      1. Xuan Huong Lake{" "}
                    </span>
                    <br></br> Xuan Huong Lake is a large, tranquil lake located
                    in the heart of Dalat. It's a popular spot for walking,
                    jogging, or simply relaxing. You can rent a paddleboat to
                    explore the lake or enjoy a coffee at one of the nearby
                    cafes.
                    <br></br>
                    <span style={{ fontWeight: "600" }}>
                      2. Crazy House (Hang Nga Guesthouse){" "}
                    </span>
                    <br></br> The Crazy House is an unconventional building
                    designed by Vietnamese architect Dang Viet Nga. Its
                    whimsical, maze-like structure is reminiscent of Gaudi's
                    architecture in Barcelona and is a must-see for its unique
                    and bizarre design.
                    <br></br>
                    <span style={{ fontWeight: "600" }}>
                      3. Dalat Flower Gardens
                    </span>
                    <br></br> Known as the "City of Eternal Spring," Dalat is
                    famous for its flowers. The Dalat Flower Gardens showcase a
                    wide variety of blooms, including orchids, roses, and
                    hydrangeas. It's a beautiful place to take a stroll and
                    enjoy the colorful displays.
                    <br></br>
                    <span style={{ fontWeight: "600" }}>
                      4. Datanla Waterfall
                    </span>
                    <br></br> Datanla Waterfall is one of the most accessible
                    waterfalls near Dalat. Visitors can take a thrilling ride on
                    the alpine coaster to reach the falls or opt for a more
                    traditional hike. The waterfall is surrounded by lush
                    greenery, making it a picturesque spot.
                  </span>
                </div>
                <div className="FeaturedWrapper-R-share">
                  <FontAwesomeIcon icon={faUsers} />
                  <FontAwesomeIcon icon={faCamera} />
                  <FontAwesomeIcon icon={faShop} />
                </div>
                <div className="siRatingd">
                  <button>9.0</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {open1 && (
        <div className="Featured-popUp" onClick={() => setOpen1(false)}>
          <div
            className="FeaturedWrapper"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="FeaturedWrapper-L">
              <img
                className="FeaturedWrapper-L-img"
                src="/IMG/Home/hochiminhmt.jpg"
                alt=""
              />
            </div>
            <div className="FeaturedWrapper-R">
              <div className="FeaturedWrapper-R-content">
                <h1>HoChiMinh-VietNam</h1>
                <p>
                  Highlights in HoChiMinh <FontAwesomeIcon icon={faLightbulb} />
                </p>
                <div className="FeaturedWrapper-R-highlight">
                  <span>
                    Dalat, also known as Da Lat, is a beautiful city located in
                    the Central Highlands of Vietnam. Known for its cool
                    climate, stunning landscapes, and colonial architecture,
                    Dalat offers a variety of attractions and activities for
                    visitors. Here are some highlights you should not miss when
                    visiting Dalat: <br></br>
                    <span style={{ fontWeight: "600" }}>
                      1. Xuan Huong Lake{" "}
                    </span>
                    <br></br> Xuan Huong Lake is a large, tranquil lake located
                    in the heart of Dalat. It's a popular spot for walking,
                    jogging, or simply relaxing. You can rent a paddleboat to
                    explore the lake or enjoy a coffee at one of the nearby
                    cafes.
                    <br></br>
                    <span style={{ fontWeight: "600" }}>
                      2. Crazy House (Hang Nga Guesthouse){" "}
                    </span>
                    <br></br> The Crazy House is an unconventional building
                    designed by Vietnamese architect Dang Viet Nga. Its
                    whimsical, maze-like structure is reminiscent of Gaudi's
                    architecture in Barcelona and is a must-see for its unique
                    and bizarre design.
                    <br></br>
                    <span style={{ fontWeight: "600" }}>
                      3. Dalat Flower Gardens
                    </span>
                    <br></br> Known as the "City of Eternal Spring," Dalat is
                    famous for its flowers. The Dalat Flower Gardens showcase a
                    wide variety of blooms, including orchids, roses, and
                    hydrangeas. It's a beautiful place to take a stroll and
                    enjoy the colorful displays.
                    <br></br>
                    <span style={{ fontWeight: "600" }}>
                      4. Datanla Waterfall
                    </span>
                    <br></br> Datanla Waterfall is one of the most accessible
                    waterfalls near Dalat. Visitors can take a thrilling ride on
                    the alpine coaster to reach the falls or opt for a more
                    traditional hike. The waterfall is surrounded by lush
                    greenery, making it a picturesque spot.
                  </span>
                </div>
                <div className="FeaturedWrapper-R-share">
                  <FontAwesomeIcon icon={faUsers} />
                  <FontAwesomeIcon icon={faCamera} />
                  <FontAwesomeIcon icon={faShop} />
                </div>
                <div className="siRatingd">
                  <button>9.0</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div>
        <div className="featured">
          <div className="featuredItem" onClick={handleOpen}>
            <img src="/IMG/Home/dalat.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Da Lat</h1>
            </div>
          </div>

          <div className="featuredItem" onClick={handleOpen1}>
            <img src="/IMG/Home/HoChiMinh.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>HoChiMinh City</h1>
            </div>
          </div>
        </div>

        <div className="featured2">
          <div className="featuredItem">
            <img src="/IMG/Home/Hanoi.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Ha Noi</h1>
            </div>
          </div>

          <div className="featuredItem">
            <img src="/IMG/Home/Danang.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Da nang</h1>
            </div>
          </div>
          <div className="featuredItem">
            <img src="/IMG/Home/Vungtau.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Vung tau</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
