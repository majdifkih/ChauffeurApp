import "./AddStore.scss";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { color } from "@mui/system";
const AddStore = ( ) => {

  return (
    <div className="storemain">
      <Sidebar/>
      <div className="store">
        <Navbar/>
      <div className="inputs">
        <div className="headstore">
          <Link to="/" style={{textDecoration:"none",color:"#8a8888"}}> Home</Link> <div>-</div> <div>Add</div> <div>Store</div>
        </div>
        <AddBusinessIcon sx={{ fontSize: 100 }} className="Iconhead"/>
        <div className="form">
            <label for="namea" className="label"/> <div className="label">StoreName</div>
            <div className="formicon">
            <StorefrontIcon className="icona" sx={{ fontSize: 40 }}/><div className="forma"><input type="text" placeholder="Enter Store"/></div>
            </div>
            </div>
            <div className="form">
            <label for="namea" className="label"/><div className="label">Position</div>
            <div className="formbtn">
            <AddLocationIcon className="icona" sx={{ fontSize: 40 }}/><button  className="btnstore"> Get Current Position</button>
            </div>
            </div>
            <div className="form">
            <label for="namea" className="label"/> <div className="label">Contact</div>
            <div className="formicon">
            <MailOutlineIcon  className="icona" sx={{ fontSize: 40 }}/><div className="forma"><input type="text" placeholder="Enter Contact"/></div>
            </div>
            </div>
            <div className="form">
            <label for="namea" /><div className="label">Type</div>
            <div className="formicon">
            <LocalOfferOutlinedIcon className="icona" sx={{ fontSize: 40 }}/><div className="forma"><input type="text" placeholder="Enter Type"/></div>
            </div>
            </div>
            <div className="form">
            <label for="namea" className="label"/> <div className="label">StoreOwner</div>
            <div className="formicon">
            <PersonOutlineIcon className="icona" sx={{ fontSize: 40 }}/><div className="forma"><input type="text" placeholder="Enter Owner"/></div>
            </div>
            </div>


            
      </div>
      <div  className="btn">
          <button className="btncancel">Cancel</button>
          <button className="btnadd">Add</button>
        
      </div>
      </div>

    </div>
  );
};

export default AddStore;
