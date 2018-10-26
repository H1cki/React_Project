
import React from 'react';
import "../style/signup.css"

const Input = ({type,value,onChange,placeholder}) => {
    return <input className="form-control" type={type} value={value} onChange={onChange} placeholder={placeholder}  required />;
  }
  export default Input;