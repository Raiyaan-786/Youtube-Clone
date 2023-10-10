import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faCirclePlay,
  faCircleQuestion,
  faCircleUser,
  faGear,
  faMicrophone,
  faCircleExclamation,
  faRightToBracket,
  faSearch,
  faUsers,
  faVideoCamera,
  faKeyboard,
  faGlobe,
  faLanguage,
  faMoon,
  faFilterCircleDollar,
  faCircleDollarToSlot,
  faUserShield,
  faUserGroup,
  faSquare,
  faSquareCaretRight,
  faUser,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({Click}) => {
  const [profile, setProfile] = useState(false);
  const handleProfileClick = () => {
    if (profile == false) setProfile(true);
    else setProfile(false);
  };
  const handleProfileClick2 = () => {
    if (profile == true) setProfile(false);
  };

  return (
    <>
      <nav onClick={handleProfileClick2}>
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
            <input type="text" placeholder="Search" name="Search" />
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
          <div
            className="nicon"
            onClick={handleProfileClick}
            style={{
              border: profile ? "1.5px solid blue" : "1.5px solid white",
            }}
          >
            <img src="logo/profile.jpeg" alt="" />
          </div>
        </div>

        {/* profile section starts here */}
        <div
          className="user-detail"
          style={{ display: profile ? "block" : "none" }}
        >
          <div className="user-info">
            <div className="nicon " id="profile">
              <img src="logo/profile.jpeg" alt="" />
            </div>
            <div className="name-mail">
              <p>Dhruv Rathee</p>
              <p>@dhruvrathee6275</p>
              <p id="manage-account">Manage your Google Account</p>
            </div>
          </div>
          <div className="extra-details">
            {/* first section */}
            <div className="more-details">
              <div className="profile-options">
                <FontAwesomeIcon icon={faUser} size="lg" />
                <p>Your channel</p>
              </div>
              <div className="profile-options">
                <FontAwesomeIcon icon={faSquareCaretRight} size="lg" />
                <p>YouTube Studio</p>
              </div>
              <div className="profile-options">
                <FontAwesomeIcon icon={faUserGroup} size="lg" />
                <p>Switch Account</p>
              </div>
              <div className="profile-options">
                <FontAwesomeIcon icon={faRightToBracket} size="lg" />
                <p>Sign Out</p>
              </div>
            </div>

            {/* second section */}
            <div className="more-details">
              <div className="profile-options">
                <FontAwesomeIcon icon={faCircleDollarToSlot} size="lg"/>
                <p>Perchase and memberships</p>
              </div>
              <div className="profile-options">
                <FontAwesomeIcon icon={faUserPen} size="lg" />
                <p>Your data in MyTube</p>
              </div>
            </div>
            {/* third section */}
            <div className="more-details">
              <div className="profile-options">
                <FontAwesomeIcon icon={faMoon} size="lg" />
                <p>Appearance:Light</p>
              </div>
              <div className="profile-options">
                <FontAwesomeIcon icon={faLanguage} size="lg" />
                <p>Language:English</p>
              </div>
              <div className="profile-options">
                <FontAwesomeIcon icon={faUserShield} size="lg" />
                <p>Restricted Mode:Off</p>
              </div>
              <div className="profile-options">
                <FontAwesomeIcon icon={faGlobe} size="lg" />
                <p>Location:India</p>
              </div>
              <div className="profile-options">
                <FontAwesomeIcon icon={faKeyboard} size="lg" />
                <p>Keyboard shortcuts</p>
              </div>
            </div>
            {/* fourth section */}
            <div className="more-details">
              <div className="profile-options">
                <FontAwesomeIcon icon={faGear} size="lg" />
                <p>Settings</p>
              </div>
            </div>
            {/* fifth section */}
            <div className="more-details"style={{border:"none"}}>
              <div className="profile-options">
                <FontAwesomeIcon icon={faCircleQuestion} size="lg" />
                <p>Help</p>
              </div>
              <div className="profile-options">
                <FontAwesomeIcon icon={faCircleExclamation} size="lg" />
                <p>Send feedback</p>
              </div>
              
            </div>
          </div>
        </div>
        {/* profile section ends here */}
      </nav>
    </>
  );
};

export default Navbar;
