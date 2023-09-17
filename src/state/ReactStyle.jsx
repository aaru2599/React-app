import { useState } from "react"

const ReactStyle=()=>{
const [userName,SetUserName]=useState("")
const [styleObj,SetStyleObj]=useState({"border":"","boxShadow":""})
    const Verifyname=(e)=>{
        SetUserName(e.target.value)
        if(userName==""){
            SetStyleObj({
                border:"2px solid red",
                boxShadow:"2px 2px 2px red"
            })
        }
        else{
            SetStyleObj({
                border:"2px solid green",
                boxShadow:"2px 2px 2px green"
            })
        }
    }
    return(
        <div className="container-fluid">
            <dl >
                <dt>UserName</dt>
                <dd>
                    <input type="text" style={styleObj} name="" onBlur={Verifyname} />
                </dd>
            </dl>
        </div>
    )
}
export default ReactStyle