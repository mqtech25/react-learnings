import React from 'react'
import Navbar from './components/Navbar'
import {useState} from 'react'
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
// 17 API Gallery project
// 18 react dom route
// 19 advance react dom route (notFound, nested route, dynamic routing,useNavigation)
// 20 props change using child component

function App() {

  const [theme,setTheme] = useState('light')

  return (
    <>
    <div className="text-center text-2xl">
    <div className='my-5'>App <span className='bg-black text-white px-2 py-1'>{theme}</span> Mode</div>
    <Navbar theme ={theme} setTheme ={setTheme}/>
    </div>
    </>
  )
}

export default App