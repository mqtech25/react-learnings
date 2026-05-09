import React from 'react'
import { useState } from 'react'

// 1 day learn folder and react flow
// 2 day learn component
// 3 day learn props(properties)
// 4 day learn mini company card project objects
// 5 day learn css module 
// 6 day learn tailwindCss install
// 7 day UI design learn (feature base folder sturcture / atomic base folder structure)
// In feature base like header, body, footer saperate component while in atomic base each and every thing have saperate component
// 8 day function call
// 9 day use hooks

function App() {

  let [num, setNum] = useState(0)

  const counter = ()=>{
      setNum(num+1)
  }
  const reset =()=>{
    setNum(0)
  }
  
  return (
    <div>
        <h1 style={{textAlign:'center',fontSize:'48px',marginBottom:'20px'}}>{num}</h1>
      <button onClick={counter}  style={{fontSize:'28px',margin:'20px auto',display:'block'}}>Count</button>
      <button onClick={reset}  style={{fontSize:'28px',margin:'20px auto',display:'block'}}>Reset</button>
    </div>
  )
}

export default App