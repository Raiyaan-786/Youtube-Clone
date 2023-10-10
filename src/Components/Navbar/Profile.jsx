import React from "react";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleQuestion,faGear,faCircleExclamation,faRightToBracket,faKeyboard,faGlobe,faLanguage,faMoon,faCircleDollarToSlot,faUserShield,faUserGroup,faSquareCaretRight,faUser,faUserPen,faAngleRight,} from "@fortawesome/free-solid-svg-icons";

export default function Profile({ profile }) {
  return (
    
      <div className="profile-menu" style={{ display: profile ? "block" : "none" }}>

         {/* header section of profile menu */}
        <div className="user-info">
          <div className="user-icon"><img src="logo/profile.jpeg" alt="" /></div>
          <div className="name-mail">
            <p>Dhruv Rathee</p>
            <p>@dhruvrathee6275</p>
            <p id="manage-account">Manage your Google Account</p>
          </div>
        </div>


        <div >
          {/* first section */}
          <div className="user-settings">

            <div className="user-options">
              <FontAwesomeIcon icon={faUser} size="lg" />
              <p>Your channel</p>
            </div>

            <div className="user-options">
              <FontAwesomeIcon icon={faSquareCaretRight} size="lg" />
              <p>YouTube Studio</p>
            </div>

            <div className="user-options">
              <FontAwesomeIcon icon={faUserGroup} size="lg" />
              <p>Switch Account</p>
              <FontAwesomeIcon icon={faAngleRight} size="lg" />
            </div>

            <div className="user-options">
              <FontAwesomeIcon icon={faRightToBracket} size="lg" />
              <p>Sign Out</p>
            </div>

          </div>


          {/* second section */}
          <div className="user-settings">

            <div className="user-options">
              <FontAwesomeIcon icon={faCircleDollarToSlot} size="lg" />
              <p>Perchase and memberships</p>
            </div>

            <div className="user-options">
              <FontAwesomeIcon icon={faUserPen} size="lg" />
              <p>Your data in MyTube</p>
            </div>

          </div>


          {/* third section */}
          <div className="user-settings">

            <div className="user-options">
              <FontAwesomeIcon icon={faMoon} size="lg" />
              <p>Appearance:Light</p>  
              <FontAwesomeIcon icon={faAngleRight} size="lg" />
            </div>

            <div className="user-options">
              <FontAwesomeIcon icon={faLanguage} size="lg" />
              <p>Language:English</p>
              <FontAwesomeIcon icon={faAngleRight} size="lg" />
            </div>

            <div className="user-options">
              <FontAwesomeIcon icon={faUserShield} size="lg" />
              <p>Restricted Mode:Off</p>
              <FontAwesomeIcon icon={faAngleRight} size="lg" />
            </div>

            <div className="user-options">
              <FontAwesomeIcon icon={faGlobe} size="lg" />
              <p>Location:India</p>
              <FontAwesomeIcon icon={faAngleRight} size="lg" />
            </div>

            <div className="user-options">
              <FontAwesomeIcon icon={faKeyboard} size="lg" />
              <p>Keyboard shortcuts</p>
            </div>

          </div>


          {/* fourth section */}
          <div className="user-settings">

            <div className="user-options">
              <FontAwesomeIcon icon={faGear} size="lg" />
              <p>Settings</p>
            </div>

          </div>


          {/* fifth section */}
          <div className="user-settings" style={{ border: "none" }}>

            <div className="user-options">
              <FontAwesomeIcon icon={faCircleQuestion} size="lg" />
              <p>Help</p>
            </div>

            <div className="user-options">
              <FontAwesomeIcon icon={faCircleExclamation} size="lg" />
              <p>Send feedback</p>
            </div>

          </div>

        </div>

      </div>
  );
}
