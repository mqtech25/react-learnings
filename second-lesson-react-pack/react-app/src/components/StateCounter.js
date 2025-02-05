import React, { Component } from 'react'

 class StateCounter extends Component {
    constructor(){
        super();
        this.state =
            {
                count:0
            }
    }

    CountFuc(){
        
        // this.setState(
        //     {
        //         count: this.state.count+ 1
        //     },
        //     ()=>{
        //         console.log(this.state.count);
        //     }
        // )
        // console.log(this.state.count);
      this.setState( (prevState) =>
       (
        {
            count :prevState.count+1
        }
       )
      )
      console.log(this.state.count);
    }
    CountFivFuc(){
        this.CountFuc()
        this.CountFuc()
        this.CountFuc()
        this.CountFuc()
        this.CountFuc()
    }

  render() {
    return (
      <div>
        <h1>StateCounter</h1>
        <h1>{this.state.count}</h1>
        <button onClick={()=>{this.CountFuc()}} >Count</button>
      </div>
    )
  }
}

export default StateCounter