import { useState } from "react"

const OnKeyUp01=()=>{
    const [users,setUsers]=useState([{userName:"arvind123"},{userName:"vipin123"},{userName:"savan123"},{userName:"adarsh123"}])
    const [userError,setUserError]=useState("")
    const [errorClass,setErrorClass]=useState("")
    const handleKeyUp=(e)=>{
        for(var user of users){
            if(user.userName==e.target.value.toLowerCase()){
             setUserError("User Name Taken-Try another")   
             setErrorClass("text-danger")
             break;
            }   
            else{
                setUserError("userName Available")
             setErrorClass("text-success")

            }

        }
    }
    return(
        <div className="container-fluid">
            <h3>RegisterUser
                <dl>
                    <dt>UserName</dt>
                    <dd><input type="text" onKeyUp={handleKeyUp}/></dd>
                    <p className={errorClass}>{userError}</p>
                </dl>
            </h3>

        </div>
    )
}
export default OnKeyUp01