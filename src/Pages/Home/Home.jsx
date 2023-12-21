import React from 'react'
import './Home.css'
import SliderFeed from '../../components/SliderFeed/SliderFeed'
import MainCard from '../../Components/Cards/MainCard'
import ShortsCard from '../../Components/Cards/ShortsCard'
const Home = () => {
  return (
    <div className='home-container'>
      <div>
        <SliderFeed/>
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