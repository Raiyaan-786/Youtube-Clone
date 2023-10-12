import React from 'react'
import './Home.css'
import DefaultSidebar from '../../Components/DefaultSidebar/DefaultSidebar'
const Home = () => {
  return (
    <div className='home-container'>
        <div className="home-left">
          <DefaultSidebar/>
        </div>
        <div className="home-right">
            Home
        </div>
    </div>
  )
}

export default Home