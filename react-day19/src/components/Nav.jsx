import React from 'react'
import { useNavigate } from 'react-router-dom'

function Nav() {
   const navigate = useNavigate();
  return (
    <div className='flex flex-wrap justify-between bg-black text-white px-5 py-3'>
        <button className='px-4 py-2 bg-green-400 text-black cursor-pointer' onClick={()=>{
            navigate(-1)
        }}>Back Page</button>
        <button className='px-4 py-2 bg-green-400 text-black cursor-pointer' onClick={()=>{
            navigate(+1)
        }}>Next Page</button>
    </div>
  )
}

export default Nav