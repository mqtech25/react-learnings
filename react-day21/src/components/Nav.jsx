import React from 'react'
import { useContext } from 'react'
import { themModeContext } from '../themContext/ThemContext';
function Nav() {
    const [themeMode,setThemeMode] = useContext(themModeContext)
  return (
    <div className="nav flex flex-wrap gap-5">
    <a href='/' className='hover:text-green-300'>Home</a>
    <a href='/about' className='hover:text-green-300'>About</a>
    <a href='/contact' className='hover:text-green-300'>Contact</a>
    <a href='/product' className='hover:text-green-300'>Product</a>
    <a href='/course' className='hover:text-green-300'>Course</a>
    <button className='hover:text-green-300 border-2 px-2 transition duration-300 cursor-pointer' onClick={()=>{
        setThemeMode((preThem)=>{return preThem == 'light' ? 'dark':'light'})
    }}>{themeMode}</button>
    </div>
  )
}

export default Nav