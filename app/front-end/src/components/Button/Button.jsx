import React from 'react'

function Button(props) {
  const { children, click } = props;

  return (
      <button type="button" onClick={ click }>{ children }</button>
  )
}

export default Button
