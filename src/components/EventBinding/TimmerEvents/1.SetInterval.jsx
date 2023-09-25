import { useEffect, useState } from "react"

const SetTimeOut=()=>{
    const [msg,setMsg]=useState("")
    function msg1(){
        console.log("Helloo");
        setMsg("Hello..!")
    }
    function msg2(){
        console.log("How are you.?");
        setMsg("How are you.?")
    }
    function msg3(){
        console.log("Welcome To react..");
        setMsg("Welcome To react..")
    }
    useEffect(()=>{
        // msg1();
        // msg2()
        // msg3()
        setTimeout(msg1,2000)
        setTimeout(msg2,4000)
        setTimeout(msg3,5000)

    },[])
    return(
        <div>
                <h2>{msg}</h2>
        </div>
    )
}
export default SetTimeOut