import React from 'react'
import axios from 'axios'
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
// 10 day advance hook
// 11 day form handling
// 12 day two way binding in form
// 13 day note app
// 14 local storage
// 15 API

function App() {
  const [apiData, setApiData] = useState([]);

  const getData = async ()=>{
    // const response = await fetch('https://jsonplaceholder.typicode.com/users')
    // const data = await response.json()

        // const response = await axios('https://jsonplaceholder.typicode.com/users')

        // console.log(response);

        const response = await axios('https://picsum.photos/v2/list')
        
        setApiData(response.data)

        console.log(response.data)
  }

  return (
    <>
    <div>App</div>
      <button onClick={getData} style={{display:'inline-block', width:'max-content', margin: '20px auto'}}>Get Data</button>  

      

      {apiData.map((elem,id)=>{
            return(
              <>
              <div style={{textAlign:'center'}} key={id}>
              <img  src={elem.download_url} width={100} height={100}  alt="" />
              <h4 >Author: {elem.author}</h4>
              </div>
              </>
            )
      })}

    </>
  )
}

export default App