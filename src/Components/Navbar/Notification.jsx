import React from 'react'
import './Notification.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from '@fortawesome/free-solid-svg-icons';
import NotificationItem from './NotificationItem';
export default function Notification({notifications}) {
  return (
    <div className="notification-menu" style={{display:notifications?"block":"none"}}>

       <div className="n-menu-header">
         <p>Notifications</p> 
         <div id='n-gear-icon'>
         <FontAwesomeIcon icon={faGear} size="lg" />
         </div>
       </div>

       <div className="n-menu-items">
          <NotificationItem watched={false}img1={"/extraimages/np-image5.jpeg"} title={"Friday Special Bayan | Molana Tariq Jamil"} time={"6 days ago"} img2={"/extraimages/n-image6.jpeg"}/>
          <NotificationItem watched={false}img1={"/extraimages/np-image1.jpeg"} title={"CAZUAL AVENGERS!✨What IF S2 E1 & 2 Breakdown"} time={"3 days ago"} img2={"/extraimages/n-image2.jpeg"}/>
          <NotificationItem watched={false}img1={"/extraimages/np-image4.png"} title={"'Motivational Speaker' Vivek Bindra पर शादी के कुछ घंटों बाद ही पत्नी को पीटने का आरोप"} time={"7 mins ago"} img2={"/extraimages/n-image4.jpeg"}/>
          <NotificationItem watched={true}img1={"/extraimages/np-image3.jpeg"} title={"ComicVerse uploaded:Marvel's Darkest Timeline!💀 - Wastelanders"} time={"1 days ago"} img2={"/extraimages/n-image5.jpeg"}/>
          <NotificationItem watched={false}img1={"/extraimages/np-image4.png"} title={"BJP पदाधिकारियों की बैठक में PM Modi ने सुनी सबकी बात, चुनाव में जुटने का किया आह्वान"} time={"5 hrs ago"} img2={"/extraimages/n-image7.jpeg"}/>
          <NotificationItem watched={true}img1={"/extraimages/np-image1.jpeg"} title={"ComicVerse uploaded:Marvel's Darkest Timeline!💀 - Wastelanders"} time={"3 days ago"} img2={"/extraimages/n-image1.jpeg"}/>
         
          <NotificationItem watched={false}img1={"/extraimages/np-image5.jpeg"} title={"Friday Special Bayan | Molana Tariq Jamil"} time={"6 days ago"} img2={"/extraimages/n-image6.jpeg"}/>
          <NotificationItem watched={false}img1={"/extraimages/np-image1.jpeg"} title={"CAZUAL AVENGERS!✨What IF S2 E1 & 2 Breakdown"} time={"3 days ago"} img2={"/extraimages/n-image2.jpeg"}/>
          <NotificationItem watched={false}img1={"/extraimages/np-image4.png"} title={"'Motivational Speaker' Vivek Bindra पर शादी के कुछ घंटों बाद ही पत्नी को पीटने का आरोप"} time={"7 mins ago"} img2={"/extraimages/n-image4.jpeg"}/>
          <NotificationItem watched={true}img1={"/extraimages/np-image3.jpeg"} title={"ComicVerse uploaded:Marvel's Darkest Timeline!💀 - Wastelanders"} time={"1 days ago"} img2={"/extraimages/n-image5.jpeg"}/>
          <NotificationItem watched={false}img1={"/extraimages/np-image4.png"} title={"BJP पदाधिकारियों की बैठक में PM Modi ने सुनी सबकी बात, चुनाव में जुटने का किया आह्वान"} time={"5 hrs ago"} img2={"/extraimages/n-image7.jpeg"}/>
          <NotificationItem watched={true}img1={"/extraimages/np-image1.jpeg"} title={"ComicVerse uploaded:Marvel's Darkest Timeline!💀 - Wastelanders"} time={"3 days ago"} img2={"/extraimages/n-image1.jpeg"}/>
         
          <NotificationItem watched={false}img1={"/extraimages/np-image5.jpeg"} title={"Friday Special Bayan | Molana Tariq Jamil"} time={"6 days ago"} img2={"/extraimages/n-image6.jpeg"}/>
          <NotificationItem watched={false}img1={"/extraimages/np-image1.jpeg"} title={"CAZUAL AVENGERS!✨What IF S2 E1 & 2 Breakdown"} time={"3 days ago"} img2={"/extraimages/n-image2.jpeg"}/>
          <NotificationItem watched={false}img1={"/extraimages/np-image4.png"} title={"'Motivational Speaker' Vivek Bindra पर शादी के कुछ घंटों बाद ही पत्नी को पीटने का आरोप"} time={"7 mins ago"} img2={"/extraimages/n-image4.jpeg"}/>
          <NotificationItem watched={true}img1={"/extraimages/np-image3.jpeg"} title={"ComicVerse uploaded:Marvel's Darkest Timeline!💀 - Wastelanders"} time={"1 days ago"} img2={"/extraimages/n-image5.jpeg"}/>
          <NotificationItem watched={false}img1={"/extraimages/np-image4.png"} title={"BJP पदाधिकारियों की बैठक में PM Modi ने सुनी सबकी बात, चुनाव में जुटने का किया आह्वान"} time={"5 hrs ago"} img2={"/extraimages/n-image7.jpeg"}/>
          <NotificationItem watched={true}img1={"/extraimages/np-image1.jpeg"} title={"ComicVerse uploaded:Marvel's Darkest Timeline!💀 - Wastelanders"} time={"3 days ago"} img2={"/extraimages/n-image1.jpeg"}/>
         
          <NotificationItem watched={false}img1={"/extraimages/np-image5.jpeg"} title={"Friday Special Bayan | Molana Tariq Jamil"} time={"6 days ago"} img2={"/extraimages/n-image6.jpeg"}/>
          <NotificationItem watched={false}img1={"/extraimages/np-image1.jpeg"} title={"CAZUAL AVENGERS!✨What IF S2 E1 & 2 Breakdown"} time={"3 days ago"} img2={"/extraimages/n-image2.jpeg"}/>
          <NotificationItem watched={false}img1={"/extraimages/np-image4.png"} title={"'Motivational Speaker' Vivek Bindra पर शादी के कुछ घंटों बाद ही पत्नी को पीटने का आरोप"} time={"7 mins ago"} img2={"/extraimages/n-image4.jpeg"}/>
          <NotificationItem watched={true}img1={"/extraimages/np-image3.jpeg"} title={"ComicVerse uploaded:Marvel's Darkest Timeline!💀 - Wastelanders"} time={"1 days ago"} img2={"/extraimages/n-image5.jpeg"}/>
          <NotificationItem watched={false}img1={"/extraimages/np-image4.png"} title={"BJP पदाधिकारियों की बैठक में PM Modi ने सुनी सबकी बात, चुनाव में जुटने का किया आह्वान"} time={"5 hrs ago"} img2={"/extraimages/n-image7.jpeg"}/>
          <NotificationItem watched={true}img1={"/extraimages/np-image1.jpeg"} title={"ComicVerse uploaded:Marvel's Darkest Timeline!💀 - Wastelanders"} time={"3 days ago"} img2={"/extraimages/n-image1.jpeg"}/>
         
       </div>

    </div>
  )
}
