import React from 'react';
import './css/Input.css';

const Input = ({defaultValue}) => {
  return (
      <input type="text" className="Input" placeholder={defaultValue} />
    
  );
};

export default Input;