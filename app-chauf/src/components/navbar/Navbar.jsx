import "./navbar.scss";

import img from "./photo.jpg"

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";



const Navbar = () => {
  

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          
         
        </div>
        <div className="items">
          
         
          
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          
          <div className="item">
            <span>Majdi Fekih</span>
          </div>
          <div className="item">
            <img
              src={img}
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
