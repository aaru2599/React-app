import { useState } from "react"

const MissileLaunch=()=>{
    const [buttons,setButtons]=useState({
        button1:false,
        button2:false,
        button3:false,
        button4:false,
    })
    const btnClick=(buttonName)=>{
        setButtons({...buttons, [buttonName]:!buttons[buttonName]})
    }
    const everyBtnClicked=buttons.button1&&buttons.button2&&buttons.button3&&buttons.button4
 return(
    <div>
        <button onClick={()=>{btnClick("button1")}}>{buttons.button1?"On":"Off"}</button>
        <button onClick={()=>{btnClick("button2")}}>{buttons.button2?"On":"Off"}</button>
        <button onClick={()=>{btnClick("button3")}}>{buttons.button3?"On":"Off"}</button>
        <button onClick={()=>{btnClick("button4")}}>{buttons.button4?"On":"Off"}</button>
        {everyBtnClicked?"Missile Launched":""}

    </div>
 )   
}
export default MissileLaunch