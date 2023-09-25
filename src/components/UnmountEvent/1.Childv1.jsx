import { useEffect, useState } from "react"

const ChildV1=()=>{
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log("Child v1 mounting");
        const handleMouseEvent=(event)=>{
            console.log({x:event.clientX,y:event.clientY})
        };
        window.addEventListener("mousemove",handleMouseEvent)
        return()=>{
            console.log("ChildV1 Unmount");
            window.removeEventListener("mousemove",handleMouseEvent)
        }
    },[])
    useEffect(()=>{
        console.log("counter Cleanup");
        return()=>{
            <p onClick={()=>setCount((prevCount)=>prevCount+1)}>
                I am A childV1 count {count}
            </p>
        }
    },[count])
}
export default ChildV1