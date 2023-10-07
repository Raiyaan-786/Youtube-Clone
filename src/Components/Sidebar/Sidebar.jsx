import React from 'react'
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faHouse, faMoneyBill } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <div className="sidebar-section">
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faHouse}  className='icons'/>
          Home
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faCirclePlay}  className='icons'/>
          Shorts
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faMoneyBill} className='icons' />
          Subscription
        </div>
      </div>
      <hr />
      <div className="sidebar-section">
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faHouse}  className='icons'/>
          Library
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faCirclePlay}  className='icons'/>
          History
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faMoneyBill} className='icons' />
          Your Videos
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faMoneyBill} className='icons' />
          Watch Later 
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faMoneyBill} className='icons' />
          Liked Videos
        </div>
        
      </div>
      <hr />
      <div className="sidebar-section"></div>
      <hr />
      <div className="sidebar-section"></div>
      <div className="sidebar-section"></div>
      <div className="sidebar-section"></div>
      <div className="sidebar-section"></div>
    </div>
  )
}

export default Sidebar