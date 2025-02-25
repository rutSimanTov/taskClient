import { NavLink } from "react-router";

export const Navbar=()=>{
    return (
        <nav className="navbar navbar-expand-sm">
            <div className="container-fluid" >
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" >Todos</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/register" >Register</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login" >login</NavLink>
                    </li>
                   
                </ul>
            </div>
        </nav>
    );
}