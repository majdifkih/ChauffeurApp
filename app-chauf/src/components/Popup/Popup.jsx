import React from "react";
import "./Popup.scss";

function Popup(props){
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
            <p> Are you sure to delete the item?</p>
                <div className="buttonpop">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
                <button className="btnlog" onClick={() => props.setTrigger(true)} >Logout</button>
                </div>
                
            </div>

        </div>
    ) : "";
}
export default Popup;