import React, { useEffect, useState } from "react";

export  const Prctsss = ()=>{
  const[state,setState]  =   useState("hello")

console.log("button k uppaar hu mai")
  const change = () => {
    
    setState("yellow")
    console.log("button pr click hogaya hai")
}
 
console.log("useefect mere niche hai")
  
  useEffect(()=>{
    console.log("yoyo")
    setState("zello")

  })
  console.log(state);

  console.log("useeffect mere upar hai")

  return(
    <div>
        <h1>i am {state} </h1>
        <button onClick = {change}></button>
    </div>
  )

 }
