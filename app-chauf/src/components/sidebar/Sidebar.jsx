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
import {FaBars}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<HomeIcon className="iconlist" sx={{ fontSize: 50 }}/>
        },
        {
            path:"/deliverylist",
            name:"Fleet and Devices",
            icon:<LocalShippingIcon sx={{ fontSize: 50 }}/>
        },
        {
            path:"/inventory",
            name:"Fleet Tracking",
            icon:<GpsFixedIcon sx={{ fontSize: 50 }}/>
        },
        {
            path:"/deliverylist",
            name:"Stores",
            icon:<StoreIcon sx={{ fontSize: 50 }}/>
        },
        {
            path:"/deliverylist",
            name:"Inventory",
            icon:<InventoryIcon sx={{ fontSize: 50 }}/>
        },
        {
            path:"/deliverylist",
            name:"Clients",
            icon:<GroupIcon sx={{ fontSize: 50 }}/>
        },
        {
          path:"/deliverylist",
          name:"Users",
          icon:<AccountCircleIcon sx={{ fontSize: 50 }}/>
      },
      {
        path:"/deliverylist",
        name:"Log out",
        icon:<LogoutIcon sx={{ fontSize: 50 }}/>
    }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "300px" : "80px"}} className="sidebar">
               <div className="top_section" style={{paddingTop: isOpen ? "15%" : "53%"}}>
               <div style={{paddingLeft: isOpen ? "75%" : "15%"}} className="bars">
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