import { useState } from "react";

const countComp=()=>{
const [counter,setCounter]=useState(0);
return(
    <div>
        <p>Counter:{counter}</p>
        <button onClick={()=>setCounter(counter+1)}>Incremet</button>
        <button onClick={()=>setCounter(counter-1)}>Decrement</button>
    </div>
);
};
export default countComp;