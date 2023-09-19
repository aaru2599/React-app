import { useState } from "react"

const ChildComonent=({onValChange})=>{
    const [outName,setOutName]=useState({
        FirstName:"",
        LastName:"",
    }) 
    const onFirstNameChange=(e)=>{
        setOutName({
            ...outName,
            FirstName:e.target.value,
            
        })
    }
    const onLastNameChange=(e)=>{
        setOutName({
            ...outName,
            LastName:e.target.value,
            
        })
    }
  
    return(
        <div>
              <button className="btn btn-primary" data-bs-toggle="modal"  data-bs-target="#formDrop">OpenForm</button>
            <div className="modal fade" id="formDrop">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title fs-5" id="formDropLabel">Model Title</h2>
                            <button className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <dl className="col-6">
                                <dt>FirstName:</dt>
                                <dd><input type="text" className="form-control"  onChange={onFirstNameChange}/></dd>
                                <dt>LastName:</dt>
                                <dd><input type="text"className="form-control"   onChange={onLastNameChange} /></dd>
                            </dl>
                        </div>
                        <div className="modal-fotter ">
                            <button className="btn btn-primary" onClick={()=>onValChange(outName)} data-bs-dismiss="modal">Submit</button>
                            <button className="btn btn-danger ml-3" data-bs-dismiss="modal">Close</button>

                        </div>



                    </div>
                </div>
            </div>

        </div>
    )
}
export default ChildComonent