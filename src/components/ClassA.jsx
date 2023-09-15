import { Component } from "react";

class ClassA extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: "Savan Agrawal",
      designation: "Java Developer"
    }
  }
  render() {
    const {userName, designation} = this.state;
    return (
      <div>
        <p>My name is {userName} & I'm a {designation} developer</p>
      </div>
    );
  }
}

export default ClassA;