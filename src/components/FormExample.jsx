import { Component } from "react";
export default
    class FormExample extends Component {
    state = {
        uName: "",
        mobileNo: "",
        password: "",
        dob: "",
        gender: ""
    }
    render() {
        return (
            <div >
                <form className="d-flex justify-content-center  ">
                    <div className="border border-5 border-primary rounded   m-4 p-2">
                        <div >
                            <div>Name: </div>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                value={this.state.uName}
                                onChange={(e) => {
                                    console.log(e.target.value);
                                    this.setState({ uName: e.target.value })
                                }}
                            />
                        </div>
                        <div>
                            <div>MobileNo: </div>
                            <input
                                type="number"
                                placeholder="enter yout mobile number"
                                value={this.state.mobileNo}
                                onChange={(e) => {
                                  
                                    this.setState({ mobileNo: e.target.value })
                                }}

                            />
                        </div>
                        <div>
                            <div>Password: </div>
                            <input
                                type="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={(e) => {
                                    console.log(e.target.value);
                                    this.setState({ password: e.target.value })
                                }}
                            />

                        </div>

                        <div>
                            <div>DOB: </div>
                            <input
                                type="date"
                                name="dob"
                                value={this.state.password}
                                onChange={(e) => {
                                    console.log(e.target.value);
                                    this.setState({ dob: e.target.value })

                                }}
                            />

                        </div>
                        <div>
                            <div>Gender: </div>
                            Male<input type="radio"
                                name="gender"
                                value="Male"
                                checked={this.state.gender === "Male"}
                                onChange={(e) => {
                                    this.setState({ gender: e.target.value })
                                }}

                            />
                            Female<input type="radio"
                                name="gender"
                                value="Female"
                                checked={this.state.gender === "Female"}
                                onChange={(e) => {
                                    this.setState({ gender: e.target.value })
                                }}

                            />
                        </div>
                        <hr class="p-1 bg-primary w-100" />
                                <button>Submit</button>


                    </div>
                </form>
                <div>

                    <p>Name:{this.state.uName}</p>
                    <p>Mobile no:{this.state.mobileNo}</p>
                    <p>Password: {this.state.password}</p>
                    <p>DOB:{this.state.dob}</p>
                    <p>Gender: {this.state.gender}</p>
                </div>




            </div >

        );
    }
}