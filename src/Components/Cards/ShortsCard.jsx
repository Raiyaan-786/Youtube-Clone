import React from 'react'
import "./ShortsCard.css"
const ShortsCard = () => {
  return (
    <div className='ShortCardContainer'>
        <div className='ShortCardImg'>
            <img src="https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div className='ShortCardContent'>
            <h5>Grumpy cat's meow is so cute #shorts #funny</h5>
            <p>3.3M views</p>
        </div>
    </div>
  )
}

export default ShortsCard