import { useState } from "react"

const IncDec=()=>{
    const [number,setNumber]=useState(2)
    


    
return(
    <div>
        <p>Number:{number}</p>
        <button onClick={()=>{setNumber(number+2)}} >Increment</button>
        <button onClick={()=>{setNumber(number-2)}}>Decement</button>
    </div>
)
}
export default IncDec;

