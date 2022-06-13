import React from "react";
import "./PopupAdd.scss";
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import InventoryIcon from '@mui/icons-material/Inventory';
function PopupAdd(props){
    const[factproduct,setfactproduct]=React.useState(false);
    return (props.trigger) ? (
        <div className="popupclient">
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
                <option>Reguler</option>
                <option>NonReg</option>
                </select>
                
                </div>
            
            </div>
            
            </div>
            <div className="formright">
            <div className="form">
            <label for="nameclient"/>Quantity
            <div className="formicon">
            <ProductionQuantityLimitsOutlinedIcon className="iconclient" fontSize="small"/><div className="formclient"><input type="text" placeholder="Enter Quantity" /></div>
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