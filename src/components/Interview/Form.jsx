import React, { useState } from 'react'

const Form = () => {
    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")
    const [email, setemail] = useState("")
    const [pass, setPass] = useState("")
    const [formData, setFormData] = useState([])

    const btnClick = () => {
        const newFormData = {
            fName, lName, email, pass
        }
        setFormData([...formData, newFormData])

    }
    console.log("formData",formData);

    return (
        <div>
            <div className='d-flex w-25 gap-2 flex-column'>
                <input type="text" placeholder='First Name' value={fName} onChange={(e) => setFName(e.target.value)} />
                <input type="text" placeholder='Last Name' value={lName} onChange={(e) => setLName(e.target.value)} />
                <input type="text" placeholder='Email ' value={email} onChange={(e) => setemail(e.target.value)} />
                <input type="password" placeholder='password' value={pass} onChange={(e) => setPass(e.target.value)} />

            </div>
            <button onClick={btnClick}>show data</button>
            <hr />
            <div>

            </div>
            <p>{formData.fName}</p>
            <p>{formData.lName}</p>
            <p>{formData.email}</p>
            <p>{formData.pass}</p>
        </div>
    )
}

export default Form