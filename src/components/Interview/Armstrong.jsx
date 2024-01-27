import React, {  useState } from "react"
const Armstrong = () => {
    const [userInput, setUserInput] = useState()
    const [displayRes, setDisplayRes] = useState(false);

    const handleBtnClick = () => {
        let numArr = userInput.split("");
        const len = numArr.length;
        console.log(len);
        let result = 0;
        for (let i = 0; i < len; i++) {
            let sum = numArr[i] ** len
            result = result + sum
        }
        if (result == userInput) {
            setDisplayRes(true)
        }else{
            setDisplayRes(false)
        }
        // console.log(numArr);
    }

    // console.log(userInput);
    return (
        <div>
            <input value={userInput} onChange={(e) => setUserInput(e.target.value)} type="text" />
            <button onClick={handleBtnClick}>Submit</button>
            {
                displayRes?<p>Armstrong Number</p>:<p>Not An Armstrong Number</p>
            }
        </div>
    )
}
export default Armstrong