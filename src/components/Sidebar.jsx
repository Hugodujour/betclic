import React from "react";
import "../assets/styles/Sidebar.css";
import icon from "../assets/images/foot.png";

function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <div>
          <input
            className="form-control pad"
            placeholder="Que recherches-tu ?"
            type="text"
          />
        </div>
        <div className="sidebar-content">
          <h3>Top des compétitions</h3>
          <div className="card-list mb-4">
            <ul>
              {[...Array(6)].map((_, index) => (
                <li key={index}>
                  <img src={icon} alt="icon" />
                  Top Football Européen
                </li>
              ))}
            </ul>
          </div>
          <h3>Sports</h3>
          <div className="card-list mb-4">
            <ul>
              {[...Array(12)].map((_, index) => (
                <li key={index}>
                  <img src={icon} alt="icon" />
                  Top Football Européen
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
