import { useState } from "react"

const ReactStyle01 = () => {
const [styles,setStyles]=useState({
    fontSize:"10px",
    color:"black",
}) 
const fortSizeChange=(e)=>{
setStyles({
    fontSize:e.target.value+"px",
    color:styles.color
})
}
const colorChange=(e)=>{
setStyles({
    fontSize:styles.fontSize,
    color:e.target.value
})
}
    return (
        <div>
            <h2>Style Binding</h2>
            <dl>
                <dt>Font Size</dt>
                <dd><input onChange={fortSizeChange} type="range"  min="10" max="100"  /></dd>
                <dt>Font Color</dt>
                <dd><input type="color" onChange={colorChange} /></dd>
            </dl>
            <p style={styles} className="text-center">Sample text</p>
        </div>
    )
}
export default ReactStyle01