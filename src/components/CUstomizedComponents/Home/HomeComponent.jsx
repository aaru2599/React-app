// import { LoginComponent } from "../Login/LoginComponent";

export function HomeComponent(){
    return(
        <div className="container-fluid">
            <h3>Admin Login</h3>
            <LoginComponent title="Admin Login" theme_name="bg-warning" login_id="Your Email" login_type="email" button_text="Admin Login"/>
            <h3>Customer Login</h3>
            <LoginComponent title="Customer Login" theme_name="bg-success" login_id="Your Number" login_type="tel" button_text="Customer Login"/>
        </div>
    )
}

export function LoginComponent(props){
    return(
        <div className="container-fluid">
            <form  className={`w-25 border border-2 border-primary p-2 ${props.theme_name}`}>
                <h3><span className="bi bi-person-fill"></span>{props.title}</h3>
                <dl>
                    <dt>{props.login_id}</dt>
                    <dd><input type={props.login_type}/></dd>
                    <dt>Password</dt>
                    <dd><input type="password" /></dd>
                </dl>
                <button className="btn btn-primary">{props.button_text}</button>
            </form>
        </div>
    )
    }