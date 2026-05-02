import React from 'react'

function ChildComponent(prop) {
  return (
    <div>
        <button onClick={()=>prop.parentMethodAsProp('Child')} style={{'display':'block',margin:'10px auto'}}> Method as prop</button>
        
    </div>
  )
}

export default ChildComponent