import { NavLink } from "react-router-dom";

function Navbar() {
  const getLinkClass = ({ isActive }) =>
    isActive ? "navbar-link active" : "navbar-link";

  return (
    <header className="navbar">
      <h2>Gym Management System</h2>

      <nav className="navbar-links">
        <NavLink to="/home" className={getLinkClass}>
          Home
        </NavLink>

        <NavLink to="/dashboard" className={getLinkClass}>
          Dashboard
        </NavLink>

        <NavLink to="/profile" className={getLinkClass}>
          Profile
        </NavLink>

        <NavLink to="/login" className={getLinkClass}>
          Login
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;