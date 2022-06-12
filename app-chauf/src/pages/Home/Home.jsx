import "./Home.scss";
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
const Home = ( ) => {

  return (
    <div className="homemain">
      <Sidebar/>
      <div className="home">
        <Navbar/>
      <div className="cards">
     <div className="linecard"> 
        <div className="cardstore"><AddBusinessIcon  className="iconcard"/><div className="titlecard">Add Store</div></div>
        <div className="cardvehicule"><LocalShippingIcon className="iconcard"/><div className="titlecard">Purchase Orders</div></div>
     </div>
       <div className="linecard">
       <div className="cardinvetory"><InventoryIcon className="iconcard"/><div className="titlecard">Inventory</div></div>
        <div className="cardadd"><AddCircleOutlineIcon className="iconcard"/><div className="titlecard">Add Order</div></div>
       </div>
       <div className="linecard">
       <div className="cardhistory"><RestoreIcon className="iconcard"/><div className="titlecard">Invoice History</div></div>
        <div className="cardscan"><CropFreeIcon className="iconcard"/><div className="titlecard">Scan Code</div></div>
       </div>
    
      </div>
      
      </div>

    </div>
  );
};

export default Home;
