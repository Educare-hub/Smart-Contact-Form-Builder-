import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router";
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <FaBars />
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">DashBoard</NavLink>
                            </li>
                            <li>
                                <NavLink to="/register">Register</NavLink>
                            </li>
                            <li>
                                <NavLink to="/login">Login</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <ul
                        tabIndex={-1}
                        className="menu menu-horizontal dropdown-content bg-base-100 rounded-box z-1 mt-3 p-2 shadow">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">DashBoard</NavLink>
                        </li>


                    </ul>
                </div>
                <div className="navbar-end">
                   <ul
                        tabIndex={-1}
                        className="menu menu-horizontal dropdown-content bg-base-100 rounded-box z-1 mt-3 p-2 shadow">
                        <li>
                            <NavLink to="/register">Register</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>

                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Navbar