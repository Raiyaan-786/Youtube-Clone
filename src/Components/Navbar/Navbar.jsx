import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faMicrophone,
  faSearch,
  faVideoCamera,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = ({Click}) => {
  return (
    <>
      <nav>
        <div className="bar-logo" onClick={Click}>
          <div className="nicon">
            <FontAwesomeIcon icon={faBars} size="lg" />
          </div>
          <div className="logo">
            <img src="logo/logo-light-mode1.png" alt="logo" />
          </div>
        </div>


        <div className="search-bar">

          <div className="search-box">
            <input type="text" placeholder="Search" />
            <button>
              <FontAwesomeIcon icon={faSearch} size="lg" />
            </button>
          </div>

          <div className="nicon" id="mic">
            <FontAwesomeIcon icon={faMicrophone} size="lg" />
          </div>

        </div>



        <div id="user">
          <div className="nicon">
            <FontAwesomeIcon icon={faVideoCamera} size="lg" />
          </div>
          <div className="nicon">
            <FontAwesomeIcon icon={faBell} size="lg" />
          </div>
          <div className="nicon">
            <img src="logo/profile.jpg" alt="" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
