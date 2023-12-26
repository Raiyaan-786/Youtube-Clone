import React from 'react'
import './Home.css'
import MainCard from '../../Components/Cards/MainCard'
import ShortsCard from '../../Components/Cards/ShortsCard'
import SliderFeed from '../../components/SliderFeed/SliderFeed'
const Home = (props) => {
  return (
    <div className='home-container'>
      <div>
        <SliderFeed openSidebar = {props.openSidebar}/>
      </div>
      <div className='home-items'>
        <MainCard/>
        <MainCard/>
        <MainCard/>
      </div>
      <div className='shorts-items'>
        <ShortsCard/>
        <ShortsCard/>
        <ShortsCard/>
        <ShortsCard/>
        <ShortsCard/>
      </div>
    </div>
  )
}
export default Home