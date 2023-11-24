import React from "react";
import "./Sidebar.css";
import SidebarItem from "./components/SidebarItem";
import HomeIcon from "./icons/HomeIcon";
import DownloadsIcon from "./icons/DownloadsIcon";
import ExporeIcon from "./icons/ExporeIcon";
import HistoryIcon from "./icons/HistoryIcon";
import LibraryIcon from "./icons/LibraryIcon";
import LikedVideos from "./icons/LikedVideos";
import SubscriptionsIcon from "./icons/SubscriptionsIcon";
import ShortsIcon from "./icons/ShortsIcon";
import YoutubeMusicIcon from "./icons/YoutubeMusicIcon";
import YourVideosIcon from "./icons/YourVideosIcon";
import WatchLaterIcon from "./icons/WatchLaterIcon";
import Logo from "./headers/Logo";



// import axios from "./API/axios";


function Sidebar({ isOpen }) {



//   axios.post('/user/signup',{
//     "name" :"ron",
//     "email" : "ronbonnke789@gmail.com",
//     "password" : "bonnke2002",
//     "appType" : "youtube",
// })


  const sidebarItems = [
    {
      svg:HomeIcon,
      name: "Home",
      links:"/"
    },
    {
      svg:ShortsIcon,   
      name: "Shorts",
      links:"/comingsoon"
    },
    
    {
      svg:YourVideosIcon,
      name: "Your Videos",
      links:"/comingsoon"
    },
    {
      svg: WatchLaterIcon,
      name: "watch later",
      links:"/watchlist"
    },
    {
      svg: SubscriptionsIcon,
      name: "Subscriptions",
      links:"/comingsoon"
    },
    {
      svg: LibraryIcon,
      name: "Library",
      links:"/comingsoon"
    },
    {
      svg: LikedVideos,
      name: "Liked Videos",
      links:"/comingsoon"
    },
    {
      svg: YoutubeMusicIcon,
      name: "Youtube Music",
      links:"/comingsoon"
    },
    {
      svg: DownloadsIcon,
      name: "Downloads",
      links:"/comingsoon"
    },
    {
      svg: ExporeIcon,
      name: "Expore",
      links:"/comingsoon"
    },
    {
      svg: HistoryIcon,
      name: "History",
      links:"/comingsoon"
    },
    {
      svg: Logo
    }
  
  ]



  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      {sidebarItems.map((item) => (
        <SidebarItem item={item} />
      ))}
    </div>
  );
  
  
}
export default Sidebar;
