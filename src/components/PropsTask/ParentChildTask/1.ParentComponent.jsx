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
            <p>Hello.! My name is {name.FirstName} People call me  {name.LastName}.</p>
            </div>
            )
           }
           
        </div>
    )
}
export default ParentComponent