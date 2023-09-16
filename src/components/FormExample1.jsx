import { useState } from "react"

 const Form01=()=>{
    const [profile,setProfile]=useState({
        name:"",
        email:"",
        gender:"",

    })
    
    return (
        <div>
            <div>
                <p>Name:{profile.name}</p>
                <input type="text" placeholder="Enter NAme" value={profile.name}/>
            </div>
            <div>
                <p>EmailId:{profile.email}</p>
                <input type="email" placeholder="Enter EmailId" value={profile.email}/>
            </div>
        </div>
    )
}
export default Form01;