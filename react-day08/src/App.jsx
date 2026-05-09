import React from 'react'

// 1 day learn folder and react flow
// 2 day learn component
// 3 day learn props(properties)
// 4 day learn mini company card project objects
// 5 day learn css module 
// 6 day learn tailwindCss install
// 7 day UI design learn (feature base folder sturcture / atomic base folder structure)
// In feature base like header, body, footer saperate component while in atomic base each and every thing have saperate component
// function call
function App() {

  const playFunc = (elem)=>{
    console.log(elem.target.innerText);
  }

  return (
    <div>
      <button onClick={(elem)=>{
        playFunc(elem)
      }} style={{fontSize:'36px'}}>Play</button>
    </div>
  )
}

export default App