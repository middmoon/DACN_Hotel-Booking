import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/navBar";
import "./list.css";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state?.destination);
  const [code_destination, setCodeDestination] = useState(
    location.state?.code_destination
  );
  const [date, setDate] = useState(location.state?.date);
  const [options, setOptions] = useState(location.state?.options);
  const [room, setRoom] = useState(location.state?.options.room);
  const [startDate, setStartDate] = useState(location.state?.startDate);
  const [openDate, setOpenDate] = useState(false);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destanation</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label className="label-no-margin">Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {date &&
                  date.length > 0 &&
                  `${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}
              </span>

              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Quantity</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options && options.quantity}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options && options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
