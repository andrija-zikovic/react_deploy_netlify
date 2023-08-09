import React from 'react'

const Window = ({ color }) => {
  const windowStyle = {
    backgroundColor: color,
  };

  return (
    <div className='window' style={windowStyle}><p>{color || 'Empty Value'}</p></div>
  )
}

export default Window;