import React, { useState } from 'react'
import './Sidebar.css'
import { TbBrandYoutubeKids } from "react-icons/tb";
import { SiYoutubeshorts,SiYoutubemusic } from "react-icons/si";
import { MdSubscriptions} from "react-icons/md";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleRight, faAngleUp, faBagShopping, faCirclePlay, faCircleQuestion, faClapperboard, faClock, faClockRotateLeft, faExclamationCircle, faFilm, faFire, faFlag, faGamepad, faGear, faGraduationCap, faHeadphones, faHouse, faLightbulb, faMoneyBill, faMusic, faNewspaper, faPaperPlane, faPhotoFilm, faPodcast, faRss, faSliders, faThumbsUp, faTrophy, faTv, faUserCircle, faUsersCog, faUsersRectangle, faVestPatches, faVideo } from '@fortawesome/free-solid-svg-icons'

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
        <div className='sidebar-content sidebar-content-active'>
          <FontAwesomeIcon icon={faHouse} className='icons'/>
          Home
        </div>
        <div className='sidebar-content'>
        <SiYoutubeshorts className='icons nri'/>
          {/* <FontAwesomeIcon icon={faCirclePlay} className='icons'/> */}
          Shorts
        </div>
        <div className='sidebar-content'>
        <MdSubscriptions className='icons nri'/>
          {/* <FontAwesomeIcon icon={faMoneyBill} className='icons'/> */}
          Subscription
        </div>
      </div>

      <hr />

      <div className="sidebar-section">
        <div className='sidebar-content'>
         <p>You</p>
          <FontAwesomeIcon icon={faAngleRight} className='icons'/>
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faUserCircle} className='icons'/>
         Your channel
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
        {/* <div className='sidebar-content'>
          <FontAwesomeIcon icon={faThumbsUp} className='icons'/>
          Liked Videos
        </div> */}
        {!OpenShowMore && <div className='sidebar-content' onClick={() => ShowMoreHandler()}>
          <FontAwesomeIcon icon={faAngleDown} className='icons'/>
          Show more
        </div>}

        {OpenShowMore && 
        <>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faSliders} className='icons'/>
          Liked Videos 
        </div><div className='sidebar-content'>
          <FontAwesomeIcon icon={faSliders} className='icons'/>
          Pubg Montage 
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faSliders} className='icons'/>
          20 mins Workout 
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faSliders} className='icons'/>
          Relax 
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faSliders} className='icons'/>
          Best Songs 2023 
        </div>
        <div className='sidebar-content' onClick={() => ShowMoreHandler()}>
          <FontAwesomeIcon icon={faAngleUp} className='icons'/>
          Show Fewer 
        </div>
        </>
        }
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
        {!OpenShowSubs && <div className='sidebar-content' onClick={() => ShowSubsHandler()}>
          <FontAwesomeIcon icon={faAngleDown} className='icons sicons'/>
          Show 4 more
        </div>}

        {OpenShowSubs && 
        <>
        <div className='sidebar-content' onClick={() => ShowSubsHandler()}>
          <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          Mr Beast
        </div>
        <div className='sidebar-content'>
          <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          Mr Beast
        </div>
        <div className='sidebar-content'>
          <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          Mr Beast
        </div>
        <div className='sidebar-content'>
          <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          Mr Beast
        </div>
        <div className='sidebar-content' onClick={() => ShowSubsHandler()}>
          <FontAwesomeIcon icon={faAngleUp} className='icons'/>
          Show Fewer
        </div>
        </>}

      </div>

      <hr />

      <div className="sidebar-section">
      <span>Explore</span>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faFire}  className='icons'/>
          Trending
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faBagShopping}  className='icons'/>
          Shopping
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faMusic} className='icons' />
          Music
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faFilm} className='icons' />
          Movies
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
          Sports 
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faLightbulb} className='icons' />
          Learing
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faVestPatches} className='icons' />
          Fashion & beauty
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faPodcast} className='icons' />
          Podcasts
        </div>
      </div>

      <hr />

      <div className="sidebar-section">
        <span>More from Mytube</span>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faCirclePlay}  className='icons col-icons'/>
          Mytube Premium
        </div>
        <div className='sidebar-content'>
          <FontAwesomeIcon icon={faTv}  className='icons col-icons' id='icon-studio'/>
          Mytube Studio
        </div>
        <div className='sidebar-content'>
        <SiYoutubemusic className='icons col-icons'/>
          {/* <FontAwesomeIcon icon={faMusic} className='icons col-icons' /> */}
          Mytube Music
        </div>
        <div className='sidebar-content '>
        <TbBrandYoutubeKids className='icons col-icons'/>
          {/* <FontAwesomeIcon icon={faClapperboard} className='icons col-icons' /> */}
          Mytube Kids
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
          <FontAwesomeIcon icon={faExclamationCircle} className='icons' />
          Send Feedback
        </div>
      </div>

      <hr />

      <div className="sidebar-section">
        <br />
        <p>About Press Copyright Contact us Creator Advertise Developers</p>
        <br />
        <p>Terms PrivacyPolicy & SafetyHow MyTube worksTest new features</p>
        <br />
        <p id='copyright'>© 2023 Inzamam-Raiyaan</p>
      </div>
    </div>
    </div>
  )
}

export default Sidebar