import { useEffect, useState } from "react"

const SetInterval=()=>{
    const [msg,setMsg]=useState("")
    const ShowTime=()=>{
        var now = new Date();
        setMsg(now.toLocaleTimeString())
    }
    useEffect(()=>{
        setInterval(ShowTime,1000)
    },[])
    return(
        <div>
            <h2>{msg}</h2>
        </div>
    )
}
export default SetInterval