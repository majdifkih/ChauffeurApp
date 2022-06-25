import React, { useState } from 'react';
import './sidebar.scss'
import log from './qlog1.jpg'
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import DescriptionIcon from '@mui/icons-material/Description';
import LogoutIcon from '@mui/icons-material/Logout';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InventoryIcon from '@mui/icons-material/Inventory';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CropFreeIcon from '@mui/icons-material/CropFree';
import RestoreIcon from '@mui/icons-material/Restore';
// import {FaBars}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/home",
            name:"Home",
            icon:<HomeIcon className="iconlist" sx={{ fontSize: 65 }}/>
        },
        {
            path:"/addstore",
            name:"Add Store",
            icon:<AddBusinessIcon sx={{ fontSize: 65 }}/>
        },
        {
            path:"/deliverylist",
            name:"Deliverys",
            icon:<LocalShippingIcon sx={{ fontSize: 65 }}/>
        },
        {
            path:"/inventory",
            name:"Inventory",
            icon:<InventoryIcon sx={{ fontSize: 65 }}/>
        },
        {
            path:"/facture",
            name:"Invoice",
            icon:<DescriptionIcon sx={{ fontSize: 65 }}/>
        },
        {
            path:"/history",
            name:"Invoice History",
            icon:<RestoreIcon sx={{ fontSize: 65 }}/>
        },
        {
          path:"/qrscanner",
          name:"Scan Code",
          icon:<CropFreeIcon sx={{ fontSize: 65 }}/>
      },
      {
        path:"/logout",
        name:"Log out",
        icon:<LogoutIcon sx={{ fontSize: 65 }}/>
    }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "500px" : "120px"}} className="sidebar">
               <div className="top_section" style={{paddingTop: isOpen ? "15%" : "53%"}}>
               <div style={{paddingLeft: isOpen ? "75%" : "20%"}} className="bars">
                       {/* <FaBars onClick={toggle}/> */}<i class="fa fa-bars" aria-hidden="true"  onClick={toggle}></i>
                   </div>
                   <div style={{display: isOpen ? "block" : "none"}} className="logo"><img
              src={log}
              className="circle"
              width="400"
              height="120"
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