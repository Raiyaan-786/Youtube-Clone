import React, { useState } from "react";
import "./Navbar.css";
import Profile from "./Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars,faBell,faMicrophone,faSearch,faVideoCamera,} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ Click }) => {

  const [profile, setProfile] = useState(false);
  const handleProfileClick = () => {
    setProfile(!profile);
  };


  const handleProfileClick2 = () => {
    if (profile == true) setProfile(false);
  };

  return (
    <>
      <nav onClick={handleProfileClick2}>

        <div className="bar-logo" onClick={Click}>
          <div className="nav-icons"><FontAwesomeIcon icon={faBars} size="lg" /></div>
          <div className="logo"><img src="logo/logo-light-mode1.png" alt="logo" /></div>
        </div>

        <div className="search-bar">
          <div className="search-box">
            <input type="text" placeholder="Search" name="Search" />
            <button><FontAwesomeIcon icon={faSearch} size="lg" /></button>
          </div>
          <div className="nav-icons" id="mic"><FontAwesomeIcon icon={faMicrophone} size="lg" /></div>
        </div>
        
        
        <div id="user">
          <div className="nav-icons"><FontAwesomeIcon icon={faVideoCamera} size="lg" /></div>
          <div className="nav-icons"><FontAwesomeIcon icon={faBell} size="lg" /></div>
          <div className="nav-icons" id="nicon-image" onClick={handleProfileClick} style={{background: profile ? "blue" : "white",}}>
           <img src="logo/profile.jpeg" alt="" />
          </div>
        </div>


        {/* profile section starts here */}
        <Profile profile={profile} />
        {/* profile section ends here */}

      </nav>
    </>
  );
};

export default Navbar;
