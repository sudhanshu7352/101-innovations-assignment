import { useNavigate } from "react-router-dom";
import "./navbar.css"
export const Navbar =()=>{
 const navigate =useNavigate()
    return(
        <div className="nav">
            <h2 onClick={()=>navigate("/")}>TheFoodList</h2>
        </div>
    )
}