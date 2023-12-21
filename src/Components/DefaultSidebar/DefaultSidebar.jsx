import React from 'react'
import './DefaultSidebar.css'
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions,MdVideoLibrary} from "react-icons/md";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faHome, faMoneyBill, faPhotoFilm } from '@fortawesome/free-solid-svg-icons'

const DefaultSidebar = ({openSidebar}) => {
  return (
    <div className={!openSidebar?" default-Sidebar-Container ":"default-sidebar-collapse"}>

      <div className='default-Sidebar-section'>
        <FontAwesomeIcon icon={faHome}  className='sidebar-icons'/>
        <span>Home</span>
      </div>

      <div className='default-Sidebar-section'>
        <SiYoutubeshorts className='sidebar-icons nri'/>
        {/* <FontAwesomeIcon icon={faCirclePlay}  className='sidebar-icons'/> */}
        <span>Shorts</span>
      </div>

      <div className='default-Sidebar-section'>
      <MdSubscriptions className='sidebar-icons nri'/>
        {/* <FontAwesomeIcon icon={faMoneyBill}  className='sidebar-icons'/> */}
        <span>Subscriptions</span>
      </div>

      <div className='default-Sidebar-section'>
      <MdVideoLibrary className='sidebar-icons nri'/>
        {/* <FontAwesomeIcon icon={faPhotoFilm}  className='sidebar-icons'/> */}
        <span>You</span>
      </div>
      
    </div>
  )
}

export default DefaultSidebar