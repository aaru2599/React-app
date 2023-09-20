import { useEffect, useState } from "react"

const APIUseEffect02=()=>{
    const [search,setSearch]=useState("")

    useEffect(()=>{
        if(!search){
            return;
        }
       
            fetch(`https://api.github.com/users/${search}`)
            .then(responce=>responce.json())
            .then((responce)=>console.log("Data",responce))
            .catch((err)=>console.log("error",err))
       
    },[search])
    return(
        <div>
            <p>Entered UserName {search} </p>
            <input className="form-control col-5" type="text" 
            value={search}
            onChange={(e)=>{setSearch(e.target.value)}}/>
        </div>
    )

}
export default APIUseEffect02