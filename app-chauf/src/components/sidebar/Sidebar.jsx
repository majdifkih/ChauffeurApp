import React, { useState } from 'react';
import './sidebar.scss'
import log from './qlog1.jpg'
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import LogoutIcon from '@mui/icons-material/Logout';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InventoryIcon from '@mui/icons-material/Inventory';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CropFreeIcon from '@mui/icons-material/CropFree';
import RestoreIcon from '@mui/icons-material/Restore';
import {FaBars}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<HomeIcon className="iconlist" sx={{ fontSize: 45 }}/>
        },
        {
            path:"/addstore",
            name:"Add Store",
            icon:<AddBusinessIcon sx={{ fontSize: 45 }}/>
        },
        {
            path:"/deliverylist",
            name:"Purschase Orders",
            icon:<LocalShippingIcon sx={{ fontSize: 45 }}/>
        },
        {
            path:"/facture",
            name:"Inventory",
            icon:<InventoryIcon sx={{ fontSize: 45 }}/>
        },
        {
            path:"/facture",
            name:"Add Order",
            icon:<AddCircleOutlineIcon sx={{ fontSize: 45 }}/>
        },
        {
            path:"/history",
            name:"Invoice History",
            icon:<RestoreIcon sx={{ fontSize: 45 }}/>
        },
        {
          path:"/deliverylist",
          name:"Scan Code",
          icon:<CropFreeIcon sx={{ fontSize: 45 }}/>
      },
      {
        path:"/deliverylist",
        name:"Log out",
        icon:<LogoutIcon sx={{ fontSize: 45 }}/>
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