import React from "react"
 function LoginComponent(props){
    console.log(props);
   const {title,theme_name,login_id,login_type,button_text}=props.data
return(
    <div className="container-fluid">
        <h3>{title} Page</h3>
        <form  className={`w-25 border border-2 border-primary p-2 ${theme_name}`}>
            <h3><span className="bi bi-person-fill"></span>{title}</h3>
            <dl>
                <dt>{login_id}</dt>
                <dd><input type={login_type}/></dd>
                <dt>Password</dt>
                <dd><input type="password" /></dd>
            </dl>
            <button className="btn btn-primary">{button_text}</button>
        </form>
    </div>
)
}
export default LoginComponent