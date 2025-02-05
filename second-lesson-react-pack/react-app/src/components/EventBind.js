import React, { Component } from 'react'

  class EventBind extends Component {
    constructor(props){
        super(props)

        this.state ={
            message : 'HI'
        }

        // this.BindEventHandler = this.BindEventHandler.bind(this)
    }
    // BindEventHandler(){
    //      this.setState(
    //         {
    //             message:'Hello'
    //         }
    //      )
    // }
    BindEventHandler =()=>{
       this.setState({
        message:'Goodby!'
       })
    }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        {/* <button onClick={this.BindEventHandler.bind(this)} style={{display:'block',margin:'10px auto'}}>Event Bind</button> */}
        {/* <button onClick={()=> this.BindEventHandler()} style={{display:'block',margin:'10px auto'}}>Event Bind</button> */}
        <button onClick={this.BindEventHandler} style={{display:'block',margin:'10px auto'}}>Event Bind</button>
      </div>
    )
  }
}

export default EventBind