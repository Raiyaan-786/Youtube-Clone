import React from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
const Home = () => {
  return (
    <div className='home-container'>
        <div className="home-left">
            <Sidebar/>
        </div>
        <div className="home-right">
            Home
        </div>
    </div>
  )
}

export default Home