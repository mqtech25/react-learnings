import React from 'react'

function TextareaInput(props) {
  return (
    
    <textarea className='formAreaInput border-black text-black border-2 p-3 py-1 w-full my-3 rounded-md focus:bg-gray-100' name="" placeholder='Description' id="" cols="30" rows="10" value={props.value} onChange={props.onChange}></textarea>
  )
}

export default TextareaInput