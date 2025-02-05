import React from 'react'

function ClickFunc() {
    function CallEventHandlerFuc(){
        alert('HI Its event handler')
    }
  return (
    <div>
        <button style={{margin:'0 auto',display:'block'}} onClick={CallEventHandlerFuc}>Click</button>
    </div>
  )
}

export default ClickFunc