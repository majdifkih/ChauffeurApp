import React from "react";
import "./PopupAdd.scss";
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
function PopupAdd(props){
    return (props.trigger) ? (
        <div className="popupclient">
            <div className="popup-innerclient">
            <h3> Add New Client</h3>
                <div className="formulerclient">
                <div className="formleft">
                <div className="form">
            <label for="nameclient"/>Store Name 
            <div className="formicon">
            <StorefrontIcon className="iconclient" fontSize="small"/> <div className="formclient"><input type="text" placeholder="Enter Store" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameclient"/>Quantity
            <div className="formicon">
            <ProductionQuantityLimitsOutlinedIcon className="iconclient" fontSize="small"/><div className="formclient"><input type="text" placeholder="Enter Quantity" /></div>
            </div>
            </div>
            </div>
            <div className="formright">
            
            <div className="form">
            <label for="nameclient"/>Price
            <div className="formicon">
            <AttachMoneyOutlinedIcon className="iconclient" fontSize="small"/><div className="formclient"><input type="text" placeholder="Enter Price" /></div>
            </div>
            </div>
            <div className="form">
            <label for="nameclient"/>Total
            <div className="formicon">
            <PointOfSaleIcon className="iconclient" fontSize="small"/><div className="formclient"><input type="text" placeholder="Enter Total" /></div>
            </div>
            </div>
            </div>
            </div>
                <div className="buttonpopclient">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btnaddclient" onClick={() => props.setTrigger(true)} >Add</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default PopupAdd;