import React from 'react';
import "./SliderFeed.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faBars, faBell, faVideoCamera } from "@fortawesome/free-solid-svg-icons";
const SliderFeed = () => {
return(
    <div className='slider-feed'>
    <div className="nav-icons"><FontAwesomeIcon icon={faAngleLeft} size="lg" /></div>
    <div className="feed-items">
        <div className='feed-item feed-item-active'>All</div>
        <div className='feed-item'>Music</div>
        <div className='feed-item'>Live</div>
        <div className='feed-item'>News</div>
        <div className='feed-item'>Mixes</div>
        <div className='feed-item'>C++</div>
        <div className='feed-item'>Marvel</div>
        <div className='feed-item'>Cars</div>
        <div className='feed-item'>Accounting</div>
        <div className='feed-item'>Physics</div>
        <div className='feed-item'>Cooking Show</div>
        <div className='feed-item'>Gadgets</div>
        <div className='feed-item'>Recently Uploaded</div>
        <div className='feed-item'>Watched</div>
        <div className='feed-item'>New to you</div>
     </div>
    <div className="nav-icons"><FontAwesomeIcon icon={faAngleRight} size="lg" /></div>
    
    </div>
)
}
export default SliderFeed