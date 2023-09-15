import { useState } from "react"

const MagicMessage=()=>{
    const [selectedColor,setSelectedColor]=useState([])
    const BtnClick=(color)=>{
       if(!selectedColor.includes(color)){
        setSelectedColor([...selectedColor,color])
       }    
    }
    const colorRender=()=>{
        if(selectedColor.length===0){
            return "none"
        }
        else{
            return `You Have selected ${selectedColor.join(", ")}`

        }
    }

    return(
        <div>
            <button onClick={()=>{BtnClick('Red')}}>Red</button>
            <button onClick={()=>{BtnClick('Green')}}>Green</button>
            <button onClick={()=>{BtnClick('Purple')}}>Purple</button>
            <button onClick={()=>{BtnClick('Pink')}}>Pink</button>
            <div >{colorRender()}</div>
        </div>
    )
}
export default MagicMessage