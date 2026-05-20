import React from 'react'
import Nav from './Nav'

function Navbar() {
     
  return (
    <div>
             <div className="logo-div flex flex-wrap justify-between bg-black text-white px-5 py-3">
            <h2>Code {'{}'} School</h2>
                 <Nav />
        </div>
    </div>
  )
}

export default Navbar