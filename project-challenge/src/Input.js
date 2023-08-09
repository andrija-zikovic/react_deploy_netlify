import React from 'react'

const Input = ({ setNewColor }) => {
  const handleInputChange = (e) => {
    setNewColor(e.target.value);
  }

  return (
    <form>
      <input 
        id='input'
        className='input'
        placeholder='Add color name'
        type='text'
        required
        onChange={handleInputChange}
      />
    </form>
  )
}

export default Input;