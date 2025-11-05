import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom"; // ✅ should come from react-router-dom

const Navbar = () => {
  return (
    <div className="navbar bg-linear-to-r from-cyan-500/80 to-coral-500/80 backdrop-blur-md shadow-md text-white fixed top-0 left-0 right-0 z-50">
      {/* Mobile menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle md:hidden">
            <FaBars />
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/">Dashboard</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
          </ul>
        </div>
      </div>

      {/* Center links (desktop) */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-semibold">
          <li><NavLink to="/" className="hover:text-cyan-200 transition-all">Home</NavLink></li>
          <li><NavLink to="/about" className="hover:text-cyan-200 transition-all">About</NavLink></li>
          <li><NavLink to="/" className="hover:text-cyan-200 transition-all">Dashboard</NavLink></li>
        </ul>
      </div>

      {/* Right links (desktop) */}
      <div className="navbar-end hidden md:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-semibold">
          <li><NavLink to="/register" className="hover:text-coral-200 transition-all">Register</NavLink></li>
          <li><NavLink to="/login" className="hover:text-coral-200 transition-all">Login</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
