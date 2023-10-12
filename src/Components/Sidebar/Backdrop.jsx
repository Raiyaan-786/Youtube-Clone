import React from 'react'
import './Sidebar.css'

const Backdrop = ({Click,openSidebar}) => {
  return (
    <div className={openSidebar? "backdrop backdrop-open":"backdrop"} onClick={Click}>
        
    </div>
  )
}

export default Backdrop