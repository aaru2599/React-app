import { useState } from "react"
import Child02 from "./2.Child";

export const Parant02=()=>{
    const [name,setName]=useState({
        FirstName:"",
        LastName:"",
    })
    const onValChange=(val)=>{
        console.log(val);
        setName(val)
    }
    return(
        <div>
           <p>FirstName:{name.FirstName}</p>
           <p>LastName:{name.LastName}</p>
            <Child02 onValChange={onValChange}/>

        </div>

    )
}
export default Parant02