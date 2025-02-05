import React,{Component} from 'react';

class CustomClass extends Component{
   render(){
    return(
        <div>
            <h1>Test {this.props.componentName} Class Component</h1>
            <p>This is a test {this.props.componentName} class component</p>
        </div>
    )
   }
}

export default CustomClass;