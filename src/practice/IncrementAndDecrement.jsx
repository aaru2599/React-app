import { Component, useState } from "react";

class IncAndDec extends Component{
    constructor(props){
        super(props);
        this.state={
            number:2
        };
    }
    IncrementNumber=()=>{
        this.setState((prevValue)=>({
            number:Math.min(prevValue.number+2,100)
            
        }));
    }
    
    DecrementNumber=()=>{
        this.setState((prevValue)=>({
            number:Math.max(prevValue.number-2,2)
        }));
    }

    
    render(){
        return(
            <div>
                <h2>Number Counter</h2>
                <p>Number:{this.state.number}</p>
               <button onClick={this.IncrementNumber}>Increment </button>
               <button onClick={this.DecrementNumber}>Decrement</button>
            </div>
            
        )
    }
}
export default IncAndDec;