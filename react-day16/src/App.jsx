import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
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
// 10 day advance hook
// 11 day form handling
// 12 day two way binding in form
// 13 day note app
// 14 local storage
// 15 API
// 16 useEffect

function App() {

  const [num1,setNum1]= useState(0)
  const [num2,setNum2]= useState(0)

  const effectA = ()=>{
      console.log('A increase ho gya');
  }

  const effectB = ()=>{
    console.log('B increase ho gya');
}

  useEffect(() => {
    effectA()
  },[num1])
  
  useEffect(() => {
    effectB()
  },[num2])

  return (
   <>
    <div>App</div>
     <h3>Number1  : {num1}</h3>
     <h3>Number2  : {num2}</h3>
     <button onClick={()=>{
      setNum1(num1+1)
     }}  style={{display:'inline-block', width:'max-content', margin: '20px auto'}}>Increase Number1</button> 
     <button onClick={()=>{
      setNum2(num2+5)
     }} style={{display:'inline-block', width:'max-content', margin: '20px auto'}}>Increase Number2</button> 
   </>
  )
}

export default App