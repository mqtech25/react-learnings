import React from 'react'

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

function App() {
    
      let user ={
      name:'Qasim',
      age:'26',
      position:'Frontend Dev'
      }

      // localStorage.clear()

      localStorage.setItem('user',JSON.stringify(user))
       
      console.log(JSON.parse(localStorage.getItem('user')));

      localStorage.removeItem('user')

  return (
    <div>App</div>
  )
}

export default App