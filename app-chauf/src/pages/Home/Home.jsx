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
import { Link,useParams } from "react-router-dom";
import axios from "axios";
import DescriptionIcon from '@mui/icons-material/Description';
import { useEffect,useState } from "react";
import { StyledEngineProvider } from "@mui/material";
const Home = ( ) => {
  
  return (
    <div className="homemain">
          <div className="side"><Sidebar/></div>
      <div className="home">
        <Navbar/>
        <div className="home-center">
      <div className="cards">
     <div className="linecard"> 
        <Link to="/addstore" style={{ textDecoration: 'none' }}><div className="cardstore"><AddBusinessIcon  className="iconcard"/><div className="titlecard">AddStore </div></div></Link>
        <Link to="/deliverylist" style={{ textDecoration: 'none' }}> <div className="cardvehicule"><LocalShippingIcon className="iconcard"/><div className="titlecard"><div>Deliverys</div></div></div></Link>
     </div>
       <div className="linecard">
       <Link to="/inventory" style={{ textDecoration: 'none' }}><div className="cardinvetory"><InventoryIcon className="iconcard"/><div className="titlecard">Inventory</div></div></Link>
       <Link to="/facture" style={{ textDecoration: 'none' }}>  <div className="cardadd"><DescriptionIcon className="iconcard"/><div className="titlecard">Invoice</div></div></Link>
       </div>
       <div className="linecardend">
       <Link to="/history" style={{ textDecoration: 'none' }}>  <div className="cardhistory"><RestoreIcon className="iconcard"/><div className="titlecard">InvoiceHistory </div></div></Link>
       <Link to="/qrscanner" style={{ textDecoration: 'none' }}>  <div className="cardscan"><CropFreeIcon className="iconcard"/><div className="titlecard">ScanCode </div></div></Link>
       </div>
    
      </div>
      </div>
      </div>

    </div>
  );
};

export default Home;
