import React from 'react'

function Input(props) {
  return (
    <input type={props.type} className='formInput border-black border-2 p-3 rounded-md focus:bg-gray-100' placeholder={props.placeholder} />
  )
}

export default Input