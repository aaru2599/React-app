import React from "react";
import LoginComponent from "../Login/LoginComponent";
 function HomeComponent() {
    return (
        <div className="container-fluid">
            
            <LoginComponent data={{title :"Admin Login",theme_name:"bg-warning", login_id:"Your Email", login_type:"email", button_text:"Admin Login"}}/>
            
            <LoginComponent data={{title:"Customer Login", theme_name:"bg-success", login_id:"Your Number", login_type:"tel", button_text:"Customer Login"}}/>
        </div>
    )
}

export default HomeComponent