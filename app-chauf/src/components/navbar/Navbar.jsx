import "./navbar.scss";

import img from "./photo.jpg"

import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Navbar = () => {
  

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          
         
        </div>
        <div className="items">
          
         
     
          
          <div className="item">
            <span>{localStorage.getItem('user')}</span>
          </div>
          <div className="item">
         <AccountCircleIcon  sx={{ fontSize: 40 }}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
