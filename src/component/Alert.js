import React from "react";

function Alert(props) {
  const capitalizer =(word)=>{
    const letter=word.toLowerCase();
    return letter.charAt(0).toUpperCase()+letter.slice(1);
  }
  return (
    <div style={{height:'6vh', width:'20vw'}} className="position-absolute top-0 start-50">
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" >
    <strong>{capitalizer(props.alert.type)}</strong>: {props.alert.msg}
  </div>}
    </div>
  );
}

export default Alert;
