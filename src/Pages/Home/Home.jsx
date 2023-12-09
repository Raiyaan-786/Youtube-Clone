import React from 'react'
import './Home.css'
import DefaultSidebar from '../../Components/DefaultSidebar/DefaultSidebar'
import SliderFeed from '../../components/SliderFeed/SliderFeed'
const Home = () => {
  return (
    <div className='home-container'>
        <div className="home-left">
          <DefaultSidebar/>
        </div>
        
        <div className="home-right">
        <SliderFeed/>
            home
        </div>
        
    </div>
  )
}
export default Home