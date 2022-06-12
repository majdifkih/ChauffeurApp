import "./AddStore.scss";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InventoryIcon from '@mui/icons-material/Inventory';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CallIcon from '@mui/icons-material/Call';
import CropFreeIcon from '@mui/icons-material/CropFree';
import RestoreIcon from '@mui/icons-material/Restore';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
const AddStore = ( ) => {

  return (
    <div className="storemain">
      <Sidebar/>
      <div className="store">
        <Navbar/>
      <div className="inputs">
        <AddBusinessIcon />
        <div className="input">
        <label className="label"/>Store Name
       <AddCircleIcon className="iconinput"/> <input type="text" placeholder="Store Name" className="inputstore"/>
       </div>
       <div className="input">
        <label className="label"/>Positon
       <AddCircleIcon className="iconinput"/> <button  className="btnstore"> Get Current Position</button>
       </div>
       <div className="input">
        <label className="label"/>Contact
       <AddCircleIcon className="iconinput"/> <input type="text" placeholder="Contact " className="inputstore"/>
       </div>
       <div className="input">
        <label className="label"/>Type
       <AddCircleIcon className="iconinput"/> <input type="text" placeholder="Store Type " className="inputstore"/>
       </div>
       <div className="input">
        <label className="label"/>Store Owner
       <AddCircleIcon className="iconinput"/> <input type="text" placeholder="Store Owner " className="inputstore"/>
       </div>

      </div>
      
      </div>

    </div>
  );
};

export default AddStore;
