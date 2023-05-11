import React from 'react';
import './Button.css';

function Button(props) {
  const { children, click } = props;

  return (
      <button className="Buttons" type="button" onClick={ click }>{ children }</button>
  )
}

export default Button
