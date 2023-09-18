import { useState } from "react"
import ChildComponent from "./ChildComponent";

const ParantComponent = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [number, setNumber] = useState();
    const [gender, setGender] = useState("")
    const [formData,setFormData]=useState(null)
    const [button,setButton]=useState(false)
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleNumberChange = (e) => {
        setNumber(e.target.value)
    }

    const handleGenderChange = (e) => {
        setGender(e.target.value)
    }
    const handleBtnClick=()=>{
        setFormData({
            name,email,number,password,gender
        })
        setButton(true)
    }
    
    return (
        <div className="d-flex justify-content-center align-item-center " style={{ height: "500px" }}>
            <div>
                <dl className="container">
                    <dt>Name:</dt>
                    <dd><input type="text" onChange={handleNameChange} className="form-control" /></dd>
                    <dt>Email:</dt>
                    <dd><input type="email" onChange={handleEmailChange} className="form-control" /></dd>
                    <dt>Password:</dt>
                    <dd><input type="password" onChange={handlePasswordChange} className="form-control" /></dd>
                    <dt>Number:</dt>
                    <dd><input type="tel" onChange={handleNumberChange} className="form-control" /></dd>
                    <dt>Gender</dt>
                    <dd className="d-flex gap-5">
                        <div> <input className="form-check-input" type="checkbox" value="male" checked={gender === "male"} onChange={handleGenderChange} />Male</div>
                        <div>
                            <input className="form-check-input" type="checkbox" value="female" checked={gender === "female"} onChange={handleGenderChange} />Female</div></dd>
                </dl>
                <button className="btn btn-primary w-100" onClick={handleBtnClick}>Submit</button>

            </div>
           {button &&<ChildComponent name={formData.name} email={formData.email} password={formData.password} number={formData.number} gender={formData.gender} />}
        </div>
    )

}
export default ParantComponent