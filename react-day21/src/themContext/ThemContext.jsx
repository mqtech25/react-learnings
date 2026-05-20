import React from 'react'
import { createContext } from 'react'
import { useState } from 'react';

export   const themModeContext = createContext();

function ThemContext(props) {

 const [themeMode, setThemeMode] = useState('Light')


  return (
    <div>
        <themModeContext.Provider value={[themeMode,setThemeMode]}>
            {props.children}
        </themModeContext.Provider>
    </div>
  )
}

export default ThemContext