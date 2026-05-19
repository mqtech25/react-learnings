import React from 'react'

function Navbar(props) {
    const changeMode = ()=>{
        // if(props.theme=='light'){
        //     props.setTheme('Dark')
        // }else{
        //     props.setTheme('Light')
        // }
        props.setTheme((preTheme)=>{
            return preTheme == 'light'? 'Dark' : 'light'
        })
    }
  return (
    <div>
        <h2>{props.theme}</h2>
        <button className='bg-green-400 px-3 py-2 cursor-pointer' onClick={()=>{changeMode()}}>Change Theme</button>
    </div>
  )
}

export default Navbar