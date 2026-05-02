import React, { Component } from 'react'
import ChildComponent from './ChildComponent'


class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'Parent'
      }

      this.childParent = this.childParent.bind(this)
    }

    childParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

  render() {
    return (
      <div>
        <ChildComponent parentMethodAsProp={this.childParent}/>
      </div>
    )
  }
}

export default ParentComponent