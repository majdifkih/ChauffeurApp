import React, { useState } from "react";
import "./PopupAdd.scss";
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import InventoryIcon from '@mui/icons-material/Inventory';
function PopupAdd(props){

    const addProduct = (r,p,q,InventoryQ,id) => {
        console.log(r,p,q,InventoryQ,id)
        console.log(factproduct)
        if (q >= InventoryQ) {
            console.log("quantity is greater than the quantity limit");
        }else{
        props.setData(current => [...current ,{name:r,price:p*q,products:id,quantity:q}])}}
    const[factproduct,setfactproduct]=React.useState([]);
    const[qproduct,setQproduct]=React.useState(false);




    return (props.trigger) ? (


        
        <div className="popupclient">
            <div className="popup-innerclient" >
            <h3>Add command</h3>
                <div className="formulerclient">
                <div className="formleft">
                <div className="form">
            
            <label for="nameclient"/>Product 
            <div className="formselect"><InventoryIcon className="iconproduct" fontSize="small"/><select  id="select" className="select" onChange={(event)=> {
                console.log(props.ro)
                const list = props.ro.filter((val)=>  val.productName == event.target.value)
                
      setfactproduct(list);
    }} >
                <option selected>Choose Product</option>
                {(props.ro).map((row) => (
                <option value={row._id} key={row._id}>{ row.productName}</option>
                )
                )}
                </select>
                
                </div>
            
            </div>
            
            </div>
            <div className="formright">
            <div className="form">
            <label for="nameclient"/>Quantity
            <div className="formicon">
            <ProductionQuantityLimitsOutlinedIcon className="iconclient" fontSize="small"/><div className="formclient"><input type="text" placeholder="Enter Quantity" max={factproduct.productQuantity} onChange={(event)=> {setQproduct(event.target.value);}} /></div>
            </div>
            </div>
            
            
            </div>
            </div>
                <div className="buttonpopclient">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btnaddclient" onClick={() => addProduct(factproduct[0].productName,factproduct[0].Price,qproduct,factproduct[0].Quantity,factproduct[0]._id)} >Add</button>
                
                </div>
             
                </div>

               
                    
        </div>
    ) : "";
}
export default PopupAdd;




    //    JSONDATA.filter((val)=>{
    //     if(searchTerm ==""){
    //       return val
    //     }else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
    //       return val
    //   }
    //      map((val,key)=>{
    //     return(
    //       <div className="user"key={key}>
    //         <p>{val.first_name}</p>
    //       </div>
    //     );
    //   })})