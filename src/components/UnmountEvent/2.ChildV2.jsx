import { useEffect } from "react"

const ChildV2=()=>{
    useEffect(()=>{
        console.log("Childv2");
        return()=>{
            console.log("ChildV2 unmounting");
        }
    },[])
    return(
        <div>
            <p>I am a Child Comonent v2</p>
        </div>
    )
}
export default ChildV2