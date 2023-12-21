import React from "react";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion, faGear, faCircleExclamation, faRightToBracket, faKeyboard, faGlobe, faLanguage, faMoon, faCircleDollarToSlot, faUserShield, faUserGroup, faSquareCaretRight, faAngleRight, faUserLock, faTvAlt, faTv } from "@fortawesome/free-solid-svg-icons";

export default function Profile({ profile }) {
  return (

    <div className="profile-menu" style={{ display: profile ? "block" : "none" }}>

      {/* header section of profile menu */}
      <div className="user-info">
        <div className="user-icon"><img src="logo/profile.jpeg" alt="" /></div>
        <div className="name-mail">
          <p>Dhruv Rathee</p>
          <p>@dhruvrathee6275</p>
          <p id="manage-account">View your channel</p>
        </div>
      </div>
      {/* header section of profile menu end*/}

      {/* second part of profile menu */}
      <div className="user-info-settings">
        {/* first section */}
        <div className="user-settings">

          <div className="user-options">
            <div className="user-options-icon"><img src="/public/svgIcons/google.svg" alt="" /></div>
            <p>Google Account</p>
          </div>

          <div className="user-options">
            <div className="user-options-icons">
              <FontAwesomeIcon icon={faUserGroup} size="lg" />
            </div>
            <p>Switch account</p>
            <div className="user-options-icons-angle1">
            <FontAwesomeIcon icon={faAngleRight} size="lg" />
            </div>
          </div>

          <div className="user-options">
            <div className="user-options-icons">
              <FontAwesomeIcon icon={faRightToBracket} size="lg" />
            </div>
            <p>Sign out</p>
          </div>

        </div>
        {/* first section ends */}

        {/* second section */}
        <div className="user-settings">

          <div className="user-options">
            <div className="user-options-icons">
              <FontAwesomeIcon icon={faTv} size="lg" />
            </div>
            <p>YouTube Studio</p>
          </div>


          <div className="user-options">
            <div className="user-options-icons">
              <FontAwesomeIcon icon={faCircleDollarToSlot} size="lg" />
            </div>
            <p>Perchases and memberships</p>
          </div>

        </div>
        {/* second section ends */}

        {/* third section */}
        <div className="user-settings">

          <div className="user-options">
            <div className="user-options-icons">
              <FontAwesomeIcon icon={faUserShield} size="lg" />
            </div>
            <p>Your data in MyTube</p>
          </div>

          <div className="user-options">
            <div className="user-options-icons">
              <FontAwesomeIcon icon={faMoon} size="lg" />
            </div>
            <p>Appearance:Light</p>

            <div className="user-options-icons-angle2">
            <FontAwesomeIcon icon={faAngleRight} size="lg" />
            </div>
          </div>

          <div className="user-options">
            <div className="user-options-icons">
              <FontAwesomeIcon icon={faLanguage} size="lg" />
            </div>
            <p>Language:English</p>
            <div className="user-options-icons-angle3">
            <FontAwesomeIcon icon={faAngleRight} size="lg" />
            </div>
          </div>

          <div className="user-options">
            <div className="user-options-icons">
              <FontAwesomeIcon icon={faUserLock} size="lg" />
            </div>
            <p>Restricted Mode: Off</p>
            <div className="user-options-icons-angle4">
            <FontAwesomeIcon icon={faAngleRight} size="lg" />
            </div>
          </div>

          <div className="user-options">
            <div className="user-options-icons">
              <FontAwesomeIcon icon={faGlobe} size="lg" />
            </div>
            <p>Location: India</p>
            <div className="user-options-icons-angle5">
            <FontAwesomeIcon icon={faAngleRight} size="lg" />
            </div>
          </div>

          <div className="user-options">
            <div className="user-options-icons">
              <FontAwesomeIcon icon={faKeyboard} size="lg" />
            </div>
            <p>Keyboard shortcuts</p>
          </div>

        </div>
        {/* third section ends */}

        {/* fourth section */}
        <div className="user-settings">

          <div className="user-options">
            <div className="user-options-icons">
              <FontAwesomeIcon icon={faGear} size="lg" />
            </div>
            <p>Settings</p>
          </div>

        </div>
        {/* fourth section ends */}

        {/* fifth section */}
        <div className="user-settings" style={{ border: "none" }}>

          <div className="user-options">
            <div className="user-options-icons">
              <FontAwesomeIcon icon={faCircleQuestion} size="lg" />
            </div>
            <p>Help</p>
          </div>

          <div className="user-options">
            <div className="user-options-icons">
              <FontAwesomeIcon icon={faCircleExclamation} size="lg" />
            </div>
            <p>Send feedback</p>
          </div>

        </div>
        {/* fifth section ends */}
      </div>
        {/* second part of profile menu ends */}
    </div>
  );
}
