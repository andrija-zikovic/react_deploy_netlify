import React from 'react'

const Window = ({ newColor, hexValue, isDarkText }) => {
  const windowStyle = {
    backgroundColor: newColor,
    color: isDarkText ? "#000" : "#FFF"
  };

  return (
    <div className='window' style={windowStyle}>
      <p>{newColor ? newColor : 'Empty Value'}</p>
      <p>{hexValue ? hexValue : null}</p>  
    </div>
  )
}

export default Window;