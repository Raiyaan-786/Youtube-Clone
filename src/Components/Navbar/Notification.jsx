import React from 'react'
import './Notification.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from '@fortawesome/free-solid-svg-icons';
export default function Notification({notifications}) {
  return (
    <div className="notification-menu" style={{display:notifications?"block":"none"}}>
       <div className="n-menu-header">
         <p>Notifications</p> 
         <div>
         <FontAwesomeIcon icon={faGear} size="lg" />
         </div>
       </div>
       <div className="notification-items">
         items
       </div>
    </div>
  )
}
