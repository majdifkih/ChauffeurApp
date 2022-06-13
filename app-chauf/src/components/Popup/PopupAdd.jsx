import React, { useState } from "react";
import "./PopupAdd.scss";

import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import InventoryIcon from '@mui/icons-material/Inventory';
function PopupAdd(props){

    const addProduct = (r,p,q,InventoryQ,id) => {
        if (q >= InventoryQ) {
            console.log("quantity is greater than the quantity limit");
        }else{
        props.setData(current => [...current ,{name:r,price:p*q,quantity:q,id:id}])}}
    const[factproduct,setfactproduct]=React.useState("");
    const[qproduct,setQproduct]=React.useState(false);

    return (props.trigger) ? (
        <div className="popupclient">{(props.ro).map((row) => (
            <div className="popup-innerclient">
            <h3>Add command</h3> 
                <div className="formulerclient">
                <div className="formleft">
                <div className="form">
           
          
            <label for="nameclient"/>Product 
            
            <div className="formselect"><InventoryIcon className="iconproduct" fontSize="small"/><select id="select" className="select" onChange={(event)=> {
      setfactproduct(event.target.value);
    }} >
                <option selected>Choose Product</option>
                <option >{row.productName}</option>
                
                </select>
                
                </div>  
            
            </div>
            <div className="form">
            <label for="nameclient"/>Quantity
            <div className="formicon">
            <ProductionQuantityLimitsOutlinedIcon className="iconclient" fontSize="small"/><div className="formclient"><input type="text"  max={row.productQuantity} onChange={(event)=> {setQproduct(event.target.value);}}  /></div>
            </div>
            </div>
            </div>
            <div className="formright">
            
            <div className="form">
            <label for="nameclient"/>Price
            <div className="formicon">
            <AttachMoneyOutlinedIcon className="iconclient" fontSize="small"/><div className="formclient"><input type="text" placeholder={row.productPrice} /> 
            </div>
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
                <button className="btnaddclient" onClick={() => addProduct(factproduct,row.productPrice,qproduct,row.productQuantity,row._id)} >Add</button>
                </div>
             
            </div>
            )
            )}
        </div>
    ) : "";
}
export default PopupAdd;