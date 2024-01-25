import React, { useState } from "react"
const Armstrong = () => {
    const [userInput,setUserInput]=useState(0)
    const handleBtnClick=()=>{
        console.log(userInput);
    }
    
    console.log(userInput);
    return (
        <div>
            <input value={userInput} onChange={(e)=>setUserInput(e.target.value)}  type="text" />
            <button onClick={handleBtnClick}>Submit</button>
        </div>
    )
}
export default Armstrong