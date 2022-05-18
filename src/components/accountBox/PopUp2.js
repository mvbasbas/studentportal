import React from "react";
import "./popup.css";

const Popup = props => {
  return (
    <div className="popup-box2">
      <div className="box2">
        <span className="close-icon2" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};
 
export default Popup;