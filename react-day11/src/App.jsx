import React from 'react'
import Input from './components/Input.jsx'
import Button from './components/Buttons.jsx'

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

function App() {

  let submitHundler = (event)=>{
    event.preventDefault();
    console.log('form submite');
  }

  return (
    <div className='flex flex-wrap flex-col justify-center items-center h-[100vh] w-full 
    '>
       <form className='form bg-white flex flex-wrap flex-col justify-evenly max-w-[400px] max-h-[300px] h-full  w-full  shadow-md p-3 rounded-md' onSubmit={(event)=>{submitHundler(event)}}>
          <Input type='email' placeholder="Email"/>
          <Input type='password' placeholder="Password"/>
          <Button/>
       </form>
    </div>
  )
}

export default App