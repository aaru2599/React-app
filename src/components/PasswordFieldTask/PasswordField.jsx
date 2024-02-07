import React, { useState } from 'react'
import { useRef } from 'react';
import "./Password.css"
const PasswordField = () => {
    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)
    const inputRef4 = useRef(null)
    const [input1, setInput1] = useState("")
    const [input2, setInput2] = useState("")
    const [input3, setInput3] = useState("")
    const [input4, setInput4] = useState("")
    const [clearBtn, setClearBtn] = useState(true)

    const firstInput = (e) => {
        console.log("validation", validation(e));
        console.log("e.target.value", e.target.value);
        setInput1(e.target.value)
        console.log(e.key);
        if (validation(e)) {

            inputRef2.current.select()
            setClearBtn(false)

        }


    }
    const secondInput = (e) => {
        setInput2(e.target.value)
        // console.log("input2", input2);
        // console.log("e.key", e.key);
        // console.log("e.key", typeof (e.key));
        if (validation(e)) {
            inputRef3.current.select()
        }
        else if (e.key === "Backspace") {
            inputRef1.current.select()
        }


    }
    const thirdInput = (e) => {
        setInput3(e.target.value)
        console.log("e.key", e.key);
        if (validation(e)) {
            inputRef4.current.select()
        }
        else if (e.key === "Backspace") {
            inputRef2.current.select()
        }

    }

    const fourthInput = (e) => {
        setInput4(e.target.value)
        if (e.key === "Backspace") {
            inputRef3.current.select()
        }
    }
    const validation = (e) => {
        return (e.key === "1" || e.key === "2" || e.key === "3" || e.key === "4" || e.key === "5" || e.key === "6" || e.key === "7" || e.key === "8" || e.key === "9" || e.key === "0")
    }
    const handleClear = () => {
        inputRef1.current.value = "";
        inputRef2.current.value = "";
        inputRef3.current.value = "";
        inputRef4.current.value = "";
        setClearBtn(true)
    }

    return (
        <div className='main-container '>
            <div className='d-flex justify-content-center  gap-3 container'>
                <input
                    onKeyUp={(e) => firstInput(e)}
                    type="text" maxLength={1}
                    className='form-control '
                    defaultValue={input1}
                    ref={inputRef1} />

                <input ref={inputRef2}
                    defaultValue={input2}
                    className='form-control '
                    onKeyUp={(e) => secondInput(e)}
                    type="text" maxLength={1} />

                <input ref={inputRef3}
                    defaultValue={input3}
                    className='form-control '
                    onKeyUp={(e) => thirdInput(e)}
                    type="text" maxLength={1} />

                <input ref={inputRef4}
                    defaultValue={input4}
                    className='form-control '
                    onKeyUp={(e) => fourthInput(e)}
                    type="text" maxLength={1} />


            </div>

            <div className='d-flex gap-4 mt-4 justify-content-center'>
                <button disabled={clearBtn} onClick={handleClear} className='btn btn-primary'>Clear All</button>
                <button className='btn btn-secondary'>Get OTP</button>
            </div>
        </div>
    )
}

export default PasswordField