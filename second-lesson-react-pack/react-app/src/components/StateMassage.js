import React,{Component} from "react";

class Massage extends Component{
    constructor(){
        super();
        this.state = {
            welcomeMsg :'Welcome User'
        }
    }

    ChangeState(){
        this.setState({
            welcomeMsg:"Thanks For Subscribing"
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.welcomeMsg}</h1>
                <button onClick={()=>{this.ChangeState()}}>Subscribe</button>
            </div>
        )
        }
}

export default Massage 