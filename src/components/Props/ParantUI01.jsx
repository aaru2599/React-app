import { useState } from "react"
import ChildUI from "./ChiledUI01"

const ParentUI01=()=>{
    const [showMessage,setShowMessage]=useState(false)
    const toggleMessage=()=>{
        setShowMessage(!showMessage)
    }
return(
    <div>
{showMessage ? <p>I am visible </p>:<p>I am hidden</p>}
<ChildUI onToggle={toggleMessage}/>

    </div>
)
}
export default ParentUI01