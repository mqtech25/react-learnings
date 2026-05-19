import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Men from './pages/Men'
import Women from './pages/Women'
import NotFound from './pages/NotFound'
import Course from './pages/Course'
import CourseDetail from './pages/CourseDetail'


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

function App() {
  return (
    <div>
      <Navbar/>
      <Nav/>
        <div className="body-wrapper p-5">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/product' element={<Product/>}>
            <Route path='men' element={<Men/>}/>
            <Route path='women' element={<Women/>}/>
              </Route>
            {/* <Route path='/product/men' element={<Men/>}/>
            <Route path='/product/women' element={<Women/>}/> */}
            <Route path='*' element={<NotFound/>} />

            <Route path='/course' element={<Course/>} />
            <Route path='/course/:courseID' element={<CourseDetail/>} />

          </Routes>
        </div>
      <Footer/>
    </div>
  )
}

export default App