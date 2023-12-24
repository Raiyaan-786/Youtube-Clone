import React from 'react'
import './Notification.css'
import { BsDot } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV} from '@fortawesome/free-solid-svg-icons';
export default function NotificationItem(props) {
    return (

        <div className="n-menu-item">
            <div className='n-item-dot' style={{color:props.watched?"transparent":"blue"}}>
                <BsDot />
            </div>
            <img className="n-item-img1" src={props.img1} alt="" />
            <div className="n-item-details">
                <p className='n-item-title'>{props.channel} uploaded: {props.title}</p>
                <p className="n-item-time">{props.time}</p>
            </div>
            <div className="n-item-img2">
                <img src={props.img2} alt="" />
            </div>
            <FontAwesomeIcon icon={faEllipsisV} size="lg" className='n-item-3dot' />
        </div>
    )
}
