import { useState } from "react"

export const ClassBinding=()=>{
    const [theme,setTheme]=useState(" border p-3 border-primary border-3 rounded")
    const [btnTheme,setBtnTheme]=useState("btn btn-dark w-100")
    const handleChange=(e)=>{
        if(e.target.checked){
            setTheme("bg-dark text-white p-3 border p-3 border-warning border-3 rounded")
            setBtnTheme("btn btn-primary w-100 ")
        }
        else{
            setTheme("border p-3 border-primary border-3 rounded");
            setBtnTheme("btn btn-dark w-100 ")
        }
    }
    function handleNameChange(e){
        if(e.target.value== ""){
            setTheme("border p-3 border-primary border-3 bg-danger rounded")
        }
        else{
            setTheme("border p-3 border-primary border-3 bg-success rounded")
        }
    }
 return(
    <div className="container-fluid">
        <div className="d-flex justify-content-center align-items-center" style={{height:"500px"}}>
            <form className={theme}>
                <div className="mt-4 mb-4 form-switch"  >
                     <input onChange={handleChange} type="checkbox" className="form-check-input" />
                    DarkMode
                </div>
                <h2><span className="bi bi-person-fill"></span>User Login   </h2>
                <dl>
                    <dt>User Name</dt>
                    <dd>< input type="text" className="form-control" onChange={handleNameChange}/></dd>
                    <dt>Password</dt>
                     <dd><input className="form-control" type="password" /></dd>
                    <button className={btnTheme} >Login</button>


                </dl>
            </form>

        </div>
    </div>
 )   
}