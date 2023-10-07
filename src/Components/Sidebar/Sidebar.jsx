import React from 'react'
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faCirclePlay, faCircleQuestion, faClapperboard, faClock, faClockRotateLeft, faFilm, faFire, faFlag, faGamepad, faGear, faGraduationCap, faHeadphones, faHouse, faMoneyBill, faMusic, faNewspaper, faPaperPlane, faPhotoFilm, faPodcast, faRss, faThumbsUp, faTrophy, faTv, faVestPatches, faVideo } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <div className="sidebar-section">
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faHouse} className='icons'/>
          Home
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faCirclePlay} className='icons'/>
          Shorts
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faMoneyBill} className='icons'/>
          Subscription
        </div>
      </div>

      <hr />

      <div className="sidebar-section">
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faPhotoFilm} className='icons'/>
          Library
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faClockRotateLeft} className='icons'/>
          History
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faVideo} className='icons'/>
          Your Videos
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faClock} className='icons'/>
          Watch Later 
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faThumbsUp} className='icons'/>
          Liked Videos
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faAngleDown} className='icons'/>
          Show more
        </div>
      </div>

      <hr/>

      <div className="sidebar-section">
        <span>Subscription</span>
        <div className='sidebar-content'>
          <img src="https://images.pexels.com/photos/3693108/pexels-photo-3693108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          T-Series
        </div>
        <div className='sidebar-content'>
          <img src="https://images.pexels.com/photos/18482086/pexels-photo-18482086/free-photo-of-landscape-wallpaper-valley-and-mountains-in-autumn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          YRF Films
        </div>
        <div className='sidebar-content'>
          <img src="https://images.pexels.com/photos/18446247/pexels-photo-18446247/free-photo-of-young-man-in-sunglasses-posing-near-handrails.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          Dhruv Rathee
        </div>
        <div className='sidebar-content'>
          <img src="https://images.pexels.com/photos/3194495/pexels-photo-3194495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          Red Chillies
        </div>
        <div className='sidebar-content'>
          <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          Mr Beast
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faAngleDown} className='icons sicons'/>
          Show more
        </div>
      </div>

      <hr />

      <div className="sidebar-section">
      <span>Explore</span>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faFire}  className='icons'/>
          Trending
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faCirclePlay}  className='icons'/>
          Shopping
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faHeadphones} className='icons' />
          Music
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faFilm} className='icons' />
          Films
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faRss} className='icons' />
          Live 
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faGamepad} className='icons' />
          Gaming 
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faNewspaper} className='icons' />
          News 
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faTrophy} className='icons' />
          Sport 
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faGraduationCap} className='icons' />
          Learing
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faVestPatches} className='icons' />
          Fashion & beauty
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faPodcast} className='icons' />
          Podcast
        </div>
      </div>

      <hr />

      <div className="sidebar-section">
        <span>More from Youtube</span>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faCirclePlay}  className='icons col-icons'/>
          Youtube Premium
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faTv}  className='icons col-icons'/>
          Youtube Studio
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faMusic} className='icons col-icons' />
          Youtube Music
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faClapperboard} className='icons col-icons' />
          Youtube Kids
        </div>
      </div>

      <hr />

      <div className="sidebar-section">
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faGear}  className='icons'/>
          Settings
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faFlag}  className='icons'/>
          Report history
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faCircleQuestion} className='icons' />
          Help 
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faPaperPlane} className='icons' />
          Send Feedback
        </div>
      </div>

      <hr />

      <div className="sidebar-section">
        <p>About Press Copyright Contact us Creator Advertise Developers</p>
        <p>Terms PrivacyPolicy & SafetyHow YouTube worksTest new features</p>
        <p>© 2023 Inzamam-Raiyaan</p>
      </div>
    </div>
  )
}

export default Sidebar