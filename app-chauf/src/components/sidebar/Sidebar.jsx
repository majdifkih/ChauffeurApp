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
            path:"/deliverylist",
            name:"Accueil",
            icon:<HomeIcon className="iconlist"/>
        },
        {
            path:"/deliverylist",
            name:"Fleet and Devices",
            icon:<LocalShippingIcon />
        },
        {
            path:"/deliverylist",
            name:"Fleet Tracking",
            icon:<GpsFixedIcon />
        },
        {
            path:"/deliverylist",
            name:"Stores",
            icon:<StoreIcon />
        },
        {
            path:"/deliverylist",
            name:"Inventory",
            icon:<InventoryIcon />
        },
        {
            path:"/deliverylist",
            name:"Clients",
            icon:<GroupIcon />
        },
        {
          path:"/deliverylist",
          name:"Users",
          icon:<AccountCircleIcon />
      },
      {
        path:"/deliverylist",
        name:"Log out",
        icon:<LogoutIcon />
    }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "256px" : "45px"}} className="sidebar">
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