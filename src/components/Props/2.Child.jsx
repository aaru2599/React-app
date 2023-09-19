import { useState } from "react"

const Child02=({onValChange})=>{
    const [outName,SetOutName]=useState({
        FirstName:"",
        LastName:"",

    })
    function onFirstNameChange(e) {
    SetOutName({
        ...outName,
        FirstName:e.target.value
    })    
    }
    function onLastNameChange(e){
        SetOutName({
            ...outName,
            LastName:e.target.value
        })
    }
return(
    <div>
       <div>
        FirstName: <input type="text"onChange={onFirstNameChange}/>
       </div>
       
       <div>
        LastName: <input type="text" onChange={onLastNameChange}/>
       </div>
       <button onClick={()=>onValChange(outName)}>submit</button>
    </div>
)
}
export default Child02