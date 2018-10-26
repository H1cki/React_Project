import React from 'react';
import "../style/signup.css"

const Button  = ({className,type,text,onClick}) => {
    return <button className={className} type={type} onClick={onClick}>{text}  </button>
  }
  export default Button;
