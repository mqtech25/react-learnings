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
// 10 day advance hook

function App() {
  let [users, setUser] = useState([{'name':'saleh'},{'age':'30'}])

  let [num,setNum] = useState(0)

  const increaseCount = ()=>{
    // let newNum = num
    // newNum = newNum +1;
    // setNum(newNum)
    // console.log(newNum);

    //there is issue Batch add due to which we use prevoius value
    // setNum(num + 1)
    // setNum(num + 1)
    // setNum(num + 1)

    // setNum((prevCount)=>{ return prevCount + 3})
    
    setNum((prevCount)=>{ return prevCount + 1})

    // setUser((preValue)=>{
    //   return [...preValue + 'hussain']
    // })

    // setUser((preValu)=>{return [...preValu,{'married':'yes'}]})

  }

  const decreaseCount = ()=>{
    setNum((prevCount)=>{ return prevCount>0?prevCount - 1 :prevCount })
  }
  

  return (
      
    <div>
      <h1 style={{textAlign:'center',fontSize:'28px'}}>Count {num}</h1>

      <div style={{display:'flex',flexWrap:'wrap', justifyContent:'center',gap:"20px"}}>
        <button onClick={increaseCount} style={{fontSize:'18px',background:'green', color:'white',padding:'5px 20px'}}>Increse</button>
        <button onClick={decreaseCount} style={{fontSize:'18px',background:'red', color:'white',padding:'5px 20px'}}>Decrease</button>
      </div>

    </div>
  )
}

export default App