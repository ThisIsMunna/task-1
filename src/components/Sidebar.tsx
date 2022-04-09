import React from "react";
import "./Sidebar.css";
import profileIcon from "../images/profile-icon.jpg";
import cameraIcon from "../images/camera-icon.png";

const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="profile-container">
          <img className="profile-icon" src={profileIcon}></img>
          <img className="camera-icon" src={cameraIcon}></img>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <div className="person-name">Rajesh Koothrappali </div>
            <div className="lvl-txt">Advanced level</div>
            <div>
              <span className="rating-text">4.0</span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star not-checked"></span>
            </div>
            <div>
              <div className="sidebar-options" style={{marginTop: "2rem", fontWeight: 700, color: 'black'}}>My profile</div>
              <div className="sidebar-options">Subscription</div>
              <div className="sidebar-options">Earnings</div>
              <div className="sidebar-options">Security</div>
              <div className="sidebar-options">Notifications</div>
              <div className="sidebar-options">Support</div>
              <div className="sidebar-options">How earn with Illumiya</div>
            </div>

            <div>
              <button className="btn">Become a tutor</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
