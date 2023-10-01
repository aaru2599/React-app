import { Link } from "react-router-dom"
const Header=()=>{

return(
    <div >
        <h2 className="text-center">React Router Dom</h2>
        <div className="d-flex justify-content-center gap-5 bg-dark text-light p-4 fs-3">
            <div><Link to="/">Home</Link></div>
            <div><Link to="/About">About</Link></div>
            <div><Link to="/Profile">Profile</Link></div>
        </div>
    </div>
)
}
export default Header