import "./sidebar.scss";
import { Link } from "react-router-dom";
import log from './qlog1.jpg'
import HomeIcon from '@mui/icons-material/Home';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StoreIcon from '@mui/icons-material/Store';
import InventoryIcon from '@mui/icons-material/Inventory';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
 
  return (
    <div id="wrapper" className="toggled">
        <div id="sidebar-wrapper">
        
          <ul className="sidebar-nav">
            <br />
            <br />
            &nbsp; &nbsp; &nbsp;
            <img
              src={log}
              className="circle"
              width="200"
              height="40"
              alt=""
            />
            <br />
            <br />
            <li>
            <Link to="/" >
            <HomeIcon className="iconlist" fontSize="small"/> Accueil
                </Link>
            </li>
            <li>
            <Link to="/deviceinfo" >
           <LocalShippingIcon className="iconlist" fontSize="small"/> Fleet and Devices
                </Link>
            </li>
            <li>
            <Link to="/fleet">
                   
            <GpsFixedIcon className="iconlist" fontSize="small"/> Fleet Tracking</Link>
               
            </li>
            <li>
            <Link to="/store" >
            <StoreIcon className="iconlist" fontSize="small"/> Stores
                </Link>
            </li>
            <li>
            <Link to="/inventory" >
            <InventoryIcon className="iconlist" fontSize="small"/> Inventory
                </Link>
            </li>
            <li>
              <Link to="/storetable" >
              <GroupIcon className="iconlist" fontSize="small"/> Clients
              </Link>
            </li>
            <li>
           
              <Link to="/devicelist" >
              <AccountCircleIcon className="iconlist" fontSize="small"/> Users
                </Link>
            </li>
           
            <li>
            <Link to="/logout" >
            <LogoutIcon className="iconlist" fontSize="small"/> Log out
              </Link>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default Sidebar;
