import React, { useState } from 'react';
import './sidebar.scss'
import log from './qlog1.jpg'
import HomeIcon from '@mui/icons-material/Home';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StoreIcon from '@mui/icons-material/Store';
import InventoryIcon from '@mui/icons-material/Inventory';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import LogoutIcon from '@mui/icons-material/Logout';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Accueil",
            icon:<HomeIcon className="iconlist"/>
        },
        {
            path:"/deviceinfo",
            name:"Fleet and Devices",
            icon:<LocalShippingIcon />
        },
        {
            path:"/fleet",
            name:"Fleet Tracking",
            icon:<GpsFixedIcon />
        },
        {
            path:"/store",
            name:"Stores",
            icon:<StoreIcon />
        },
        {
            path:"/inventory",
            name:"Inventory",
            icon:<InventoryIcon />
        },
        {
            path:"/storetable",
            name:"Clients",
            icon:<GroupIcon />
        },
        {
          path:"/devicelist",
          name:"Users",
          icon:<AccountCircleIcon />
      },
      {
        path:"/logout",
        name:"Log out",
        icon:<LogoutIcon />
    }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "256px" : "50px"}} className="sidebar">
               <div className="top_section" style={{paddingTop: isOpen ? "15%" : "53%"}}>
               <div style={{paddingLeft: isOpen ? "75%" : "20%"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
                   <div style={{display: isOpen ? "block" : "none"}} className="logo"><img
              src={log}
              className="circle"
              width="200"
              height="40"
              alt=""
            /></div>
                  
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           
        </div>
    );
};

export default Sidebar;