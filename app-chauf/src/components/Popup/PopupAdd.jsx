import React, { useState } from "react";
import "./PopupAdd.scss";
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import InventoryIcon from '@mui/icons-material/Inventory';
function PopupAdd(props){

    const addProduct = (r,p,q,InventoryQ,id) => {
       
        
        console.log(r,p,q,InventoryQ,id)
        console.log(factproduct)
        if (q > InventoryQ) {
            console.log("quantity is greater than the quantity limit");
        }else{
        props.setData(current => [...current ,{name:r,price:p*q,products:id,quantity:q}])}}
    
    const[factproduct,setfactproduct]=React.useState([]);
    const[qproduct,setQproduct]=React.useState(false);




    return (props.trigger) ? (


        
        <div className="popupclient">
            <div className="popup-innerclient" >
            <h1>Add command</h1>
                <div className="formulerclient">
                <div className="formleft">
                <div className="form">
            
            <label for="nameclient"/>Product 
            <div className="formselect"><InventoryIcon className="iconproduct" sx={{ fontSize: 40 }}/><select  id="select" className="select" onChange={(event)=> {
                console.log(props.ro)
                
                const list = props.ro.filter((val)=>  val.products._id == event.target.value)
                console.log(list)
      setfactproduct(list);
    }} >
                <option disabled selected>Choose Product</option>
                {(props.ro).map((row) => (
                <option value={row.products._id} key={row.products._id}>{ row.products.productName}</option>
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
            <ProductionQuantityLimitsOutlinedIcon className="iconclient" fontSize="small"/><div className="formclient"><input type="number" placeholder="Enter Quantity" max={factproduct.productQuantity} onChange={(event)=> {setQproduct(event.target.value);}} /></div>
            </div>
            </div>
            
            
            </div>
            </div>
                <div className="buttonpopclient">
                <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btnaddclient" onClick={() => addProduct(factproduct[0].products.productName,factproduct[0].products.productPrice,qproduct,factproduct[0].products.productQuantity,factproduct[0].products._id)} >Add</button>
                
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