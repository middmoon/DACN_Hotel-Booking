import React from "react";
import "./css/dashboard.css";
import DashboardList from "./DashboardList";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="Dashboard-Container">
      <div className="Dashboard-content-left">
        {/* list */}
        <div className="Db-title">
          <h1>statistical</h1>
        </div>
        <div className="db-List">
          {DashboardList.map((item) => {
            return (
              <div className="dashBoard-list" key={item.id}>
                <div className="dashBoard-list-item">
                  <div className="Dli-u">
                    <span className="Dli-Title">{item.text}</span>
                    <span className="Dli-time">Yearly</span>
                  </div>
                  <div className="Dli-d">
                    <h1 className="DliAmount">{item.amount}</h1>
                    <div className="style-rate">
                      <div className="rate">
                        <div className="icon">{item.icon}</div>
                        <span>{item.rate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* main */}
        <div className="Db-title">
          <h1>Main street resort</h1>
        </div>
        <div className="bd-main"></div>
      </div>
      <div className="Dashboard-content-right">
        <div className="Db-title">
          <h1>Upcoming Visitors</h1>
        </div>
        <div className="Db-container">
          <div className="Db-visitor">
            <div className="Visitor">
              img
              <div className="Visitor-n">
                <span className="Visitor-Name">Tran Phuong Thai</span>
                <span className="Upcoming-date">5/5/2024</span>
              </div>
            </div>
            <div className="Vst-Detail">
              <Link className="Vst-Detail-L">Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
