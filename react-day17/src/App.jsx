import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card  from './components/Card'

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



function App() {

  const [apiData, setApiData] = useState([])
  const [pageIndex, setPageIndex] = useState(1)

  let resdata =  <><div className='relative flex justify-center items-center h-[80vh] font-bold'>Loading...</div></>

  const apiCall = async()=>{
      const response = await axios.get(`https://picsum.photos/v2/list?page=${pageIndex}&limit=10`)
      setApiData(response.data)
  }

  useEffect(()=>{
    apiCall()
  },[pageIndex])

  if(apiData.length>0){
        
    resdata = apiData.map((elem,key)=>{
      return( <>
        <Card elem={elem} key={key}/>
      </>)
    })
  }

  return (
   <>
    <div className='text-center p-4'>
    {/* <div>App</div>
    <button onClick={()=>{
      apiCall()
    }} className='bg-green-400 text-lg py-1 px-3 rounded cursor-pointer m-3'>Get Data</button> */}

    <div className="flex flex-wrap justify-center  gap-5">
    {resdata}
    </div>

    <div className="flex flex-wrap justify-center gap-20 mt-8">
      <button className='cursor-pointer bg-amber-300 rounded px-4 py-2 font-bold transition-all duration-300 hover:scale-110 disabled:bg-gray-500' disabled={pageIndex>1? false:true} onClick={()=>{
        setPageIndex((prevIndex)=>{return prevIndex - 1})
        setApiData([])
      }}>Prev</button>
      <p className='font-bold'>Page {pageIndex}</p>
      <button className='cursor-pointer bg-amber-300 rounded px-4 py-2 font-bold transition-all duration-300 hover:scale-110' onClick={()=>{
        setPageIndex((prevIndex)=>{return prevIndex + 1})
        setApiData([])
      }}>Next</button>
    </div>

    </div>
   </> 
  )
}

export default App