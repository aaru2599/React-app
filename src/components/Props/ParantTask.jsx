import { useState } from "react"

    import ChildTask from "./ChildTask"
const ParantTask=()=>{
    const [name,setName]=useState({
        FirstName:"",
        LastName:"",
    })
    const [showData,setShowData]=useState(false)
    const handleNameChange=(e)=>{
        setName({FirstName:e.target.value,
            LastName:name.LastName
        })
    }
    const handleChange=(e)=>{
            setName({
                FirstName:name.FirstName,
                LastName:e.target.value
             

            })
    }
    function handleBtnClick(){
setShowData(true)
    }
    return(
        <div>
            <dl>
                <dt>FirstName:</dt>
                <dd><input type="text" onChange={handleNameChange}/></dd>
                <dt>LastName:</dt>
                <dd><input type="text"  onChange={handleChange}/></dd>
                <button className="btn btn-primary " onClick={handleBtnClick} >Button</button>
            </dl>
            {showData && < ChildTask name={name} />}
        </div>
    )
}
export default ParantTask