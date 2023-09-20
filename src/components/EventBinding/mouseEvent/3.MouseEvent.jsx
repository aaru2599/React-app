import { useState } from "react"

 const MouseEvent03=()=>{
const [styleObj,setStyleObj]=useState({
    position:"",
    top:"",
    left:""
})
const handleMouseMove=(e)=>{
setStyleObj({
    position:"fixed",
    top:e.clientY+"px",
    left:e.clientX+"px"
})
}
    return(
        <div onMouseMove={handleMouseMove}>
            <p>positions in x and y axis
                <br />
                x={styleObj.left}  y={styleObj.top}
            </p>

            <div style={{height:"1000px"}}>
        <img src="https://cdn.vectorstock.com/i/1000x1000/47/04/small-animal-circular-logo-vector-25754704.webp" style={styleObj} width="50px" height="50px"/>
            </div>
        </div>
    )
}
export default MouseEvent03