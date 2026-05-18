import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Product from './pages/Product'

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

function App() {
  return (
    <>
      <div className="bg-gray-300 min-h-screen h-auto">
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/product' element={<Product/>}></Route>
      </Routes>
      </div>
      </>
  )
}

export default App