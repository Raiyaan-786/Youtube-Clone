import React from 'react'
import "./MainCard.css"

const MainCard = () => {
  return (
    <div className='CardContainer'>
        <div className="CardImg">
            <img src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg" alt="" />
        </div>
        <div className="CardContent">
            <div className="CardProfile">
                <img src="https://images.pexels.com/photos/13883889/pexels-photo-13883889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className="CardInfo">
                <h5>Promo BiggBoss 17 Munawar Faruqui</h5>
                <p>The Khabri</p>
                <p>63K views &#183; 57 minutes ago</p>
            </div>
        </div>
    </div>
  )
}

export default MainCard