import { useState } from "react"

export const ChangeText=()=>{
const [btnActive,setBtnActive]=useState(true)
const btnClick=()=>{
    setBtnActive(!btnActive)
}

const btnStyle={
backgroundColor: btnActive?"green":"red",
color:"white"
}

return(
    <div>
        <button onClick={btnClick} style={btnStyle} >{ btnActive?"Button":"Button is clicked"}
        </button>

    </div>
)
}
// export default ChangeText