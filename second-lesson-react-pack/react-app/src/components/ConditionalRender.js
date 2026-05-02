import React, { Component } from 'react'

export class ConditionalRender extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLogin:false
      }
    }
  render() {

    // first if/else
    // if(this.state.isLogin){
    //     return(
    //         <div><h2 style={{textAlign:'center'}}>Welcome Qasim</h2></div>
    //     )
    // }else{
    //     return(
    //         <div><h2 style={{textAlign:'center'}}>Welcome Guest</h2></div>
    //     )
    // }

    // second variable
    let msg;

    if(this.state.isLogin){
        msg=<div><h2 style={{textAlign:'center'}}>Welcome Qasim</h2></div>;
    }else{
        msg=<div><h2 style={{textAlign:'center'}}>Welcome Guest</h2></div>;

    }

    return(
       <>
        {msg}
       </>
    )

    // return (
    //   <div>
    //     <h2 style={{textAlign:'center'}}>Welcome Qasim</h2>
    //     <h2 style={{textAlign:'center'}}>Welcome Guest</h2>
    //   </div>
    // )
  }
}

export default ConditionalRender