import React from 'react'
import colorNames from 'colornames';

const Input = ({ 
  newColor, setNewColor, setHexValue, isDarkText, setIsDarkText 
  }) => {
  
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Add Color Name:</label>
      <input
        autoComplete='off'
        autoFocus 
        id='input'
        className='input'
        placeholder='Add color name'
        type='text'
        required
        value={newColor}
        onChange={(e) => {
          setNewColor(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button
        type='button'
        onClick={() => setIsDarkText(!isDarkText)}
      >
        Toggle Text Color
      </button>
    </form>
  )
}

export default Input;