import { useState } from "react"
import ChildComonent from "./1.ChildComponent"

function ParentComponent() {
    const  [name,setName]=useState({
        FirstName:"",
        LastName:""
    })
const onValChange=(val)=>{
    setName(val)
}

    return (
        <div>
             <ChildComonent onValChange={onValChange}/>
           {name.FirstName&&name.LastName&&
            (
                <div>
            <p>FirstName:{name.FirstName}</p>
             <p>LastName:{name.LastName}</p>
            </div>
            )
           }
           
        </div>
    )
}
export default ParentComponent