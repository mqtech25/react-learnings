import React, { Component } from 'react'

 class ClassEventHandler extends Component {
  EventHandler(){
    alert('class event hander')
  }
  render() {
    return (
     <>
     <button onClick={this.EventHandler} style={{display:'block',margin:'10px auto'}}>Click Me</button>
     </>
    )
  }
}

export default ClassEventHandler