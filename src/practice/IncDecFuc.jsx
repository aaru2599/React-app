import { useState } from "react"

const IncDec=()=>{
    const [number,setNumber]=useState(2)
    

// const Increment=()=>{
//     setNumber(Math.min(number+2,100));
// }
    
// const Decrement=()=>{
//     setNumber(Math.max(number-2,2))
// }
return(
    <div>
        <p>Number:{number}</p>
        <button onClick={()=>{ setNumber(Math.min(number+2,100))}}>Increment</button>
        <button onClick={()=>{ setNumber(Math.max(number-2,2))}}>Decement</button>
    </div>
)
}
export default IncDec;

