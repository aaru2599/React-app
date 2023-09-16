import { useState } from "react"

const State02 = () => {
    const [userName,setUserName]=useState("Arvind");
    const handleNameChange=(e)=>{
        setUserName(e.target.value);
    }
    return (
        <div className="container-fluid">
            <dl>
                <dt>UserName</dt>
                <dd>
                    <input type="text"
                    value={userName} 
                    onChange={handleNameChange}
                    />
                </dd>
            </dl>
            <p className="btn btn-primary">Hello.! {userName}</p>

        </div>
    )
}
export default State02