import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import axios from "axios";
const Header = ({ type }) => {
  const state = useSelector((useState) => useState.auth.login.currentUser);
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/lg");
  };

  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [destination, setDestination] = useState("");
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  // search item
  const handleSearch = async () => {
    const startDate = format(date[0].startDate, "MM/dd/yyyy");
    const endDate = format(date[0].endDate, "MM/dd/yyyy");
    const searchData = {
      destination: destination,
      daystart: startDate,
      dayend: endDate,
      options: options,
    };
    console.log("Search Data:", searchData);
    try {
      const response = await axios.post(
        "http://localhost:3030/v2/api/test/post-method",
        searchData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Data sent successfully", searchData);
        navigate("/hotels", { state: { destination, date, options } }); // Điều hướng và truyền dữ liệu
      } else {
        console.error("Failed to send data to the server");
        alert("tài khoản đã tồn tại");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      {state ? (
        <>
          <div className="header2">
            <div
              className={
                type === "list" ? "headerContainer listMode" : "headerContainer"
              }
            >
              {type !== "list" && (
                <>
                  {" "}
                  <h1 className="headerTitle">Welcome</h1>
                  <p className="headerDesc">
                    Search low prices on hotels, homes and much more...
                  </p>
                  <div className="pd"></div>
                  <div className="headerSearch">
                    <div className="headerSearchItem">
                      <FontAwesomeIcon icon={faBed} className="headerIcon" />
                      <input
                        type="text"
                        placeholder="Where are you going?"
                        className="headerSearchInput"
                        onChange={(e) => setDestination(e.target.value)}
                      />
                    </div>

                    <div className="headerSearchItem">
                      <FontAwesomeIcon
                        icon={faCalendarDays}
                        className="headerIcon"
                      />
                      <span
                        onClick={() => setOpenDate(!openDate)}
                        className="headerSearchText"
                      >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                        date[0].endDate,
                        "MM/dd/yyyy"
                      )}`}</span>
                      {openDate && (
                        <DateRange
                          editableDateInputs={true}
                          onChange={(item) => setDate([item.selection])}
                          moveRangeOnFirstSelection={false}
                          ranges={date}
                          className="date"
                          minDate={new Date()}
                        />
                      )}
                    </div>

                    <div className="headerSearchItem">
                      <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                      <span
                        onClick={() => setOpenOptions(!openOptions)}
                        className="headerSearchText"
                      >{`${options.adult} adult - ${options.children} children - ${options.room} room`}</span>
                      {openOptions && (
                        <div className="options">
                          <div className="optionsItem">
                            <span className="optionText">Adult</span>
                            <div className="OptionCounter">
                              <button
                                disabled={options.adult <= 1}
                                className="optionCounterButton"
                                onClick={() => handleOption("adult", "d")}
                              >
                                -
                              </button>
                              <span className="optionCounterNumber">
                                {options.adult}
                              </span>
                              <button
                                className="optionCounterButton"
                                onClick={() => handleOption("adult", "i")}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="optionsItem">
                            <span className="optionText">Children</span>
                            <div className="OptionCounter">
                              <button
                                disabled={options.children <= 0}
                                className="optionCounterButton"
                                onClick={() => handleOption("children", "d")}
                              >
                                -
                              </button>
                              <span className="optionCounterNumber">
                                {options.children}
                              </span>
                              <button
                                className="optionCounterButton"
                                onClick={() => handleOption("children", "i")}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="optionsItem">
                            <span className="optionText">Room</span>
                            <div className="OptionCounter">
                              <button
                                disabled={options.room <= 1}
                                className="optionCounterButton"
                                onClick={() => handleOption("room", "d")}
                              >
                                -
                              </button>
                              <span className="optionCounterNumber">
                                {options.room}
                              </span>
                              <button
                                className="optionCounterButton"
                                onClick={() => handleOption("room", "i")}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="headerSearchItem">
                      <button className="headerBtn" onClick={handleSearch}>
                        Search
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="header">
            <div
              className={
                type === "list" ? "headerContainer listMode" : "headerContainer"
              }
            >
              {type !== "list" && (
                <>
                  <h1 className="headerTitle">Find your next stay</h1>
                  <p className="headerDesc">
                    Search low prices on hotels, homes and much more...
                  </p>
                  <button onClick={handleLogin} className="headerBtn">
                    Sign in / Register
                  </button>

                  <div className="headerSearch">
                    <div className="headerSearchItem">
                      <FontAwesomeIcon icon={faBed} className="headerIcon" />
                      <input
                        type="text"
                        placeholder="Where are you going?"
                        className="headerSearchInput"
                        onChange={(e) => setDestination(e.target.value)}
                      />
                    </div>

                    <div className="headerSearchItem">
                      <FontAwesomeIcon
                        icon={faCalendarDays}
                        className="headerIcon"
                      />
                      <span
                        onClick={() => setOpenDate(!openDate)}
                        className="headerSearchText"
                      >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                        date[0].endDate,
                        "MM/dd/yyyy"
                      )}`}</span>
                      {openDate && (
                        <DateRange
                          editableDateInputs={true}
                          onChange={(item) => setDate([item.selection])}
                          moveRangeOnFirstSelection={false}
                          ranges={date}
                          className="date"
                          minDate={new Date()}
                        />
                      )}
                    </div>

                    <div className="headerSearchItem">
                      <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                      <span
                        onClick={() => setOpenOptions(!openOptions)}
                        className="headerSearchText"
                      >{`${options.adult} adult - ${options.children} children - ${options.room} room`}</span>
                      {openOptions && (
                        <div className="options">
                          <div className="optionsItem">
                            <span className="optionText">Adult</span>
                            <div className="OptionCounter">
                              <button
                                disabled={options.adult <= 1}
                                className="optionCounterButton"
                                onClick={() => handleOption("adult", "d")}
                              >
                                -
                              </button>
                              <span className="optionCounterNumber">
                                {options.adult}
                              </span>
                              <button
                                className="optionCounterButton"
                                onClick={() => handleOption("adult", "i")}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="optionsItem">
                            <span className="optionText">Children</span>
                            <div className="OptionCounter">
                              <button
                                disabled={options.children <= 0}
                                className="optionCounterButton"
                                onClick={() => handleOption("children", "d")}
                              >
                                -
                              </button>
                              <span className="optionCounterNumber">
                                {options.children}
                              </span>
                              <button
                                className="optionCounterButton"
                                onClick={() => handleOption("children", "i")}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="optionsItem">
                            <span className="optionText">Room</span>
                            <div className="OptionCounter">
                              <button
                                disabled={options.room <= 1}
                                className="optionCounterButton"
                                onClick={() => handleOption("room", "d")}
                              >
                                -
                              </button>
                              <span className="optionCounterNumber">
                                {options.room}
                              </span>
                              <button
                                className="optionCounterButton"
                                onClick={() => handleOption("room", "i")}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="headerSearchItem">
                      <button className="headerBtn" onClick={handleSearch}>
                        Search
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
