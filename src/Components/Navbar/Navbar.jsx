import React, { useState } from "react";
import "./Navbar.css";
import Profile from "./Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import Notification from "./Notification";
import Search from "./Search";

const Navbar = ({ Click }) => {

  const [profile, setProfile] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [searchBox, setSearchBox] = useState(false);
  const handleNotifications = () => {
    setNotifications(!notifications)
  }
  const handleProfileClick = () => {
    setProfile(!profile);
  };
  const handleSearchBox = () => {
    setSearchBox(!searchBox);
  };

  const handleNavbarClick = () => {
    if (profile == true) setProfile(false);
    if (notifications == true) setNotifications(false);
    if (searchBox == true) setSearchBox(false);
  };

  return (
    <>
      <nav onClick={handleNavbarClick}>

        {/* logo section starts here */}
        <div className="bar-logo" onClick={Click}>
          <div className="nav-icons"><FontAwesomeIcon icon={faBars} size="lg" /></div>
          <div className="logo"><img src="logo/logo-light-mode1.png" alt="logo" /></div>
        </div>
        {/* logo section ends here */}


        {/* Searchbar starts  */}
        <Search searchBox={searchBox} handleSearchBox={handleSearchBox} />
        {/* searchbar ends */}

         
        <div id="user">
          <div className="nav-icons"><FontAwesomeIcon icon={faVideoCamera} size="lg" /><span className="icon-info">Create</span></div>
          <div className="nav-icons" onClick={handleNotifications}><FontAwesomeIcon icon={faBell} size="lg" /><span className="icon-info">Notifications</span></div>
          <div className="nav-icons" id="nicon-image" onClick={handleProfileClick} style={{ background: profile ? "blue" : "white", }}>
            <img src="logo/profile.jpeg" alt="" />
          </div>
        </div>

        {/* notification menu starts */}
        <Notification notifications={notifications} />
        {/* notification menu ends */}

        {/* profile section starts here */}
        <Profile profile={profile} />
        {/* profile section ends here */}

      </nav>
    </>
  );
};

export default Navbar;
