import { Component } from "react";

class Caching extends Component {
    state = {
        counter: 0
    }
    onIncrement = () => {
        this.setState({counter: this.state.counter+1})
    }
    onDecrement = () => { 
        this.setState({counter: this.state.counter-1})
    }
    render() {
        return (
            <div>
                <button onClick={this.onIncrement}>Increment</button>
                <button onClick={this.onDecrement}>Decrement</button>
                <div>
                    <p>{this.state.counter }</p>

                </div>
            </div>
        )
    }
}
export default Caching