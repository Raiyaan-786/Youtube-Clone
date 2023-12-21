import React, { useState } from 'react'
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleLeft, faAngleRight, faAngleUp, faCirclePlay, faCircleQuestion, faClapperboard, faClock, faClockRotateLeft, faFilm, faFire, faFlag, faGamepad, faGear, faGraduationCap, faHeadphones, faHouse, faMoneyBill, faMusic, faNewspaper, faPaperPlane, faPhotoFilm, faPodcast, faRss, faSliders, faThumbsUp, faTrophy, faTv, faVestPatches, faVideo } from '@fortawesome/free-solid-svg-icons'

const Sidebar = ({openSidebar}) => {
  const [OpenShowMore , setOpenShowMore] = useState(false);
  const [OpenShowSubs , setOpenShowSubs] = useState(false);
  const ShowMoreHandler = () => {
    setOpenShowMore(!OpenShowMore);
  }
  const ShowSubsHandler = () => {
    setOpenShowSubs(!OpenShowSubs);
  }
  return (
    <div>
    <div className={openSidebar?"sidebar-container sidebar-collapse":"sidebar-container "}>
      <div className="sidebar-section">
        <div className='sidebar-content'>
          <div className='sidebar-content-icon'>
            <FontAwesomeIcon icon={faHouse} className='icons'/>
          </div>
          <div className='sidebar-content-text'>
            Home
          </div>
        </div>
        <div className='sidebar-content'>
          <div className='sidebar-content-icon'>
            <FontAwesomeIcon icon={faCirclePlay} className='icons'/>
          </div>
          <div className='sidebar-content-text'>
            Shorts
          </div>
        </div>
        <div className='sidebar-content'>
          <div className='sidebar-content-icon'>
            <FontAwesomeIcon icon={faMoneyBill} className='icons'/>
          </div>
          <div className='sidebar-content-text'>
            Subscription
          </div>
        </div>
      </div>

      <hr />

      <div className="sidebar-section">
      <span>You <FontAwesomeIcon icon={faAngleRight} className='icons'/></span>
        <div className='sidebar-content'>
          <div className='sidebar-content-icon'>
            <FontAwesomeIcon icon={faPhotoFilm} className='icons'/>
          </div>
          <div className='sidebar-content-text'>
            Library
          </div>
        </div>
        <div className='sidebar-content'>
          <div className='sidebar-content-icon'>
            <FontAwesomeIcon icon={faClockRotateLeft} className='icons'/>
          </div>
          <div className='sidebar-content-text'>
            History
          </div>
        </div>
        <div className='sidebar-content'>
          <div className='sidebar-content-icon'>
            <FontAwesomeIcon icon={faVideo} className='icons'/>
          </div>
          <div className='sidebar-content-text'>
            Your Videos
          </div>
        </div>
        <div className='sidebar-content'>
          <div className='sidebar-content-icon'>
            <FontAwesomeIcon icon={faClock} className='icons'/>
          </div>
          <div className='sidebar-content-text'>
            Watch Later
          </div>
        </div>
        <div className='sidebar-content'>
          <div className='sidebar-content-icon'>
            <FontAwesomeIcon icon={faThumbsUp} className='icons'/>
          </div>
          <div className='sidebar-content-text'>
            Liked Videos
          </div>
        </div>

        {!OpenShowMore && <div className='sidebar-content' onClick={() => ShowMoreHandler()}>
          <div className='sidebar-content-icon' >
            <FontAwesomeIcon icon={faAngleDown} className='icons'/>
          </div>
          <div className='sidebar-content-text'>
            Show More
          </div>
        </div>}
        
        {OpenShowMore && 
        <>
        <div className='sidebar-content'>
          <div className='sidebar-content-icon'>
            <FontAwesomeIcon icon={faSliders} className='icons'/>
          </div>
          <div className='sidebar-content-text'>
            Relax
          </div>
        </div>
        <div className='sidebar-content'>
          <div className='sidebar-content-icon'>
            <FontAwesomeIcon icon={faSliders} className='icons'/>
          </div>
          <div className='sidebar-content-text'>
            Pubg Montage
          </div>
        </div>
        <div className='sidebar-content'>
          <div className='sidebar-content-icon'>
            <FontAwesomeIcon icon={faSliders} className='icons'/>
          </div>
          <div className='sidebar-content-text'>
            20 mins Workout
          </div>
        </div>
        <div className='sidebar-content'>
          <div className='sidebar-content-icon'>
            <FontAwesomeIcon icon={faSliders} className='icons'/>
          </div>
          <div className='sidebar-content-text'>
            Best Songs 2023
          </div>
        </div>
        <div className='sidebar-content' onClick={() => ShowMoreHandler()}>
          <div className='sidebar-content-icon'>
            <FontAwesomeIcon icon={faAngleUp} className='icons'/>
          </div>
          <div className='sidebar-content-text'>
            Show Fewer
          </div>
        </div>
        </>}
      </div>

      <hr/>

      <div className="sidebar-section">
        <span>Subscription</span>
        <div className='sidebar-content'>
          <div className='sidebar-content-img'>
            <img src="https://images.pexels.com/photos/3693108/pexels-photo-3693108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
          <div className='sidebar-content-text'>
            T-Series
          </div>
        </div>
        <div className='sidebar-content'>
          <div className='sidebar-content-img'>
            <img src="https://images.pexels.com/photos/18482086/pexels-photo-18482086/free-photo-of-landscape-wallpaper-valley-and-mountains-in-autumn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
          <div className='sidebar-content-text'>
            YRF Films
          </div>
        </div>
        <div className='sidebar-content'>
          <div className='sidebar-content-img'>
            <img src="https://images.pexels.com/photos/18446247/pexels-photo-18446247/free-photo-of-young-man-in-sunglasses-posing-near-handrails.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
          <div className='sidebar-content-text'>
            Dhruv Rathee
          </div>
        </div>
        <div className='sidebar-content'>
          <div className='sidebar-content-img'>
            <img src="https://images.pexels.com/photos/3194495/pexels-photo-3194495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
          <div className='sidebar-content-text'>
            Red Chillies
          </div>
        </div>
        <div className='sidebar-content'>
          <div className='sidebar-content-img'>
            <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
          <div className='sidebar-content-text'>
            Mr Beast
          </div>
        </div>
        {!OpenShowSubs && <div className='sidebar-content' onClick={() => ShowSubsHandler()}>
          <div className='sidebar-content-icon'>
            <FontAwesomeIcon icon={faAngleDown} className='icons sicons'/>
          </div>
          <div className='sidebar-content-text'>
            Show More
          </div>
        </div>}

        {OpenShowSubs &&
          <>
          <div className='sidebar-content'>
          <div className='sidebar-content-img'>
            <img src="https://images.pexels.com/photos/14468172/pexels-photo-14468172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
          <div className='sidebar-content-text'>
            Nature
          </div>
        </div>
        <div className='sidebar-content'>
          <div className='sidebar-content-img'>
            <img src="https://images.pexels.com/photos/19554104/pexels-photo-19554104/free-photo-of-a-man-taking-a-photo-of-the-sunset-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
          <div className='sidebar-content-text'>
            Photomania
          </div>
        </div>
        <div className='sidebar-content' onClick={() => ShowSubsHandler()}>
          <div className='sidebar-content-icon'>
            <FontAwesomeIcon icon={faAngleUp} className='icons sicons'/>
          </div>
          <div className='sidebar-content-text'>
            Show Fewer
          </div>
        </div>
        </>
        }
      </div>

      <hr />

      <div className="sidebar-section">
      <span>Explore</span>
        <div className='sidebar-content'>
          <div className='sidebar-content-icon'>
            <FontAwesomeIcon icon={faFire} className='icons sicons'/>
          </div>
          <div className='sidebar-content-text'>
            Trending
          </div>
        </div>
        <div className='sidebar-content'>
          <div className='sidebar-content-icon'>
            <FontAwesomeIcon icon={faCirclePlay} className='icons'/>
          </div>
          <div className='sidebar-content-text'>
            Shopping
          </div>
        </div>
        <div className='sidebar-content'>
          <div className='sidebar-content-icon'>
            <FontAwesomeIcon icon={faHeadphones} className='icons' />
          </div>
          <div className='sidebar-content-text'>
            Music
          </div>          
        </div>
        <div className='sidebar-content'>
          <div className='sidebar-content-icon'>
            <FontAwesomeIcon icon={faFilm} className='icons'/>
          </div>
          <div className='sidebar-content-text'>
            Films
          </div>
        </div>
        <div className='sidebar-content'>
          <div className='sidebar-content-icon'>
            <FontAwesomeIcon icon={faRss} className='icons'/>
          </div>
          <div className='sidebar-content-text'>
            Live
          </div>
        </div>
        <div className='sidebar-content'>
          <div className='sidebar-content-icon'>
            <FontAwesomeIcon icon={faGamepad} className='icons'/>
          </div>
          <div className='sidebar-content-text'>
            Gaming
          </div>
        </div>
        <div className='sidebar-content'>
          <div className='sidebar-content-icon'>
            <FontAwesomeIcon icon={faNewspaper} className='icons'/>
          </div>
          <div className='sidebar-content-text'>
            News 
          </div>
        </div>
        <div className='sidebar-content'>
          <div className='sidebar-content-icon'>
            <FontAwesomeIcon icon={faTrophy} className='icons'/>
          </div>
          <div className='sidebar-content-text'>
            Sport
          </div>
        </div>
        <div className='sidebar-content'>
          <div className='sidebar-content-icon'>
            <FontAwesomeIcon icon={faGraduationCap} className='icons'/>
          </div>
          <div className='sidebar-content-text'>
            Learning
          </div>
        </div>
        <div className='sidebar-content'>
          <div className='sidebar-content-icon'>
            <FontAwesomeIcon icon={faVestPatches} className='icons'/>
          </div>
          <div className='sidebar-content-text'>
            Fashion & beauty
          </div>
        </div>
        <div className='sidebar-content'>
          <div className='sidebar-content-icon'>
            <FontAwesomeIcon icon={faPodcast} className='icons'/>
          </div>
          <div className='sidebar-content-text'>
            Podcast
          </div>
        </div>
      </div>

      <hr />

      <div className="sidebar-section">
        <span>More from Youtube</span>
        <div className='sidebar-content'>
          <div className='sidebar-content-icon'>
            <FontAwesomeIcon icon={faCirclePlay}  className='icons col-icons'/>
          </div>
          <div className='sidebar-content-text'>
            Youtube Premium
          </div>
        </div>
        <div className='sidebar-content'>
          <div className='sidebar-content-icon'>
            <FontAwesomeIcon icon={faTv}  className='icons col-icons'/>
          </div>
          <div className='sidebar-content-text'>
            Youtube Studio
          </div>
        </div>
        <div className='sidebar-content'>
          <div className='sidebar-content-icon'>
            <FontAwesomeIcon icon={faMusic}  className='icons col-icons'/>
          </div>
          <div className='sidebar-content-text'>
            Youtube Music
          </div>
        </div>
        <div className='sidebar-content'>
          <div className='sidebar-content-icon'>
            <FontAwesomeIcon icon={faClapperboard}  className='icons col-icons'/>
          </div>
          <div className='sidebar-content-text'>
            Youtube Kids
          </div>
        </div>
      </div>

      <hr />

      <div className="sidebar-section">
        <div className='sidebar-content'>
          <div className='sidebar-content-icon'>
            <FontAwesomeIcon icon={faGear} className='icons'/>
          </div>
          <div className='sidebar-content-text'>
            Settings
          </div>
        </div>
        <div className='sidebar-content'>
          <div className='sidebar-content-icon'>
            <FontAwesomeIcon icon={faFlag} className='icons'/>
          </div>
          <div className='sidebar-content-text'>
            Report history
          </div>
        </div>
        <div className='sidebar-content'>
          <div className='sidebar-content-icon'>
            <FontAwesomeIcon icon={faCircleQuestion} className='icons'/>
          </div>
          <div className='sidebar-content-text'>
            Help
          </div>
        </div>
        <div className='sidebar-content'>
          <div className='sidebar-content-icon'>
            <FontAwesomeIcon icon={faPaperPlane} className='icons'/>
          </div>
          <div className='sidebar-content-text'>
            Send Feedback
          </div>
        </div>
      </div>

      <hr />

      <div className="sidebar-section">
        <p>About Press Copyright Contact us Creator Advertise Developers</p>
        <p>Terms PrivacyPolicy & SafetyHow YouTube worksTest new features</p>
        <p>© 2023 Inzamam-Raiyaan</p>
      </div>
    </div>
    </div>
  )
}

export default Sidebar