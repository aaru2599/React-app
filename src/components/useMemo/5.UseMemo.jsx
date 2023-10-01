import { useEffect, useState } from "react"

const CharCount=()=>{
    const [userName,setUserName]=useState("")
    const [count,setCount]=useState("")
    useEffect(()=>{
    
    })
    return(
        <div>
            <input type="text" onChange={(e)=>setUserName(e.target.value)} />
        </div>
    )
}