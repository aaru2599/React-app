import React, { useRef, useState } from 'react'

const UseRef = () => {
    const refElem=useRef("")
    const [input,setInput]=useState("Arvind")
    console.log("refElem",refElem);
    const reset=()=>{
        setInput("")
        refElem.current.focus();
    }
    const handleClick=()=>{
        refElem.current.style.color="red";
    }

  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
        <input type="text" 
        ref={refElem}
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
        <button onClick={reset}>Reset</button>
        <button onClick={handleClick}>Handle Input</button>
    </div>
  )
}

export default UseRef