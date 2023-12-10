import React from 'react'
import './DefaultSidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faHome, faMoneyBill, faPhotoFilm } from '@fortawesome/free-solid-svg-icons'

const DefaultSidebar = ({openSidebar}) => {
  return (
    <div className={!openSidebar?"default-Sidebar-Container default-sidebar-collapse":"default-Sidebar-Container "}>
      <div className='default-Sidebar-section'>
        <FontAwesomeIcon icon={faHome}  className='sidebar-icons'/>
        <span>Home</span>
      </div>
      <div className='default-Sidebar-section'>
        <FontAwesomeIcon icon={faCirclePlay}  className='sidebar-icons'/>
        <span>Shorts</span>
      </div>
      <div className='default-Sidebar-section'>
        <FontAwesomeIcon icon={faMoneyBill}  className='sidebar-icons'/>
        <span>Subscriptions</span>
      </div>
      <div className='default-Sidebar-section'>
        <FontAwesomeIcon icon={faPhotoFilm}  className='sidebar-icons'/>
        <span>Library</span>
      </div>
    </div>
  )
}

export default DefaultSidebar