import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
             <div className="logo-div flex flex-wrap justify-between bg-black text-white px-5 py-3">
            <h2>Code {'{}'} School</h2>
            <div className="nav flex flex-wrap gap-5">
                <Link to={'/'} className='hover:text-green-300'>Home</Link>
                <Link to={'/about'} className='hover:text-green-300'>About</Link>
                <Link to={'/contact'} className='hover:text-green-300'>Contact</Link>
                <Link to={'/product'} className='hover:text-green-300'>Product</Link>
                <Link to={'/course'} className='hover:text-green-300'>Course</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar