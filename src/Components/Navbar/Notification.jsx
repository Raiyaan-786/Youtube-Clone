import React from 'react'
import './Notification.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from '@fortawesome/free-solid-svg-icons';
import NotificationItem from './NotificationItem';
export default function Notification({notifications}) {

  const notificationdata =
    [
    {watched:false, time:"6 days ago", channel:"Molana Tariq Jamil", title:"Friday Special Bayan | Molana Tariq Jamil", time:"6 days ago", img1:"/extraimages/np-image5.jpeg", img2:"/extraimages/n-image6.jpeg"},

    {watched:false, time:"5 hrs ago",  channel:"NDTV India", title:"BJP पदाधिकारियों की बैठक में PM Modi ने सुनी सबकी बात, चुनाव में जुटने का किया आह्वान", img1:"/extraimages/np-image4.png", img2:"/extraimages/n-image7.jpeg"},

    {watched:true, time:"7 mins ago", channel:"NDTV India", title:"'Motivational Speaker' Vivek Bindra पर शादी के कुछ घंटों बाद ही पत्नी को पीटने का आरोप", img1:"/extraimages/np-image4.png", img2:"/extraimages/n-image4.jpeg"},

    {watched:false, time:"5 hrs ago",  channel:"NDTV India", title:"BJP पदाधिकारियों की बैठक में PM Modi ने सुनी सबकी बात, चुनाव में जुटने का किया आह्वान", img1:"/extraimages/np-image4.png", img2:"/extraimages/n-image7.jpeg"},

    {watched:false, time:"3 days ago", channel:"ComicVerse", title:"CAZUAL AVENGERS!✨What IF S2 E1 & 2 Breakdown", img1:"/extraimages/np-image1.jpeg", img2:"/extraimages/n-image2.jpeg"},

    {watched:true, time:"1 days ago",  channel:"Men Of Culture", title:"DUNKI vs. SALAAR Disappointed - MEN OF CULTURE 108", img1:"/extraimages/np-image3.jpeg", img2:"/extraimages/n-image5.jpeg"},

    {watched:true, time:"3 days ago",  channel:"ComicVerse", title:"Marvel's Darkest Timeline! - Wastelanders", img1:"/extraimages/np-image1.jpeg", img2:"/extraimages/n-image1.jpeg"}

 
    ]
  return (
    <div className="notification-menu" style={{display:notifications?"block":"none"}}>

       <div className="n-menu-header">
         <p>Notifications</p> 
         <div id='n-gear-icon'>
         <FontAwesomeIcon icon={faGear} size="lg" />
         </div>
       </div>

       <div className="n-menu-items">
          {notificationdata.map((item)=><NotificationItem 
          watched={item.watched} 
          img1={item.img1}
          channel={item.channel} 
          title={item.title} 
          time={item.time} 
          img2={item.img2}/>)}
          
          {notificationdata.map((item)=><NotificationItem 
          watched={item.watched} 
          img1={item.img1}
          channel={item.channel} 
          title={item.title} 
          time={item.time} 
          img2={item.img2}/>)}

          {notificationdata.map((item)=><NotificationItem 
          watched={item.watched} 
          img1={item.img1}
          channel={item.channel} 
          title={item.title} 
          time={item.time} 
          img2={item.img2}/>)}
       </div>

    </div>
  )
}
